<a id="readme-top"></a>

# Phone Reveal Link Button

**Author**: Nate @ [Outpost Web Studio](https://outpostwebstudio.com/) | [Everyday Computer Help](https://everydaycomputerhelp.com/) | [GitHub](https://github.com/nvsmith)

**Last Updated**: 08 SEP 2025

**Table Of Contents**

-   [Phone Reveal Link Button](#phone-reveal-link-button)
    -   [About](#about)
    -   [How It Works](#how-it-works)
    -   [Usage](#usage)
    -   [Benefits](#benefits)

## About

This component creates a button that, once clicked, displays a clickable telephone number link.

Instead of displaying phone numbers directly in the page HTML (where they can be harvested by spam bots), the numbers are stored only in JavaScript and revealed on demand when a user clicks.

This approach helps protect against automated crawlers that scan websites for phone numbers, while still keeping the interaction simple and accessible for real users.

**Built With**

-   HTML
-   CSS
-   JavaScript

## How It Works

-   Each button starts as a normal `<a>` link with placeholder text. When the user clicks, JavaScript prevents the default action and updates the button with the correct:

    -   `href="tel:..."` link
    -   visible phone number text
    -   `aria-expanded="true"` attribute for accessibility

-   On subsequent clicks, the browser follows the `tel:` link as normal.
-   Phone numbers never appear in the HTML. They exist only in the JavaScript mapping.

## Usage

1. **HTML**: add an anchor element with a unique ID, a link placeholder, and any desired attributes:

```html
<a id="header-phone" class="btn btn--phone" href="#" role="button" aria-expanded="false">Reveal Phone Number</a>
```

2. **JavaScript**: define the mapping of HTML elements' IDs to their respective phone numbers and labels:

```js
const phoneMap = {
    "header-phone": { number: "+15551234567", label: "📞 (555) 123-4567" },
    "footer-phone": { number: "+15559876543", label: "(555) 987-6543" },
};
```

3. Style link button element as desired with CSS.

## Benefits

-   Spam protection: Phone numbers are hidden from crawlers that don’t execute JavaScript.

-   Reusability: Works with any number of buttons by adding them to the mapping.

-   Accessibility: Buttons use aria-expanded attributes for screen readers.

-   Simplicity: Lightweight and dependency-free.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
