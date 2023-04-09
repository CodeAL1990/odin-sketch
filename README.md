# odin-sketch
etch-a-sketch
1. Added index.html, styles.css, and script.js
2. Linked styles.css and script.js
3. Loop through a variable of amount with createElement and appendChild to create similar sized divs in the container
4. Created a color change function that targets and change the background color of the child divs in the container
5. Added event listener that triggers on mouseover for above function at the end of the loop
6. Created an adjustBtn inside .main div
7. Initialize container width and height as variables in js file
8. Initialize gridSize of divElement created by loop
9. At the start, i put a fix width and height to the divElement in css file (16px);
10. I wanted to adjust the gridSize using the adjustBtn (probably going too far here because i got lost)
11. Asked chatGPT and it helped me with certain parts of createGrid() and adjustBtn
12. The box sketch pad only worked at 16px and left blank spaces to the right due to flex-wrap
13. Used flex-basis: calc(100% / columns) and initialize rows and columns as global in js
14. Used flex-grow: 1 to stretch each divElement evenly to fill up blank spaces
15. Used height: 10% to try and hide the last row which will have insufficient divs and stretch to fill blank space(last row is still scuffed which is understandable because this is bandaid)
16. Modify changeColor function from only applying black to random rgb colors
17. Main takeaways are using a for loop to create divs and using the e(event object) to target the divs