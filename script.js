document.querySelector("#addbutton").addEventListener('click', function () {
    let task = document.querySelector("#input-area").value
    if (task === "") {
        alert("Task is empty!!!")
        return
    }

    let new_line = document.createElement('li')
    let taskSpan = document.createElement("span");
    taskSpan.textContent = task;
    new_line.appendChild(taskSpan);
    document.querySelector("#task_list").appendChild(new_line)
    
    let new_button1 = document.createElement('button')
    new_button1.textContent = "Completed"
    new_line.appendChild(new_button1)
    let new_button2 = document.createElement('button')
    new_button2.textContent = "Delete"
    new_line.appendChild(new_button2)
    
    new_button1.classList.add("border", "m-2", "p-1", "rounded", "text-sm")
    new_button2.classList.add("border", "m-2", "p-1", "rounded", "text-sm");
    new_line.classList.add("text-xl", "m-2");
    
    new_button2.addEventListener('click', function () {
        new_line.remove()
    })
    new_button1.addEventListener('click', function () {
        taskSpan.classList.toggle("line-through")
        taskSpan.classList.toggle("text-gray-600")
    })
    
    document.querySelector("#input-area").value = ""
})