url = 'http://127.0.0.1:5000/api/health-green-data'

d3.json(url).then(function(data) {
    console.log(data)
})

function getLocation(x) {
    
    console.log(x.split('-'))

}

// Creating the map object
let myMap = L.map("map", {
    center: [45.52, -122.67],
    zoom: 13
  });
  // Adding a tile layer (the background map image) to our map:
  // We use the addTo() method to add objects to our map.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);