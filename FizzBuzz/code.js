window.onload=function(){
    //console.log("inside window.onload")
    // register handler for btn click
    // select button
    let buttonFizz = this.document.querySelector("#resButton");
    buttonFizz.addEventListener("click", buildResults);
    let buttonStyle = this.document.querySelector("#styleButton");
    buttonStyle.addEventListener("click", applyStyles);
}

function buildResults (){
    //console.log("inside button")
    //console.log(numStr, typeof numStr);
    let inputElem = document.querySelector("#numInput")
    let numStr = inputElem.value;
    let num = Number(numStr);
    let html = "<ul>";
    let item = "";
    for(let i = 1; i<= num; i++)
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
    let container = document.querySelector('#results');
    container.innerHTML = html;
}

    function applyStyles (){
    let rows = document.querySelectorAll('li');
    console.log('running idiot');
    let inputElem = document.querySelector("#numInput");
    let numStr = inputElem.value;
    for(let i = 0; i <= numStr; i++){
        if(i % 15 === 0){
            rows[i+1].classList.add('highlight');
        }
        else if(i % 3 === 0){
            rows[i+1].classList.add('highlightRed');
        }
        else if(i % 5 === 0){
            rows[i+1].classList.add('highlightGrey');
        }
    }
}

