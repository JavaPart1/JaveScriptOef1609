const todoId = location.hash.substring(1);

let todos = getStoredTodos();
const todo = todos.find(function(todo){
    return todo.id === todoId;
});
if (todo === undefined){
    location.assign('/index.html')
}
//debugger;
const todoTitle = document.querySelector("#todotitle");
todoTitle.value = todo.text;
todoTitle.addEventListener("input", function(e){
    todo.text = e.target.value;
    const now = new Date();
    todo.updatedAt = now.getTime();
    storeTodos(todos);
});

const todoBody = document.querySelector("#todobody");
todoBody.value = todo.completed;

window.addEventListener("storage", function(e){
    console.log("something changed");
    if (e.key === "todos"){
        todos = JSON.parse(e.nawValue)
        renderTodos(todos, filters);
    }

})
