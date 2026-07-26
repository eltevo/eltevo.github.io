# ELTE Virtual Observatory Website

Jekyll site with Sass styling using `npm`. Development happens on `master`, and deployment is done by pushing the built site to `gh-pages`.

---

## Prerequisites

### Debian/Ubuntu
```sh
sudo apt update
sudo apt install -y ruby-full build-essential zlib1g-dev
sudo apt install -y nodejs npm
```

### Arch/Manjaro
```sh
sudo pacman -Syu --needed ruby base-devel
sudo pacman -Syu --needed nodejs npm
```

### Configure local gem installation (optional but recommended)
By default, `gem install` tries to write to system directories and requires `sudo`. To keep everything in your home directory, add the following to your shell config (`~/.bashrc`, `~/.zshrc`, etc.):

```sh
export GEM_HOME="$HOME/.gem"
export PATH="$GEM_HOME/bin:$PATH"
```

Then reload your shell (`exec bash`, `exec zsh`, etc. or open a new terminal) and install Bundler:

```sh
gem install bundler
```

---

## Project setup (one-time, after cloning)

From the repository root:

```sh
bundle config set --local path 'vendor/bundle'
bundle install
npm install
```

This installs Ruby gems into `vendor/bundle/` (project-local) and Node packages into `node_modules/`. Both are gitignored.

> Run all `bundle` and `npm` commands **from the project directory**.

Create a worktree for the `gh-pages` branch in the `_deploy` directory (only needs to be done once):
```sh
git worktree add --orphan -b gh-pages _deploy
touch _deploy/.nojekyll
```

---

## Local development (`master` branch)

1. Compile Sass to CSS:
```sh
npm run scss
```
The `scss` script in [package.json](package.json) watches `assets/scss/main.scss` and compiles the single production bundle to `assets/css/main.css`. It runs in the foreground, so open a second terminal for Jekyll.

2. Run Jekyll:
```sh
bundle exec jekyll serve --unpublished
```

Site will be available at `http://localhost:4000`. This command also runs in the foreground. You can stop it with `Ctrl+C` when done.

> If `Gemfile` or `package.json` change (e.g., after `git pull`), re-run `bundle install` and/or `npm install` before building.

---

## Project structure and key paths

- Config: [_config.yml](_config.yml)
- Pages: [_pages/](_pages/)
- Projects collection: [_projects/](_projects/)
- Layouts: [_layouts/](_layouts/)
- Includes: [_includes/](_includes/)
- Site copy and publications: [_data/](_data/)
- Sass/SCSS sources: [assets/scss/](assets/scss/)
- Compiled CSS bundle: `assets/css/main.css`
- Local fonts and licences: [assets/fonts/](assets/fonts/)

### Adding new projects
To add a new project, create a new Markdown file in the `_projects/` directory with the following front matter:
```yaml
---
layout: project
title: "Plain-text project title"
short_title: "Optional short name"
description: "Metadata description for search and link previews."
summary: "Plain-text summary for project listings."
published: true
featured: false
status: active
updated: 2026-07-24
tags:
  - cosmology
thumbnail:
  src: /assets/images/projects/example.svg
  alt: "Scientifically meaningful image description"
links:
  code: https://example.com
  data: https://example.com
math: true
zoom: true
---
```

Projects are automatically listed on the Projects page. `featured: true` also places them on the homepage, while `published: false` excludes unfinished projects from production builds. Keep `title` and `summary` free of HTML and MathJax. Use `math` and `zoom` only when the project content needs those enhancements.

### Adding publications

Publications are curated in `_data/publications.yml`, newest first:

```yaml
- id: stable-citation-key
  title: "Paper title"
  authors:
    - "Author One"
    - "Author Two"
  year: 2026
  venue: "Journal or preprint"
  doi: "10.xxxx/example"
  arxiv: "2601.00001"
  project: project-file-slug
  featured: true
```

`project` matches the filename slug in `_projects/`. When that project is published, the publication list and project page link to each other.

### Adding download mirrors

Data downloads are rendered by `_includes/mirror.html` as full-width rows that name the destination host, describe the payload, and surface access notes in a highlighted strip. Facts that repeat across articles live once in `_data/mirrors.yml`:

```yaml
kooplex:
  name: "ELTE Kooplex"
  domain: "datashare.vo.elte.hu"
  url: "https://datashare.vo.elte.hu/metalnx/"
  note_label: "Sign in"
  note: "Log in with the username <code>anonymous</code> and leave the password field empty."
```

Per-dataset details stay next to the prose that describes them. Wrap one or more rows in a `.mirror-set`:

```html
<div class="mirror-set">
  <p class="mirror-set__label">Download mirrors</p>
  {% include mirror.html host="kooplex" label="All 138 snapshots" format="HDF5" filesize="1.5 GB / snapshot" %}
  {% include mirror.html host="helsinki-sharepoint" label="Four selected snapshots" badge="Partial" format="HDF5" href="https://example.com/deep-link" %}
</div>
```

| Parameter | Purpose |
| --- | --- |
| `host` | key in `_data/mirrors.yml`; supplies name, domain, url and note |
| `href` | per-dataset deep link; falls back to the host's landing url |
| `name`, `domain` | override the registry, or replace it entirely |
| `label` | what this mirror gives you |
| `format`, `filesize` | pill-shaped chips, rendered only when present |
| `badge` | short qualifier such as `Partial` |
| `note`, `note_label` | per-call access note, inline HTML allowed |
| `hide_note` | `true` suppresses the host's registry note |
| `action` | call-to-action text, defaults to `Download` |

`.mirror-set` spans the full width of `.project-article` and `.page-surface`, so it works in both projects and regular pages. For a download link inside a table cell, reuse the pill on its own: `<a class="mirror__action mirror__action--compact" …>`.

### Updating group copy

Verified affiliation, contact, and About-page copy live in `_data/site.yml`. Empty optional values are intentionally hidden rather than replaced with invented public copy.

### Adding new pages
Regular pages reside in `_pages/` and normally use the `pages` layout:

```yaml
---
layout: pages
title: "Page Title"
eyebrow: "Optional section label"
description: "Page summary used in the introduction and metadata."
permalink: /page-url/
```

### Adding new menu items
Edit `_includes/navigation.html`. Use `aria-current="page"` for the active route rather than a visual-only class.
```html
<li>
    <a href="{{ '/people/' | relative_url }}"{% if page.url contains '/people/' %} aria-current="page"{% endif %}>People</a>
</li>
```
Make sure to place it in the correct position within the `<ul>` to maintain the desired order of menu items.

---

## Deployment (`gh-pages` branch)

> **Important:** The site is built from **`gh-pages`**, not `master`. Keep `gh-pages` **clean**: it should contain **only the built site** (i.e., the contents of the `_site/` folder after running `bundle exec jekyll build` on the `master` branch), and nothing else.

### Workflow overview
> **Important**: Ensure you already have the `gh-pages` worktree set up in `_deploy/` as described in the *Project setup* section above. This only needs to be done once.

1) On `master`, compile the CSS and build the site **without the `--unpublished` flag** to exclude draft posts:
```sh
npm run scss:build
bundle exec jekyll build
```
2) Navigate to the `gh-pages` branch using the worktree that resides in the special `_deploy` directory:
```sh
cd _deploy
```
3) Replace contents of the `gh-pages` worktree with the latest build:
```sh
git pull origin gh-pages  # Ensure you have the latest changes
rsync -av --delete ../_site/ . --exclude .git --exclude .nojekyll
```
4) Commit and push:
```sh
git add -A
git commit -m "build $(date -Iseconds)" # Using ISO 8601 format for precise timestamps
git push origin gh-pages
```
5) Switch back to `master` to continue development:
```sh
cd -
```

### Important notes on deployment
- Always ensure you are on the correct branch (`master` for development, `gh-pages` for deployment) before running build or deployment commands.
- Built output is in `_site/` (ignored via [.gitignore](.gitignore)).
- For a stricter pre-deployment check, run `JEKYLL_ENV=production bundle exec jekyll build --strict_front_matter`.
- The `gh-pages` branch should **only** contain the built site. Do not commit source files or development changes to `gh-pages`.
