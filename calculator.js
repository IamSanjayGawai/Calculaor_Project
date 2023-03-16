var btn = document.getElementsByClassName('btn')
var display = document.getElementById('display')


var operand1 =0;
var operand2 =null;
var operator =null;

for(var i=0; i<btn.length; i++)
{
    btn[i].addEventListener('click', function(){
        var value = this.getAttribute('data-value');

        if(value == 'reset') {
            display.innerText = null;
        }

        
        else if(value == '+' || value == '-' || value == "*" || value == "/" || value == "%"){
        
            operator = value;
            operand1 = parseFloat(display.innerText);
            console.log("opera 1 = ",operand1);
            display.innerText = null;
    }

       else if(value == '='){            
        if(operator != null){
            operand2 = parseFloat(display.innerText);
            display.innerText = eval(operand1+" "+operator+" "+operand2);
        }
        else{
            display.innerText = "Error";
        }
    }

      else if(value == 'sign'){
        display.innerText = eval(parseFloat(display.innerText) * (-1) );
    }

      else if(value == '.') {
        if(display.innerText.length && !display.innerText.includes('.') ) {
            display.innerText += value;
        }
    }
      else{
        display.innerText += value;
    }

    
    });
}





// Input with Keys

document.addEventListener("keypress", function(event) {
    var key;
    key =  event.keyCode;
    value = String.fromCharCode(key);
    console.log(key+" "+value);
    var numArray = [1,2,3,4,5,6,7,8,9,0];


    if(value == '+' || value == '-' || value == "*" || value == "/" || value == "%"){
    
            operator = value;
            operand1 = parseFloat(display.innerText);
            display.innerText = null;
    }

    else if(key == '13'){
        if(operator != null){
            operand2 = parseFloat(display.innerText);
            display.innerText = eval(operand1+" "+operator+" "+operand2);
        }
        else{
            display.innerText = "Error";
        }
    }

    else if(value == '.') {
        if(display.innerText.length && !display.innerText.includes('.') ) {
            display.innerText += value;
        }
    }

    else if(value in numArray){
        display.innerText += value;
    }
})


// For Clearing display with delete Key 

document.addEventListener("keydown", function(event) {
    var key;
    key =  event.keyCode;

    if(key == '8') {
        display.innerText = null;
    }
});








////////////////////////////// toggle day Nigtht Mode ///////////////////////////



let toggle = document.querySelector(".toggle");
var body = document.querySelector('.calculator_border')
var camera = document.querySelector('.camera')
var display = document.querySelector('#display') 

var count =1;
  toggle.addEventListener ( 'click' , function Animatedtoggle(){

      count++;
      toggle.classList.toggle("active")

      if( count%2==0)
      {
        body.style.backgroundColor="black";
        camera.style.color="white";
        display.style.color="white";
      }
      else{
          body.style.backgroundColor="#F1F2F3"; 
          camera.style.color="black"; 
          display.style.color="black";
          
      }
})

