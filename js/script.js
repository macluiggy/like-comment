(function () {
    var like = document.getElementById('like');
    var comment = document.getElementById('comment');
    var counter = 0;
    var commentCounter = 0;
    var elTextarea = document.getElementById('textComment');
    var showHide = document.getElementById('show-hide');
    var elSubmit = document.getElementById('submit');
    //EVENTOS PARA LOS BOTONES DE LIKE Y COMMENTARIO
    like.addEventListener('click', addLike, false);
    comment.addEventListener('click', showComment, false);
    elSubmit.addEventListener('click', addComment, false);
    //FUNCIONES PARA INTERACTUAL CON LOS BOTONES DE LIKE Y COMENTARIOS
    function addLike() { //funcion para añadir el like a la foto
        counter++
        if (counter % 2 === 1) { // si el la operacion devuelve 1 entonces
            like.src = 'img/blackLike.png'; // añade el like
        } else {
            like.src = 'img/whiteLike.png'; // si no eliminalo
        }
    }

    function showComment() {// funcion que muestra el area de texto donde se va a escrivir el comentario
        commentCounter++
        if (commentCounter % 2 === 1) { // si es inpar
            comment.src = 'img/blackComment.png'; // cambia la imagen para
            showHide.style.display = 'inline'; // de esta forma se indica que se puede comentar
        } else { // de otra manera
            comment.src = 'img/whiteComment.png'; // vuelve a la image por defecto
            showHide.style.display = 'none'; // y esconde el area de texto
        }

    }

    function addComment(e) {// funcion para añadir el comentario que se escribio en el area de texto
        e.preventDefault();// previene el omportamiento por defecto
        var commentValue = document.createElement('p'); // crea un elemento p
        commentValue.innerHTML = elTextarea.value; // el valor del elemento es el mismo que el del area de texto
        document.getElementById('container2').appendChild(commentValue); // añade ese valor para que se vea
        elTextarea.value = '';// una vex enviado el comentario, borra el contenido del area de texto
        showHide.style.display = 'none'; // y esconde el mismo para que se pueda añadir otro comentario
        showComment(); // llama a la funcion showComent para que el icono vuelva a su valor original
    }
}());