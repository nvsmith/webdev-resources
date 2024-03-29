# Mac Terminal Cheatsheet

<a href="https://tecnate.dev" target="_blank" rel="author">Tecnate</a> | Last Updated: 2024.03.10

## Table of Contents

- [Mac Terminal Cheatsheet](#mac-terminal-cheatsheet)
  - [Table of Contents](#table-of-contents)
  - [About This Document](#about-this-document)
  - [Common Mac Keyboard Symbols](#common-mac-keyboard-symbols)
  - [Processing \& Searching Text](#processing--searching-text)
  - [Command Line Navigation](#command-line-navigation)
    - [Move Cursor To Beginning Of Input](#move-cursor-to-beginning-of-input)
    - [Move Cursor To End Of Input](#move-cursor-to-end-of-input)
    - [Move Backward One Word](#move-backward-one-word)
    - [Move Forward One Word](#move-forward-one-word)
  - [Input Manipulation](#input-manipulation)
    - [Clear Entire Input](#clear-entire-input)
    - [Clear Entire Input After Cursor](#clear-entire-input-after-cursor)
    - [Clear Previous Word](#clear-previous-word)
    - [Clear Next Word](#clear-next-word)
    - [Clear Terminal Screen](#clear-terminal-screen)
    - [Yank (Paste Previously Cleared) Text](#yank-paste-previously-cleared-text)
    - [Cancel (Signal Interrupt) Current Command Line](#cancel-signal-interrupt-current-command-line)
  - [Directory \& File Manipulation](#directory--file-manipulation)
    - [Make A Single Directory](#make-a-single-directory)
    - [Make Multiple Directories](#make-multiple-directories)
    - [Make Nested Directories](#make-nested-directories)
    - [Create A File](#create-a-file)
    - [Create Multiple Files](#create-multiple-files)
    - [Create A Directory \& File Together](#create-a-directory--file-together)
    - [Copy a Directory](#copy-a-directory)
  - [Admin Privileges](#admin-privileges)
    - [Run Commands As Superuser](#run-commands-as-superuser)
    - [Run A Shell As Superuser](#run-a-shell-as-superuser)
  - [Computer Shutdown, Restart, Sleep](#computer-shutdown-restart-sleep)
    - [Shutdown Immediately](#shutdown-immediately)
    - [Shutdown In 10 Minutes](#shutdown-in-10-minutes)
    - [Schedule Shutdown](#schedule-shutdown)

<br>

## About This Document

This cheatsheet is for quick reference to common commands for the Mac terminal (with significant carryover to Linux as well).

-   Assume Bash/Zsh shells unless specified otherwise.
-   Assume that multi-key commands written with the `+` symbol are chords (key combinations in sequence). **Don't actually type the `+` sign unless instructed.**
-   `&&`: chains commands together (if the preceding command succeeds).

<br>

## Common Mac Keyboard Symbols

-   `⌘` / `` Command (Cmd)
-   `⌥` Option/Alt
-   `⌃` Control (Ctrl)
    -   This guide will use `Ctrl` to disambiguate from the similar-looking `^` caret symbol.

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

## Command Line Navigation

### Move Cursor To Beginning Of Input

`Ctrl + A`

### Move Cursor To End Of Input

`Ctrl + E`

### Move Backward One Word

`⌥ + ←`

### Move Forward One Word

`⌥ + →`

<br>

## Input Manipulation

All of the following _Clear_ commands will "copy" the cleared text and make it available to yank (paste), except for the `Ctrl + C` signal interrupter.

### Clear Entire Input

`Ctrl + U`

### Clear Entire Input After Cursor

`Ctrl + K`

### Clear Previous Word

`Ctrl + W`

### Clear Next Word

`Esc + D`

### Clear Terminal Screen

`Ctrl + L`

This clears the terminal screen of text by adding newlines to your window.

### Yank (Paste Previously Cleared) Text

`Ctrl + Y`

The most recently cleared text, regardless of length, is available to be recalled.

### Cancel (Signal Interrupt) Current Command Line

`Ctrl + C`

This terminates execution of the process and wipes the command line regardless of cursor position, but you will only be able to yank (recall/paste) previously cleared text.

<br>

## Directory & File Manipulation

### Make A Single Directory

`mkdir directoryName`

### Make Multiple Directories

`mkdir -p dir1 dir2 dir3`

-   `-p`: the parents option.

### Make Nested Directories

`mkdir -p county/city/neighborhood/`

### Create A File

`touch fileName.txt`

### Create Multiple Files

`touch file1.txt file2.js file3.jpg file4.html`

### Create A Directory & File Together

`mkdir folderName && touch folderName/fileName.txt`

### Copy a Directory

`cp -r sourceFolder destinationFolder`

<br>

## Admin Privileges

Executing some commands will require admin (superuser) privileges.

-   `sudo`: superuser do.
    -   Requires your system password to execute.

### Run Commands As Superuser

Prepend `sudo` to any command.

### Run A Shell As Superuser

`sudo -s`

-   `-s`: shell.
    -   ⛔️ This option will open a new shell session with superuser privileges so you don't have to prepend everything with `sudo`.

<br>

## Computer Shutdown, Restart, Sleep

Modifying system power will likely require `sudo` permissions.

Use the following options with any of the **shutdown** commands below:

-   `-h`: halt (shut down/power off)
-   `-r`: reboot (restart)
-   `-s`: sleep

### Shutdown Immediately

`sudo shutdown -h now`

### Shutdown In 10 Minutes

`sudo shutdown -h +10`

### Schedule Shutdown

Use 24-hour (hh:mm) time to schedule a power off.

`sudo shutdown -h 22:30`
