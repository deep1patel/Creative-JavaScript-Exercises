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
    }
      document.getElementById("palin").innerHTML = response;
     }