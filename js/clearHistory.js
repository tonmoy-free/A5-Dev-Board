const sectionToClear = document.getElementById('activity-log');
const clearButton = document.getElementById('clear-btn');


clearButton.addEventListener("click",function(){
    sectionToClear.innerHTML = '';
})