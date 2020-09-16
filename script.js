// O'Reilly 1509
let myObj = {
a: 1,
b: 2,
c: 3,
};

let values = Object.values(myObj);// geeft een array vn de values
for (let key of values){
console.log(key);
}

let person = {
name: "Betty",
age: 48,
};
let careerData = {
jobTitle: "developer",
yearsAtCompany: 5,
level: "senior",
};

logKeysOfObject(Object.assign(person,careerData));

let numbers = [1,2,3,4,5,6];
console.log(numbers.find(function(x){return x>4; }));
console.log(numbers.filter(function(x){return x % 2 == 0; }));
console.log(numbers.map(function(x){return x * 2; }));


function logKeysOfObject(object){
let keys = Object.keys(object);
for (let key of keys){
console.log(key + " : " + object[key]);
}
}
