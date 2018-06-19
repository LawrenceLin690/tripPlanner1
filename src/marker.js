const mapboxgl = require('mapbox-gl');

const iconURLs = {
  hotels: 'http://i.imgur.com/D9574Cu.png',
  restaurants: 'http://i.imgur.com/cqR6pUI.png',
  activities: 'http://i.imgur.com/WbMOfMl.png'
};

const buildMarker = (type, coords) => {
  // Your Code Here
  const newElement = document.createElement('div')
  newElement.style.width = '32px';
  newElement.style.height = '39px';

  if (type === 'activity') {
    newElement.style.background = 'url(' + iconURLs.activities + ')'
  }

  if (type === 'hotels') {
    newElement.style.background = 'url(' + iconURLs.hotels + ')'
  }

  else {
    newElement.style.background = 'url(' + iconURLs.restaurants + ')'
  }
  console.log(type)
  return new mapboxgl.Marker(newElement).setLngLat(coords)
};



module.exports = buildMarker;
