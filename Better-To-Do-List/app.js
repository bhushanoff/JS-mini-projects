






var parent = document.getElementsByClassName("parent");

// var editMe = function(taskstring){
//   taskstring.innerHTML = prompt("Enter the name of the task");
// }

// var delMe = function(parent,child){
//   parent.removeChild(child);
// }

function newfolder() {
  var card = document.createElement("div");
  var cardName = document.createElement("h1");
  var newCard = document.createElement("button");
  var editCard = document.createElement("button");
  var delCard = document.createElement("button");
  var taskList = document.createElement("ul");

  card.className = "card col-xs-4 col-md-4 col-sm-4 col-ld-4";
  cardName.innerHTML = prompt("Enter Folder Name");     cardName.className = "card-name";
  newCard.className = "fas fa-plus-circle fa-3x small-plus";
  taskList.className = "task-list";
  delCard.className = "fa fa-trash fa-3x big-trash";
  editCard.className = "fas fa-edit fa-3x big-edit";

  $(card).append(cardName);
  $(card).append(newCard);
  $(card).append(editCard);
  $(card).append(delCard);
  $(card).append(taskList);
  $(parent).append(card);

  newCard.addEventListener("click", function() {
    var taskName = document.createElement("h1");
    var task = document.createElement("li");
    var editTask = document.createElement("button");
    var delTask = document.createElement("button");
    var cbox = document.createElement("input");
    
    cbox.type = "checkbox"; cbox.value = 1;
    taskName.innerHTML = prompt("Enter the name of the task");    taskName.className = "task-name";
    delTask.className = "fa fa-trash fa-2x big-trash";
    editTask.className = "fas fa-edit fa-2x big-edit";
    task.className = "task"; 

    delTask.addEventListener("click",function(){
      taskList.removeChild(task);
    });

    // delTask.addEventListener("click",delMe(taskList,task))

    editTask.addEventListener("click",function(){
      taskName.innerHTML = prompt("Enter the name of the task");
    })

    // editTask.addEventListener("click",editMe(taskName));  

    $(task).append(cbox);
    $(task).append(taskName);
    $(task).append(editTask);
    $(task).append(delTask);
    $(taskList).append(task);
  });

  delCard.addEventListener("click",function(){
    // parent.removeChild(card);
    delCard.parentElement.remove(card);
  });

  editCard.addEventListener("click",function(){
    cardName.innerHTML = prompt("Enter the name of the task");
  });
}