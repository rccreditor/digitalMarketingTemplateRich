// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navbar = document.querySelector('.navbar');

mobileMenuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
    mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.navbar ul li a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        mobileMenuBtn.querySelector('i').classList.remove('fa-times');
        mobileMenuBtn.querySelector('i').classList.add('fa-bars');
    });
});

// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.style.opacity = '0';
    preloader.style.visibility = 'hidden';
});

// Testimonial Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
});

// Auto slide change every 5 seconds
setInterval(() => showSlide(currentSlide + 1), 5000);

// Service Tabs
const tabBtns = document.querySelectorAll('.services-tabs .tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab');
        
        tabBtns.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        btn.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});

// Pricing Tabs
const pricingTabBtns = document.querySelectorAll('.pricing-tabs .tab-btn');
const pricingTabContents = document.querySelectorAll('.pricing-plans .tab-content');

pricingTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab');
        
        pricingTabBtns.forEach(btn => btn.classList.remove('active'));
        pricingTabContents.forEach(content => content.classList.remove('active'));
        
        btn.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});

// Portfolio Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        
        filterBtns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');
        
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        question.classList.toggle('active');
    });
});

// Form Submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Here you would typically send the form data to a server
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Stats Counter
const statItems = document.querySelectorAll('.stat-item h3');

function animateStats() {
    statItems.forEach(item => {
        const target = parseInt(item.getAttribute('data-count'));
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            item.textContent = Math.floor(current);
            
            if (current >= target) {
                item.textContent = target + (item.getAttribute('data-count').endsWith('+') ? '+' : '');
                clearInterval(timer);
            }
        }, 20);
    });
}

// Initialize stats animation when scrolled to
window.addEventListener('scroll', () => {
    const statsSection = document.querySelector('.stats');
    if (isElementInViewport(statsSection)) {
        animateStats();
        // Remove event listener after animation to prevent re-triggering
        window.removeEventListener('scroll', this);
    }
});

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}