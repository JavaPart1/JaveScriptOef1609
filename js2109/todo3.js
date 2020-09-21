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

const filters = {
    searchText: '',
    hideCompleted: false
}

const renderTodos = function (todos, filters){
    const filteredTodos = todos.filter(function(todo) {
        const textMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

        return textMatch && hideCompletedMatch;
    })

    document.querySelector("#todos").innerHTML = '';

    filteredTodos.forEach (function(item) {
        const newP = document.createElement("p");
        newP.textContent = item.text;
        document.querySelector("#todos").appendChild(newP);
    })

}

// Functions
const addTodo = function (todos, todoTxt){
    const nwTodo = {
        text: todoTxt,
        completed: false
    };
    todos.push(nwTodo);
}

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

const getDoneTodo = function (todos) {
    return todos.filter(function (todo, index) {
        return todo.completed;
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


renderTodos(nwTodos,filters);

document.querySelector("#todoForm").addEventListener("submit", function(e) {
    e.preventDefault();
    console.log(e.target.elements.todoText.value);
    addTodo(nwTodos,e.target.elements.todoText.value);
    renderTodos(nwTodos,filters);
    e.target.elements.todoText.value = '';
})

document.querySelector("#searchTodo").addEventListener("input", function(e) {
    filters.searchText = e.target.value;
    renderTodos(nwTodos,filters);
})

document.querySelector("#hidecompleted").addEventListener("change", function(e) {
    console.log(e.target.checked);
    filters.hideCompleted = e.target.checked;
    renderTodos(nwTodos,filters);
//    let checkTodo;
//    if (e.target.checked){
//        // hide completed true
//        renderTodos(getStillTodo(nwTodos),filters);
//    } else {
//        renderTodos(nwTodos,filters);
//    }
})

document.querySelector("#filterby").addEventListener("change", function(e) {
    console.log(e.target.value);
})






