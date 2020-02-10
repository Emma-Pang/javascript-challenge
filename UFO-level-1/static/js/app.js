// from data.js
var tableData = data;

var tbody = d3.select("tbody");
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


// BONUS: Refactor to use Arrow Functions!
data.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
