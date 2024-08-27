// #####################################################
// JavaScript Program to Check Prime Number
// #########################################################

const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;


if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}


else if (number > 1) {

   
    for (let i = 2; i <= number/2; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}


else {
    console.log("The number is not a prime number.");
}

// ########################################################
// JavaScript Program to Find the Largest Among Three 
// #########################################################


// let num1=parseInt(prompt("Enter the first number"));
// let num2=parseInt(prompt("Enter the Secound number"));
// let num3=parseInt(prompt("Enter the third number"));

// if(num1>num2 && num1>num3){
//     document.write(`${num1} is grater number`);
// }
// else if (num2>num3){
//     document.write(`${num2} is grater number`);

// }else{
//     document.write(`${num3} is grater number`)
// }






// #################################################
// Javascript Program to Check if a Number is Odd or Even
// ##################################################

// let number=parseInt(prompt("enter thr number"))

// if(number%2==0){
//     document.write('Number is even')
// }
// else{
//     document.write("Number is odd")
// }








// #################################################
// Javascript Program to Check if a number is Positive, Negative, or Zero
// ##############################################


// let number=parseInt(prompt("Enter the  number"));

// if(number==0){
//     document.write(`${number} is zero`)
// }
// else if(number>0){
//     document.write(`${number} is positve`)

// }else{
//     document.write(`${number} is negitive`);
// }




// ##############################################
// Javascript Program to Generate a Random Number
// ###############################################

// let Random =Math.floor(Math.random()*100)+1;
// document.write(Random);



// #######################################################
// Javascript Program to Convert Celsius to Fahrenheit
// ###############################################

// let calcious = parseInt(prompt('Enter The calcious '));

// const Fahrenheit =calcious*1.8+32;
// document.write(Fahrenheit);




// ################################################
// JavaScript Program to Convert Kilometers to Miles
// ###############################################

// let kilometer =parseInt(prompt('Enter the kilometer'))

// const miles = kilometer*0.621371;

// document.write(miles);





// ###################################
// JavaScript Program to Calculate the Area of a Triangle
// ###########################################


// let height= parseInt(prompt("Enter The base"));
// let base=parseInt(prompt("Enter The base"));

// const Area = (height*base)/2
// document.write(Area);



// ##############################
// JavaScript Program to Find the Square Root
// ###############################

// let number=parseInt(prompt("enter the number"));

// let result=Math.sqrt(number);

// document.write(result);

