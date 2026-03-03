window.onload = function () {
    let url = "countries.json"; // file we want to read
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
    // code 200 means the server succeeded in retrieving the resource
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        buildCard(xhr.responseText); // do something when server responds
    }
    };
    xhr.open("GET", url, true); // must use “GET” method
    xhr.send();
};

function buildCard(text){
    let tempJSON = JSON.parse(text);
    let countries = tempJSON.countries;
    console.log(countries)
    let html = "";
    for(let i = 0; i < countries.length; i++){
        let temp = countries[i];
        html += '<div class = "card">';
        html += '<div class = "card-header">' + temp.country + "</div>"
        html += '<div class = "card-body">';
        html += '</div>';
        html += '</div>';
    }
    console.log(html);
    let elem = document.querySelector("#container");
    elem.innerHTML = html;

}