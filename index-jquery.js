$(document).ready(function() {
    const $square = $('#square');
    const moveInterval = 1000; // 1 second

    function getRandomOffset(max) {
        return Math.floor(Math.random() * max);
    }

    function moveSquare() {
        const maxX = $(window).width() - $square.outerWidth();
        const maxY = $(window).height() - $square.outerHeight();

        const newX = getRandomOffset(maxX);
        const newY = getRandomOffset(maxY);

        $square.css({
            position: 'absolute',
            left: `${newX}px`,
            top: `${newY}px`
        });
    }

    setInterval(moveSquare, moveInterval);
});
