// O'Reilly 1609
// functions
// Convert Fahrenheit to Celsius

let fahrenheitToCelsius = function (num) {
    return (num-32)*5/9;
}

let temp = fahrenheitToCelsius(32);
console.log(temp);
temp = fahrenheitToCelsius(68);
console.log(temp);
