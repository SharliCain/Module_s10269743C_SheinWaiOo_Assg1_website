document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar .mobile-menu-items');
    toggleButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });
});


// Hero SlideShow Section

let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll(".mySlides");
    const dots = document.querySelectorAll(".dot");

    // Reset all slides
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    });

    // Update dots
    dots.forEach((dot, index) => {
        dot.className = dot.className.replace(" active", "");
        if (index === slideIndex) {
            dot.className += " active";
        }
    });

    // Increment slide index
    slideIndex = (slideIndex + 1) % slides.length; // Loop back to first slide
}

// Set initial interval for automatic sliding
setInterval(showSlides, 3000); // Change slide every 3 seconds

// Initialize the slideshow
showSlides();




// Product Details SlideShow Section
let productSlideIndex = 0;

function plusProductSlides(n) {
    showProductSlides(productSlideIndex += n);
}

function showProductSlides(n) {
    const productSlides = document.querySelectorAll(".productSlide");

    if (n >= productSlides.length) {
        productSlideIndex = 0; // Loop back to the first slide
    }
    if (n < 0) {
        productSlideIndex = productSlides.length - 1; // Loop back to the last slide
    }

    // Hide all product slides and show the current one
    productSlides.forEach((slide, index) => {
        slide.style.display = "none";
    });

    productSlides[productSlideIndex].style.display = "block";
}


showProductSlides(productSlideIndex);


