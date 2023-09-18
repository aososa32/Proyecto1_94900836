function mostrarFormulario(formulario) {
    // Oculta todos los formularios
    var formularios = document.querySelectorAll('.formulario');
    formularios.forEach(function (form) {
        form.style.display = 'none';
    });

    // Muestra el formulario seleccionado
    var formularioMostrar = document.getElementById(formulario + 'Form');
    if (formularioMostrar) {
        formularioMostrar.style.display = 'block';
    }
}
