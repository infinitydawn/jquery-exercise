window.addEventListener("DOMContentLoaded", () => {
    // move square by DOM Api
    const square = document.getElementById('square');
    const moveInterval = 300;

    function getRandomOffset(max) {
        return Math.floor(Math.random() * max);
    }

    function moveSquare() {
        const maxX = window.innerWidth - square.offsetWidth;
        const maxY = window.innerHeight - square.offsetHeight;

        const newX = getRandomOffset(maxX);
        const newY = getRandomOffset(maxY);

        console.log("C")

        square.style.position = 'absolute';
        square.style.left = `${newX}px`;
        square.style.top = `${newY}px`;
    }

    setInterval(moveSquare, moveInterval);
})
