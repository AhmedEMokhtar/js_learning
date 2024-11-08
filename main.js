let tasks = [
  {
    id: 1,
    title: "read a book",
    date: "20/10/2024",
    is_completed: false,
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
    is_completed: false,
  },
];

document.getElementById("add_btn").addEventListener("click", () => {
  let title = prompt("Enter your message");
  if (title) {
    tasks.push({
      id: tasks.length + 1,
      title: title,
      date: new Date().toLocaleDateString("en-GB"), // Formats date as dd/mm/yyyy
      is_completed: false,
    });
  }
  render_tasks();
});

function render_tasks() {
  const tasksContainer = document.getElementById("tasks");
  tasksContainer.innerHTML = ""; // Clear previous tasks

  tasks.forEach((task, index) => {
    let task_content = `
      <div id="task">
        <div class="content">
          <h2 id="title">${task.title}</h2>
          <div>
            <span class="material-symbols-outlined"> calendar_month </span>
            <span id="date">${task.date}</span>
          </div>
        </div>
        <div class="actions">
          <button class="add">
            <span class="material-symbols-outlined"> check </span>
          </button>
          <button class="edit">
            <span class="material-symbols-outlined"> edit </span>
          </button>
          <button onclick="delete_task(${index})" class="delete">
            <span class="material-symbols-outlined"> delete </span>
          </button>
        </div>
      </div>
    `;
    tasksContainer.innerHTML += task_content;
  });
}

function delete_task(index) {
  tasks.splice(index, 1); // Remove task at the specified index
  render_tasks(); // Re-render tasks list
}

// Initial render
render_tasks();
