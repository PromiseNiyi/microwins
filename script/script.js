
function toggleMenu() {
    const smallMenu = document.querySelector('.small-menu');
    const overlay = document.querySelector('.overlay');
    
    smallMenu.classList.toggle('active');
    overlay.classList.toggle('active');

    if (smallMenu.classList.contains('active')) {
        disableScrolling();
    } else {
        enableScrolling();
    }
}

function closeMenu() {
    const smallMenu = document.querySelector('.small-menu');
    const overlay = document.querySelector('.overlay');
    
    smallMenu.classList.remove('active');
    overlay.classList.remove('active');
    enableScrolling();
}

function disableScrolling() {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
}

function enableScrolling() {
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
}

document.querySelector('.overlay').addEventListener('click', closeMenu);
