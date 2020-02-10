// from data.js
var tableData = data;

// select tbody
var tbody = d3.select("tbody");
// Select the button
var button = d3.select("#filter-btn");

// console.log(data);

// data.forEach(function(ufoSighting) {
//   console.log(ufoSighting);
//   });



// Step 2:  Use d3 to append one table row `tr` for each weather report object
// Don't worry about adding cells or text yet, just try appending the `tr` elements.
// data.forEach(function(ufoSighting) {
//   console.log(ufoSighting);
//   var row = tbody.append("tr");
// });


// append table with UFO sighting data from data.js
data.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  // button function
  button.on("click", function() {

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
  

  });
  