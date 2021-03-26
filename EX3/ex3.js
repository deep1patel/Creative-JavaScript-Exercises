function palinDetermine() { 

    var numberEntry = document.getElementById("userInput").value; 
   
    var tempNumber = numberEntry; 

    var variableNumber; 

    var reverseNumber = 0;
   
    var palindromeAnswer; 
   

    while(numberEntry > 0){
      variableNumber = numberEntry % 10;
      reverseNumber = (reverseNumber * 10) + variableNumber;
      numberEntry = parseInt(numberEntry / 10);}


    if(reverseNumber == tempNumber ){
      palindromeAnswer = "yes";}


    else if(reverseNumber != tempNumber){
      palindromeAnswer = "no";}


      document.getElementById("palin").innerHTML = palindromeAnswer;
     
}