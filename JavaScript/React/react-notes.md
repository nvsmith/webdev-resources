# React Notes

<a href="https://tecnate.dev" target="_blank" rel="author">Tecnate</a> | Last Updated: 2024.02.18

## Table Of Contents

-   [React Notes](#react-notes)
    -   [Table Of Contents](#table-of-contents)
    -   [About This Document](#about-this-document)
    -   [The JavaScript Ecosystem](#the-javascript-ecosystem)
    -   [Installing React Locally](#installing-react-locally)
        -   [Installation Prerequisites](#installation-prerequisites)
        -   [Initialize Package Manager (NPM)](#initialize-package-manager-npm)
        -   [Installing Package Dependencies (React \& React-DOM)](#installing-package-dependencies-react--react-dom)
    -   [Project Organization](#project-organization)

## About This Document

This document is a brain dump for things that I've picked up about the React library. Use at your own risk!

## The JavaScript Ecosystem

React requires several things to work properly. Here are the JavaScript tasks that need to be addressed with their respective tools:

1. Managing packages - npm
2. Using a module system - ES6
3. Preprocessing JavaScript - Babel
4. Bundling everything into a single file for the browser - Webpack

## Installing React Locally

### Installation Prerequisites

1. [Node.js](https://nodejs.org/en/)
2. [VSCode](https://code.visualstudio.com/) or other text editor.

### Initialize Package Manager (NPM)

In your terminal, create (or navigate to) the root directory for your project.

```bash
# Initialize Node Package Manager
npm init

# You should see a prompt for with the name of your project.
# Hit 'Enter/Return' for all prompts.

# "Is this ok?"
yes
```

### Installing Package Dependencies (React & React-DOM)

```bash
# Install React
npm install --save react

# Install React-DOM
npm install --save react-dom
```

## Project Organization

Using the Village framework, here's a recommended way to organize directories & files:

-   projectRoot
    -   node_modules
    -   components
        -   villages (views)
            -   neighborhoods
                -   blocks
                    -   houses
    -   styles
    -   index.js (Highest component in hierarchy, App - render to DOM)
    -   index.html
    -   package.json
