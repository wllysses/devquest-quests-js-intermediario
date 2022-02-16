let inputs = document.querySelectorAll('input')
let enviar = document.querySelector('#btn-enviar')
let mensagemValidacao = document.getElementsByClassName('msg-validacao')
let btnEnviar = document.getElementById('btn-enviar')

inputs[0].addEventListener('blur', function(event) {
    let valorInput = event.target.value
    if(valorInput == "") {
        mensagemValidacao[0].style.opacity = "100%"
        event.target.style.border = '2px solid red'
    } else {
        mensagemValidacao[0].style.opacity = '0'
        event.target.style.border = '2px solid green'
    }
})

inputs[1].addEventListener('blur', function(event) {
    let valorInput = event.target.value
    if(valorInput == "") {
        mensagemValidacao[1].style.opacity = "100%"
        event.target.style.border = '2px solid red'
    } else {
        mensagemValidacao[1].style.opacity = '0'
        event.target.style.border = '2px solid green'
    }
})

inputs[2].addEventListener('blur', function(event) {
    let valorInput = event.target.value
    if(valorInput == "") {
        mensagemValidacao[2].style.opacity = "100%"
        event.target.style.border = '2px solid red'
    } else {
        mensagemValidacao[2].style.opacity = '0'
        event.target.style.border = '2px solid green'
    }
})


btnEnviar.addEventListener('click', () => {
    if(inputs[0].value === '') {
        mensagemValidacao[0].style.opacity = "100%"
        inputs[0].style.border = '2px solid red'
    }

    if(inputs[1].value === '') {
        mensagemValidacao[1].style.opacity = "100%"
        inputs[1].style.border = '2px solid red'
    }

    if(inputs[2].value === '') {
        mensagemValidacao[2].style.opacity = "100%"
        inputs[2].style.border = '2px solid red'
    }
})