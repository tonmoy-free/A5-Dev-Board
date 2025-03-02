const button = document.getElementById('colorButton');

button.addEventListener('click', function () {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    const pd = button.children[0].classList.add('animate-spin');  
});


function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}