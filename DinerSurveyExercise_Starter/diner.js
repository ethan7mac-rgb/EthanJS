const MONTH_NAMES = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

window.onload = function () {
    // Make an AJAX call to load the data.
    // When the server responds, call buildPage
    // and pass the text that the server sent back.
    let url = "LancasterDinerSurvey.json"; // file we want to read
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
    // code 200 means the server succeeded in retrieving the resource
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        buildPage(xhr.responseText); // do something when server responds
    }
    };
    xhr.open("GET", url, true); // must use “GET” method
    xhr.send();
};
    

// Call when server responds to AJAX request with data.
function buildPage(text) {
    // 1. Convert JSON data to JS Objects
    let dinerSurvey = JSON.parse(text);
    console.log(dinerSurvey.restaurantName);
    console.log(dinerSurvey.surveyDate);
    // 2. Put restaurant name and survey date in subtitle area
    let containerSubtitle = document.querySelector("#subtitle");    
    containerSubtitle.innerHTML = dinerSurvey.restaurantName + " " + dinerSurvey.surveyDate.year + " " + dinerSurvey.surveyDate.month + " " + dinerSurvey.surveyDate.day;
    // 3. Initialize four arrays to hold rankings for
    //    quality, value, service, and atmosphere.
    let qualityRanking = [];
    let valueRanking = [];
    let serviceRanking = [];
    let atmoRanking = [];
    // 4. For each rating:
    //      add the quality rating to the quality array,
    //      the value rating to the value array, and so on.
    for(let r of dinerSurvey.ratings){
        let quality = r.quality;
        let value = r.value;
        let service = r.service;
        let atmo = r.atmosphere;

        qualityRanking.push(quality);
        valueRanking.push(value);
        serviceRanking.push(service);
        atmoRanking.push(atmo);
        
    }
    console.log(qualityRanking, valueRanking)
    let elem = document.querySelector("#quality .ratings");
    elem.innerHTML = qualityRanking;
    elem = document.querySelector("#value .ratings");
    elem.innerHTML = valueRanking;
    elem = document.querySelector("#service .ratings");
    elem.innerHTML = serviceRanking;
    elem = document.querySelector("#atmosphere .ratings");
    elem.innerHTML = atmoRanking;
    // 5. Put the category ratings in each category results area.
    // 6. Calculate the category averages and put them in each category average area.
    elem = document.querySelector("#quality .average");
    elem.innerHTML = calcAverage(qualityRanking);
    elem = document.querySelector("#value .average");
    elem.innerHTML = calcAverage(valueRanking);
    elem = document.querySelector("#service .average");
    elem.innerHTML = calcAverage(serviceRanking);
    elem = document.querySelector("#atmosphere .average");
    elem.innerHTML = calcAverage(atmoRanking);
}

function calcAverage(nums) {
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        res += nums[i];
    }

    return res / nums.length;
}
