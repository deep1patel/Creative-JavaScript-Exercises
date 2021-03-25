
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
    }
    return true;
}