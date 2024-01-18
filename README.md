# Earthquake Map Visualization Project

This project creates an interactive map visualization of earthquake data using Leaflet, D3.js, and OpenStreetMap tiles. The map displays earthquake markers with varying colors and sizes based on their depth and magnitude. Additionally, a legend is provided to interpret the color-coding for earthquake depths.

## Project Structure

- **index.html**: The main HTML file that sets up the structure of the web page. It includes references to Leaflet, D3.js, and custom CSS and JavaScript files.

- **static/css/style.css**: CSS file defining styles for the webpage, including the map container and information panel.

- **static/js/logic.js**: JavaScript file responsible for fetching earthquake data from the USGS API, processing it, and rendering the map with interactive markers. It also defines the legend for depth visualization.

## How to Run

1. Open the `index.html` file in a web browser to view the earthquake map.

## Libraries and APIs Used

- **Leaflet**: Used for creating an interactive map.

- **D3.js**: Used for data manipulation and scaling to determine marker color based on earthquake depth.

- **OpenStreetMap**: Used for providing map tiles.

## Data Source

Earthquake data is fetched from the USGS Earthquake Hazards Program API. The data includes information about earthquake magnitude, location, depth, and time.

## Project Execution

1. The earthquake data is fetched asynchronously from the USGS API using D3.js.

2. Each earthquake feature is processed, and a corresponding Leaflet marker is created with dynamic size and color based on magnitude and depth.

3. Popup content is generated for each marker, displaying information such as magnitude, location, depth, and time.

4. The legend is added to the map to help users interpret the color-coding for earthquake depths.

## Map Features

- **Interactive Markers**: Clicking on a marker opens a popup with detailed information about the earthquake.

- **Legend**: Provides a visual guide for interpreting the color-coded depth representation on the map.

- **OpenStreetMap Tiles**: The base map uses OpenStreetMap tiles, providing a detailed and customizable background.

## Acknowledgments

- This project relies on the Leaflet, D3.js, and OpenStreetMap libraries. Special thanks to their respective communities for creating and maintaining these powerful tools.

- Earthquake data is sourced from the USGS Earthquake Hazards Program API.

## Author

DMZ