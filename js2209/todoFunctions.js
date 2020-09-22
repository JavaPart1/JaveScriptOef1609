// Get Existing todos from localStorage
const getStoredTodos = function(){
    const todosJSON = localStorage.getItem("todos");

    if (todosJSON !== null) {
        return JSON.parse(todosJSON);
    } else {
        return [];
    }

}

// Save todos to localStorage
const storeTodos = function(todos){
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Toggel the "completed" value for a todo
const toggleTodoById = function(todos, todoId){
    const todo = todos.find(function(todo){
        return todo.id === todoId;
    });
    if (todo !== undefined){
        todo.completed = !todo.completed;
    }
}

// Render todos based on filters
const renderTodos = function (todos, filters){
    const filteredTodos = todos.filter(function(todo) {
        const textMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

        return textMatch && hideCompletedMatch;
    })

    document.querySelector("#todos").innerHTML = '';

    //debugger

    filteredTodos.forEach (function(item) {
        generateDOMTodo(item);
    })

}

// Generate DOM element for a todo
const generateDOMTodo = function(todo){
    const nwTodoEntry = document.createElement("div");
    const nwTodoCheck = document.createElement("input");
    nwTodoCheck.setAttribute("type","checkbox");
    nwTodoCheck.checked = todo.completed;
//    if (todo.completed){
//        nwTodoCheck.setAttribute("checked","checked");
//    }
    nwTodoCheck.addEventListener("change", function(){
        toggleTodoById(nwTodos,todo.id);
        storeTodos(nwTodos);
        renderTodos(nwTodos,filters);
    })
    const nwTodoText = document.createElement("a");
    nwTodoText.setAttribute("href", `/edit.html#${todo.id}`);
    nwTodoText.textContent = todo.text;
    const nwTodoDelButton = document.createElement("button");
    nwTodoDelButton.textContent = "x";
    nwTodoDelButton.addEventListener("click", function(){
        deleteTodoById(nwTodos,todo.id);
        storeTodos(nwTodos);
        renderTodos(nwTodos,filters);
    });
    nwTodoEntry.appendChild(nwTodoCheck);
    nwTodoEntry.appendChild(nwTodoText);
    nwTodoEntry.appendChild(nwTodoDelButton);
    document.querySelector("#todos").appendChild(nwTodoEntry);
}

// Functions
const addTodo = function (todos, todoTxt){
    const now = new Date();
    const nwTodo = {
        id: uuidv4(),
        text: todoTxt,
        completed: false,
        createdAt: now.getTime(),
        updatedAt: now.getTime()
    };
    todos.push(nwTodo);
    storeTodos(todos);
    location.assign(`/edit.html#${nwTodo.id}`);
    //debugger;
}

const deleteTodo = function (todos, todoTxt) {
    const index = todos.findIndex(function (todo, index) {
        return todo.text.toLowerCase() === todoTxt.toLowerCase();
    })
    if (index > -1) {
        todos.splice(index,1);
    }
}

const deleteTodoById = function (todos, todoId) {
    const index = todos.findIndex(function (todo, index) {
        return todo.id === todoId;
    });
    if (index > -1) {
        todos.splice(index,1);
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

