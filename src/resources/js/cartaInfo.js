// Obtener elementos
const articulo = document.getElementById('articulos');
const popup = document.getElementById('mi-popup');
const closeBtn = document.getElementById('close-btn');

// Mostrar el pop-up cuando se hace clic en el artículo
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
        // Obtener el valor del atributo title
        const titleValue = event.target.title;
        const dataInfo = event.target.getAttribute('data-info');
        const dataInfoBueno = dataInfo.replace(/\n/g, '<br>');
        const dataPredeterminado = event.target.getAttribute('data-predeterminado');
        const dataImagen = event.target.getAttribute('data-imagen');

        // Mostrar el valor en el párrafo
        const resultado = document.getElementById('textoMostrar');

        if (dataImagen === 'null') {
            resultado.innerHTML = `<h1> ${titleValue} </h1> <br> ${dataPredeterminado} <br><br> ${dataInfoBueno} <br> <br>`;
        }

        else {
            resultado.innerHTML = `<h1> ${titleValue} </h1> <br> ${dataPredeterminado} <br><br> ${dataInfoBueno} <br> <br>
        <img src="${dataImagen}" alt="" style= "width: 25rem; height: 15rem;">`;
        }



    }


});