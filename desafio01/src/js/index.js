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
        btnVoltar.style.opacity = '0.2'
        return
    } else if(imagemSliderAtual <= totalImagensSlider) {
        btnAvancar.style.opacity = '1'
    }
    
    imagemSliderAtual--
    console.log(imagemSliderAtual)
    
    esconderImagem()
    mostrarImagem()
})

btnAvancar.addEventListener('click', () => {
    if(imagemSliderAtual === totalImagensSlider) {
        btnAvancar.style.opacity = '0.2'
        return
    } else if(imagemSliderAtual >= 0) {
        btnVoltar.style.opacity = '1'
    }

    imagemSliderAtual++
    console.log(imagemSliderAtual)

    esconderImagem()
    mostrarImagem()
})