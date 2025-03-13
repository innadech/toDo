let todo = ''
let todos = []

function setTodo(todoText) {
  todo = todoText
}

function setTodos(todosList) {
  todos = todosList
}

function addTodo() {
  if (!todos.includes(todo)) {
    todos.push(todo)
    todo = ''
  }
}

function deleteTodo(todoText) {
  todos = todos.filter(str => str !== todoText)
}

// todos
// setTodo('milk')
// setTodo('mil')
// todo
// addTodo()
// setTodo('see')
// todo
// addTodo()
// addTodo()
// todos
// let answer = deleteTodo('see')
// answer
// deleteTodo('mil')
// todos

// setTodo('Выпить кофе')
// addTodo()

// todos
