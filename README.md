Line Simplification with Turf.js (Web Development)

Lab 6 (ENGO 651)
Group Members: Ruth Ekeh and Chimezie Azih


In this final lab work, we create a web map that can allow users draw a polyline, which is eventually simplified by a high-performance library provided by the Turf.js. This Turf.js is an advanced geospatial Javascript library that houses a wealth of geospatial tools in the form of modules and functions that can be used in making intuitive and insightful analyses on maps, or for designing maps in general. Simplify-js is one such module. It essentially takes complexly drawn polylines/Geojson objects and simplifies them by using a combination of the Ramer-Douglas-Peucker and the Radial Distance algorithms.

For this lab, we have chosen to use a basic html page design with an OpenStreet map as its mapping frontend. JavaScript is also used for page functionality. This map, apart from having the zoom icons to the left, has a layer icon to the right which allows users to toggle on and off the line layers/objects. The web page will also have a set of buttons to the top right corner that allows the user to access the main funtionality of the web page. Users will be able to draw a polyline no matter how complex by clicking on the <mark>**Draw Line**</mark> button on the top-right corner of the page. After drawing the polyline, users will then be able to simplify the line drawn by clicking on the <mark>Simplify</mark> button which has its functionality enabled by Turf.js' Simplify-js function. The last button is the <mark>reset</mark> button, and it allows users delete and reset their map canvas. On entering the web page, users can pan the map to whatever their location of choice is and start to draw their polylines. 

To run this code, you can download the zipped file and open on your local code editor. The project folder contains an <mark> Index.html</mark> file, a <mark>simplify-script.js</mark> file and a <mark>README.md</mark> file. Just run the <mark>Index.html</mark> file however you so deem. That is, you can run it with any live server of your choice. 
