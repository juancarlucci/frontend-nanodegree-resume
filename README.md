## Resume project



### What I learned doing the resume project:

1. How to build JSON objects, each representing a different resume section. 
2. JSON objects included value pairs with strings, arrays of objects, and integers. 
3. Append method: `selector.append()`, to append the data from the JASON object to the index.html
4. JavaScript method `string.replace(old, new)` to swap out all the placeholder text (e.g. `%data%`) for data from the resume JSON objects.
5. Setting up an interactive map that gets its location data from the JSON object, and uses it to dysplay a map on the canvas. This included using Google API for maps.

### Files included: 

* **index.html**: The main HTML document. Contains links to all of the CSS and JS resources needed to render the resume, including resumeBuilder.js.
* **js/helper.js**: Contains helper code needed to format the resume and build the map. It also has a few function shells for additional functionality. More on helper.js further down.
* **js/resumeBuilder.js**: Contains JSON object for all the data in the project.
* **js/jQuery.js**: The jQuery library.
* **css/style.css**: Contains all of the CSS needed to style the page.
* **README.md**: The GitHub readme file.
* and some images in the images directory.
