const form = document.getElementById('form');
const A = document.getElementById('primeiro');
const B = document.getElementById('segundo');

function operation(primeiro, segundo){
    return segundo > primeiro
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    let validarForm = operation(primeiro.value, segundo.value)
    if(validarForm){
        alert('SUCESSO!')
    } else{
        alert('ERROR!')
    }
})