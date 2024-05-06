# VSCode Shortcuts for macOS

<a href="https://tecnate.dev" target="_blank" rel="author">Tecnate</a> | Last Updated: 2024.05.05

-   [VSCode Shortcuts for macOS](#vscode-shortcuts-for-macos)
    -   [Common Mac Keyboard Symbols](#common-mac-keyboard-symbols)
    -   [General](#general)
    -   [Basic editing](#basic-editing)
    -   [Multi-cursor and selection](#multi-cursor-and-selection)
    -   [Search and replace](#search-and-replace)
    -   [Rich languages editing](#rich-languages-editing)
    -   [Navigation](#navigation)
    -   [Editor management](#editor-management)
    -   [File management](#file-management)
    -   [Display](#display)
    -   [Debug](#debug)
    -   [Integrated terminal](#integrated-terminal)

## Common Mac Keyboard Symbols

-   `⌘` / `` Command (Cmd)
-   `⌥` Option/Alt
-   `⌃` Control (Ctrl)
    -   This is **not** the `^` caret symbol (the special character on the "6" key on a standard US keyboard).
-   `⇧` Shift

## General

> Note: any _italicized shortcuts in this guide_ represent shortcuts specific to extensions, dependencies, or my personalized keybindings. Otherwise, you can assume that all shortcuts are VSCode defaults.

-   `⇧⌘P`, `F1` Show Command Palette
-   `⌘P` Quick Open, Go to File...
-   `⇧⌘N` New window/instance
-   `⌘W` Close window/instance
-   `⌘,` User Settings
-   `⌘K ⌘S` View/edit Keyboard Shortcuts
    -   (Or search "keyboard shortcuts" in the Command Palette)

## Basic editing

-   `⌘X` Cut line (empty selection)
-   `⌘C` Copy line (empty selection)
-   `⌥↓` / `⌥↑` Move line down/up
-   `⇧⌥↓` / `⇧⌥↑` Copy line down/up
-   `⇧⌘K` **Delete line**
-   `⌘Enter` / `⇧⌘Enter` Insert line below/above
-   `⇧⌘\` **Jump to matching bracket**
-   `⌘]` / `⌘[` Indent/outdent line
-   `Home` / `End` Go to beginning/end of line
-   `⌘↑` / `⌘↓` Go to beginning/end of file
-   `⌃PgUp` / `⌃PgDn` Scroll line up/down
-   `⌘PgUp` / `⌘PgDn` Scroll page up/down
-   `⌥⌘[` / `⌥⌘]` **Fold/unfold region**
-   `⌘K ⌘[` / `⌘K ⌘]` Fold/unfold all subregions
-   `⌘K ⌘ 0` / `⌘K ⌘J` Fold/unfold all regions
-   `⌘/` Toggle line comment
-   `⇧⌥A` Toggle block comment
-   `⌥Z` **Toggle word wrap**

## Multi-cursor and selection

-   `⌥ + click` Insert cursor
-   `⌥⌘↑` / `⌥⌘↓` **Insert cursor above/below**
-   `⌘U` Undo last cursor operation
-   `⇧⌥I` Insert cursor at end of each line selected
-   `⌘L` Select current line
-   `⇧⌘L` Select all occurrences of current selection
-   `⌘F2` Select all occurrences of current word
-   `⌃⇧⌘→` / `⌃⇧⌘←` Expand/shrink selection
-   `⇧⌥ + drag mouse` Column (box) selection
-   `⇧⌥⌘↑ / ↓` Column (box) selection up/down
-   `⇧⌥⌘← / →` Column (box) selection left/right
-   `⇧⌥⌘PgUp` Column (box) selection page up
-   `⇧⌥⌘PgDn` Column (box) selection page down

## Search and replace

-   `⌘F` Find
-   `⌥⌘F` Replace
-   `⌘G` / `⇧⌘G` Find next/previous
-   `⌥Enter` Select all occurrences of Find match
-   `⌘D` Add selection to next Find match
-   `⌘K ⌘D` Move last selection to next Find match
-   `⇧⌘L` **Highlight all string instances**

## Rich languages editing

-   `⌃Space`, `⌘I` **Trigger intellisense suggestion**
-   `⇧⌘Space` **Trigger parameter hints**
-   `⇧⌥F` Format document
-   `⌘K ⌘F` Format selection
-   `F12` Go to Definition
-   `⌥F12` Peek Definition
-   `⌘K F12` Open Definition to the side
-   `⌘.` Quick Fix
-   `⇧F12` Show References
-   `F2` Rename Symbol
-   `⌘K ⌘X` Trim trailing whitespace
-   `⌘K M` Change file language

## Navigation

-   `⌘T` Show all Symbols
-   `⌃G` Go to Line...
-   `⌘P` Go to File...
    -   `⌘P #` Global Symbol search
-   `⇧⌘O` Go to Symbol...
    -   `⌘⇧.` **Go to Symbol in file**
-   `⇧⌘M` Show Problems panel
-   `F8` / `⇧F8` Go to next/previous error or warning
-   `⌃⇧Tab` Navigate editor group history
-   `⌃-` / `⌃⇧-` Go back/forward
-   `⌃⇧M` Toggle Tab moves focus

## Editor management

-   `⌘W` Close editor
-   `⌘K F` Close folder
-   `⌘\` Split editor
-   `⌘1` / `⌘2` / `⌘3` Focus into 1 st, 2nd, 3rd editor group
-   `⌘K ⌘←` / `⌘K ⌘→` Focus into previous/next editor group
-   `⌘K ⇧⌘←` / `⌘K ⇧⌘→` Move editor left/right
-   `⌘K ←` / `⌘K →` Move active editor group

## File management

-   `⌘N` New File
-   `⌘O` Open File...
-   `⌘S` Save
-   `⇧⌘S` Save As...
-   `⌥⌘S` Save All
-   `⌘W` Close
-   `⌘K` ⌘W Close All
-   `⇧⌘T` Reopen closed editor
-   `⌘K` Enter Keep preview mode editor open
-   `⌃Tab` / `⌃⇧Tab` Open next / previous
-   `⌘K P` Copy path of active file
-   `⌘K R` Reveal active file in Finder
-   `⌘K O` Show active file in new window/instance

## Display

-   `⌃⌘F` Toggle full screen
-   `⌥⌘0` Toggle editor layout (horizontal/vertical)
-   `⌘=` / `⇧⌘-` Zoom in/out
-   `⌘B` Toggle Sidebar visibility
-   `⇧⌘E` **Show Explorer / Toggle focus**
-   `⇧⌘F` Show Search
-   `⌃⇧G` Show Source Control
-   `⇧⌘D` Show Debug
-   `⇧⌘X` Show Extensions
-   `⇧⌘H` Replace in files
-   `⇧⌘J` Toggle Search details
-   `⇧⌘U` Show Output panel
-   `⇧⌘V` Open Markdown preview
-   `⌘K V` **Open Markdown preview to the side**
-   `⌘K Z` Zen Mode (Esc Esc to exit)

## Debug

-   `F9` Toggle breakpoint
-   `F5` Start/Continue
-   `F11` / `⇧F11` Step into/ out
-   `F10` Step over
-   `⇧F5` Stop
-   `⌘K ⌘I` Show hover

## Integrated terminal

-   `` ⌃` `` Show integrated terminal
    -   _`node fileName.js` Execute JavaScript in the terminal_
    -   _`⌘K Q` Toggle Quokka.js_
-   `` ⌃⇧` `` Create new terminal
-   `⌘C` Copy selection
-   `⌘↑` / `⌘↓` Scroll up/down
-   `PgUp` / `PgDn` Scroll page up/down
-   `⌘Home` / `⌘End` Scroll to top/bottom
