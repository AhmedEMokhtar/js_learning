// // ---style body-----
// document.body.style.cssText = `background-color:indigo`;

// // ----- create container of tasks--------
// const container = document.createElement("div");
// const header = document.createElement("h3");
// const header_text = document.createTextNode("To-do List");
// header.appendChild(header_text);
// container.appendChild(header);
// document.body.appendChild(container);
// // ---style container of tasks--------
// container.style.cssText = `background-color:lightblue;text-align:center;margin:10%; padding: 20px; border:1px solid whtie`;
// const todo_list = ["h1", "h2", "h3"];
// // ---create list of tasks--------
// const list = document.createElement("ul");
// list.style.listStyle = 'none';
// const task_container = document.createElement('div');
// task_container.style.cssText = `display:flex;flex-direction:column;align-items:start;`;
// container.appendChild(task_container);
// task_container.appendChild(list);
// // ---create task elements--------
// for (let i = 0; i < todo_list.length; i++) {
//   const task = document.createElement("li");
//   task.style.cssText=`background-color:white;width:350px;margin:4px`;
//   const task_text = document.createTextNode(todo_list[i]);
//   task.appendChild(task_text);
//   list.appendChild(task);
//   }

// // for (const el of todo_list) {
// //   const item = document.createElement("li");
// //   item.style.cssText = `background-color:lightgreen; padding:10px; border:1px solid white`;
// //   const text = document.createTextNode(el);
// //   list.appendChild(text);
// // }

// // container.appendChild(list);
