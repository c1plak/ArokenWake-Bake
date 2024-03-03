
(function name() {
    document.addEventListener('click', burgerInit)

    function burgerInit(e) {
        let target = e.target;
        let body = document.body;
        if (target.classList.contains('burger-icon') || target.parentElement.classList.contains('burger-icon')) {
            if (body.classList.contains('body--opened-menu')) {
                body.classList.remove('body--opened-menu');
            } else {
                body.classList.add('body--opened-menu');
            }
        }

        if (target.classList.contains('navbar__link')) {
            if (body.classList.contains('body--opened-menu')) {
                body.classList.remove('body--opened-menu');
            }
        }
    }

    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.about__img-button')

    modal.addEventListener('click', closeModal)
    modalButton.addEventListener('click', openModal)
    const cancel = document.querySelector('modal__cancel');

    function closeModal(e) {
        const target = e.target;
        console.log(cancel);
        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            if (document.body.classList.contains('body--modal-opened')) {
                e.preventDefault();
                document.body.classList.remove('body--modal-opened');
            }
        }
    }

    function openModal(e) {
        e.preventDefault();    
        document.body.classList.toggle('body--modal-opened');
    }
})()