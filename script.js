// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all reveal elements
document.querySelectorAll('.problem-card, .focus-card, .vision-content, .about-content, .ai-era-content').forEach(el => {
  observer.observe(el);
});

// Infrastructure diagram animation on hover
const infraDiagram = document.querySelector('.infrastructure-diagram');
if (infraDiagram) {
  infraDiagram.addEventListener('mouseenter', function() {
    const nodes = this.querySelectorAll('.node');
    nodes.forEach((node, index) => {
      node.style.animation = `scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1}s both`;
    });
  });
}

// Add staggered animation to cards on page load
window.addEventListener('load', () => {
  const cards = document.querySelectorAll('.problem-card, .focus-card');
  cards.forEach((card, index) => {
    // Animation already applied via CSS, just ensure visibility
  });
});

// Mobile menu toggle (if needed for mobile nav)
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Smooth transition handled by CSS
  });
});
