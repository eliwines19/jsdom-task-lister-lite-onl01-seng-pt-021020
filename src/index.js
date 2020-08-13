document.addEventListener("DOMContentLoaded", function(event) => {

  // your code here
  let taskList = document.getElementById("tasks");
  let submit = document.querySelector('form#create-task-form').children[2];

  submit.addEventListener("click", function(e) {
    let newTask = document.getElementById("new-task-description");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(newTask.value));
    taskList.appendChild(li);
    e.preventDefault()
  });

});
