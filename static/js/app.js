// from data.js
var tableData = data;

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