
(function name() {
    //Бургер
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

    //Модалка

    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.about__img-button')

    modal.addEventListener('click', closeModal)
    modalButton.addEventListener('click', openModal)

    function closeModal(e) {
        const target = e.target;
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

    //Табы
    const tabsControl = document.querySelector('.tabs-control')

    tabsControl.addEventListener('click', toggleTab);

    function toggleTab(e) {
        const target = e.target;
        const activeTab = document.querySelector('.tabs-control__link--active');
        const activeTabDescription = document.querySelector('.programm__tab-description--show');
        e.preventDefault();

        if (target.classList.contains('tabs-control__link--active')) {
            return
        } else if (target.closest('.tabs-control__link')) {
            const tabId = target.getAttribute('href');
            
            if (activeTab) {
                activeTab.classList.remove('tabs-control__link--active');
            }

            target.classList.add('tabs-control__link--active');

            if (activeTabDescription) {
                activeTabDescription.classList.remove('programm__tab-description--show');
            }
            
            const tabDescription = document.querySelector(tabId);
            tabDescription.classList.add('programm__tab-description--show');
        }
    }

    //Аккордеон

    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach((el) => {
        
        el.addEventListener('click', (e) => {
            const accordionControl = e.target.closest('.accordion-list__control')

            if (accordionControl) {
                const accordionItem = accordionControl.parentElement;
                const accodrionContent = accordionControl.nextElementSibling;
                
                const accordionList = e.currentTarget;
                console.log(accordionList);
                const openedAccordionItem = accordionList.querySelector('.accordion-list__item--opened');
                const openedAccordionContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content');
                console.log(openedAccordionItem)
                console.log(openedAccordionContent)
                if (openedAccordionItem && accordionItem != openedAccordionItem) {
                    openedAccordionItem.classList.remove('accordion-list__item--opened');
                    openedAccordionContent.style.maxHeight = null;
                }

                accordionItem.classList.toggle('accordion-list__item--opened');

                if (accordionItem.classList.contains('accordion-list__item--opened')) {
                    accodrionContent.style.maxHeight = accodrionContent.scrollHeight + 'px';
                } else {
                    accodrionContent.style.maxHeight = null;
                }
            } else {
                return
            }
        })
    })
})()