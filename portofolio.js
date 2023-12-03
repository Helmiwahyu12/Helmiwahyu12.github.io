document.addEventListener("DOMContentLoaded", function(){
    const body = document.body;
const toggleModeBtn = document.getElementById("toggleModeBtn");
toggleModeBtn.addEventListener("click", function(){
    body.classList.toggle("dark-mode");
});
});
