document.getElementById("calculate").addEventListener("click", counter);
document.getElementById("reset").addEventListener("click", reset);

var positives = 0;
negatives = 0
updateNumbers("reset");

function reset(){
    document.getElementById("calculate").style.visibility= "visible";
    positives = 0;
    negatives = 0;
    updateNumbers("reset")
}

function counter(){

    var a = document.getElementById("num1").value
    var message = "";

    //check if input is number
    if (a == "" || isNaN(a)){
        message += "Invalid entry. Please enter a number \n"

    } if (message != ""){
        alert(message);
    }

    else{
         
        if(a == "0"){
            document.getElementById("calculate").style.visibility= "hidden";
        }
        else if(a < 0){
            negatives += 1;
            updateNumbers("negative");
        }
        else if(a>0){
            positives += 1;
            updateNumbers("positive");
        }
    }
}

function updateNumbers(a){
    if(a =="positive"){
        document.getElementById("positives").innerText = positives;
    } else if(a == "negative"){
        document.getElementById("negatives").innerText = negatives;
    } else if(a == "reset"){
        document.getElementById("positives").innerText = positives;
        document.getElementById("negatives").innerText = negatives;
    }
    document.getElementById("total").innerText = positives + negatives;
}