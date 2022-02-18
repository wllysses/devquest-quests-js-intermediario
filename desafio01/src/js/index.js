const imagensSlider = document.querySelectorAll('.imagem-slider')
const btnVoltar = document.getElementById('btn-voltar')
const btnAvancar = document.getElementById('btn-avancar')
let imagemSliderAtual = 0
let totalImagensSlider = imagensSlider.length - 1

function esconderImagem() {
    imagensSlider.forEach(imagem => {
        imagem.classList.remove('ativo')
    })
}

function mostrarImagem() {
    imagensSlider[imagemSliderAtual].classList.add('ativo')
}

btnVoltar.addEventListener('click', () => {

    imagemSliderAtual--

    if(imagemSliderAtual < 0) {
        imagemSliderAtual = 0
    }

    if(imagemSliderAtual === 0) {
        btnVoltar.style.opacity = '0.2'
    } else if(imagemSliderAtual <= totalImagensSlider) {
        btnAvancar.style.opacity = '1'
    }
    
    esconderImagem()
    mostrarImagem()
})

btnAvancar.addEventListener('click', () => {

    imagemSliderAtual++

    if(imagemSliderAtual > totalImagensSlider) {
        imagemSliderAtual = 3
    }
    
    if(imagemSliderAtual === totalImagensSlider) { 
        btnAvancar.style.opacity = '0.2'
    } else if(imagemSliderAtual >= 0) {
        btnVoltar.style.opacity = '1'
    }

    esconderImagem()
    mostrarImagem()
})