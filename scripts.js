// Scroll animation and navbar behavior
document.addEventListener("DOMContentLoaded", function () {
    const scrollElements = document.querySelectorAll('.scroll-section');
    const header = document.getElementById('header');
    let lastScrollTop = 0;

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('scroll-fade-in');
    };

    const hideScrollElement = (element) => {
        element.classList.remove('scroll-fade-in');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', () => {
        handleScrollAnimation();

        // Navbar hide/show on scroll
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scroll Down
            header.style.top = "-80px"; // Hide header
        } else {
            // Scroll Up
            header.style.top = "0"; // Show header
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });
});
