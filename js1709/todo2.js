// O'Reilly

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
        return !todo.completed;
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

const stillTodo = getStillTodo(nwTodos).length;
console.log(`You have still ${stillTodo} todos left.`)

    const newP = document.createElement("p");
    newP.textContent = `You have still ${stillTodo} todos left.`;
    document.querySelector("body").appendChild(newP);


nwTodos.forEach (function(item) {
    const newP = document.createElement("p");
    newP.textContent = item.text;
    document.querySelector("body").appendChild(newP);
})

document.querySelector("button").addEventListener("click", function(e) {
    console.log('Add e new todo..')
})




