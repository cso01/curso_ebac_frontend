const form = document.getElementById('confirmaçao');

function validaNome(valida)
    const nomeComoArray = valida.split('');
    return nomeComoArray.lenght > primeiro;

form.addEventListener('submit', function(e){
    let formEValido = false;
    e.preventDefault();


const confirmaçaoB = document.getElementById('confirmçao');
formEValido = validaNome(confirmaçao.value)
if (formEValido) {
    alert("Formulário invalido");
} else {
    alert("Formulário válido");
}

})
console.log(form);