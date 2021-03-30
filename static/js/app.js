// from data.js
var tableData = data;

// select the filter table button
let filterTable = d3.select("#filter-btn");
let form = d3.select("form");

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
    let inputValue = inputElement.property("value");

    console.log(inputValue);

    let filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);
    // d3.filterTable(row).text(inputValue);
    // inputElement.property("value", "");

    //select the table by id
    // let fData = d3.select("#ufo-table");
    //clear any children from the list
    tbody.html("");
    // append sightings to the fData
    filteredData.forEach(sighting => {
        let row = tbody.append("tr");
        Object.values(sighting).forEach(value => {
            let cell = row.append("td");
            cell.text(value);
        })
    })
}

// apply event listener to the button for click and submit to run function above
filterTable.on("click", runEnter);
form.on("submit", runEnter);
