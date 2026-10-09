# head-extra.rb
#
# Resolves cascading <head> injections for each document using front matter.
#
# Any layout or page can declare a `head:` key in its front matter
# containing arbitrary HTML for <head> (stylesheets, scripts, meta tags, etc).
#
# Just before the site is rendered, this plugin walks each page's layout
# inheritance chain via Jekyll's own layout objects, collects `head` from
# each layout's front matter in parent -> child order, then appends the
# page's own `head` front matter (if any). The concatenated result is
# written into `page.head_extras`.
#
# The site-level `pre_render` hook fires after every generator has finished,
# so pages that a generator creates (the `/blog/page-N/` pages of
# jekyll-paginate, for example) get their `head_extras` like any other page.
#
# In your base layout (e.g., default.html), just include:
#   {{ page.head_extras }}
#
# `head` is inserted as written. Liquid inside it is not evaluated.
#
# Example:
#
#   _layouts/pages.html:
#     ---
#     layout: default
#     head: |
#       <link rel="stylesheet" href="/assets/css/pages.css">
#     ---
#
# A page on a layout that itself uses `pages` gets pages.css first, then
# that layout's `head`, then its own.

module HeadExtras
  # Walk the layout chain using Jekyll's own layout objects.
  # Returns an array of Layout objects from outermost -> innermost.
  def self.resolve_chain(layout_name, layouts)
    chain = []
    seen = Set.new  # Guard against circular references

    current = layout_name
    while current && !seen.include?(current)
      seen.add(current)
      layout_obj = layouts[current]
      break unless layout_obj

      chain << layout_obj
      current = layout_obj.data["layout"]
    end

    # chain is now [innermost, ..., outermost]
    # Reverse to get parent -> child order
    chain.reverse
  end
end

Jekyll::Hooks.register :site, :pre_render do |site|
  (site.pages + site.documents).each do |page|
    chain = HeadExtras.resolve_chain(page.data["layout"], site.layouts)

    # Collect head blocks from each layout's front matter (parent -> child)
    extras = chain.filter_map { |layout_obj| layout_obj.data["head"] }

    # Append page-level head front matter if present
    extras << page.data["head"] if page.data["head"]

    page.data["head_extras"] = extras.join("\n") unless extras.empty?
  end
end
