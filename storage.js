function saveTodo(todo) {
  const stringifiedTodo = JSON.stringify(todo)
  localStorage.setItem('todo', stringifiedTodo)
}

function restoreTodo() {
  const todoJson = localStorage.getItem('todo')
  const todo = JSON.parse(todoJson)
  return todo
}

function saveTodos() {
  const stringifiedTodos = JSON.stringify(todos)
  localStorage.setItem('todos', stringifiedTodos)
}

function restoreTodos() {
  const todosJson = localStorage.getItem('todos')
  const todos = JSON.parse(todosJson)
  return todos
}
