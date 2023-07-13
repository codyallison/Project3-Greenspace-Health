url = 'http://127.0.0.1:5000/api/health-green-data'

let data = d3.json(url).then(function(data) {
    return data.data
})

// I'm setting the starting data to St. Louis
function startingData(){

 data.then(function(d) {

    let city = d[30].city
    let county = d[30].county
    let state = d[30].state
    let gpc = d[30].greenspace_per_capita
    let population = d[30].population
    
    console.log(city,county,state,gpc,population)
})
}


function changeData(state, county) {
    data.then(function(d) {
        for (let i=0;i< 32;i++) {
            if (state == d[i].state && county == d[i].county) {
                loadData(d[i])
            } else {
                console.log(state, county)
            }
        }
    })
}

function loadData(selection) {
    console.log(selection)
    document.getElementById('state').innerText = `${selection.city}, ${selection.state}` 
    document.getElementById('county').innerText = `${selection.county} County`
    document.getElementById('population').innerText = `Population: ${selection.population}`
    document.getElementById('greenspace_per_capita').innerText = `Average Greenspace in Square Meters Per Million People: ${selection.greenspace_per_capita}`
    document.getElementById('HighBloodPressureCrdPrv').innerText = `High Blood Pressure Crude Prevalence: ${selection.measurements.HighBloodPressureCrdPrv}%`
    document.getElementById('HighBloodPressureAgeAdjPrv').innerText = `High Blood Pressure Age Adjusted Prevalence: ${selection.measurements.HighBloodPressureAgeAdjPrv}%`
    document.getElementById('HighCholesterolCrdPrv').innerText = `High Cholesterol Crude Prevalence: ${selection.measurements.HighCholesterolCrdPrv}%`
    document.getElementById('HighCholesterolAgeAdjPrv').innerText = `High Cholesterol Age Adjusted Prevalnce: ${selection.measurements.HighCholesterolAgeAdjPrv}%`
    myMap.setView([selection.location[0], selection.location[1]])
}

function getLocation(x) {
    
    data.then(function(d) {
        console.log(d)
    })
     
    state_county = x.split('-')
    console.log(state_county)
    changeData(state_county[0], state_county[1])
}




// Creating the map object
let myMap = L.map("map", {
    center: [38.6270, -90.1994],
    zoom: 13
  });
  // Adding a tile layer (the background map image) to our map:
  // We use the addTo() method to add objects to our map.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);

  startingData()