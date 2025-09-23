document.addEventListener("DOMContentLoaded", () => {
  const itemsLeft = document.getElementById("items-left");
  const clearCompleted = document.getElementById("clear-completed");
  const todoList = document.getElementById("todo-list");
  const filterAll = document.getElementById("filter-all");
  const filterActive = document.getElementById("filter-active");
  const filterCompleted = document.getElementById("filter-completed");
  const crossIcon = document.getElementById("cross-icon");
  const checkIcon = document.getElementById("check-icon");
  const updatedTask = document.getElementById("updated-task");
  const task = document.getElementById("task");
  const taskForm = document.getElementById("form");
  const updateTask = document.getElementById("update-task");
  const field = document.getElementById("field");
  const active = document.getElementById("active");
  const list = document.querySelector(".list");
  const sunIcon = document.getElementById("sun-icon");
  const moonIcon = document.getElementById("moon-icon");
  const time = document.getElementById("time");
  const container = document.querySelector(".container");

  const taskData = [];
  let currentTask = {};
  // let isDarkMode = false;
  // const filter = "all";

  // Function to create a new task element
  // updateTask.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   const taskText = updatedTask.value.trim();
  //   if (taskText) {
  //     currentTask.text = taskText;
  //     renderTasks();
  //     updatedTask.value = ""; // Clear the input field after updating
  //   }
  // });
  //   moonIcon.addEventListener("click", () => {
  //     moonIcon.classList.toggle("hidden");
  //     sunIcon.classList.toggle("hidden");
  //     container.classList.add("bg-black");
  //     container.classList.remove("bg-white");
  //     field.classList.remove("bg-gray-800");
  //     field.classList.add("bg-white");
  //     list.classList.remove("bg-gray-800");
  //     list.classList.add("bg-white");
  //     active.classList.remove("bg-gray-800");
  //     active.classList.add("bg-white");
  //   });
  //   sunIcon.addEventListener("click", () => {
  //     sunIcon.classList.toggle("hidden");
  //     moonIcon.classList.toggle("hidden");
  //     container.classList.remove("bg-black");
  //     container.classList.add("bg-white");
  //     field.classList.add("bg-gray-800");
  //     field.classList.remove("bg-white");
  //     list.classList.add("bg-gray-800");
  //     list.classList.remove("bg-white");
  //     active.classList.add("bg-gray-800");
  //     active.classList.remove("bg-white");
  //   });

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

    updatedTask.classList.toggle("text-gray-800", !isDarkMode);
    updatedTask.classList.toggle("text-white", isDarkMode);

    active.classList.toggle("bg-white", !isDarkMode);
    active.classList.toggle("bg-gray-800", isDarkMode);

    const backgroundImage = document.querySelector(".background picture img");
    // const desktopBgDark = document.querySelector(
    //   ".background picture source[data-media='dark']"
    // );
    // const desktopBgLight = document.querySelector(
    //   ".background picture source[data-media='light']"
    // );
    if (!isDarkMode) {
      backgroundImage.src = "./images/bg-mobile-light.jpg";
      backgroundImage.srcset = "./images/bg-desktop-light.jpg";
    } else {
      backgroundImage.src = "./images/bg-mobile-dark.jpg";
      backgroundImage.srcset = "./images/bg-desktop-dark.jpg";
    }
  }

  moonIcon.addEventListener("click", () => toggleTheme(true));
  sunIcon.addEventListener("click", () => toggleTheme(false));
});
