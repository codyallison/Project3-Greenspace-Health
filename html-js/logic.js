url = 'http://127.0.0.1:5000/api/health-green-data'

d3.json(url).then(function(data) {
    console.log(data)
})