document.querySelector('.header__content--profile').addEventListener('click', function() {
    const notification = document.querySelector('.header__notification');
    notification.classList.toggle('header__notification--animated');
});