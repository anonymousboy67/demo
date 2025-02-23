
    document.addEventListener('DOMContentLoaded', () => {
      const todoInput = document.getElementById("todo-input");
      const addTaskButton = document.getElementById("add-btn");
      const todoList = document.getElementById("todo-list");

      let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

      todoList.innerHTML = "";
      tasks.forEach(task => renderTask(task));

      addTaskButton.addEventListener('click', () => {
          const taskText = todoInput.value.trim();
          if (taskText === "") return;

          const newTask = {
              id: Date.now(),
              text: taskText,
              completed: false
          };

          tasks.push(newTask);
          renderTask(newTask);
          saveTasks();
          todoInput.value = "";
      });

      function renderTask(task) {
          const li = document.createElement('li');
          li.setAttribute("data-id", task.id);
          li.classList.add("flex", "justify-between", "items-center", "bg-gray-700", "p-3", "rounded-md", "shadow", "transition", "opacity-0");

          if (task.completed) li.classList.add("line-through", "text-gray-400");

          li.innerHTML = `
              <span class="flex-1 text-white">${task.text}</span>
              <button class="delete-btn bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md">Delete</button>
          `;

          setTimeout(() => li.classList.remove("opacity-0"), 100);

          li.addEventListener('click', (e) => {
              if (e.target.tagName === 'BUTTON') return;
              task.completed = !task.completed;
              li.classList.toggle("line-through");
              li.classList.toggle("text-gray-400");
              saveTasks();
          });

          li.querySelector('.delete-btn').addEventListener('click', (e) => {
              e.stopPropagation();
              tasks = tasks.filter(t => t.id !== task.id);
              li.classList.add("opacity-0");
              setTimeout(() => {
                  li.remove();
                  saveTasks();
              }, 300);
          });

          todoList.appendChild(li);
      }

      function saveTasks() {
          localStorage.setItem("tasks", JSON.stringify(tasks));
      }
    });
  