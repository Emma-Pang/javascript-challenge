// from data.js
var tableData = data;

// select tbody
var tbody = d3.select("tbody");
// Select the button
var button = d3.select("#filter-btn");


// append table with UFO sighting data from data.js
data.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

//   // button function - it works!
//   button.on("click", function() {

//     // Select the input element and get the raw HTML node
//     var inputElement = d3.select("#datetime");
  
//     // Get the value property of the input element
//     var inputValue = inputElement.property("value");
  
//     console.log(inputValue);
  

//   });

button.on("click", function() {

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    // console.log(inputValue);
    // console.log(data);
  
    var filteredData = data.filter(sighting => sighting.datetime === inputValue);
  
    console.log(filteredData);
});