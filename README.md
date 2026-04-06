
## Features Implemented

### JavaScript Features (3)
1. **Prompt-based Personalization** — Clicking "✦ Personalize" asks for the visitor's name and updates the welcome text using `getElementById()` and `innerText`.
2. **Contact Form Validation** — Validates all fields on submit and displays dynamic feedback using conditions and DOM manipulation.
3. **Project Search Filter** — Filters project list items in real time using `querySelector()` and string matching on keyup.

### jQuery Features (2)
1. **Show / Hide Skills Toggle** — Toggles the skills wrapper visibility using `.toggle(300)` and updates button label with `.text()`.
2. **Project Category Filter** — Filter buttons use `.show()` and `.hide()` based on `data-cat` attribute matching via `.data()`.

### Bonus Features
- **Dark Mode Toggle** — Uses `.toggleClass('dark')` to switch the full page theme.

-----------------------------------------------------------------------------------------------------------------------------------------------

## AI Use Declaration

**AI Tool Used:** Claude (claude.ai)

**Purpose of AI Use:**
- [x] Debugging
- [x] Code generation
- [x] Styling suggestions

**Where AI was used:**
I used Claude to help me implement the animated skill bars using `createElement()` and `appendChild()` since I was unsure how to dynamically build DOM elements from a data attribute. I also asked for help structuring the jQuery toggle logic so that the button label updates correctly depending on visibility state. Claude helped me understand why my show/hide feature wasn't working due to a missing element in the HTML causing a silent JS error.

I confirm that I reviewed, tested, and understood the final code I submitted.

-----------------------------------------------------------------------------------------------------------------------------------------------

## Notes
All sections are fully functional and tested in Chrome and Firefox.