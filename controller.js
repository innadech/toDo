function handleTodo(currentTodo) {
  setTodo(currentTodo)
  addTodo()
  todos
  renderTaskListAll(todos)
  saveTodo(currentTodo)
  saveTodos(todos)
}
function handeLoadPage() {
  const todo = restoreTodo()
  console.log(todo)
  renderTodoInput(todo)
  const todos = restoreTodos()
  renderTaskListAll(todos)
}
function handleDeleteTodo(valueTodo) {
  deleteTodo(valueTodo)
  todos
  saveTodos(todos)
}

handeLoadPage()
