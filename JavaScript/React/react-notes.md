# React Notes

<a href="https://tecnate.dev" target="_blank" rel="author">Tecnate</a> | Last Updated: 2024.03.06

## Table Of Contents

-   [React Notes](#react-notes)
    -   [Table Of Contents](#table-of-contents)
    -   [About This Document](#about-this-document)
    -   [Quick Concepts](#quick-concepts)
    -   [Installing React](#installing-react)
        -   [Option A: Installing React Automatically](#option-a-installing-react-automatically)
        -   [Option B: Installing React Manually](#option-b-installing-react-manually)
            -   [1. Understand The JavaScript Ecosystem](#1-understand-the-javascript-ecosystem)
            -   [2. Install Prerequisites](#2-install-prerequisites)
            -   [3. Initialize Package Manager (NPM)](#3-initialize-package-manager-npm)
            -   [4. Install React Packages](#4-install-react-packages)
                -   [Install React Dependencies](#install-react-dependencies)
                -   [Install Dev Dependencies](#install-dev-dependencies)
            -   [5. Add Files To Your Project](#5-add-files-to-your-project)
            -   [6. Update Your Scripts](#6-update-your-scripts)
            -   [7. Execute Your Scripts](#7-execute-your-scripts)
    -   [Uninstalling React](#uninstalling-react)
    -   [UI Layout](#ui-layout)
        -   [Installing React Grid (Optional)](#installing-react-grid-optional)
    -   [Naming React Components](#naming-react-components)
    -   [Organizing Your Project](#organizing-your-project)
    -   [Lifecycle Methods](#lifecycle-methods)
    -   [Components \& Props](#components--props)

## About This Document

This document is a brain dump for things that I've picked up about the React library. Use at your own risk!

<br>

## Quick Concepts

React is a JavaScript library used to build user interfaces by implementing modular code that can be reused throughout your application.

Here are the fundamental concepts you'll need to build/maintain React apps:

1. Components
2. ReactDOM
3. Class vs Functional Components
4. JSX
5. State
6. Event Handling
7. Asynch setState
8. Props
9. Refs

<br>

## Installing React

### Option A: Installing React Automatically

Use the **Create React App** to spin up a React application quickly.

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

### Option B: Installing React Manually

#### 1. Understand The JavaScript Ecosystem

React requires several things to work properly. Here are the JavaScript tasks that need to be addressed with their respective tools:

1. Managing packages - npm
    - **package**: a directory with at least one file called "package.json" that contains metadata about said package.
2. Using a module system - ES6
    - **module**: JavaScript code that can be imported/exported for use elsewhere.
3. Preprocessing JavaScript - Babel
    - **Babel**: a preprocessor that compiles ES6, applied using Webpack.
4. Bundling everything into a single file for the browser - Webpack
    - **Webpack**: a module bundler that ultimately injects a single new file as HTML to be read by the browser.
    - **Bundling**: using the top of the code hierarchy (index.js), specifying the preprocessor (Babel), then producing a single file with the final code (Webpack) for the browser to read.

#### 2. Install Prerequisites

1. [Node.js](https://nodejs.org/en/)
2. [VSCode](https://code.visualstudio.com/) or other text editor.

#### 3. Initialize Package Manager (NPM)

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

#### 4. Install React Packages

There are two types of packages you need to install:

> -   **dependencies**: packages imported by our application.
> -   **devDependencies** packages required for development and testing.

##### Install React Dependencies

```bash
# Install React
npm install --save react

# Install React-DOM
npm install --save react-dom
```

##### Install Dev Dependencies

```bash
# Install Babel & Webpack
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader webpack webpack-cli webpack-dev-server html-webpack-plugin

# Install URL Loader & File Loader
# For image rendering on a local server
npm install --save-dev url-loader file-loader

# Install CSS/Style Loader
npm install --save-dev style-loader css-loader

```

#### 5. Add Files To Your Project

Add the following templates into the root of your project:

1. [index.html](root-file-templates/index.html)
2. [index.js](root-file-templates/index.js)
3. [webpack.config.js](root-file-templates/webpack.config.js)
    1. Double check that the `template` and `entry` filepaths to your root **index.html** and **index.js** are correct!
    2. If your images aren't loading, you may need to add/remove file-loader rules from the configuration file. See [file-loader documentation](https://www.npmjs.com/package/file-loader) for examples.

#### 6. Update Your Scripts

Open your **package.json** file and update your scripts like so:

```json
"scripts": {
        "start": "webpack-dev-server --mode development --open --hot"
        },
```

This will enable you to execute the webpack-dev-server and allow for live reloading of changes in your default web browser.

That should be it for installation!

#### 7. Execute Your Scripts

Run `npm run start` to execute the script which starts React and allows you to view your project in the browser. You should see a message similar to this in your terminal:

> Project is running at:<br>
> Loopback: http://localhost:8080/

Open a second terminal window for any development needs and allow Node to run in the background in the first window. Press `Ctrl+C` in the terminal to stop the webpack-dev-server at any time.

<br>

## Uninstalling React

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

## UI Layout

There are several ways you can define layouts for your React App (CSS stylesheets, Bootstrap, React Grid System, etc). Before committing to any framework, determine how your UI can be divided into rows and columns.

> Be careful if you choose to use Bootstrap; it contains JavaScript that may conflict with React.

### Installing React Grid (Optional)

```bash
# Install React Grid
npm install --save react-grid-system
```

Once installed, add the following to your components:

```js
import { Container, Row, Col } from "react-grid-system";
```

## Naming React Components

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

## Organizing Your Project

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

<br>

## Lifecycle Methods

**Lifecycle Methods**: functions added to a class component and called at specific moments during the life of said component.

There are three phases to a React components, which you can think of as the birth, life, and death of a component:

1. Mounting: when the component first renders in the view.
    - e.g. fetching data
2. Updating: when the component updates the UI.
    - e.g. saving user input from a form
3. Unmounting: when the component's DOM elements are to be removed from the view.
    - e.g. cancel a running timer

<br>

## Components & Props

Components are _defined_ where exported and _used_ where imported.

Props are _defined_ once, at the highest view (often but not necessarily where the Component is used). But they need to be made available down the entire Component hierarchy; they are passed down every nested file until they are _used_ where the Component is defined.

-   Props are _defined_ (or passed) where the component is used.
    -   Props are _passed_ along the entire Component chain.
-   Props are _used_ where the component is defined.

For an example Title component, if your nested directories were: Page/Header/Title, your component/props would look like the following:

```js
// Page.js
import Header from "./Page/Header"

class Page extends React.Component {
    render() {
        // Defines title prop
        return <Header title="Hello, World!"/>;
    }
}

export default Page;

// Page.js/Header.js
import Title from "./Page/Header/Title"

class Header extends React.Component {
    render() {
        // Uses  Title component & passes title prop
        return <Title title={this.props.title}/>;

        /* You could define the prop here if you didn't want to define it in the Header, but this would make your Title less flexible:

        return <Title title="Hello, World!"/>; */
    }
}

export default Header;

// Page.js/Header.js/Title.js
class Title extends React.Component {
    render() {
        // Uses title prop
        return <h1 className="blue">{this.props.title}</h1>;
    }
}

export default Title;
```
