const button = document.getElementById('catchMeBtn');

function getRandomPosition() {
    const x = window.innerWidth - button.clientWidth;
    const y = window.innerHeight - button.clientHeight;
    const randomX = Math.floor(Math.random() * x);
    const randomY = Math.floor(Math.random() * y);
    return { x: randomX, y: randomY };
}

button.addEventListener('mouseover', () => {
    const { x, y } = getRandomPosition();
    button.style.position = 'absolute';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
});
