let data_url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson'

d3.json(data_url).then(function(data) {
    let colorScale = d3.scaleLinear()
    .domain([0, 10, 20])
    .range(['green', 'yellow', 'red']);

    
    data.features.forEach(function(feature){
        let coordinates = feature.geometry.coordinates;
        let latitude = coordinates[1];
        let longitude = coordinates[0];
        let depth = coordinates[2];
        let magnitude = feature.properties.mag;
        var place = feature.properties.place;
        var time = new Date(feature.properties.time).toLocaleString();

        let markerColor = colorScale(depth);
        let markerSize = magnitude*5;

        let marker = L.circleMarker([latitude, longitude], {
            radius: markerSize,
            color: markerColor,
            fillColor: markerColor,
            fillOpacity: 0.8
        }).addTo(myMap);

        let popupContent = `
        <strong>Magnitude:</strong> ${magnitude}<br>
        <strong>Location:</strong> ${place}<br>
        <strong>Depth:</strong> ${depth} km<br>
        <strong>Time:</strong> ${time}<br>
        <a href="${feature.properties.url}" target="_blank">More Details</a>
        `;
        marker.bindPopup(popupContent);

    })
})


let myMap = L.map("map", {
    center: [19.7023166,-101.1929821],
    zoom: 5
  });

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);


let legend = L.control({ position: 'bottomright' });

legend.onAdd = function (map) {
    let div = L.DomUtil.create('div', 'info legend');
    let grades = [0, 10, 20]; 
    let colors = ['green', 'orange', 'red'];
    div.innerHTML+=
    'Depth<br>'
    for (let i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + colors[i] + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(myMap);