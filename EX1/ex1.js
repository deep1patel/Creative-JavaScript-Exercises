document.getElementById("calculate").addEventListener("click", convertor);

function convertor(){

    var a = document.getElementById("num1").value
    var message = "";

    //check if inputs are numbers that between 1 and 100 inclusive
    if (isNaN(a) || a < 1 || a > 100){
        message += "Invalid entry for grade. Please enter a number between 1 and 100\n"

    } if (message != ""){
        alert(message);
    }

    else{
        var letter;
        switch(Math.trunc((a*2)/10)){
            case 20:
            case 19:
            case 18:
                letter = "A+";
                break;
            case 17:
            case 16:
                letter = "A";
                break;
            case 15:
                letter = "B+";
                break;
            case 14:
                letter = "B";
                break;
            case 13:
                letter = "C+";
                break;
            case 12:
                letter = "C";
                break;
            case 11:
                letter = "D+";
                break;
            case 10:
                letter = "D";
                break;
            case 9:
            case 8:
                letter = "E";
            default:
                letter = "F";
                break;
        } 
        document.getElementById("result").innerText = letter;
    }
}