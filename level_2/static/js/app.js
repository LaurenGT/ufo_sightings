// from data.js
var tableData = data;

// select the filter table button
let filterTable = d3.select("#filter-btn");
let form = d3.select(".form-control");

// reference to the table body
const tbody = d3.select("tbody");

// console.log(data);

data.forEach(ufoSighting => {
    let row = tbody.append("tr");
    Object.values(ufoSighting).forEach(value => {
        let cell = row.append("td");
        cell.text(value);
    });
});

function runMultiple(sighting) {
    // console.log(sighting);
    console.log(this.date);
    return sighting.datetime === this.date && sighting.city === this.city && sighting.state === this.state && sighting.country === this.country && sighting.shape === this.shape;
    
}

// set up function to reference in event listener
const runEnter = () => {
    d3.event.preventDefault();
    let inputDate = d3.select("#datetime").property("value");
    let inputCity = d3.select("#city").property("value");
    let inputState = d3.select("#state").property("value");
    let inputCountry = d3.select("#country").property("value");
    let inputShape = d3.select("#shape").property("value");
    // let inputValue = inputElement.property("value");

    /*TODO:
    done - find all the form input - replicate inputDate
    done - build filter criteria - add keys only with data to filterCriteria
    in runMult - iterate over the filterCriteria and filter on the keys that match
    */

    // console.log(inputValue);

    let filterInputs = {
        "date": inputDate, 
        "city": inputCity, 
        "state": inputState, 
        "country": inputCountry,
        "shape": inputShape};
    console.log(filterInputs)

    let filteredData = tableData.filter(runMultiple, filterInputs);
    
    

    // let filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    // console.log(filteredData);


    //clear any children from the list
    tbody.html("");
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
