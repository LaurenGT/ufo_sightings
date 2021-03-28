// from data.js
var tableData = data;

// select the filter table button
let filterTable = d3.select("#filter-btn");

// reference to the table body
const tbody = d3.select("tbody");

// YOUR CODE HERE!
// console.log(data);

data.forEach(ufoSighting => {
    let row = tbody.append("tr");
    Object.values(ufoSighting).forEach(value => {
        let cell = row.append("td");
        cell.text(value);
    });
});


// set up function to reference in event listener
const runEnter = () => {
    d3.event.preventDefault();
    let inputElement = d3.select("#datetime");
    let inputDate = inputElement.property("value");
    d3.select("tbody").text(inputDate);
    inputElement.property("value", "");
}

// apply event listener to the button for click and submit to run function above
filterTable.on("click", runEnter);
filterTable.on("submit", runEnter);
