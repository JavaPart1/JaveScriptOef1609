// O'Reilly 1609

let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit+459.67)*5/9,
        celsius: (fahrenheit-32)*5/9
    }
}

let temp = convertFahrenheit(32);
console.log(temp);
temp = convertFahrenheit(68);
console.log(temp);
