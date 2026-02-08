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
bundle exec jekyll serve --drafts --livereload
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

---

## Deployment (`gh-pages` branch)

**Important:** The site is built from **`gh-pages`**, not `master`. Keep `gh-pages` **clean**: it should contain **only the built site** (i.e., the contents of the `_site/` folder after running `bundle exec jekyll build`), and nothing else.

### Workflow Overview
- Develop on `master`
- Build locally
- Deploy by replacing `gh-pages` with `_site/` contents

1) On `master`, build the site:
```sh
bundle exec jekyll build
```

2) Switch to `gh-pages`:
```sh
git checkout gh-pages
```

3) Replace `gh-pages` contents with the latest build:
```sh
git rm -rf .
cp -a _site/* .
```

4) Commit and push:
```sh
git add -A
git commit -m "build $(date -Iseconds)"
git push origin gh-pages
```

5) Switch back to `master` to continue development:
```sh
git checkout master
```

---

## Notes

- Built output is in `_site/` (ignored via [.gitignore](.gitignore)).
- `gh-pages` should **only** contain built files, not source.