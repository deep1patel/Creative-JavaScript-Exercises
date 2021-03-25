<<<<<<< HEAD
function func() { 
    var x = document.getElementById("mytxt").value; 
  
    var reverse = 0;
    var temp = x; //temporary place holder to be used in if statement
    var response; //variable to capture response from if statements
    var indnum; //place holder to hold digits.

    while(x >0){
      indnum= x%10;
      reverse = (reverse*10)+indnum;
      x = parseInt(x/10);
    }
    if(reverse == temp ){
      response = "Yes";
    }
    else if(reverse != temp){

      response = "No";
=======

document.getElementById("determine").addEventListener("click", yesOrNo);

function yesOrNo(){

    var entry = document.getElementById("userInput").value;
    if(entryIsAPalindrome(entry)){
        document.getElementById("answer").innerHTML = "yes";}
    else{
        document.getElementById("answer").innerHTML="no";}
}

function entryIsAPalindrome(entry){
    if (entry == "" || isNaN(entry)){
        window.alert("INVALID ENTRY. Only integers are accepted in this field")
        return}

    var middle = Math.trunc(entry.length/2);
    for (let i = 0; i <= middle; i++){
        if (entry[i] != entry[entry.length - 1 - i]){
            return false;
        }
>>>>>>> 93d7693a6bb4e3570acf3406143a1c18e80e0398
    }
      document.getElementById("palin").innerHTML = response;
     }