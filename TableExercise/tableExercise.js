const NB_SALES = [
    {
        city: "Bathurst",
        q1: 1654,
        q2: 462,
        q3: 819,
        q4: 1265,
    },
    {
        city: "Edmunston",
        q1: 1480,
        q2: 1552,
        q3: 484,
        q4: 1386,
    },
    {
        city: "Fredericton",
        q1: 943,
        q2: 221,
        q3: 405,
        q4: 709,
    },
    {
        city: "Miramichi",
        q1: 1150,
        q2: 1606,
        q3: 113,
        q4: 1616,
    },
    {
        city: "Moncton",
        q1: 279,
        q2: 410,
        q3: 1670,
        q4: 554,
    },
    {
        city: "Saint John",
        q1: 214,
        q2: 371,
        q3: 1282,
        q4: 1255,
    },
    {
        city: "Sussex",
        q1: 1341,
        q2: 1103,
        q3: 1739,
        q4: 130,
    },
];
window.onload = function (){
    buildTable();
}

function buildTable(){
    let q1Total =0;
    let q2Total =0;
    let q3Total =0;
    let q4Total =0;
    let html = "<table>"
    html += "<tr>";
    html += "<th></th>";
    html += "<th>Q1</th>";
    html += "<th>Q2</th>";
    html += "<th>Q3</th>";
    html += "<th>Q4</th>";
    html += "</tr>";

    for (let i = 0; i < NB_SALES.length; i++) {
        let sales = NB_SALES[i];
        html+= "<tr>"
        html += "<td>" + sales.city + "</td>";
        html += "<td>" + sales.q1.toLocaleString() + "</td>";
        html += "<td>" + sales.q2.toLocaleString() + "</td>";
        html += "<td>" + sales.q3.toLocaleString()  + "</td>";
        html += "<td>" + sales.q4.toLocaleString()  + "</td>";
    }
    html += "<tr><td>Totals</td>";

    for (let i =0; i < NB_SALES.length; i++){
        let sales = NB_SALES[i];
        q1Total += sales.q1;
    }
    html += "<td>" + q1Total.toLocaleString() + "</td>";

    for (let i =0; i < NB_SALES.length; i++){
        let sales = NB_SALES[i];
        q2Total += sales.q2;
    }
    html += "<td>" + q2Total.toLocaleString() + "</td>";

    for (let i =0; i < NB_SALES.length; i++){
        let sales = NB_SALES[i];
        q3Total += sales.q3;
    }
    html += "<td>" + q3Total.toLocaleString() + "</td>";

    for (let i =0; i < NB_SALES.length; i++){
        let sales = NB_SALES[i];
        q4Total += sales.q4;
    }
    html += "<td>" + q4Total.toLocaleString() + "</td>";

    html += "</table>";
    let container = document.querySelector("#theTableContainer");
    container.innerHTML = html;
}