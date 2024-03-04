# Markdown Cheatsheet

<a href="https://tecnate.dev" target="_blank" rel="author">Tecnate</a> | Last Updated: 2024.03.04

> VSCode Markdown Preview Shortcut: `⌘K V` (note space).
>
> -   After opening Preview, `⌘+Shift+P` and search `Markdown: Toggle Preview Locking` to lock the preview mode on this document. (Otherwise, if you open another Markdown file, the preview window will switch that the new file.)

## Table of Contents

-   [Markdown Cheatsheet](#markdown-cheatsheet)
    -   [Table of Contents](#table-of-contents)
    -   [About This Document](#about-this-document)
-   [# h1 heading](#-h1-heading)
    -   [## h2 heading](#-h2-heading)
        -   [### h3 heading](#-h3-heading)
            -   [#### h4 heading](#-h4-heading)
                -   [##### h5 heading](#-h5-heading)
                    -   [###### h6 heading](#-h6-heading)
    -   [Text Elements](#text-elements)
        -   [Blockquotes](#blockquotes)
    -   [Typographic Replacements](#typographic-replacements)
    -   [Links \& Images](#links--images)
    -   [Code](#code)
    -   [Horizontal Rules \& Breaks](#horizontal-rules--breaks)
    -   [Lists](#lists)
        -   [Unordered](#unordered)
        -   [Ordered](#ordered)

<br>

## About This Document

This is a quick reference guide for the most common Markdown syntax you'll need for your documents. For the best viewing and editing experience of this and other Markdown files:

1. Open the .md file in VSCode.
2. Install/enable the `Markdown All in One` extension.
3. Preview your rendered document in a side window: `⌘K V`

<br>

---

---

<br>

# \# h1 heading

## \## h2 heading

### \### h3 heading

#### \#### h4 heading

##### \##### h5 heading

###### \###### h6 heading

<br>

## Text Elements

Paragraphs are the default. No special tags required for this magic!

-   \*\*Bold Text\*\* = **Bold Text**
-   \_Italic Text\_ = _Italic Text_
-   \<u>Underlined Text\</u> = <u>Underlined Text</u>
-   \~~Strikethrough Text\~~ = ~~Strikethrough Text~~

### Blockquotes

Blockquotes can be nested:

> \> Level 1
>
> > \> > Level 2
> >
> > > \> > > Level 3

<br>

## Typographic Replacements

Remove the spaces inside the parentheses of these elements:

-   Copyright ( c ) = (c)
-   Registered Trademark ( r ) = (r)
-   Unregistered Trademark ( tm ) = (tm)
-   Section/Silcrow ( p ) = (p)

To see these replacements in your preview window in VSCode, you need to change the default settings:

> VSCode Settings: `⌘,`
>
> -   `Markdown › Preview: Typographer`
> -   Check to enable.

<br>

## Links & Images

[This is how you make a link to Github with a URL](https://github.com).

You can link to other files as well. Type ## in the link to trigger intellisense and [see markdown headers in the current workspace.](##...)

Images are similar to links ![alt text here](https://pixabay.com/images/download/water-lily-3784022_640.jpg "Title text here")
Alternatively, drag an image while holding SHIFT into your document

<br>

## Code

```js
console.log("Remember to include your code language after the backticks above.");
```

<br>

## Horizontal Rules & Breaks

-   You can use HTML break syntax `<br>` wherever you want a line break.
-   Three `---` will create a horizontal rule:
-   Horizontal rules are added by default under `h1` and `h2` headings.

<br>

## Lists

### Unordered

Use `-` to create lists:

-   Item A
    -   Item B
        -   Multiple markers will work...
    *   Keep markers consistent to prevent accidental new lists...

*   Or unexpected formatting inconsistencies.

### Ordered

Start numbered lists by typing `1. ` (note the space); press `Return` or `Enter` to start a new line/number; press `Tab` or `Shift+Tab` after a list level to nest items underneath it.

1. foo
    1. bar
    2. baz
        1. qux
        2. quux
        3. corge
    3. grault
2. garply
3. waldo
    1. fred
        1. plugh
            1. xyzzy
    2. thud

Note: it doesn't matter if you type the correct sequential number after `1. `. Any number you type will automatically render as the next number in the list.
