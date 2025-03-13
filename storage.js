function saveTodo(todo) {
  const stringifiedTodo = JSON.stringify(todo)
  localStorage.setItem('todo', stringifiedTodo)
}

function restoreTodo() {
  const todoJson = localStorage.getItem('todo')
  const todo = JSON.parse(todoJson)
  if (todo) return todo
  return ''
}

function saveTodos(todos) {
  const stringifiedTodos = JSON.stringify(todos)
  localStorage.setItem('todos', stringifiedTodos)
}

function restoreTodos() {
  const todosJson = localStorage.getItem('todos')
  const todos = JSON.parse(todosJson)
  if (todos) return todos
  return []
}
