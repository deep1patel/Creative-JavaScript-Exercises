document.getElementById("convertGrade").addEventListener("click", gradeMapper);

function gradeMapper(){

    var userInput = document.getElementById("num1").value
    var errorPrompt = "";

    if (isNaN(userInput) || userInput < 1 || userInput > 100) {
        errorPrompt += "INVALID ENTRY. Enteries must be between 1 to 100"
    }
    
    if (errorPrompt != "") {
        window.alert(errorPrompt);
    }

    else {
        var gradeLetter;
        switch(Math.trunc((userInput*2)/10)){
            case 20:
            case 19:
            case 18:
                gradeLetter = " A+ ";
                break;
            case 17:
            case 16:
                gradeLetter = " A ";
                break;
            case 15:
                gradeLetter = " B+ ";
                break;
            case 14:
                gradeLetter = " B ";
                break;
            case 13:
                gradeLetter = " C+ ";
                break;
            case 12:
                gradeLetter = " C ";
                break;
            case 11:
                gradeLetter = " D+ ";
                break;
            case 10:
                gradeLetter = " D ";
                break;
            case 9:
            case 8:
            
            default:
                gradeLetter = " F ";
                break;
        } 

        document.getElementById("covertedGrade").innerText = gradeLetter;
    }
}