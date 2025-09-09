// Phone Reveal Link Button
// Add any new phone numbers to the `phoneMap` object below AND match them to their respective elements' IDs in the HTML

// Wrap everything in an IIFE so it doesn't pollute the global namespace
(function initReveal() {
    // Map element IDs to phone data
    const phoneMap = {
        "header-phone": { number: "+15551234567", label: "📞 (555) 123-4567" },
        "footer-phone": { number: "+15559876543", label: "(555) 987-6543" },
    };

    // Attach behavior to any matching elements that exist or that will be added
    function attach() {
        // Iterate over every ID defined in phoneMap
        Object.keys(phoneMap).forEach((id) => {
            // Find the element by ID
            const phoneBtn = document.querySelector(`#${id}`);

            // Skip adding behavior if button is not in the DOM yet, or it's already initialized with a listener
            if (!phoneBtn || phoneBtn.dataset.listenerAttached) return;

            // Set the initial reveal state of the phone number
            let revealed = false;

            // Add a click handler to the button
            phoneBtn.addEventListener("click", (e) => {
                // Intercept the first click to reveal the number; later clicks should follow the `tel:` link
                if (!revealed) {
                    // Stop the default behavior of jumping to the top of the page
                    e.preventDefault();

                    // Inject the `tel:` link
                    phoneBtn.href = `tel:${phoneMap[id].number}`;

                    // Replace the visible text with the formatted label
                    phoneBtn.textContent = phoneMap[id].label;

                    // Update accessibility state so screen readers know the content expanded/revealed
                    phoneBtn.setAttribute("aria-expanded", "true");

                    // Mark as revealed so subsequent clicks behave like a normal tel: link
                    revealed = true;
                }
            });

            // Mark this element as initialized so duplicate listers won't be added
            phoneBtn.dataset.listenerAttached = "true";
        });
    }

    // ---- Safe initialization timing ----
    // If the DOM is still parsing, wait until it's ready; otherwise run immediately.
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", attach);
    } else {
        attach();
    }

    // ---- OPTIONAL: Handle dynamic DOM changes (e.g., AJAX/WordPress/Site BUilders injecting content later): Uncomment the block below ----

    // // Re-run `attach()` whenever new nodes are added anywhere in the document.
    // const observer = new MutationObserver(attach);

    // // Start observing the whole document body for added/removed child nodes.
    // observer.observe(document.body, { childList: true, subtree: true });
})();
