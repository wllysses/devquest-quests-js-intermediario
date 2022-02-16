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
    if(imagemSliderAtual === 0) {
        btnVoltar.classList.add('opacidade')
        return
    }
    imagemSliderAtual--

    esconderImagem()
    mostrarImagem()
})

btnAvancar.addEventListener('click', () => {
    if(imagemSliderAtual === totalImagensSlider) {
        return
    }
    imagemSliderAtual++

    esconderImagem()
    mostrarImagem()
})