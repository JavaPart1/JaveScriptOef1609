// O'Reilly

/*
const oldTodos = [{
    text: "Follow training",
    completed: false
}, {
    text: "take a walk",
    completed: false
}, {
    text: "go to hairdresser",
    completed: true
}, {
    text: "buy gift",
    completed: false
}, {
    text: "watch tv",
    completed: true
}];
*/

let nwTodos = getStoredTodos();

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(nwTodos,filters);

document.querySelector("#todoForm").addEventListener("submit", function(e) {
    e.preventDefault();
    console.log(e.target.elements.todoText.value);
    addTodo(nwTodos,e.target.elements.todoText.value);
//    renderTodos(nwTodos,filters);
//    e.target.elements.todoText.value = '';
})

document.querySelector("#searchTodo").addEventListener("input", function(e) {
    filters.searchText = e.target.value;
    renderTodos(nwTodos,filters);
})

document.querySelector("#hidecompleted").addEventListener("change", function(e) {
    console.log(e.target.checked);
    filters.hideCompleted = e.target.checked;
    renderTodos(nwTodos,filters);
})

document.querySelector("#filterby").addEventListener("change", function(e) {
    console.log(e.target.value);
})


window.addEventListener("storage", function(e){
    console.log("something changed");
    if (e.key === "todos"){
        nwTodos = JSON.parse(e.nawValue)
        renderTodos(nwTodos, filters);
    }

});

/*
const now = new Date();
console.log(now.toString());
console.log(`Year: ${now.getFullYear()}.`);
console.log(now.getTime());
const timestamp = now.getTime();

const earlier = new Date("January 31 2001 6:25:05");
console.log(earlier.toString());

const dateinpast1 = new Date("January 4 2001 6:25:05");
const dateinpast2 = new Date("January 21 2011 6:25:05");
const timestamp1 = dateinpast1.getTime();
const timestamp2 = dateinpast2.getTime();

if (timestamp1 < timestamp2){
    console.log(dateinpast1.toString());
} else {
    console.log(dateinpast2.toString());
}
*/

const now = moment();
console.log(now.toString());

now.minute(1)
console.log(now.toString());

now.add(1,"year");
console.log(now.toString());



