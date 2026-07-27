document.addEventListener('DOMContentLoaded', () => {

  // 1. Initialize Bootstrap Carousel with Automatic Cycling
  const heroCarousel = document.querySelector('#heroCarousel');
  if (heroCarousel) {
    new bootstrap.Carousel(heroCarousel, {
      interval: 3500,
      ride: 'carousel',
      pause: 'hover'
    });
  }

  // 2. Newsletter Subscription Form Handler
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterEmail = document.getElementById('newsletterEmail');
  const newsletterFeedback = document.getElementById('newsletterFeedback');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const emailValue = newsletterEmail.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailValue || !emailPattern.test(emailValue)) {
        newsletterFeedback.className = 'mt-2 small text-danger';
        newsletterFeedback.textContent = 'Please enter a valid email address.';
        return;
      }

      // Simulated success state
      newsletterFeedback.className = 'mt-2 small text-success';
      newsletterFeedback.textContent = 'Thank you for subscribing! Check your inbox soon.';
      newsletterEmail.value = '';

      setTimeout(() => {
        newsletterFeedback.textContent = '';
      }, 5000);
    });
  }

  // 3. Dynamic Navbar Active Item Highlighting on Scroll
  const sections = document.querySelectorAll('section[id], main[id]');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });

});