(function () {
    var like = document.getElementById('like');
    var counter = 0;
    like.addEventListener('click', function () {
        counter++
        if (counter % 2 === 1) {
            like.src = 'img/blackLike.png'
        } else {
            like.src = 'img/whiteLike.png'
        }
    }, false)
}())