function addTask() {

    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    let task = document.createElement("span");
    task.innerText = taskText;

    task.onclick = function() {
        task.classList.toggle("completed");
    };

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("delete-btn");

    deleteButton.onclick = function() {
        li.remove();
    };

    li.appendChild(task);
    li.appendChild(deleteButton);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
