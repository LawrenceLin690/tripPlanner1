// console.log('hi there')

const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

mapboxgl.accessToken = "pk.eyJ1IjoibGF3cmVuY2VsaW4iLCJhIjoiY2ppbTYzYjV3MDBxZjNwbWhreHdlbGJmaSJ9.W3qz9mOyqU-lV9O-9hMn0w";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

const markerDomEl2 = document.createElement("div"); // Create a new, detached DIV
markerDomEl2.style.width = "32px";
markerDomEl2.style.height = "39px";
markerDomEl2.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

new mapboxgl.Marker(markerDomEl2).setLngLat([-73.98, 40.74]).addTo(map);

const marker = buildMarker("activity", [-73.7516, 40.7516]); // or [-87.6354, 41.8885]
console.log(marker)
marker.addTo(map);

