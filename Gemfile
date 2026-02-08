source "https://rubygems.org"

# Jekyll import for local building
gem "jekyll", "~> 4.4.0"

# Plugins
group :jekyll_plugins do
  gem 'jekyll-feed', '~> 0.17'
  gem 'jekyll-sitemap', '~> 1.4'
  gem 'jekyll-compose', '~> 0.12'
  gem 'jekyll-postfiles', '~> 3.1'
  gem 'jekyll-seo-tag', '~> 2.8'
  gem "jekyll-last-modified-at"  # Get modification date for files
end

# Windows compatibility
gem "tzinfo-data", platforms: [:windows, :jruby]
gem "wdm", "~> 0.2.0", platforms: [:windows]

# Required dependencies (explicit in Ruby 3.4+)
gem "webrick", "~> 1.9"
gem "csv", "~> 3.3"
gem "base64", "~> 0.2"
gem "bigdecimal", "~> 3.1"

# HTTP parser
gem "http_parser.rb", "~> 0.8", platforms: [:ruby]