function printNumbers() { //1
    for (let i = 3; i <= 13; i++) {
        console.log(i);
    }
}

printNumbers();



function printNumber() {   //2
    for (let i = 1; i <= 10; i++) {
        console.log(10);
    }
}

printNumber();




function printLargerNumber() {   //3
    let num1 = parseInt(prompt("Enter num:"));
    let num2 = parseInt(prompt("Enter num"));
    if (num1 > num2) {
        console.log(num1 + " is larger than " + num2);
    } else if (num2 > num1) {
        console.log(num2 + " is larger than " + num1);
    } else {
        console.log("The two numbers are equal");
    }
}

printLargerNumber(); 
