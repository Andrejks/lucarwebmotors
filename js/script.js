document.addEventListener('DOMContentLoaded', () => {

    /* Objeto no html */
    const togglethme = document.getElementById('togleTheme');
    const roothtml = document.documentElement;

    /* Função Mudar a cor do tema pra dark/ou claro */

    function changeTheme() {
        const currentTheme = roothtml.getAttribute('data-Theme');
        const isdrak =currentTheme === 'dark';

        roothtml.setAttribute('data-theme', isdark ?'light' : 'dark');
    /* Troca do icone */
togglethme.classList.toggle('bi-sun', !isDark);
togglethme.classList.toggle('bi-moon', isDark);

}

if(togglethme){
togglethme>addEventListener('click',changeTheme);

}




});