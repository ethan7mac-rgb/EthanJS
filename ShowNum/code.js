window.onload=function(){
    console.log("inside window.onload")
    // register handler for btn click
    // select button
    let button = this.document.querySelector("#showButton");
    button.addEventListener("click", buildResults);
}

function buildResults (){
    console.log("inside button")
    //get value that user enters in txt
    let inputElem = document.querySelector("#numInput");
    let numStr = inputElem.value;
    console.log(numStr, typeof numStr);
    let num = Number(numStr);

    //loop from 1 - user input
    for(let i = 1; i<= num; i++){
        html+= "<li>" + i + "</li>";
    }
    html+= "</ul>"
    //display each number inside and li tag  
    let resultsArea = document.querySelector("#results");
    resultsArea. 
    /*
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                
            </ul>
    */
   let html = "<ul>";

   html+= "</ul>"
}