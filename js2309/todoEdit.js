// Edit todos

// Get todo id sent with location assign
const todoId = location.hash.substring(1);

// Get todos in localStorage
let todos = getStoredTodos();

// Find todo in todos array
const todo = todos.find((todo) => todo.id === todoId);
if (todo === undefined){
    // if todo not found
    location.assign('/index.html')
}
//debugger;

// Edit todo title
const todoTitle = document.querySelector("#todotitle");
todoTitle.value = todo.text;
todoTitle.addEventListener("input", function(e){
    todo.text = e.target.value;
    const now = new Date();
    todo.updatedAt = now.getTime();
    storeTodos(todos);
    dateElement.textContent = `Last edited ${displayDate(todo.updatedAt)}`;

});

// Focus todo completed
const todoBody = document.querySelector("#todobody");
todoBody.value = todo.completed;

// display lastupdated
const dateElement = document.querySelector("#lastupdate");
dateElement.textContent = `Last edited ${displayDate(todo.updatedAt)}`;

// Evenhandler to synchronize storage changes on all open windows
window.addEventListener("storage", function(e){
    console.log("something changed");
    if (e.key === "todos"){
        todos = JSON.parse(e.nawValue)
        renderTodos(todos, filters);
    }

})


