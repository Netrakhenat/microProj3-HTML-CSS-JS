let input = document.getElementById("valueEntry");

function display(element){
    if(input.value === "0"){
         document.getElementById("valueEntry").value = element;
     }
     else{
         document.getElementById("valueEntry").value += element;
     }
    return element;
}

function erase(){
    input.value = input.value.slice(0,-1);
}

function clear(){
    document.getElementById("valueEntry").value = "0" ;
    console.log("clear");
}

function calculate(){
    let result = eval(input.value);
    input.value=result;
}
