// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Projects horizontal scrolling
function scrollProjects(direction) {
    const scroller = document.querySelector('.projects-scroller');
    const scrollAmount = document.querySelector('.project-card').offsetWidth + 20; // card width + gap
    
    scroller.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

// Experience horizontal scrolling
function scrollExperience(direction) {
    const scroller = document.querySelector('.experience-scroller');
    const scrollAmount = document.querySelector('.experience-card').offsetWidth + 20; // card width + gap
    
    scroller.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

// Form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', { name, email, message });
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    this.reset();
});

// Add active class to current section in navigation
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelector(`nav a[href="#${sectionId}"]`).classList.add('active');
        } else {
            document.querySelector(`nav a[href="#${sectionId}"]`).classList.remove('active');
        }
    });
});

// Add active class to nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('nav a').forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active');
    });
});