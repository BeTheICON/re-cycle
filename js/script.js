const viewToursButton = document.querySelector("#view-tours-button");
const dropdownContent = document.querySelector("#view-tours-dropdown");


viewToursButton.onclick = function(event){
    dropdownContent.classList.toggle("show-dropdown");
}