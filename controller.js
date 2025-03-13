function handleSetTodo(todo) {
  setTodo(todo)
  saveTodo(todo)
}

function handleAddTodo() {
  addTodo()
  saveTodo(todo)
  saveTodos(todos)
  renderInputTodo(todo)
  renderUlTodos(todos)
}

function handeLoadPage() {
  const restoredTodo = restoreTodo()
  const restoredTodos = restoreTodos()
  setTodo(restoredTodo)
  setTodos(restoredTodos)
  renderInputTodo(todo)
  renderUlTodos(todos)
}

function handleDeleteTodo(valueTodo) {
  deleteTodo(valueTodo)
  saveTodos(todos)
}

handeLoadPage()
