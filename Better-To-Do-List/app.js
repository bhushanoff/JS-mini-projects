






//new folder has direct input for name initially with "correct" button.
//after putting name, "correct" button goes and replaced by "add", "edit", "trash" button
// <i class="fas fa-check-circle"></i>
// <i class="fas fa-plus-circle" id="plus"></i>
// <i class="fas fa-edit"></i>
// <i class="fas fa-trash-alt"></i>

// class of parentFolder --> parent-folder
// class of FolderDiv --> folder-div
// class of FolderSection --> folder-section
// class of smallPlusButton --> parent-folder


var parentFolder = document.getElementById('parent-folder');
var bigPlusButton = document.querySelector('#big-plus');
var container = document.querySelector('.container');
var i = 0;

bigPlusButton.addEventListener("click", function(){
    if(i%3==0){
        console.log('i%3==0');
        var lastFolderDiv = document.createElement("div");
        lastFolderDiv.className = 'folder-div';
        parentFolder.appendChild(lastFolderDiv);
    }

    var folderDiv = document.querySelectorAll('.folder-div');
    console.log(folderDiv[folderDiv.length-1]);

    var lastFolderDiv = parentFolder.lastChild;

    var lastFolderSection = document.createElement("div");
    lastFolderSection.className = 'folder-section';
    lastFolderDiv.append(lastFolderSection);
    console.log(lastFolderSection);
    
    var inputFolder = document.createElement("input");
    var checkButton = document.createElement("i");
    var smallPlusButton = document.createElement("i");

    inputFolder.type = "text"; inputFolder.className = 'input-folder';     inputFolder.placeholder = "New Folder";
    checkButton.className = "fas fa-check-circle fa-2x check-button";
    smallPlusButton.className = 'fas fa-plus-circle fa-2x small-plus';

    lastFolderSection.append(inputFolder);
    lastFolderSection.append(checkButton);
    lastFolderSection.append(smallPlusButton);
    lastFolderDiv.append(lastFolderSection);

    i++;    
})
