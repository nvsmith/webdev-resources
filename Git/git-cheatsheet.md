# Git Cheatsheet

<a href="https://tecnate.dev" target="_blank" rel="author">Tecnate</a> | Last Updated: 2024.02.11

## Table of Contents

- [Git Cheatsheet](#git-cheatsheet)
  - [Table of Contents](#table-of-contents)
  - [General Notes](#general-notes)
    - [Best Practices](#best-practices)
    - [Comment Styles](#comment-styles)
    - [WordPress Usage](#wordpress-usage)
  - [Set Up Version Control](#set-up-version-control)
    - [Initialize Local Git Repo](#initialize-local-git-repo)
    - [Connect Local Repo to GitHub/Remote](#connect-local-repo-to-githubremote)
  - [Remove Version Control](#remove-version-control)
  - [Branch \& Code Edits](#branch--code-edits)
    - [Rename An Existing Branch](#rename-an-existing-branch)
    - [Create A New Branch](#create-a-new-branch)
    - [Clone A Repo](#clone-a-repo)
    - [Download Remote Files \& Commits to Local](#download-remote-files--commits-to-local)
      - [Fetch vs. Pull](#fetch-vs-pull)
  - [Comparing Branches \& Commits](#comparing-branches--commits)
    - [Output Unique Commits](#output-unique-commits)
    - [View Behind/Ahead Commit Count](#view-behindahead-commit-count)
    - [Compare Unique Commits](#compare-unique-commits)
  - [Merges \& Conflicts](#merges--conflicts)
    - [Merging Branches](#merging-branches)
    - [Merge Conflicts](#merge-conflicts)
  - [Scratch That: Undo Changes \& Delete Branches](#scratch-that-undo-changes--delete-branches)
    - [Undo Simple File Edits](#undo-simple-file-edits)
    - [Delete Local Branch](#delete-local-branch)
    - [Delete Remote Branch](#delete-remote-branch)
  - [Rollback The Clock: Revert, Amend, Rebase, Clean](#rollback-the-clock-revert-amend-rebase-clean)
  - [Hosting on GitHub Pages](#hosting-on-github-pages)

<br>

## General Notes

-   **main** and **master** are synonymous. This guide will use **main** to refer to the main branch (or trunk) of the development chain.

### Best Practices

-   DO NOT edit the **main** branch directly. Always checkout a development branch for editing/testing.
-   Once your code has been vetted, checkout your **main** branch and merge in your development.

### Comment Styles

-   In general, write comments as present-tense imperatives:
    -   ✅ "Center headings and fix typos"
    -   ❌ "Heading placed in the center and typos corrected"

### WordPress Usage

-   Whether you are using Git or SFTP to deploy changes, the last step is to refresh your database. Settings or content that you add/modify are stored in your database. (E.g., custom post types, custom fields, references to images, etc.)

<br>

## Set Up Version Control

### Initialize Local Git Repo

```bash
# Navigate to project directory
cd Sites/projectName

# Initialize repo
git init

# Confirm all files are present
git status

# Add all files and commit with comment
git add . && git commit -m "Initial commit"

# Ensure working tree is clean
git status
```

### Connect Local Repo to GitHub/Remote

```bash
# Check for existing remote repos
git remote -v

# In a browser, go to your GitHub account and create new repository
# Make private if necessary
# Switch from HTTPS to SSH
# Copy this command block from GitHub:
git remote add origin git@github...git push -u origin main

# Back in terminal, paste the command in project directory where git was initialized

# Type your SSH password when prompted

# Check remote origin is now connected
git remote -v

# Refresh GitHub page in browser and confirm sync
```

> The `-u` tag in `git push -u origin main` is used to set the origin as the upstream remote in your git config. It is only needed the first time you push.
>
> -   As you push with the `-u` tag option, the local branch (**main**) is linked to the remote server (**origin**) automatically with a matching branch name **(main)**.

View more about Remotes at [Git Basics - Working with Remotes](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes)

<br>

## Remove Version Control

To remove Git from a project, you can simply delete the _.git_ directory in the root of your project. Be careful; this will permanently remove the version control history and configurations.

```bash
# Navigate to project directory
cd Sites/projectName

# View all files in the directory, including hidden files like .git
ls -a

# Remove all git directories and their contents recursively
# BE SURE BEFORE YOU PROCEED!
rm -rf .git

# Remove the .gitignore file
rm .gitignore

# Go to GitHub and delete your repository if you don't want a remote copy
```

<br>

## Branch & Code Edits

### Rename An Existing Branch

```bash
# Change the name of oldBranch to newBranch
git branch -m oldBranch newBranch
```

### Create A New Branch

```bash
# View all branches
git branch

# Create a checkout a new branch called “staging”
git checkout -b staging
```

### Clone A Repo

```bash
# Copy/paste repo from GitHub
git clone <repo>

# ??? NEEDS INSPECTION
git checkout -b feature/modal origin/deploy

# Push the feature/modal branch to remote origin
git push origin feature/modal
```

### Download Remote Files & Commits to Local

#### Fetch vs. Pull

![git pull and fetch comparison](https://itknowledgeexchange.techtarget.com/coffee-talk/files/2023/05/gf03.gif "Git Pull vs Git Fetch")

**Source: https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/Git-pull-vs-fetch-Whats-the-difference**

`fetch`: copies changes to you local git repo.

-   Use `fetch` if you want to pull down the latest changes from a remote repository without overwriting anything in your working directory and merge later.

`pull`: copies changes directly into your working directory. A pull is equivalent to a fetch & merge.

-   Use `pull` if your workspace has no uncommitted files, and you want to copy the latest changes from remote directly into your working directory.
-   An aborted `git pull` short-circuits and becomes `git fetch`; all updates are copied to local repo but your local workspace is left alone.

```bash
# Synchronize branch list
git fetch -p
```

> The -p flag means "prune".
>
> -   After fetching, branches which no longer exist on the remote will be deleted.

<br>

## Comparing Branches & Commits

### Output Unique Commits

```bash
# Shows if commits are present in devBranch but NOT in main
git log main..devBranch
```

### View Behind/Ahead Commit Count

```bash
# Local branches comparison
git rev-list --left-right --count main...devBranch

# Remote branches comparison
git rev-list --left-right --count origin/main...origin/devBranch

# Example Output:
# 1   3
# Compared to main, devBranch is 1 behind & 3 ahead
```

### Compare Unique Commits

```bash
# Return list of unique commits on each branch
git rev-list --left-right --pretty=oneline main...devBranch

# Example Output:
# <1122...unique commit 2 on main
# <aabb...unique commit 1 on main
# >1a2b...unique commit 1 on devBranch
```

> -   `<` SHA points to left branch (in this case, `main`)
> -   `>` SHA points to right branch (in this case, `devBranch`)

<br>

## Merges & Conflicts

### Merging Branches

> When merging, you checkout the trunk (e.g. **main**) and merge in the development branch (e.g. **staging, feature/modal, bugfix, etc**).

```bash
# Checkout the trunk
git checkout main

# Merge the branch you worked on
git merge development

# Make sure working tree is clean and resolve any conflicts if necessary before pushing.
git status

# Push your merged local (main) to remote (origin)
git push origin main
```

### Merge Conflicts

> Perform merge conflict housekeeping in your text editor.
>
> -   HEAD points to the current, checked out branch (usually **main** when you're doing merges).
> -   The`checkout` operation moves the HEAD pointer to the specified commit (i.e. a branch name or a git log ID hash).

```bash
# See what HEAD points to
cat .git/HEAD
```

> -   Decide which code to keep and delete everything else, including the GIT inserts.
> -   Only proceed after the conflict is resolved.

<br>

```bash
# Stage changes (after conflicts are resolved)
git add filename.abc

# Commit changes with comment
git commit -m "Fix merge conflict in filename"

# Make sure working tree is clean
git status

# Push your merged local (main) to remote (origin)
git push origin main
```

<br>

## Scratch That: Undo Changes & Delete Branches

### Undo Simple File Edits

```bash
# Discard uncommitted edits and revert file to its prior commit state
git checkout -- filename.abc
```

### Delete Local Branch

```bash
# Delete branch that has been already been pushed & merged with remote
git branch -d localBranchName
```

```bash
# Delete branch that has NOT been pushed & merged with remote
git branch -D localBranchName
```

### Delete Remote Branch

```bash
# Delete remote branch - Option 1
git push origin --delete remoteBranchName

# Delete remote branch - Option 2
git push origin :remoteBranchName
```

> The remote may have already been deleted if you see this:
>
> -   `error: unable to push to unqualified destination: remoteBranchName The destination refspec...`
> -   Run `git fetch -p` to prune branches that no longer exist.

<br>

## Rollback The Clock: Revert, Amend, Rebase, Clean

???

    git revert: This command reverts the changes of a commit. it maintains track record in logs.

    git reset: This command reverts the changes of a commit. it does not maintain track record in logs i.e. reset to the reverted commit. Note: It an destructive function. have to be careful using this command.

    git reset --soft HEAD^ Undo last commit, put changes into staging

    git reset --hard HEAD^ Undo last commit and all changes

    git reset --hard HEAD^^ Undo last 2 commits and all changes

    git commit --amend where amend means add to the last commit. Sometimes we forgot to add files to commit. for example abc.txt file was forgot, we can add as follows: git add abc.txt and git commit --amend -m "New commit message"

## Hosting on GitHub Pages

```bash
# Create a branch for hosting
# You must name it 'gh-pages' for GitHub
git checkout -b gh-pages

# Push branch to GitHub
git push origin gh-pages

# In your browser, visit your GitHub repo
# Click the Settings button (gear icon in the top menu)
# Scroll down  to the Pages section to view/modify any settings
```
