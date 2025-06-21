// Scroll Reveal Animation
function scrollReveal() {
    const elements = document.querySelectorAll('.service-card, .portfolio-item, .team-member, .value-card, .process-step, .blog-post, .plan-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize elements with opacity 0 and translateY
document.querySelectorAll('.service-card, .portfolio-item, .team-member, .value-card, .process-step, .blog-post, .plan-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Add scroll event listener
window.addEventListener('scroll', scrollReveal);

// Trigger once on page load
window.addEventListener('load', scrollReveal);

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Project Modal
const projectModal = document.querySelector('.project-modal');
const modalContent = document.querySelector('.modal-content');
const closeModal = document.querySelector('.close-modal');
const viewProjectBtns = document.querySelectorAll('.view-project');

if (viewProjectBtns.length > 0) {
    viewProjectBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // In a real implementation, you would load the project content here
            // For this example, we'll just show the modal with placeholder content
            const projectTitle = btn.closest('.portfolio-overlay').querySelector('h3').textContent;
            const projectDesc = btn.closest('.portfolio-overlay').querySelector('p').textContent;
            
            const modalBody = document.querySelector('.modal-body');
            modalBody.innerHTML = `
                <h2>${projectTitle}</h2>
                <p>${projectDesc}</p>
                <p>This is a detailed case study about the project. In a real implementation, this would be loaded dynamically with actual project details, images, and results.</p>
                <div class="project-details">
                    <div class="detail-item">
                        <h4>Client</h4>
                        <p>Example Client</p>
                    </div>
                    <div class="detail-item">
                        <h4>Services</h4>
                        <p>Digital Marketing, SEO</p>
                    </div>
                    <div class="detail-item">
                        <h4>Results</h4>
                        <p>Increased traffic by 275%</p>
                    </div>
                </div>
                <img src="images/portfolio-1.jpg" alt="${projectTitle}" style="width:100%; border-radius:10px; margin:20px 0;">
                <a href="contact.html" class="btn">Start Your Project</a>
            `;
            
            projectModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });
}

// Close modal when clicking outside content
projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        projectModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

closeModal.addEventListener('click', () => {
    projectModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        
        // Simple validation
        if (emailInput.value && emailInput.value.includes('@')) {
            alert('Thank you for subscribing to our newsletter!');
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
}