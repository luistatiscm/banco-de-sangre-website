document.addEventListener('DOMContentLoaded', function () {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            // Cierra todos los acordeones abiertos
            const currentlyActiveHeader = document.querySelector('.accordion-header.active');
            if (currentlyActiveHeader && currentlyActiveHeader !== this) {
                currentlyActiveHeader.classList.remove('active');
                currentlyActiveHeader.nextElementSibling.style.display = 'none';
            }

            // Abre o cierra el acordeón actual
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});