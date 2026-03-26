# head-extra.rb
#
# Resolves cascading <head> injections for each document using front matter.
#
# Any layout or page can declare a `head:` key in its front matter
# containing arbitrary HTML for <head> (stylesheets, scripts, meta tags, etc).
#
# At build time, this plugin walks each page's layout inheritance chain
# via Jekyll's own layout objects, collects `head` from each layout's
# front matter in parent -> child order, then appends the page's own
# `head` front matter (if any). The concatenated result is written into
# `page.head_extras`.
#
# In your base layout (e.g., default.html), just include:
#   {{ page.head_extras }}
#
# Example:
#
#   _layouts/pages.html:
#     ---
#     layout: default
#     head: |
#       <link rel="stylesheet" href="/assets/css/pages.css">
#
# A page using `projects` layout will get:
#   pages.css (from pages layout) + projects.css (from projects layout)

module Jekyll
  class HeadExtrasGenerator < Generator
    safe true
    priority :high  # Run before rendering so the variable is available
 
    def generate(site)
      all_pages = site.pages + site.documents
 
      all_pages.each do |page|
        layout_name = page.data["layout"]
        chain = resolve_chain(layout_name, site.layouts)
 
        # Collect head blocks from each layout's front matter (parent -> child)
        extras = chain.filter_map { |layout_obj| layout_obj.data["head"] }
 
        # Append page-level head front matter if present
        if page.data["head"]
          extras << page.data["head"]
        end
 
        page.data["head_extras"] = extras.join("\n") unless extras.empty?
      end
    end
 
    private
 
    # Walk the layout chain using Jekyll's own layout objects.
    # Returns an array of Layout objects from outermost -> innermost,
    # filtered to only those that declare a `head` key in front matter.
    def resolve_chain(layout_name, layouts)
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
end