const todoForm = document.getElementById("todoForm");
const todoList = document.getElementById("todoList");
const buttonDel = document.getElementById("buttonDel");

const works = [];

const clearInputs = function (event) {
  event.target.todo.value = "";
  event.target.time.value = "";
};

const delWork = function () {
  const todoItems = todoList.getElementsByTagName("p"); // Получаем все элементы списка
  
  for (let i = 0; i < todoItems.length; i++) {
    if (!todoItems[i].classList.contains("completed")) {
      // Проверяем, не содержит ли элемент класс "completed"
      todoItems[i].classList.add("completed"); // Добавляем класс "completed" к первому невыполненному элементу
      break; // Выходим из цикла после подчеркивания первого невыполненного элемента
    }
  }
};

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const todo = {
    todo: event.target.todo.value,
    time: event.target.time.value,
  };
  works.push(todo);

  const textItem = document.createElement("p");
  textItem.innerText = `Надо сделать: ${todo.todo} успеть до ${todo.time} часов`;
  todoList.append(textItem);
  todoList.classList.add("todo");
  clearInputs(event);
});

buttonDel.addEventListener("click", delWork);
