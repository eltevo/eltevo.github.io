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
bundle config set --local path "vendor/bundle"
bundle install
npm install
```

This installs Ruby gems into `vendor/bundle/` (project-local) and Node packages into `node_modules/`. Both are gitignored.

> Run all `bundle` and `npm` commands **from the project directory**.

---

## Local development (`master` branch)

1. Compile Sass to CSS:
```sh
npm run scss
```
The `scss` script in [package.json](package.json) runs `sass --verbose --watch assets/scss:assets/css` to compile SCSS in `assets/scss/` into CSS in `assets/css/`. It watches for changes and automatically applies them, so you can keep it running while developing. This runs in the foreground, so you need to open a new terminal for Jekyll.

2. Run Jekyll:
```sh
bundle exec jekyll serve --drafts
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
- Sass/SCSS sources: [assets/scss/](/assets/scss/)
- Compiled CSS output: [assets/css/](/assets/css/)

### Adding new projects
To add a new project, create a new Markdown file in the `_projects/` directory with the following front matter:
```yaml
---
layout: posts
title: "Title of project here"
featured: true
status: active
summary: "Short summary here."
tags:
  - tag 1
  - tag 2
  - ...
links: # Optional, you can leave `code` and `paper` empty if not applicable
  code: code link
  paper:
    - paper link 1
    - paper link 2
    - ...
---
```

Projects will be automatically listed on the "Projects" page, and the `featured: true` flag will make them appear in the featured section on the homepage. You can also add project-specific content below the front matter, which will be rendered on the individual project page.

### Adding new pages
Regular pages reside in the `_pages/` directory. The current setup supports both Markdown and HTML files to be placed here. Pages use the `default` layout, which includes the common header, navigation bar, footer, and global styling. Each page must have the appropriate front matter at the top:

```yaml
---
layout: default
title: "Page Title"
permalink: /page-url/ # Optional, but highly recommended for clean URLs
head: # Optional, for any page-specific includes
    - html tag in <head> 1
    - html tag in <head> 2
    - ...
```

### Adding new menu items
To add a new menu item to the navigation bar, edit the `_includes/navbar.html` file. You can add a new `<li>` element with a link to the desired page and use the same logic to set the "active" class based on the current page URL. For example, to add a "People" menu item linking to `/people/`, you would add:
```html
<li>
    <a href="{{ '/people/' | relative_url }}"{% if page.url == '/people/' or page.url contains '/people/' %} class="active"{% endif %}>People</a>
</li>
```
Make sure to place it in the correct position within the `<ul>` to maintain the desired order of menu items.

---

## Deployment (`gh-pages` branch)

**Important:** The site is built from **`gh-pages`**, not `master`. Keep `gh-pages` **clean**: it should contain **only the built site** (i.e., the contents of the `_site/` folder after running `bundle exec jekyll build`), and nothing else.

### Workflow overview
- Develop on `master`
- Build locally
- Deploy by replacing `gh-pages` with `_site/` contents

1) On `master`, build the site **without the `--drafts` flag** to exclude draft posts:
```sh
bundle exec jekyll build
```

2) Switch to `gh-pages`:
```sh
git checkout gh-pages
```

3) Replace `gh-pages` contents with the latest build:
```sh
git pull origin gh-pages # Ensure you have the latest changes
git rm -rf .
cp -r _site/* .
```

4) Commit and push:
```sh
git add -A
git commit -m "build $(date -Iseconds)" # Using ISO 8601 format for precise timestamps
git push origin gh-pages
```

5) Switch back to `master` to continue development:
```sh
git checkout master
```

After the steps above, CSS files will be naturally missing and need to be recompiled on `master` to be included during development.

### Important notes on deployment
- Always ensure you are on the correct branch (`master` for development, `gh-pages` for deployment) before running build or deployment commands.
- Built output is in `_site/` (ignored via [.gitignore](.gitignore)).
- The `gh-pages` branch should **only** contain the built site. Do not commit source files or development changes to `gh-pages`.