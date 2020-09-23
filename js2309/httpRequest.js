// Making an HTTP request
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', function (e) {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        console.log(data) // Will print a new random puzzle
        const country = data.find((country) => country.alpha2Code === countryCode)
        console.log(country.name)
    }
});
//request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3');
request.open('GET', 'http://restcountries.eu/rest/v2/all');


request.send();

const countryCode = "BE";