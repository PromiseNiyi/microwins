document.addEventListener('DOMContentLoaded', function () {
    const readMoreLinks = document.querySelectorAll('.read-more');

    readMoreLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const textBlock = this.previousElementSibling;
            const dots = textBlock.querySelector('.dots');
            const moreText = textBlock.querySelector('.more-text');

            dots.style.display = 'none';
            moreText.style.display = 'inline';
            this.style.display = 'none';
        });
    });
});
