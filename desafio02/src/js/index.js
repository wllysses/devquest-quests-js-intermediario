let itemsFaq = document.querySelectorAll('.info')

itemsFaq.forEach(faq => {
    faq.addEventListener('click', () => {
        const ativo = faq.classList.contains('ativo')

if(!ativo) {
    faq.classList.add('ativo')
} else {
    faq.classList.remove('ativo')
}

    })
})