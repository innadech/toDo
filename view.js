const elAddTaskButton = document.querySelector('#addTaskButton')
const elTaskInput = document.querySelector('#taskInput')

function renderTaskListAll(arr) {
  const elUl = document.querySelector('#taskList')
  elUl.innerHTML = ''
  for (const item of arr) {
    renderTaskList(item)
  }
}
function renderTaskList(text) {
  const elUl = document.querySelector('#taskList')
  const elLi = generateLi(text)
  elUl.appendChild(elLi)
}
function renderTodoInput(todo) {
  const elTaskInput = document.querySelector('#taskInput')
  elTaskInput.value = todo
}

function onClickAddTaskButton() {
  let elTaskInput = document.querySelector('#taskInput')
  let todo = elTaskInput.value
  if (todo.length >= 3) {
    handleTodo(todo)
  }
  todo = ''
}
function onClickDeleteButton(e) {
  console.log(e.target.previousElementSibling.textContent)
  e.target.parentElement.remove()
  const valueTodo = e.target.previousElementSibling.textContent
  handleDeleteTodo(valueTodo)
}

function generateLi(text) {
  const elLi = document.createElement('li')
  const elInput = document.createElement('input')
  const elSpan = document.createElement('span')
  const elButtonDelete = document.createElement('button')
  elInput.setAttribute('type', 'checkbox')
  elInput.setAttribute('class', 'checkbox')
  elSpan.setAttribute('class', 'task-text')
  elInput.onclick = checkboxColor
  elButtonDelete.setAttribute('class', 'deleteButton')
  elSpan.innerHTML = text
  elButtonDelete.innerHTML = 'Удалить'
  elButtonDelete.onclick = onClickDeleteButton
  elLi.appendChild(elInput)
  elLi.appendChild(elSpan)
  elLi.appendChild(elButtonDelete)
  return elLi
}

elAddTaskButton.onclick = onClickAddTaskButton

function checkboxColor() {
  // const elLi = document.createElement('li')
  const elTaskInput = document.querySelector('#taskInput')
  if (document.createElement('input').checked == true) {
    elLi.setAttribute('class', 'completed')
    // elTaskInput.setAttribute('background-color', 'red')
  }
}
