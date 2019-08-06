//My first JS Project. Did copy most of it but learnt a lot!

var incompleteTaskHolder = document.getElementById("incomplete-tasks");
var completeTasksHolder = document.getElementById("completed-tasks");
var getInput = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0];

var createNewTaskElement = function(taskstring){

    var listItem = document.createElement("li");
    var label = document.createElement("label");
    var editButton = document.createElement("button");
    var deleteButton = document.createElement("button");
	var checkBox = document.createElement("input");//checkbx
    var editInput = document.createElement("input");

    label.innerText = taskstring;

    checkBox.type = "checkbox";
    editInput.type = "text";

    editButton.className = "edit";
    deleteButton.className = "delete";
    editButton.innerText = "Edit";
    deleteButton.innerText = "Delete";

    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    return listItem;
}

var addTask = function(){
	var listItem = createNewTaskElement(getInput.value);
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
    getInput.value = "";
}

var editTask = function(){
    var listItem = this.parentNode;

    var editInput = listItem.querySelector("input[type = text]");
    var label = listItem.querySelector("label");
    var containsClass = listItem.classList.contains("editMode");
    
    if(containsClass){
        label.innerText = editInput.value;
    }
    else{
        editInput.value = label.innerText;
    }
	listItem.classList.toggle("editMode");
}

var deleteTask = function(){
    var listItem = this.parentNode;
    var ul = listItem.parentNode;

    ul.removeChild(listItem);
}

var taskCompleted = function(){
    var listItem = this.parentNode;
    completeTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
}

var taskIncomplete = function(){
    var listItem = this.parentNode;
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem,taskCompleted);
}

var ajaxRequest = function()
{
	console.log("AJAX Request");
}

addButton.addEventListener("click",addTask);
addButton.addEventListener("click",ajaxRequest);

var bindTaskEvents = function(taskListItem,checkBoxEventHandler){
    
    var checkBox = taskListItem.querySelector("input[type = checkbox]");
    var editButton = taskListItem.querySelector("button.edit");
	var deleteButton = taskListItem.querySelector("button.delete");

	editButton.onclick = editTask;
	deleteButton.onclick = deleteTask;
    checkBox.onchange = checkBoxEventHandler;
}

for(let i = 0; i < completeTasksHolder.children.length; i++){
    bindTaskEvents(completeTasksHolder.children[i],taskIncomplete);
}

for(let i = 0; i < incompleteTaskHolder.children.length; i++){
    bindTaskEvents(incompleteTaskHolder.children[i],taskIncomplete);
}