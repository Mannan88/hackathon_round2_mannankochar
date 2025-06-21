const videoCarousel = document.getElementById('videoCarousel');
        const prevBtn = document.querySelector('.nav-prev');
        const nextBtn = document.querySelector('.nav-next');
        const videoTestimonials = document.querySelectorAll('.video-testimonial');
        const testimonialWidth = videoTestimonials[0].offsetWidth + 48; // width + gap

        // Initialize first video as active
        videoTestimonials[0].classList.add('active');

        nextBtn.addEventListener('click', () => {
            videoCarousel.scrollBy({ left: testimonialWidth, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            videoCarousel.scrollBy({ left: -testimonialWidth, behavior: 'smooth' });
        });

        // Update active state on scroll
        videoCarousel.addEventListener('scroll', () => {
            const carouselRect = videoCarousel.getBoundingClientRect();
            const carouselCenter = carouselRect.left + carouselRect.width / 2;
            
            videoTestimonials.forEach(testimonial => {
                const testimonialRect = testimonial.getBoundingClientRect();
                const testimonialCenter = testimonialRect.left + testimonialRect.width / 2;
                
                if (Math.abs(testimonialCenter - carouselCenter) < testimonialRect.width / 2) {
                    testimonial.classList.add('active');
                } else {
                    testimonial.classList.remove('active');
                }
            });

            // Hide nav buttons when at extremes
            const maxScroll = videoCarousel.scrollWidth - videoCarousel.clientWidth;
            prevBtn.style.display = videoCarousel.scrollLeft <= 10 ? 'none' : 'flex';
            nextBtn.style.display = videoCarousel.scrollLeft >= maxScroll - 10 ? 'none' : 'flex';
        });

        // Initial state
        prevBtn.style.display = 'none';

        // Auto-scroll text carousels to center on load
        document.addEventListener('DOMContentLoaded', () => {
            const textCarousels = document.querySelectorAll('.text-carousel-track');
            textCarousels.forEach(carousel => {
                // Duplicate items to create seamless loop
                const items = carousel.querySelectorAll('.text-testimonial');
                items.forEach(item => {
                    const clone = item.cloneNode(true);
                    carousel.appendChild(clone);
                });
                
                // Start animation from center
                if (carousel.classList.contains('first-carousel')) {
                    carousel.style.transform = 'translateX(0)';
                } else {
                    carousel.style.transform = `translateX(calc(-550px * 3 - 3rem * 3))`;
                }
            });
        });