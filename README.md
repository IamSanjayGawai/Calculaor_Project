# Calculaor_Project
calculator Using HTML CSS JAVASCRIPT

https://iamsanjaygawai.github.io/Calculaor_Project/


Explain:

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
*************************************************************************************************************************************




The given code is implementing a basic calculator functionality using JavaScript.

The first part of the code uses an event listener to detect key presses. When a key is pressed, the event listener captures the key code and converts it
to its corresponding character using the String.fromCharCode() method. It then logs the key code and character to the console.

The code also initializes an array of numbers and checks if the pressed key is an operator (+, -, *, /, %). If it is, the operator is stored in a variable,
and the current value on the display is stored as the first operand. The display is then cleared to accept the second operand.

If the pressed key is the Enter key (key code 13), the code checks if an operator has been selected. If it has, it stores the current value on the display
as the second operand, evaluates the expression using the eval() function, and displays the result on the calculator display. If an operator has not been selected,
an error message is displayed.

If the pressed key is a period (.), the code checks if the display already contains a period and appends the period to the display if it does not.

If the pressed key is a number, the code appends the number to the display.

The second part of the code listens for the keydown event and checks if the pressed key is the Backspace key (key code 8). If it is, the display is cleared.
