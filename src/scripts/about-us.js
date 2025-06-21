
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.testimonial-carousel');
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-arrow');
    const nextBtn = document.querySelector('.next-arrow');
    let currentIndex = 0;
    let autoScrollInterval;
    
    // Update active state
    function updateActiveCard(index) {
        cards.forEach((card, i) => {
            card.classList.toggle('active', i === index);
        });
        
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        
        currentIndex = index;
    }
    
    // Scroll to card
    function scrollToCard(index) {
        const card = cards[index];
        const containerWidth = carousel.offsetWidth;
        const cardWidth = card.offsetWidth;
        const scrollPosition = card.offsetLeft - (containerWidth / 2) + (cardWidth / 2);
        
        carousel.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
        updateActiveCard(index);
    }
    
    // Arrow navigation
    nextBtn.addEventListener('click', () => {
        const nextIndex = (currentIndex + 1) % cards.length;
        scrollToCard(nextIndex);
    });
    
    prevBtn.addEventListener('click', () => {
        const prevIndex = (currentIndex - 1 + cards.length) % cards.length;
        scrollToCard(prevIndex);
    });
    
    // Dot navigation
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('data-index'));
            scrollToCard(index);
        });
    });
    
    // Card click navigation
    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            scrollToCard(index);
        });
    });
    
    // Auto-scroll to center card on load
    setTimeout(() => {
        scrollToCard(0);
    }, 100);
    
    // Handle scroll events to update active card
    carousel.addEventListener('scroll', () => {
        clearTimeout(autoScrollInterval);
        autoScrollInterval = setTimeout(() => {
            const containerWidth = carousel.offsetWidth;
            const scrollPosition = carousel.scrollLeft + (containerWidth / 2);
            
            cards.forEach((card, index) => {
                const cardLeft = card.offsetLeft;
                const cardWidth = card.offsetWidth;
                
                if (scrollPosition >= cardLeft && scrollPosition < cardLeft + cardWidth) {
                    updateActiveCard(index);
                }
            });
        }, 100);
    });
});
