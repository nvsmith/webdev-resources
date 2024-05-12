# React For GitHub Pages

<a href="https://tecnate.dev" target="_blank" rel="author">Tecnate</a> | Last Updated: 2024.05.12

-   [React For GitHub Pages](#react-for-github-pages)
    -   [About](#about)
    -   [General Workflow](#general-workflow)
        -   [Initial Deployment](#initial-deployment)
        -   [Continual Development \& Deployment](#continual-development--deployment)
    -   [Deployment Process](#deployment-process)
    -   [Continuing Development](#continuing-development)
        -   [Option 1: Publish Source Code](#option-1-publish-source-code)
        -   [Option 2: Keep Source Code Private](#option-2-keep-source-code-private)

<hr>
<br>

## About

This is a quick guide to get React apps created with the **Create React App** up and running on GitHub pages. If you need a Git refresher, refer to my [Git Cheatsheet](../../Git/git-cheatsheet.md).

At this time, you can only run static applications using GitHub pages; it's not meant to get complex, dynamic react apps online.

I found [Deploying a React App to GitHub Pages](https://github.com/gitname/react-gh-pages) to be a great help. Please refer to it for more detailed explanations.

<br>

## General Workflow

This is an overview. Refer to the [Deployment Process](#deployment-process) section for step-by-step instructions.

The development-deployment workflow for running a React app on GitHub pages generally looks like this:

### Initial Deployment

1. Develop and test changes on a local **development** or **feature** branch.
2. Merge changes into your **main** branch.
3. Execute `npm run deploy` from your **main** branch to publish your app to GitHub Pages.

### Continual Development & Deployment

Decide which you'd rather do for further development:

-   Either commit changes made during deployment to **main**, push source code to make it available on GitHub, pull in changes to **development**, and repeat workflow cycle.
-   Or ignore deployment changes, keep the source code private, and repeat workflow cycle.

<br>

## Deployment Process

1. Follow the normal process to connect your local repo to GitHub.
2. Checkout a **development** branch
    - ❌ Working directly on **main** is not recommended.
3. Install `gh-pages` as a dependency:

    ```bash
    npm install gh-pages --save-dev
    ```

4. Add a `homepage` property to the top of your **package.json** file in the following format:

    - Project site (typical): `https://{username}.github.io/{repo-name}`
    - User site (less typical): `https://{username}.github.io`

    ```json
    // package.json file example
    {
        "name": "my-app",
        "version": "0.1.0",
        "homepage": "https://nvsmith.github.io/landing-page",
        "private": true,
        ...
    }
    ```

5. Add these `predeploy` and `deploy` properties to the _scripts_ object to your **package.json** file:

    ```json
    // Only add predeploy & deploy properties, leave everything else alone
     "scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build",
        "start": "react-scripts start",
        "build": "react-scripts build",
        ...
     }
    ```

6. Make sure your local app still works as expected, then add and commit your changes.
7. Checkout **main**, and merge in your development branch.
8. Push **main** to **remote** to make sure everything is synced before deployment.
9. Create a new branch exactly named **gh-pages** and push it upstream to GitHub before deployment:

    ```bash
        # Create new branch for GitHub pages
        git checkout -b gh-pages

        # Set upstream for deployment
        git push -u origin gh-pages
    ```

    - Note: some online documents say that running `npm deploy` will automatically create the **gh-pages** branch, but it's never worked for me. So you can just do it manually before running deployment if you experience the same issues.

10. Checkout your **main** branch again and deploy your app to GitHub pages:

    ```bash
    # Checkout main
    git checkout main

    # Deploy app to static website with a comment
    npm run deploy -- -m "Deploy React app to GitHub Pages"
    ```

    Here's what happens:

    - The `predeploy` script you added creates a distributable React app in a folder name **build**, which contains a folder named **static**.
    - The `deploy` script you added pushes the **static** folder to your remote **gh-pages** branch along with the commit SHA and comment; this does _not_ push to your **main** branch.

11. In your browser, navigate to your GitHub repo > Settings (upper right on desktop) > Pages (under Code and Automation). Set the configuration like so if it isn't already:
    - Branch: `gh-pages`
    - Folder: `/ (root)`
12. It may take a few minutes for your app to be viewable at you GitHub Pages URL.
13. Deployment accomplished!

<br>

## Continuing Development

Whether you decide to commit the changes made during deployment will depend on whether or you want the source code to be made available or not:

### Option 1: Publish Source Code

1. Back in terminal, commit the deployment changes to your **main** branch (i.e. the **build** directory creation) and push to your remote:

    ```bash
    # Make sure no other unexpected changes occurred on main branch
    git status

    # Add files and commit changes
    git add . && git commit -m "Add distributable source code to repo"

    # Push to GitHub
    git push
    ```

2. At this point, your **main** branch will be ahead of your development branch. For further development work, decide if you want to:

    - Pull changes in from your newly-updated remote **main** branch.
        - ❌ It is not recommended to merge **main** into **development** directly; keep **main** as the single source of truth and pull from it whenever possible.

    ```bash
    # Checkout your development branch (or create a new one)
    git checkout development

    # Fetch & merge changes from remote main into local development
    git pull origin main
    ```

    - Or checkout an entirely new branch for future development.
    - Or rebase

3. Repeat the workflow cycle.

<br>

### Option 2: Keep Source Code Private

1. Back in terminal, ignore any changes made during deployment.

    ```bash
    # Ensure no unexpected changes besides the new build directory that you want to ignore
    git status

    # Discard all changes and revert to prior commit state
    git checkout .
    ```

2. Repeat the workflow cycle.