const contenedor = document.querySelector('#contenedor');
document.querySelector('#btn-menu').addEventListener('click', () => {
    contenedor.classList.toggle('menu-active');
});

const comprobarWidth = () => {
    if (window.innerWidth <= 768) {
        contenedor.classList.remove('menu-active');
    } else {
        contenedor.classList.add('menu-active');
    }
}
comprobarWidth();


window.addEventListener('resize', () => {
    comprobarWidth();
})