# Mac Terminal Cheatsheet

<a href="https://tecnate.dev" target="_blank" rel="author">Tecnate</a> | Last Updated: 2024.02.17

## Table of Contents

- [Mac Terminal Cheatsheet](#mac-terminal-cheatsheet)
  - [Table of Contents](#table-of-contents)
  - [About This Document](#about-this-document)
  - [Processing \& Searching Text](#processing--searching-text)
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
