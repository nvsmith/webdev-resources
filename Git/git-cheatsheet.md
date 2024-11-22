# Git Cheatsheet

<a href="https://tecnate.dev" target="_blank" rel="author">Tecnate</a> | Last Updated: 11 Nov 2024

-   [Git Cheatsheet](#git-cheatsheet)
    -   [General Notes](#general-notes)
        -   [Best Practices](#best-practices)
        -   [Comment Styles](#comment-styles)
        -   [WordPress Usage](#wordpress-usage)
    -   [Git Installation Or Upgrading](#git-installation-or-upgrading)
    -   [Version Control Configuration](#version-control-configuration)
        -   [Initialize Local Git Repo](#initialize-local-git-repo)
        -   [Connect Local Repo To GitHub (Or A Remote Server)](#connect-local-repo-to-github-or-a-remote-server)
        -   [Set An Upstream (Remote) Branch](#set-an-upstream-remote-branch)
    -   [Version Control Removal](#version-control-removal)
        -   [Remove Local Git Tracking](#remove-local-git-tracking)
        -   [Remove Remote Tracking](#remove-remote-tracking)
    -   [View Branches](#view-branches)
    -   [Creating \& Modifying Branches](#creating--modifying-branches)
        -   [Rename An Existing Local Branch](#rename-an-existing-local-branch)
        -   [Create A New Branch](#create-a-new-branch)
        -   [Clone A Remote Repo (SSH)](#clone-a-remote-repo-ssh)
        -   [Clone A Remote Repo Branch (SSH)](#clone-a-remote-repo-branch-ssh)
        -   [Rename a Remote Repo](#rename-a-remote-repo)
        -   [Download Remote Files \& Commits to Local](#download-remote-files--commits-to-local)
            -   [Fetch vs. Pull](#fetch-vs-pull)
    -   [Comparing Branches \& Commits](#comparing-branches--commits)
        -   [Output Unique Commits](#output-unique-commits)
        -   [View Behind/Ahead Commit Count](#view-behindahead-commit-count)
        -   [Compare Unique Commits](#compare-unique-commits)
    -   [Merges \& Conflicts](#merges--conflicts)
        -   [Merging Branches](#merging-branches)
        -   [Merge Conflicts](#merge-conflicts)
    -   [Scratch That: Reversing Changes \& Deleting Branches](#scratch-that-reversing-changes--deleting-branches)
        -   [Undo/Ignore Simple File Changes](#undoignore-simple-file-changes)
        -   [Undo/Ignore Changes To All Files](#undoignore-changes-to-all-files)
        -   [Delete Local Branch](#delete-local-branch)
        -   [Delete Remote Branch](#delete-remote-branch)
    -   [Rolling Back The Clock: Revert, Amend, Rebase, Clean](#rolling-back-the-clock-revert-amend-rebase-clean)
        -   [Rollback \& Reset Branches To Match One Another](#rollback--reset-branches-to-match-one-another)
    -   [Hosting on GitHub Pages](#hosting-on-github-pages)
        -   [GitHub Pages \& React](#github-pages--react)

<hr>

## General Notes

In Git branching nomenclature, **main** and **master** are synonymous. This guide will use **main** to refer to the main/master branch (or trunk) of the development chain.

> ⚠️ Note: assume that codeblocks in this guide show an ordered sequence of steps to follow unless otherwise specified.

### Best Practices

-   ❌ Don't edit the **main** branch directly.
-   ✅ Always checkout a development branch before working on any code.
    -   Once your code has been vetted, checkout your **main** branch and merge in your development branch.

### Comment Styles

-   In general, write comments as present-tense imperatives:
    -   ✅ "Center headings and fix typos"
    -   ❌ "Heading placed in the center and typos corrected"

### WordPress Usage

Whether you are using Git or SFTP to deploy changes, the last step is to refresh your database. Settings or content that you add/modify are stored in your database. (E.g., custom post types, custom fields, references to images, etc.)

<br>

## Git Installation Or Upgrading

You may already have Apple Git running on your machine. If you run `git --version` and are returned something like "`git version 2.24.3 (Apple Git-128)`" and then install Git with Homebrew, your machine will have two different versions of Git at the following locations:

1. Apple version: /usr/bin/git
2. Open source (Homebrew installation): /usr/local/bin/git

Updating the PATH variable and overwriting any symlinks as shown below will make your machine use the `git` command default to the open source version of Git. Using Homebrew will make it easier to update (i.e. upgrade) Git in the future.

```bash
# Iterate through all Git executables and display locations/versions
for i in $(which -a git); do echo -n "${i}:  "; ${i} --version; done

# Install or upgrade git with Homebrew package manager
brew install git
brew upgrade git

# Update the PATH variable to the Homebrew install
export PATH=/usr/local/bin:$PATH

# Check that your git command is linked to the updated Homebrew version you installed
git --version

# If necessary, overwrite any existing symlinks to the installed version of git
brew link --overwrite git
```

<br>

## Version Control Configuration

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

### Connect Local Repo To GitHub (Or A Remote Server)

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
> -   `-u`: equivalent to `--set-upstream`
> -   As you push with the `-u` tag option, the local branch (**main**) is linked to the remote server (**origin**) automatically with a matching branch name **(main)**.

View more about Remotes at [Git Basics - Working with Remotes](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes)

### Set An Upstream (Remote) Branch

```bash
# Checkout the branch you want to connect to remote
git checkout -b development # Option 1: create new branch
git checkout development # Option 2: use existing branch

# Set the upstream of the local branch (development) to the remote server (origin)
git push -u origin development

# View all remote branches
git branch -r
# You should see 'origin/development' listed
```

<br>

## Version Control Removal

### Remove Local Git Tracking

To remove Git from a project, you can simply delete the _.git_ directory in the root of your project.

⛔️ Caution! This will permanently remove the version control history and configurations.

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

### Remove Remote Tracking

After cloning a remote repo, you may want to remove the tracking so that your local project is no longer synced to the remote.

```bash
# Navigate to project directory
cd Sites/projectName

# Remove remote tracking
git remove remote
```

<br>

## View Branches

```bash
# View local branches
git branch

# View remote branches
git branch -r

# View all branches
git branch -a
```

<br>

## Creating & Modifying Branches

### Rename An Existing Local Branch

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

### Clone A Remote Repo (SSH)

```bash
# Copy/paste info from the "Clone" btn on GitHub: git@github.com:<userName>/<repoName>.git
git clone git@github.com:nathanielvs/example-project.git


# ??? NEEDS INSPECTION
git checkout -b feature/modal origin/deploy

# Push the feature/modal branch to remote origin
git push origin feature/modal
```

### Clone A Remote Repo Branch (SSH)

```bash
# Copy/paste info from the "Clone" btn on GitHub: git@github.com:<userName>/<repoName>.git
git clone -b branch-name git@github.com:nathanielvs/example-project.git
```

### Rename a Remote Repo

```bash
# View existing remotes
git remote -v

# Rename origin to upstream
git remote rename origin upstream
```

### Download Remote Files & Commits to Local

#### Fetch vs. Pull

![git pull and fetch comparison](https://itknowledgeexchange.techtarget.com/coffee-talk/files/2023/05/gf03.gif "Git Pull vs Git Fetch")

**Source: [TheServerSide](https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/Git-pull-vs-fetch-Whats-the-difference)**

`fetch`: copies changes to you local git repo.

-   Use `fetch` if you want to pull down the latest changes from a remote repository without overwriting anything in your working directory and merge later.

`pull`: copies changes directly into your working directory. A pull is equivalent to a fetch & merge.

-   Use `pull` if your workspace has no uncommitted files, and you want to copy the latest changes from remote directly into your working directory.
-   An aborted `git pull` short-circuits and becomes `git fetch`; all updates are copied to local repo but your local workspace is left alone.

```bash
# Synchronize branch list
git fetch -p
```

> `-p`: prune.
>
> -   After fetching, branches which no longer exist on the remote will be deleted.

<br>

## Comparing Branches & Commits

### Output Unique Commits

```bash
# Shows commits missing from main but present on devBranch
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
# <abc123...unique commit 2 on main
# >def456...unique commit 1 on devBranch
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

## Scratch That: Reversing Changes & Deleting Branches

### Undo/Ignore Simple File Changes

```bash
# Discard uncommitted edits & revert a file to prior commit state
git checkout -- filename.abc
```

### Undo/Ignore Changes To All Files

```bash
# Discard all file changes & revert everything to prior commit
git checkout .
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
# View remote branches
git branch -r

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

## Rolling Back The Clock: Revert, Amend, Rebase, Clean

> ⚠️ Warning: Resetting is destructive. Make sure you're ok with losing the data before you proceed!

**Git Revert**: undo changes made in a commit by creating a new commit that reverses the changes.

```bash
# Undo changes introduced by commit hash abc123
git revert abc123
```

**Git Reset**: reset the current HEAD to a specified state, which can be a previous commit or the staging area.

-   Optionally preserves changes in the working directory.

```bash
# This is a codeblock of options, not sequences
# Replace abc123 with the hash (ID) of the commit you want to keep
git reset abc123            # Reset to specified commit
git reset --soft abc123     # Reset & keep changes staged
git reset --mixed abc123    # (Default) Reset & unstage changes
git reset --hard abc123     # Reset & discard changes
git reset --hard HEAD^      # Undo last commit & all changes
git reset --hard HEAD^^     # Undo last 2 commits & all changes
```

### Rollback & Reset Branches To Match One Another

```bash
# Checkout the branch that you want to rollback (i.e. development)
git checkout development

## Reset the checked out branch to match another branch (i.e. main)
git reset --hard main

# Force push the changes to your remote branch if desired
git push origin development --force
```

<br>

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

### GitHub Pages & React

See the [React For GitHub Pages](../JavaScript/React/react-for-github-pages.md) guide to get static React applications running on GitHub.
