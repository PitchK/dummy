

var close = document.getElementById('X');
close.addEventListener("click", removeHeader);

var deleted = document.getElementById('header');
var newTitle = document.getElementById('title');



function removeHeader(){

    deleted.style.transform = "translate(0px, -120px)";
    deleted.style.transition = "1s";
    newTitle.style.transform = "translate(0px, -120px)";
    newTitle.style.transition = "1s";
}