const navbar = document.getElementById("navbar");
    
    let currentStage = 0;
    let cardsInNextSection = false;

    // Navbar background on scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });

     const cards = document.querySelectorAll('.info-card');

        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = scrollTop / docHeight;

            cards.forEach((card, index) => {
                const start = index * 0.1;
                const progress = Math.min(Math.max((scrollPercent - start) / 0.2, 0), 1);

                const yMove = -40 + (40 * progress);
                const scale = 0.6 + (0.4 * progress);
                card.style.transform = `translateY(${yMove}vh) scale(${scale})`;

                if (progress > 0.9) {
                    card.classList.add('flipped');
                } else {
                    card.classList.remove('flipped');
                }
            });
        });
       

  const statsSection = document.getElementById('stats');
  let hasAnimated = false;

  function animateStats() {
    if (hasAnimated) return;
    if (window.scrollY + window.innerHeight >= statsSection.offsetTop + 100) {
      statsSection.classList.add('visible');
      document.querySelectorAll('.stat-number').forEach(stat => {
        const target = +stat.getAttribute('data-target');
        const suffix = stat.getAttribute('data-suffix') || '+';
        let count = 0;
        const increment = target / 100;

        const counter = setInterval(() => {
          count += increment;
          if (count >= target) {
            count = target;
            clearInterval(counter);
          }
          stat.textContent = Math.floor(count) + suffix;
        }, 15);
      });
      hasAnimated = true;
    }
  }

  window.addEventListener('scroll', animateStats);

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.testimonial-carousel');
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-arrow');
    const nextBtn = document.querySelector('.next-arrow');
    let currentIndex = 0;
    
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
    
    // Arrow navigation
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % cards.length;
        carousel.scrollTo({
            left: cards[currentIndex].offsetLeft - 32,
            behavior: 'smooth'
        });
        updateActiveCard(currentIndex);
    });
    
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        carousel.scrollTo({
            left: cards[currentIndex].offsetLeft - 32,
            behavior: 'smooth'
        });
        updateActiveCard(currentIndex);
    });
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            carousel.scrollTo({
                left: cards[index].offsetLeft - 32,
                behavior: 'smooth'
            });
            updateActiveCard(index);
        });
    });
    
    // Auto-scroll to center card on load
    setTimeout(() => {
        carousel.scrollTo({
            left: cards[0].offsetLeft - 32,
            behavior: 'smooth'
        });
    }, 100);
});
