document.addEventListener("DOMContentLoaded", function () {
    const imagenUrlInput = document.getElementById("imagen-url");
    const memeImagen = document.getElementById("meme-imagen");
    const topTextInput = document.getElementById("top-text");
    const bottomTextInput = document.getElementById("bottom-text");
    const downloadButton = document.getElementById("download-button");
    const resetFiltersButton = document.getElementById("reset-filters");

    const brilloInput = document.getElementById ("brillo");
    const opacidadInput = document.getElementById ("opacidad");
    const contrasteInput = document.getElementById ("contraste");
    const desenfoqueInput = document.getElementById ("desenfoque");
    const escalaGrisesInput = document.getElementById ("escala de grises");
    const sepiaInput = document.getElementById ("sepia");
    const hueInput = document.getElementById ("hue");
    const saturadoInput = document.getElementById ("saturado");
    const negativoInput = document.getElementById ("negativo");

const filters = [
   brilloInput,
   opacidadInput,
   contrasteInput,
   desenfoqueInput,
   escalaGrisesInput,
   sepiaInput,
   sepiaInput,
   hueInput,
   saturadoInput,
   negativoInput

];
}