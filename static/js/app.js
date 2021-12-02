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

function handleClick() {
    // Grab the datetime function form the flter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    
    // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
        // Apply 'filter' to the table data to only keep the
        // rows where the 'datetime' calue matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filtereData);
};

// Attache an event to listen for the form button
d3.selectAll("fiter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData)