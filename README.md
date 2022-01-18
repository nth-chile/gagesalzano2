# Installation / updates

1. `yarn` to install Node modules
2. `yarn install-gems` to install Ruby gems

# How to edit projects

Projects are Markdown files in the _projects directory. Filename doesn't matter.

## Front Matter

_Options defined at the top of each post_

- **title** (required)
- **featured_image** (required)
- **categories:** Options: `digital`, `branding`, `print`. This is how the homepage filter decides what to display. Can add more than one category -- see how it is done in other posts
- **date:** you can rearrange the order of posts on the homepage by changing the date.
- **style:** inline style for the featured image
- **dark_title:** if you want the post title to be dark on the homepage, add `dark_title: true`
- **published:** add `published: false` for drafts

## {{ slide }} tags

- Put this line at the beginning of each project: `{% assign slide = site.data.slide %}`
- The `{{slide['...']}}` tags wrap what will be considered a "slide" on small screens. In place of the ellipsis, if you write `startmobile`, the contents are only seen on small widths, `startdesktop` is seen only on wider screens, and `start` is seen on both. `end` is a closing tag.

## Images

- All images should be wrapped with `<div>` tags
- I use images that are about 2x what they will be displayed at, because Retina screens are 2x

## Classes

- **img.full-height:** only effects mini view. It will make the image full screen, Twitter Moments style
- **img.full-width:** only effects big view and makes images full-width.
- If you try to use both `.full-height` and `.full-width` on the same image, something bad happens
- **p.bg:** give this class to any paragraph that exists in the same slide as a `.full-height` image. It adds the gradient background and some other style rules.
- **p.bg-dark:** `bg` variant that renders dark text without a gradient background
- **div.row:** For big view, if you want to put multiple images in a row (side-by-side), wrap images (which themselves are wrapped in `<div>` tags as usual) in a `<div class='row'>`.
- **div.column:** For stacking images on top of each other if they are in a `.row`
- Putting `<!-- -->` between images that are in a row eliminates white-space between the elements
