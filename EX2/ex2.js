
document.getElementById("compute").addEventListener("click", numberCount);
document.getElementById("resetToZero").addEventListener("click", resetToZero);

var numberOfNegatives = 0

var numberOfPositives = 0;

currentCount("resetToZero");


function resetToZero(){

    document.getElementById("compute").style.visibility= "visible";
    numberOfPositives = 0;
    numberOfNegatives = 0;
    currentCount("resetToZero")

}


function numberCount(){

    var userInput = document.getElementById("numberEntry").value
    var errorPrompt = "";

    if (userInput == "" || isNaN(userInput)){
        errorPrompt += "INVALID ENTRY. Only integers are accepted in this field"}
    if (errorPrompt != ""){
        window.alert(errorPrompt);}

  
    else{
        if(userInput == "0"){
            document.getElementById("compute").style.visibility= "hidden";}
        else if(userInput < 0){
            numberOfNegatives += 1;
            currentCount("negative");}
        else if(userInput > 0){
            numberOfPositives += 1;
            currentCount("positive");}

    }
}


function currentCount(userInput){

    if(userInput =="positive"){
        document.getElementById("numberOfPositives").innerText = numberOfPositives;}
   
    else if(userInput == "negative"){
        document.getElementById("numberOfNegatives").innerText = numberOfNegatives;}
    
    else if(userInput == "resetToZero"){
        document.getElementById("numberOfPositives").innerText = numberOfPositives;
        document.getElementById("numberOfNegatives").innerText = numberOfNegatives;}
   
    document.getElementById("numbersTotal").innerText = numberOfPositives + numberOfNegatives;

}