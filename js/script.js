(function () {
    var like = document.getElementById('like');
    var comment = document.getElementById('comment');
    var counter = 0;
    var commentCounter = 0;
    var elTextarea = document.getElementById('textComment')
    var showHide = document.getElementById('show-hide')
    //EVENTOS PARA LOS BOTONES DE LIKE Y COMMENTARIO
    like.addEventListener('click', addLike, false);
    comment.addEventListener('click', addComment,false)
    //FUNCIONES PARA INTERACTUAL CON LOS BOTONES DE LIKE Y COMENTARIOS
    function addLike() { //funcion para añadir el like a la foto
        counter++
        if (counter % 2 === 1) { // si el la operacion devuelve 1 entonces
            like.src = 'img/blackLike.png'; // añade el like
        } else {
            like.src = 'img/whiteLike.png'; // si no eliminalo
        }
    }

    function addComment() {
        commentCounter++
        if (commentCounter % 2 === 1) {
            comment.src = 'img/blackComment.png';
            showHide.style.display = 'inline';
        } else {
            comment.src = 'img/whiteComment.png';
            showHide.style.display = 'none';
        }

    }
}())