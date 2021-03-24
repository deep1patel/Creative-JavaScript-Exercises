document.getElementById("calculate").addEventListener("click", connector);


function connector(){

    var a = document.getElementById("num1").value;
    
    if(isPalindrome(a)){
        document.getElementById("result").innerHTML = "yes";
        
    }
    else{
        document.getElementById("result").innerHTML="no";
    }

}

function isPalindrome(a){
    //solved by taking advantage of js dynamic typing
    //check a is a positive number
    if (a == "" || isNaN(a)){
        alert("Invalid input. Please enter a number")
        return
    }

    //treat number as string and see if its a palindrome
    var stop = Math.trunc(a.length/2);
    for (let i = 0; i <= stop; i++){
        if (a[i] != a[a.length - 1 - i]){
            return false;
        }
    }
    return true;
}