# React Notes

<a href="https://tecnate.dev" target="_blank" rel="author">Tecnate</a> | Last Updated: 2024.02.21

## Table Of Contents

-   [React Notes](#react-notes)
    -   [Table Of Contents](#table-of-contents)
    -   [About This Document](#about-this-document)
    -   [The JavaScript Ecosystem](#the-javascript-ecosystem)
    -   [Option 1: Install React Automatically With Create React App](#option-1-install-react-automatically-with-create-react-app)
    -   [Option 2: Install React Manually](#option-2-install-react-manually)
        -   [Installation Prerequisites](#installation-prerequisites)
        -   [Initialize Package Manager (NPM)](#initialize-package-manager-npm)
        -   [Installing React Packages](#installing-react-packages)
            -   [React Dependencies](#react-dependencies)
            -   [Dev Dependencies](#dev-dependencies)
        -   [Add Files To Your Project](#add-files-to-your-project)
        -   [Update Your Scripts](#update-your-scripts)
    -   [Layout](#layout)
    -   [Name Your React Components Correctly](#name-your-react-components-correctly)
    -   [Organize Your Project](#organize-your-project)
    -   [Uninstall React](#uninstall-react)

## About This Document

This document is a brain dump for things that I've picked up about the React library. Use at your own risk!

## The JavaScript Ecosystem

React requires several things to work properly. Here are the JavaScript tasks that need to be addressed with their respective tools:

1. Managing packages - npm
2. Using a module system - ES6
3. Preprocessing JavaScript - Babel
4. Bundling everything into a single file for the browser - Webpack

**package**: a directory with at least one file called "package.json" that contains metadata about said package.

**module**: JavaScript code that can be imported/exported for use elsewhere.

**Babel**: a preprocessor that compiles ES6, applied using Webpack.

**Webpack**: a module bundler that ultimately injects a single new file as HTML to be read by the browser.

**Bundling**: taking the top of the code hierarchy (index.js), specifying the preprocessor (Babel), then producing a single file with the final code (Webpack) for the browser to read.

## Option 1: Install React Automatically With Create React App

1. Install `node.js` if you haven't already.
2. In your terminal, navigate to the directory where you want to create your project root.
3. Run the Create React App, replacing "project-name" with your own project:
    1. `npx create-react-app project-name`

For simple projects, you can delete the following:

1. **src/App.test.js**
2. **src/reportWebVitals.js**
    1. Open **src/index.js** to delete the following lines: `import reportWebVitals from './reportWebVitals';` and `reportWebVitals();`.
3. **src/setupTests.js**

After setup is complete, run `npm run start` to execute the script which starts React and allows you to view your project in the browser.

## Option 2: Install React Manually

### Installation Prerequisites

1. [Node.js](https://nodejs.org/en/)
2. [VSCode](https://code.visualstudio.com/) or other text editor.

### Initialize Package Manager (NPM)

In your terminal, create the root directory for your project **before** initializing NPM.

```bash
# Make your project's root directory
mkdir path/to/directory/myProject

# Navigate into your project root
cd path/to/directory/myProject

# Initialize Node Package Manager
npm init

# You should see a prompt for with the name of your project.
# Hit 'Enter/Return' for all prompts.

# "Is this ok?"
yes
```

### Installing React Packages

> -   **dependencies**: packages imported by our application.
> -   **devDependencies** packages required for development and testing.

#### React Dependencies

```bash
# Install React
npm install --save react

# Install React-DOM
npm install --save react-dom
```

#### Dev Dependencies

```bash
# Install Babel & Webpack
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader webpack webpack-cli webpack-dev-server html-webpack-plugin

# Install URL Loader & File Loader
# For image rendering on a local server
npm install --save-dev url-loader file-loader
```

### Add Files To Your Project

Add the following templates into the root of your project:

1. [index.html](root-file-templates/index.html)
2. [index.js](root-file-templates/index.js)
3. [webpack.config.js](root-file-templates/webpack.config.js)
    1. Double check that the `template` and `entry` filepaths to your root **index.html** and **index.js** are correct!
    2. If your images aren't loading, you may need to add/remove file-loader rules from the configuration file. See [file-loader documentation](https://www.npmjs.com/package/file-loader) for examples.

### Update Your Scripts

Open your **package.json** file and update your scripts:

```json
"scripts": {
        "start": "webpack-dev-server --mode development --open --hot"
        },
```

This will enable you to execute the webpack-dev-server and allow for live reloading of changes in your default web browser.

That should be it! Run `npm run start` to execute the script which starts React and allows you to view your project in the browser. You should see a message similar to this in your terminal:

> Project is running at:<br>
> Loopback: http://localhost:8080/

Press `Ctrl+C` in the terminal to stop the webpack-dev-server at any time.

## Layout

There are several ways you can define layouts for your React App (CSS stylesheets, Bootstrap, React Grid System, etc). Before committing to any framework, determine how your UI can be divided into rows and columns.

> Be careful if you choose to use Bootstrap; it contains JavaScript that may conflict with React.

## Name Your React Components Correctly

1. Use PascalCase when naming components.
2. Use full words rather than abbreviations.
3. One component per folder. For example:
    1. Component1/
        1. Example1.js
        2. Example1.css
    2. Component2/
        1. Example2.js
        2. Example2.css
4. Prefix High-Order components with "with": `const withAuth = (Component)...`

## Organize Your Project

The village metaphor is a useful way to conceptualize modules in React as the user interface, made up of hierarchical files and functionality that are imported and exported throughout the app.

Using a village as a framework for structure, here's one way to organize directories & files:

-   myProject
    -   node_modules
    -   styles
    -   index.js (Highest component in hierarchy, App - render to DOM)
    -   index.html
    -   package.json
    -   package-lock.json
    -   webpack.config.js
    -   components
        -   **villages**: the entire current page/view that can be toggled on or off, i.e. Landing Page
            -   **neighborhoods**: sections of the view that are composed of blocks, e.g. Header, Footer, Sidebar, etc.
                -   **blocks**: specific functionality of the UI composed of houses, e.g. Navigation, Call To Action, etc.
                    -   **houses**: the basic building blocks of the UI, sometimes combined into a block (multiple components with a singular purpose) and sometimes stand-alone:

## Uninstall React

```bash
# List the React installed versions and dependencies
npm list react

# Uninstall React:
npm uninstall react

# Uninstall ReactDOM
npm uninstall react-dom

# Delete the package files
rm package.json package-lock.json
```
