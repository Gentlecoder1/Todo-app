document.addEventListener("DOMContentLoaded", () => {
  // const clearCompleted = document.getElementById("clear-completed");
  // const todoList = document.getElementById("todo-list");
  // const filterAll = document.getElementById("filter-all");
  // const filterActive = document.getElementById("filter-active");
  // const filterCompleted = document.getElementById("filter-completed");

  const taskForm = document.getElementById("form");
  const field = document.getElementById("field");
  const active = document.getElementById("active");
  const list = document.querySelector(".list");
  const sunIcon = document.getElementById("sun-icon");
  const moonIcon = document.getElementById("moon-icon");
  const container = document.querySelector(".container");
  

  // for toggle between dark and light mode
  function toggleTheme(isDarkMode) {
    moonIcon.classList.toggle("hidden", isDarkMode);
    sunIcon.classList.toggle("hidden", !isDarkMode);

    container.classList.toggle("bg-[rgb(22,23,34)]", isDarkMode);
    container.classList.toggle("bg-white", !isDarkMode);

    field.classList.toggle("bg-white", !isDarkMode);
    field.classList.toggle("bg-gray-800", isDarkMode);
    field.classList.toggle("text-white", isDarkMode);

    list.classList.toggle("bg-white", !isDarkMode);
    list.classList.toggle("bg-gray-800", isDarkMode);

    const allTaskTexts = document.querySelectorAll("#task-text, .updated-task p");
    allTaskTexts.forEach(taskText => {
      taskText.classList.toggle("text-gray-800", !isDarkMode);
      taskText.classList.toggle("text-white", isDarkMode);
    });

    active.classList.toggle("bg-white", !isDarkMode);
    active.classList.toggle("bg-gray-800", isDarkMode);

    const mobile = document.querySelector(".background picture img");
    const desktop = document.querySelector(".background picture source");

    if (!isDarkMode) {
      mobile.src = "./images/bg-mobile-light.jpg";
      desktop.srcset = "./images/bg-desktop-light.jpg";
    } else {
      mobile.src = "./images/bg-mobile-dark.jpg";
      desktop.srcset = "images/bg-desktop-dark.jpg";
    }
  }

  moonIcon.addEventListener("click", () => toggleTheme(true));
  sunIcon.addEventListener("click", () => toggleTheme(false));


  const taskInput = document.getElementById("task-input");
  const todoTasks = document.getElementById("todo-tasks");
  const itemsLeft = document.getElementById("items-left");
  let todonum = 0;

  function updateItemsLeft() {
    itemsLeft.innerHTML = `${todonum} items left`
  }

  //function to addtask
  function addTask() {
    const itemValue = taskInput.value.trim();
    if (itemValue === "") return;


    const newTodo = document.createElement("li");
    newTodo.className = "tasks group cursor-pointer"

    newTodo.innerHTML = `
      <div class="flex justify-between items-center px-6 py-4">
        <span class="updated-task flex space-x-2">
          <button id="btn" class="checkTask items-center flex cursor-pointer border-2 border-gray-200 group-hover:border-gray-400 rounded-full w-6 h-6">
            <img
              src="./images/icon-check.svg"
              alt="check icon"
              id=""
              class="check-icon w-full h-full hidden rounded-full p-1 bg-gradient-to-br from-blue-400 to-purple-800"
            />
          </button>            
          <p class="text-left text-[13px]"  id="task-text">${itemValue}</p>
        </span>

        <span class="hidden group-hover:block"><img
          src="./images/icon-cross.svg"
          alt="cross icon"
          id="cross-icon"
          class="w-4 h-4 ml-4"
          />
        </span>
      </div>
      <hr class="border-t border-gray-500" />`
    // add newtask in the ul
    todoTasks.appendChild(newTodo);
    // reset taskform to empty
    taskInput.value = "";
      

    // toggle functionality for the newtodo
    const checkIcon = newTodo.querySelector(".check-icon");
    const checkTask = newTodo.querySelector(".checkTask"); 
    const todo = newTodo.querySelector("#task-text"); 

    checkTask.addEventListener("click", () => {
      checkIcon.classList.toggle("hidden");
      todo.classList.toggle("line-through");
    })

    // To remove a todo
    const cancel = newTodo.querySelector("#cross-icon"); 
    cancel.addEventListener("click", () => {
      console.log("task-deleted")
      newTodo.remove();

      // decrement items left
      todonum--;
      updateItemsLeft();
    })
    
    // increment items left
    todonum++;
    updateItemsLeft();

    toggleTheme(isDarkMode);
  }
    
  // addtask on enter
  taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      console.log("task-added")
      addTask();
    }
  })
});
