# React For GitHub Pages

<a href="https://tecnate.dev" target="_blank" rel="author">Tecnate</a> | Last Updated: 2024-06-21

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
    -   For this option, the easiest way to keep your source code from being published is to add `/build` to your **.gitignore** file (explained in more detail below).

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

    ```js
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

    ```js
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

    - ⚠️ Some online documents say that running `npm deploy` will automatically create the **gh-pages** branch, but it's never worked for me. So you can just do it manually before running deployment if you experience the same issues.

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

    > `npm run deploy`: This command is not a standard built-in script in React projects but is often used to automate the deployment process to hosting services (like GitHub Pages). It includes the standard `npm run build` command (to prepare app for production) and then deploy the contents of the build directory to the hosting service.

11. In your browser, navigate to your GitHub repo > Settings (upper right on desktop) > Pages (under Code and Automation). Set the configuration like so if it isn't already:
    - Branch: `gh-pages`
    - Folder: `/ (root)`
12. It may take a few minutes for your app to be viewable at you GitHub Pages URL.
13. Deployment accomplished!

<br>

## Continuing Development

Whether you decide to commit the changes made during deployment will depend on whether or you want the source code to be made available or not.

You do not have to commit/sync changes to your **gh-pages** branches once your start deploying. In fact, you can delete the local **gh-pages** branch if you want to, since the remote branch will always be built directly from a deployment on **main**.

### Option 1: Publish Source Code

1. Back in terminal, commit the deployment build changes to **main** and push to remote:

    ```bash
    # Check you're on main & only have build changes
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

3. And repeat the develpment-deployment cycle:
    - Develop, test, and commit code on **development**.
    - Merge code into **main**.
    - Deploy.
    - Commit and push changes made by deployment.
    - Pull everything onto an existing or new **development** branch.

### Option 2: Keep Source Code Private

You can manually discard changes, as demonstrated below, or you can simply add `/build` to your **.gitignore** file.

1. Back in terminal, ignore any changes made during deployment.

    ```bash
    # Check you're on main & only have build changes
    git status

    # Discard all changes and revert to prior commit state
    git checkout .

    # Remove untracked files and directories
    git clean -df

    # Move back to a development or feature branch to continue working
    git checkout development
    ```

2. And repeat the cycle of development:
    - Develop, test, and commit code on **development**.
    - Merge code into **main**.
    - Push **main** to **remote**, then deploy to GitHub Pages with `npm run deploy`.
    - Don't commit any changes made by deployment:
        - Discard with `git checkout .`
        - Remove untracked files with `git clean -df`
    - Checkout **development** and continue working.
