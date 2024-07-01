//Activación Tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//Smooth scroll
$("a").click(function (event){
    if ( this.hash !=='')
    //prevenir acciones por defecto
    event.preventDefault()

    // Obtenemos ID del elemento
        const idTag = this.hash

        //Animación
    $('html,body').animate(
        {

        scrollTop: $(idTag).offset().top
    },
1000, //tiempo que toma en moverse
// acción al terminar
function () {
    window.location.hash = idTag
} 
)
})
