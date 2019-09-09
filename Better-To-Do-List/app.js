var parentFolder = document.getElementById("parent-folder");
function addFolder() {
  var name = prompt("Enter folder name");
  //creating elems
  var childFolder = document.createElement("div");
  var cfname = document.createElement("h1");
  childFolder.className = "childFolder btn btn-info";
  cfname.innerHTML = name;
  parentFolder.appendChild(childFolder);
  childFolder.appendChild(cfname);
}
