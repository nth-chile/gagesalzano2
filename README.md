# Installation / updates

Rather than installing pacakges globally on your computer, let's use this command to install the packages inside the project directory:

`$ bundle install --path vendor/bundle`

Before committing, make sure `vendor` is a line in the .gitignore file and in the excludes list in \_config.yml

# How to edit posts

## Front Matter

- These three options must be defined at the top of each post
  - **title**
  - **featured_image**
- **date:** you can rearrange the order in which posts are displayed on the homepage by changing the date. This is useful because featured images will be cropped differently depending on the size of their tile on the full-width grid.
- **style:** inline style for the featured image. I'm pretty sure the site broke once when I put a semicolon after the final style rule, so be careful there.
- **stack_color:** color of the 'cards' behind the grid tile, seen on hover
- **dark_title:** if you want the post title to be dark on the homepage, just add `dark_title: true`. If not, just leave it out

## Posts

- Posts are written in Markdown files in the "\_posts" folder. Filename is important, just make sure they match the others
- You can use HTML in Markdown files. A few rules for using HTML in Markdown:
  - Markdown syntax will not work inside of an HTML block.
  - Block element tags must not be indented, and must be surrounded by blank lines.
- Put this line at the beginning of each post: `{% assign slide = site.data.slide %}`
- The `{{slide['...']}}` tags wrap what will be considered a "slide" on small screens. In place of the ellipsis, if you write `startmobile`, the contents are only seen on small widths, `startdesktop` is seen only on wider screens, and `start` is seen on both. `end` is a closing tag.

## Images

- All images should be wrapped with `<div>` tags. Beacuse of this, you have to use the HTML syntax to include an image.
- The HTML `<img>` attribute, `srcset`, can be used to offer multiple image sizes for the browser to choose from when loading the page. Still define `src` for a default. More info here: https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images

## Classes

- **img.full-height:** only effects mini view. It will make the image full screen, Twitter Moments style
- **img.full-width:** only effects Big view and makes images full-width.
- If you try to use both `.full-height` and `.full-width` on the same image, something bad happens
- **p.bg:** give this class to any paragraph that exists in the same slide as a `.full-height` image. It adds the gradient background and some other style rules.
- **p.bg-dark:** `bg` variant that renders dark text without a gradient background
- **div.row:** For Big view, if you want to put multiple images in a row, wrap images (which themselves are wrapped in `<div>` tags as usual) in a `<div class='row'>`.
- **div.column:** On "Stuff For Friends", you can see an example of `.column` inside of a `.row`. But no need to use `.column` _outside_ of a `.row`.
- Putting `<!-- -->` between images that are in a row eliminates white-space between the elements

## The "\_config.yml" file

[YAML](https://learnxinyminutes.com/docs/yaml/) is a data format based on indentation, where an indent is two spaces.
