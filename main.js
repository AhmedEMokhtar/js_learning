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
// document.body.onload = rednder_tasks(tasks);


document.getElementById("add_btn").addEventListener("click", () => {
  let title = prompt("enter your messaeg");
  console.log(title);
  if (title) {
    tasks.push({
      id: tasks.length + 1,
      title: title,
      date: Date.now(),
      is_completed: false,
    });
  }
  rednder_tasks(tasks);
});
function rednder_tasks(tasks) {
  for (const task of tasks) {
    let task_content = `
      <div id="task">
            <!-- task div -->
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
              <button class="delete">
                <span class="material-symbols-outlined"> delete </span>
              </button>
            </div>
          </div>

    `;
    document.getElementById("tasks").innerHTML += task_content;
  }
}

console.log(tasks);
