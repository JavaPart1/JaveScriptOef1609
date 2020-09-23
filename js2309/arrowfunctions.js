const square = (num) => {
    return num*num;
}

console.log(square(4));

const people = [{
    name: 'Andrew',
    age: 27
}, {
    name: 'Vikram',
    age: 31
}, {
    name: 'Jess',
    age: 22
}];

// const under30 = people.filter(function (person) {
//     return person.age < 30
// })

const under30 = people.filter((person) => person.age < 30);
console.log(under30);

const person = people.find((person) => person.age === 22);
console.log(person.name);

const add = function(a, b) {
    console.log(arguments);
    console.log(arguments[0]+arguments[1])
};

add(11,22,33,44);
