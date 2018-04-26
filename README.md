# Website Performance Optimization portfolio project

## Original Site: [Score Before](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Feqdeveloper.github.io%2Fsite-optimization-original%2F) Score: 71/100

## Updated Site: [Score After](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Feqdeveloper.github.io%2Fsite-optimization-project%2F) Score: 99/100

Live Final Site: [https://eqdeveloper.github.io/site-optimization-project/](https://eqdeveloper.github.io/site-optimization-project/)

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

## Made the following optimizations:
- Inlined CSS.
- Minified JavaScript files using grunt.
- Compressed and resized images.
- Updated the updatePositions function in main.js to calculate the top of the page outside of the loop.
- Added async tags to JavaScript files and relocated script tag to the bottom of the page.
