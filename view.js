const elButton = document.querySelector('#addTaskButton')
const elInput = document.querySelector('#taskInput')

elInput.oninput = onInputInputTodo
elButton.onclick = onClickButtonAddTask

function onInputInputTodo(e) {
  const todo = e.target.value
  handleSetTodo(todo)
}

function onClickButtonAddTask() {
  let elInputTodo = document.querySelector('#taskInput')
  let todo = elInputTodo.value
  // if (todo.length >= 3) {
  handleAddTodo(todo)
  elInputTodo.focus()
  // }
}

function onClickDeleteButton(e) {
  // e.target.closest('li').querySelector('span').textContent
  console.log(e.target.previousElementSibling.textContent)
  e.target.parentElement.remove()
  const valueTodo = e.target.previousElementSibling.textContent
  handleDeleteTodo(valueTodo)
}

function renderUlTodos(todos) {
  const elUl = document.querySelector('#taskList')
  elUl.innerHTML = ''
  for (const todo of todos) {
    const elLi = generateLiTodo(todo)
    elUl.appendChild(elLi)
  }
}

function renderInputTodo(todo) {
  const elTaskInput = document.querySelector('#taskInput')
  elTaskInput.value = todo
}

function generateLiTodo(todo) {
  const elLi = document.createElement('li')
  const elInputCheckbox = document.createElement('input')
  const elSpan = document.createElement('span')
  const elButtonDelete = document.createElement('button')
  // if (todo.isChecked) {
  //   elLi.setAttribute('class', 'completed')
  // }
  elInputCheckbox.setAttribute('type', 'checkbox')
  elInputCheckbox.setAttribute('class', 'checkbox')
  elSpan.setAttribute('class', 'task-text')
  // elInputCheckbox.chagnge =
  elButtonDelete.setAttribute('class', 'deleteButton')
  elSpan.textContent = todo
  elButtonDelete.textContent = 'Удалить'
  elButtonDelete.onclick = onClickDeleteButton
  elLi.appendChild(elInputCheckbox)
  elLi.appendChild(elSpan)
  elLi.appendChild(elButtonDelete)
  return elLi
}
