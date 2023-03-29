

    // Create a map centered at Calgary with zoom level 2
    const map = L.map('map').setView([51.039439, -114.054339], 11);

    // Add a tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(map);


    // Create an empty polyline and add it to the map
    const polyline = L.polyline([]).addTo(map);

    //Create a button function for drawing polyline
    //let drawingEnabled = false;


    //document.querySelector('#draw').addEventListener('click', () => {
    //   drawingEnabled = !drawingEnabled;
    // });


    // Listen for click events on the map
    //map.on('click', (event) => {
        //if (drawingEnabled) {

            // Add the clicked point to the polyline
    //     polyline.addLatLng(event.latlng);
    //   }
    // });

    document.querySelector('#draw').addEventListener('click', () => {

            map.on('mousedown', () => {
                isDragging = true;
                map.dragging.disable();
                map.getContainer().style.cursor = 'crosshair';
            });

            map.on('mousemove', (event) => {
                if (isDragging) {
                    // Add the current mouse position to the polyline
                    polyline.addLatLng(event.latlng);
                }
            });

            map.on('mouseup', () => {
                isDragging = false;
                map.getContainer().style.cursor ='';
            });
    });


    // Create an empty polyline to hold the simplified line
    const simplifiedPolyline = L.polyline([], { color: 'red' }).addTo(map);

    // Listen for click events on the simplify button
    document.querySelector('#simplify').addEventListener('click', () => {
        // Get the coordinates of the original polyline
        const coordinates = polyline.getLatLngs().map((latLng) => [latLng.lng, latLng.lat]);

        // Create a Turf.js line string from the coordinates
        const line = turf.lineString(coordinates);

        // Simplify the line using Turf.js's simplify function
        const simplifiedLine = turf.simplify(line, { tolerance: 2.5, highQuality: false });

        // Update the simplified polyline with the new coordinates
        simplifiedPolyline.setLatLngs(simplifiedLine.geometry.coordinates.map((coordinate) => [coordinate[1], coordinate[0]]));
    });

    // Listen for click events on the reset button
    document.querySelector('#reset').addEventListener('click', () => {
        // Remove all points from both polylines
        polyline.setLatLngs([]);
        simplifiedPolyline.setLatLngs([]);
    });


    const originalLayer = L.layerGroup([polyline]).addTo(map);
    const simplifiedLayer = L.layerGroup([simplifiedPolyline]).addTo(map);

    const layers = {
        'Original': originalLayer,
        'Simplified': simplifiedLayer
    };

    L.control.layers(null, layers).addTo(map);
