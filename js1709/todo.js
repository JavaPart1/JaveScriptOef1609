// O'Reilly
//const myTodos = ["Follow training","take a walk","go to hairdresser","buy gift","watch tv"];
//console.log(myTodos.length);
//console.log(myTodos[0]);
//
//console.log(myTodos[myTodos.length-2]);
//
//myTodos.forEach(function (item, index) {
//    console.log(`${index+1}. ${item}`);
//})

const nwTodos = [{
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

const deleteTodo = function (todos, todoTxt) {
    const index = todos.findIndex(function (todo, index) {
        return todo.text.toLowerCase() === todoTxt.toLowerCase();
    })
    if (index > -1) {
        nwTodos.splice(index,1);
    }
}

const getStillTodo = function (todos) {
    return todos.filter(function (todo, index) {
        return todo.completed == false;
    });
}

const sortTodos = function (todos) {
    todos.sort(function(a, b) {
        if (!a.completed && b.completed) {
            return -1;
        } else if (!b.completed && a.completed) {
            return 1;
        } else {
            return 0;
        }
    });
}

sortTodos(nwTodos);
console.log(nwTodos);


//console.log(getStillTodo(nwTodos));

//deleteTodo(nwTodos, "go to hairdresser");
//console.log(nwTodos);
