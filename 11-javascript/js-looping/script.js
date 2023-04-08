var todos = [
    "do homework",
    "brush teeth",
    "learn js"
];

// for (var i = 0; i < todos.length; ++i) {
//     todos[i] = todos[i] + "!";
// }

/**
 * todo - argument.
 * i - index.
 */
todos.forEach(function (todo, i) {
    todos[i] = todo.concat("!");
});

var logTodos = function (todo, i) {
    console.log(todo, i);
}

todos.forEach(logTodos);

var todosLength = todos.length;
for (var i = 0; i < todosLength; ++i) {
    todos.pop();
}