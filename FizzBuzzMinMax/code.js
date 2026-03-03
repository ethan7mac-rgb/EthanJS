window.onload=function(){
    //console.log("inside window.onload")
    // register handler for btn click
    // select button
    let button = document.querySelector("#resButton");
    button.addEventListener("click", buildResults);
    let num = 35;
    console.log(num+1);
}

function buildResults (){
    //console.log("inside button")
    let inputElemMax = document.querySelector("#numInputMax")
    let numStrMax = inputElemMax.value;
    console.log(numStrMax, typeof numStrMax);
    let numMax = Number(numStrMax);

    let inputElemMin = document.querySelector("#numInputMin")
    let numStrMin = inputElemMin.value;
    console.log(numStrMin, typeof numStrMin);
    let numMin = Number(numStrMin);

    let html = "<ul>";
    let item = "";
    for(let i = numMin; i<= numMax; i++)
    {
        if(i % 15 === 0){
            item = "FizzBuzz";
        }
        else if(i % 3 === 0){
            item = "Fizz";
        }
        else if(i % 5 === 0){
            item = "Buzz";
        }
        else{
            item = i;
        }
        html+= "<li>" + item + "</li>";
    }
    html+= "</ul>"
    console.log(html);

    //display each number inside and li tag  
    let resultsArea = document.querySelector("#results");
    resultsArea.innerHTML = html;
}