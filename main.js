let tasks = [
  {
    id: 1,
    title: "read a book",
    date: "20/10/2024",
    is_completed: true,
  },
  {
    id: 2,
    title: "read a story",
    date: "21/10/2024",
    is_completed: false,
  },
  {
    id: 3,
    title: "read a novel",
    date: "22/10/2024",
    is_completed: true,
  },
];

// Function to retrieve tasks from localStorage
function getTasks() {
  const savedTasks = localStorage.getItem("tasks");
  console.log(JSON.parse(savedTasks));
  
  return savedTasks ? JSON.parse(savedTasks) : [];
}

// Function to save tasks to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to render tasks
function render_tasks() {
  const tasksContainer = document.getElementById("tasks");
  tasksContainer.innerHTML = ""; // Clear previous tasks

  tasks.forEach((task, index) => {
    let task_content = `
      <div class="task ${task.is_completed ? "done" : ""}">
        <div class="content">
          <h2 id="title">${task.title}</h2>
          <div>
            <span class="material-symbols-outlined"> calendar_month </span>
            <span id="date">${task.date}</span>
          </div>
        </div>
        <div class="actions">
          <button onclick="update_task(${index})" class="edit">
            <span class="material-symbols-outlined"> edit </span>
          </button>
          ${
            task.is_completed
              ? `<button onclick="complete_task(${index})" class="cancel">
                  <span class="material-symbols-outlined"> cancel </span>
                 </button>`
              : `<button onclick="complete_task(${index})" class="complete">
                  <span class="material-symbols-outlined"> check </span>
                 </button>`
          }
          <button onclick="delete_task(${index})" class="delete">
            <span class="material-symbols-outlined"> delete </span>
          </button>
        </div>
      </div>
    `;
    tasksContainer.innerHTML += task_content;
  });
}

// Add button functionality
document.getElementById("add_btn").addEventListener("click", () => {
  let title = prompt("Enter your message");
  if (title) {
    tasks.push({
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      title: title,
      date: new Date().toLocaleDateString("en-GB"), // Formats date as dd/mm/yyyy
      is_completed: false,
    });
    saveTasks();
    render_tasks();
  }
});

// Delete button functionality
function delete_task(index) {
  tasks.splice(index, 1); // Remove task at the specified index
  saveTasks(); // Update localStorage
  render_tasks(); // Re-render tasks list
}

// Update button functionality
function update_task(index) {
  let title = prompt("Enter the updated content", tasks[index].title);
  if (title) {
    tasks[index].title = title;
    saveTasks(); // Update localStorage
    render_tasks(); // Re-render tasks list
  }
}

// Complete button functionality
function complete_task(index) {
  tasks[index].is_completed = !tasks[index].is_completed; // Toggle completion status
  saveTasks(); // Update localStorage
  render_tasks(); // Re-render tasks list
}

// Load initial tasks from localStorage
tasks = getTasks();
render_tasks(); // Initial render
