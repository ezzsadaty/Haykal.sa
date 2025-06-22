document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.getElementById('navLinks');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const closeIcon = document.querySelector('.close-icon');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        if (navLinks.classList.contains('active')) {
            hamburgerIcon.style.display = 'none';
            closeIcon.style.display = 'inline-block';
        } else {
            hamburgerIcon.style.display = 'inline-block';
            closeIcon.style.display = 'none';
        }
    });
});
// Add to your script.js file

// Animate elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.process-card, .service-card, .client-logo');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });
    
    elements.forEach(el => observer.observe(el));
  };
  
  // Update copyright year automatically
  const updateCopyrightYear = () => {
    document.getElementById('year').textContent = new Date().getFullYear();
  };
  
  // Smooth scrolling for anchor links
  const smoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  };
  
  // Initialize all functions when DOM loads
  document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    updateCopyrightYear();
    smoothScroll();
  });

  