// Obtener elementos
const articulo = document.getElementById('articulos');
const popup = document.getElementById('mi-popup');
const closeBtn = document.getElementById('close-btn');

// Mostrar el pop-up cuando se hace clic en div-blog
articulo.addEventListener('click', function (event) {
    if (event.target.tagName === 'ARTICLE') {
        popup.style.display = 'block';
    }

});

// Cerrar el pop-up cuando se hace clic en el botón de cerrar
closeBtn.addEventListener('click', function () {
    popup.style.display = 'none';
});

// Cerrar el pop-up cuando se hace clic fuera del contenido del pop-up
popup.addEventListener('click', function (event) {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});

articulo.addEventListener('click', function (event) {
    // Verifica que el elemento clicado sea un artículo
    if (event.target.tagName === 'ARTICLE') {
        //Obtener todos los data-
        const titleValue = event.target.title;
        const dataInfo = event.target.getAttribute('data-info');
        const dataInfoBueno = dataInfo.replace(/\n/g, '<br>');
        const dataPredeterminado = event.target.getAttribute('data-predeterminado');
        const dataImagen = event.target.getAttribute('data-imagen');

        // Mostrar el valor en el 'textoMostrar'
        const resultado = document.getElementById('textoMostrar');

        //Si no tiene imagen el div-blog
        if (dataImagen === 'null') {
            resultado.innerHTML = `<h1 class="p-12 text-center justify-center text-5xl text-white"> ${titleValue} </h1> 
                                    <h2 class="p-6 text-center justify-center text-2xl text-white">${dataPredeterminado}</h2> <br> 
                                    <h3 class="p-6 mx-8 text-justify justify-center text-xl text-white">${dataInfoBueno}</h3>`;
        }

        //Si sí tiene imagen
        else {
            resultado.innerHTML = `<h1 class="p-12 text-center justify-center text-5xl text-white"> ${titleValue} </h1> 
                                    <h2 class="p-6 text-center justify-center text-2xl text-white">${dataPredeterminado}</h2> <br> 
                                    <h3 class="p-6 mx-8 text-justify justify-center text-xl text-white">${dataInfoBueno}</h3>;<br>
                                    <div class="flex flex-col items-center justify-center">
                                    <img src="${dataImagen}" alt="" class="w-80 h-44 mb-6">
                                    </div>`;
        }



    }


});