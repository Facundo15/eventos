document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', (e) => {
        alert('Hola')
        e.stopPropagation();
    })
    document.getElementById('div').addEventListener('click', () => {
        alert('Hola! Soy el div')
    })
})