const hamburgerIcon = document.querySelector('.fa-bars');


hamburgerIcon.addEventListener('click',
    function() {
        const openBurger = document.querySelector('.hamburger-menu');
        openBurger.classList.add('active');
    }
);

const closeBurger = document.querySelector('.fa-times');


closeBurger.addEventListener('click',
    function() {
        const openBurger = document.querySelector('.hamburger-menu');
        openBurger.classList.remove('active');
    }
);