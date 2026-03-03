const REGIONAL_SALES = ["North, 400", "South, 250", "East, 375", "West, 525"];

window.onload = function () {
    document.querySelector("#mainButton").addEventListener("click", buildTable);
    //buildTable();
};

function buildTable() {
    // Here's what we want the HTML to look like:
    /*
                    <table>
                        <tr>
                            <th>Region</th>
                            <th>Sales</th>
                        </tr>
                        LOOP START
                        <tr>
                            <td>North</td>
                            <td>400</td>
                        </tr>
                        <tr>
                            <td>South</td>
                            <td>250</td>
                        </tr>
                        .... and so on for every region
                        END LOOP
                    </table>
                */
    // We'll build a big string that contains all of this HTML - i.e.,
    // "<table><tr><th>Region</th></tr><tr><td>North</td><td>400</td></tr> ... </table>"
    // Then we'll put that string into the document.

    // The <table> and the <th> part happens only once.
    let htmlString = "<table>";
    htmlString += "<tr>";
    htmlString += "<th>Region</th>";
    htmlString += "<th>Amount</th>";
    htmlString += "</tr>";

    // The <tr> tags need to be inside a loop because we need one for each region.
    for (let i = 0; i < REGIONAL_SALES.length; i++) {
        let temp = REGIONAL_SALES[i];
        // temp is a string like this "North,400"
        let pieces = temp.split(",");
        let region = pieces[0];
        let amount = Number(pieces[1]);
        htmlString += "<tr>";
        htmlString += "<td>" + region + "</td>";
        htmlString += "<td>" + amount + "</td>";
        htmlString += "</tr>";
    }
    // When the loop ends, close tag for the table.
    htmlString += "</table>";
    // Finally, put this HTML string in the document.
    let container = document.querySelector("#theTableContainer");
    container.innerHTML = htmlString;
}
