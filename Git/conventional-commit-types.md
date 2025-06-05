# Conventional Commit Types for Git

<a href="https://outpostwebstudio.com/" target="_blank" rel="author">Nate @ Outpost Web Studio</a> | Last Updated: 04 JUN 2025

-   [Conventional Commit Types for Git](#conventional-commit-types-for-git)
    -   [Common Commit Types](#common-commit-types)
    -   [Example Commit Messages](#example-commit-messages)
    -   [Using Scopes (Optional)](#using-scopes-optional)
    -   [Best Practices](#best-practices)

---

---

Conventional Commits are a standardized way to structure Git commit messages. This helps with clarity, changelogs, automation, and collaboration.

## Common Commit Types

| Prefix      | Purpose                                                           |
| ----------- | ----------------------------------------------------------------- |
| `feat:`     | A new feature — adds user-facing functionality                    |
| `fix:`      | A bug fix — resolves a defect or issue                            |
| `chore:`    | Routine maintenance — setup, tooling, configs, no user impact     |
| `docs:`     | Documentation changes only (e.g. README, inline comments)         |
| `style:`    | Code style changes (spacing, semicolons, formatting, etc)         |
| `refactor:` | Code changes that restructure but don't alter behavior            |
| `perf:`     | Performance improvements                                          |
| `test:`     | Add or update tests (unit, integration, etc.)                     |
| `build:`    | Build system or dependency changes (npm, composer, Webpack, etc.) |
| `ci:`       | Continuous Integration changes (GitHub Actions, CircleCI, etc.)   |
| `revert:`   | Revert a previous commit                                          |

## Example Commit Messages

```bash
feat: add new daily planner template

fix: resolve template rendering issue in Oxygen

docs: update README with setup instructions

chore: add .gitignore and remove tracked system files

refactor: split utility functions into separate modules

test: add snapshot tests for PDF export module

build: update Webpack config for production optimization

ci: add GitHub Actions workflow for plugin deployment

revert: revert "feat: add color picker to product editor"
```

## Using Scopes (Optional)

You can clarify what part of the codebase you're working on by adding a scope:

```bash
feat(planner): add customizable weekly spread

chore(deps): update WooCommerce plugin to v8.2

fix(styles): correct margin issues on mobile layout
```

## Best Practices

-   Use the imperative mood: "add", "fix", "update", not "added" or "fixed".
-   Keep the subject line under 50 characters.
-   Separate subject from body with a blank line, if you add a body.
-   Wrap the body at 72 characters if applicable.
-   Use the body to explain what and why, not how.
