let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach(function (task) {
  create_task(task);
});

function save_tasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function create_task(task) {
  let new_line = document.createElement("li");
  let taskSpan = document.createElement("span");
  taskSpan.textContent = task.text;
  new_line.appendChild(taskSpan);
  document.querySelector("#task_list").appendChild(new_line);
  
  let new_button1 = document.createElement("button");
  new_button1.textContent = "Completed";
  new_line.appendChild(new_button1);
  if (task.completed) {
    taskSpan.classList.add("line-through", "text-gray-600");
    new_button1.textContent = "Undo";
  }
  let new_button2 = document.createElement("button");
  new_button2.textContent = "Delete";
  new_line.appendChild(new_button2);
  
  new_button1.classList.add(
      "border-black",
      "m-2",
      "p-1",
      "rounded",
      "text-sm",
      "bg-green-600",
      "w-[80px]",
      "m-4",
    );
  new_button2.classList.add(
    "border-black",
    "m-2",
    "p-1",
    "rounded",
    "text-sm",
    "bg-red-600",
    "m-0",
  );
  new_line.classList.add("text-xl", "m-2");

  new_button2.addEventListener("click", function () {
    new_line.remove();
    tasks = tasks.filter((t) => t !== task); 
    save_tasks();
  });
  new_button1.addEventListener("click", function () {
    task.completed = !task.completed;
    save_tasks();
    taskSpan.classList.toggle("line-through");
    taskSpan.classList.toggle("text-gray-600");
    if (new_button1.textContent === "Completed") {
      new_button1.textContent = "Undo";
    } else {
      new_button1.textContent = "Completed";
    }
  });
}

document.querySelector("#addbutton").addEventListener("click", function () {
  add_task()
});
document
  .querySelector("#input-area")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      add_task()
    }
  });



function add_task() {
      let taskText = document.querySelector("#input-area").value;
      if (taskText === "") {
        alert("Task is empty!!!");
        return;
      }
      let task = { text: taskText, completed: false };
      tasks.push(task);
save_tasks();
      create_task(task);

      document.querySelector("#input-area").value = "";
  }
