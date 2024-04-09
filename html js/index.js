var cubeBtn = document.getElementById("cube");
var rightCol = document.getElementById("right-col");
var btnStack = document.getElementById("btn-stack");
var background= document.getElementById("bg");

//je veux que au clique me bouton devienne rouge

btnStack.onclick = function () {

    if (btnStack.textContent === "Mes stacks") {
        btnStack.textContent = "fermer";
    } else {    
        btnStack.textContent = "Mes stacks";
    }
    if
    (background.style.display === "none"){
        background.style.display = "block";}
        else{
            background.style.display = "none";
        }
        
     
    };




console.log(btnStack);