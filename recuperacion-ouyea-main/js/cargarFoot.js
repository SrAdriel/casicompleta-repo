document.addEventListener('DOMContentLoaded', function(){
    const ContenedorFoot = document.getElementById("contenedorFoot");
    const footHTML = footRepo();

    ContenedorFoot.innerHTML = footHTML;
})