document.addEventListener("DOMContentLoaded", function() {
    const testimonialTrack = document.querySelector('.testimonial-track');
    const testimonialDots = document.querySelectorAll('.testimonial-dot');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    let currentTestimonial = 0;
    
    if (testimonialTrack && testimonialDots.length > 0 && testimonialCards.length > 0) {
        // Function to update testimonial slider
        function updateTestimonialSlider() {
            // Calculate the slide position
            const slidePosition = -currentTestimonial * 75 + '%';
            testimonialTrack.style.transform = `translateX(${slidePosition})`;
            
            // Update dots
            testimonialDots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentTestimonial);
            });
        }
        

        // Add click event to dots
        testimonialDots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                currentTestimonial = index;
                updateTestimonialSlider();
            });
        });
        
        // Auto-rotate testimonials every 5 seconds
        setInterval(function() {
            currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
            updateTestimonialSlider();
        }, 5000);
    }
});
