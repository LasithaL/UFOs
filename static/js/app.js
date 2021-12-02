// Import the Data form data.js
const tableData = data;

// Reference the HTML talbe using D3
var tbody = d3.select("tbody");

// Create function to build table
// First clear out any existing data
function buildTable(data) {
    // First clear out any existing data
    tbody.html("");

    // Next, loop through each object in the data
    // and append a row and cell for each value in the row
    data.forEach((dataRow) => {
        // Append a row tot he table body
        let row = tbody.append("tr");

        // Loop through each field in the datRow and add
        // each value as atable cell (td)
        Object.values(datRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}