# Mac Terminal Cheatsheet

<a href="https://tecnate.dev" target="_blank" rel="author">Tecnate</a> | Last Updated: 2024.02.17

## Table of Contents

- [Mac Terminal Cheatsheet](#mac-terminal-cheatsheet)
  - [Table of Contents](#table-of-contents)
  - [About This Document](#about-this-document)
  - [Processing \& Searching Text](#processing--searching-text)
  - [Input Line Navigation](#input-line-navigation)
    - [Clear Input From Cursor To Beginning](#clear-input-from-cursor-to-beginning)
    - [Clear Input From Cursor To End](#clear-input-from-cursor-to-end)
    - [Clear Previous Word](#clear-previous-word)
    - [Clear Terminal Screen](#clear-terminal-screen)
    - [Recall Yanked (Cleared) Text](#recall-yanked-cleared-text)
    - [Move Cursor To Beginning](#move-cursor-to-beginning)
    - [Move Cursor To End](#move-cursor-to-end)
    - [Cancel Current Command Line](#cancel-current-command-line)
  - [Manipulating Directories \& Files](#manipulating-directories--files)
    - [Make A Single Directory](#make-a-single-directory)
    - [Make Multiple Directories](#make-multiple-directories)
    - [Create A File](#create-a-file)
    - [Create Multiple Files](#create-multiple-files)
    - [Create A Directory \& File Together](#create-a-directory--file-together)
    - [Copy a Directory](#copy-a-directory)

<br>

## About This Document

This cheatsheet is for quick reference to common commands for the Mac terminal (with significant carryover to Linux as well).

Assume Bash or Zsh shells unless specified otherwise.

<br>

## Processing & Searching Text

There are three main tools to search and process text:

1.  `grep`: finds text patterns in a file. (Most simple.)
2.  `sed`: finds and modifies data.
3.  `awk`: a programming language. (Most complex.) It is usually used to:
    1. Process field-oriented data.
    2. Perform numeric comparisons/calculations.
    3. Modify data based on calculations.

<br>

## Input Line Navigation

### Clear Input From Cursor To Beginning

`Ctrl`+`U`

### Clear Input From Cursor To End

`Ctrl`+`K`

### Clear Previous Word

`Ctrl` + `W`

### Clear Terminal Screen

`Ctrl` + `L`

### Recall Yanked (Cleared) Text

`Ctrl` + `Y`

### Move Cursor To Beginning

`Ctrl` + `A`

### Move Cursor To End

`Ctrl` + `E`

### Cancel Current Command Line

`Ctrl` + `C`

> Clears the command line regardless of cursor position, but you can't recall anymore.

<br>

## Manipulating Directories & Files

### Make A Single Directory

`mkdir directoryName`

### Make Multiple Directories

> `-p`: the parents option

Make multiple directories at once: <br>
`mkdir -p dir1 dir2 dir3`

Make nested directories: <br>
`mkdir -p county/city/neighborhood/`

### Create A File

Add the extension of the file to the end of the file name, e.g. a text file: <br>
`touch fileName.txt`

### Create Multiple Files

Separate filenames and their extensions with a space to add to the current directory.
`touch file1.txt file2.js file3.jpg file4.html`

### Create A Directory & File Together

Use `&&` to join commands together to create a text file within a new folder: <br>
`mkdir directoryName && touch directoryName/fileName.txt`

### Copy a Directory

`cp -r sourceDirectory destinationDirectory`
