url = 'http://127.0.0.1:5000/api/health-green-data'

let data = d3.json(url).then(function(data) {
    return data.data
})

allAgeBP = []
allCrudeBP = []
allAgeCholesterol = []
allCrudeCholesterol = []

data.then(function(d) {
  for (let i=0;i< 32;i++) {
    allAgeBP.push(d[i].HighBloodPressureAgeAdjPrv)
    allCrudeBP.push(d[i].HighBloodPressureCrdPrv)
    allAgeCholesterol.push(d[i].HighCholesterolAgeAdjPrv)
    allCrudeCholesterol.push(d[i].HighCholesterolCrdPrv)
  }})
// Create our first trace
let trace1 = {
  x: gpc,
  y: allCrudeBP,
  type: "scatter"
};

// Create our second trace
let trace2 = {
  x: gpc,
  y: allAgeBP,
  type: "scatter"
};

let trace3 = {
  x: gpc,
  y: allCrudeCholesterol,
  type: "scatter"
};

// Create our second trace
let trace4 = {
  x: gpc,
  y: allAgeCholesterol,
  type: "scatter"
};

var layout = {
    title:'Heath Measures Vs. Green Space Per Capita'
  };

// The data array consists of both traces
let allScatterData = [trace1, trace2, trace3, trace4];

// Note that we omitted the layout object this time
// This will use default parameters for the layout
Plotly.newPlot("plot", allScatterData, layout);

// add <div id='myDiv'><!-- Plotly chart will be drawn inside this DIV --></div> to html
