# AI Prompt Log — IT 223 Midterm PIT
**Student:** Lovely Alabe
**Tool Used:** Claude (claude.ai)

-----------------------------------------------------------------------------------------------------------------------------------------------

## Entry #1

**Tool Used:** Claude (claude.ai)

**Prompt (copy-paste exactly):**
> "how do i dynamically create skill bar elements using createElement() and appendChild() in JavaScript? I have a `<ul>` with `<li>` items that each have a `data-level` attribute and i want to generate a progress bar for each one below the list."

**AI Output (summary):**
Claude explained how to loop through each `<li>` using `querySelectorAll()`, read the `data-level` attribute, then use `createElement()` to build a wrapper div, a label div, a track div, and a fill div — then nest and append them into a target container. It also showed how to use `setTimeout()` to delay the width animation so CSS transitions fire correctly after the element is in the DOM.

**How I used/modified it:**
I followed the structure Claude provided and adapted the class names to match my existing CSS (`bar-wrap`, `bar-track`, `bar-fill`). I also connected it to my `#skillBars` container and tested that the bars animated correctly on page load. Later I removed the bars entirely after deciding the pill-tag style looked cleaner for my design.

-----------------------------------------------------------------------------------------------------------------------------------------------

## Entry #2

**Tool Used:** Claude (claude.ai)

**Prompt (copy-paste exactly):**
> "my jQuery show/hide toggle button stops working after I click it once. the button is inside the same div I'm trying to hide. how do i fix this and also make the button text change depending on whether the section is visible or hidden?"

**AI Output (summary):**
Claude identified that placing the toggle button inside `#skillsWrap` caused it to disappear when the wrapper was hidden, breaking the interaction. It explained to move the button outside the wrapper so it stays visible at all times. It also showed how to use `$(this).text()` combined with `$("#skillsWrap").is(":visible")` to conditionally update the button label after each toggle.

**How I used/modified it:**
I moved the `#toggleSkills` button above the `#skillsWrap` div in my HTML. I then updated my jQuery to use `.is(":visible")` for the label logic. I tested both show and hide states to confirm the button text switched correctly between "▴ Hide Skills" and "▾ Show / Hide Skills".

-----------------------------------------------------------------------------------------------------------------------------------------------

## Entry #3

**Tool Used:** Claude (claude.ai)

**Prompt (copy-paste exactly):**
> "How do I make a dark mode toggle using jQuery that switches the entire page theme? I want it to use a CSS class and toggle between a light and dark color scheme using CSS variables."

**AI Output (summary):**
Claude explained how to define two sets of CSS custom properties — one under `:root` for light mode and one under `body.dark` for dark mode — and then use jQuery's `.toggleClass('dark')` on the `body` element to switch between them. It also showed how to update the toggle button icon using `.text()` based on whether the dark class is present.

**How I used/modified it:**
I already had the CSS variables set up so I only needed the jQuery part. I applied `.toggleClass('dark')` on `$('body')` and used `$('body').hasClass('dark')` to update the button icon between `◐` and `◑`. I tested it in both light and dark mode across all sections to make sure colors, borders, and backgrounds all switched correctly.