document.getElementById("convertGrade").addEventListener("click", gradeMapper);

function gradeMapper(){

    var userInput = document.getElementById("num1").value
    var errorPrompt = "";

    if (isNaN(userInput) || userInput < 0 || userInput > 100) {
        errorPrompt += "INVALID ENTRY. Enteries must be between 1 to 100"}
    
    if (errorPrompt != "") {
        window.alert(errorPrompt);}

    else {
        var gradeLetter;
       
        if (userInput < 40 && userInput >= 0) {
        gradeLetter = "F";} 
        
        else if ( userInput >= 40 && userInput <= 49 ){
        gradeLetter = "E";}

        else if ( userInput >= 50 && userInput <= 54 ){
        gradeLetter = "D";}

        else if ( userInput >= 55 && userInput <= 59 ){
        gradeLetter = "D+";}

        else if ( userInput >= 60 && userInput <= 64 ){
        gradeLetter = "C";}

        else if ( userInput >= 65 && userInput <= 69 ){
        gradeLetter = "C+";}

        else if ( userInput >= 70 && userInput <= 74 ){
        gradeLetter = "B";}

        else if ( userInput >= 75 && userInput <= 79 ){
        gradeLetter = "B+";}

        else if ( userInput >= 80 && userInput <= 89 ){
        gradeLetter = "A";}

        else if ( userInput >= 90 && userInput <= 100 ){
        gradeLetter = "A+";}

        else {
        window.alert("INVALID ENTRY. Enteries must be between 0 to 100");
        gradeLetter = ""}

        document.getElementById("covertedGrade").innerText = gradeLetter;
        }
}