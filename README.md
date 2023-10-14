# Click_me_if_you_can
## Hosted Link: [→ Click Me ←](https://mayankkatheriya.github.io/Click_me_if_you_can/)

# UI:
![image](https://github.com/Mayankkatheriya/Click_me_if_you_can/assets/128832286/2ef84bd6-5e4c-446d-b5a1-a8a75856beae)

---
## Explanation:

`HTML (index.html)`:

* The HTML file defines the basic structure of your webpage.
* It includes meta tags for character set and viewport settings.
* The title is set to "Click Me If You Can."
* External CSS styles are linked from "./styles.css."
* A favicon is linked with a URL of "./red-and-black-wings-with-x-gaming-logo-png-21.png."

The page structure includes:

* A countdown timer with a class "timer," initially set to 30 seconds.
* A "Start" section with a title "Click Me If You Can," a down arrow icon, and a "Play Now" button.* A "Catch" button (initially hidden) with a class "catch" that players need to click during the game.
* A "Restart" section (initially hidden) displayed when the game ends with a congratulatory message and a "Restart" button.
* External scripts are linked for FontAwesome and your custom JavaScript from "./script.js."

`CSS (styles.css)`:

* The CSS file starts with a reset style for all elements.
* The body background is set to a gradient image or URL "./modern-futuristic-sci-fi-background_35913-2150.avif."
* The "Catch" button is styled with borders, background, and various properties to make it visually appealing.
* "Restart" and "Start" sections are styled to be centered on the page.
* The "Restart" h1 element has a glitch effect with text-shadow.
* The "Play" and "Reset" buttons have a background color and hover effects.

`JavaScript (script.js)`:

* JavaScript variables are defined to select elements with specific classes, such as "catch," "play," "start," "restart," and "timer."
* A function randomPos(min, max) generates random positions for the "Catch" button within the viewport.
* An event listener on the "Catch" button triggers a reposition of the button when the mouse hovers over it.
* The game's timer is implemented, and a function updateTimer updates the countdown.
* Functions watchStart and watchStop are used to control the timer.
* When the "Play Now" button is clicked, it hides the "Start" section, displays the timer, and starts the game.
* Clicking the "Catch" button hides it and displays the "Restart" section while stopping the timer.
* The message in the "Restart" section is updated based on the time remaining.
* There is some commented-out code, likely for a stopwatch functionality and random button repositioning, which is not currently used in the game.
  
In summary, This code creates a simple web-based game where players must click the "Catch" button within 30 seconds after clicking "Play Now." The game features some visually appealing CSS effects, including glitch text and button animations. Players receive different messages based on their remaining time when they click the "Catch" button. There's also some commented-out code that appears to be for additional functionality.
