let input = document.getElementById("valueEntry");

// let inputString;  //global variable

function display(element){
    if(input.value === "0"){
         document.getElementById("valueEntry").value = element;
     }
     else{
         document.getElementById("valueEntry").value += element;
     }
    // inputString += element;
    return element;
}

function erase(){
    input.value = input.value.slice(0,-1);
    // inputString = inputString.slice(0,-1); //as what user enters is also stored inputString ,so upadting it ia also important
    // slice(0, -1) starts at index 0 and ends at the last character (index -1, which is the character "!" at the end of the string), but excludes the last character.
}

function clear(){
    document.getElementById("valueEntry").value = "0" ;
    console.log("clear");
}

function calculate(){
    let result = eval(input.value);
    input.value=result;
}