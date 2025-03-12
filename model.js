let todo = ''
let todos = []

let idx = todos.indexOf([1])

idx

todos[idx] = undefined

function setTodo(currentTodo) {
  todo = currentTodo
}

function addTodo() {
  if (!todos.includes(todo)) {
    todos.push(todo)
    todo = ''
  }
}
function deleteTodo(valueTodo) {
  todos = todos.filter(str => str !== valueTodo)
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
