function mostrarCanvas1() { 
    document.getElementById('noDirigido').style.display = 'block';
    document.getElementById('texto').style.display = 'none';
}

//  Cierra el canvas y te lleva a la pagina de inicio
let refresh = document.getElementById('refresh');
refresh.addEventListener('click', _ => {
            location.reload();
})
//
