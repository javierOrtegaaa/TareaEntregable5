const botonesTema = document.querySelectorAll('.btn-tema');
const body = document.body;

function resetTema() {
    body.classList.remove('tema-rojo', 'tema-azul', 'tema-verde');
}

function aplicarTema(tema) {
    resetTema();
    if (tema !== 'reset') {
        body.classList.add(tema);
    }
}

// Añadimos el evento a cada botón
botonesTema.forEach(boton => {
    boton.addEventListener('click', () => {
        const tema = boton.classList.contains('reset') ? 'reset' : `tema-${boton.classList[1]}`;
        aplicarTema(tema);
    });
});
s