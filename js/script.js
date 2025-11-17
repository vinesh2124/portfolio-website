// Projects Data with enhanced structure
const projects = [
    {
        id: 1,
        title: "E-Commerce Website",
        description: "A fully responsive e-commerce platform with product filtering, cart functionality, and secure checkout.",
        fullDescription: "Built a complete e-commerce solution featuring user authentication, product catalog with advanced filtering, shopping cart, wishlist, and integrated Stripe payment processing. Implemented admin dashboard for inventory management and order tracking. The platform supports multiple payment methods and includes a comprehensive customer review system.",
        tags: ["React", "Node.js", "MongoDB", "Stripe", "JWT", "Redux"],
        icon: "fas fa-shopping-cart",
        image: "images/project-1.jpg",
        liveUrl: "https://ecommerce-demo.example.com",
        githubUrl: "https://github.com/username/ecommerce-project",
        featured: true,
        completionDate: "2023-11-15",
        challenges: [
            "Implemented real-time inventory management",
            "Integrated multiple payment gateways",
            "Optimized for mobile shopping experience"
        ],
        achievements: [
            "Reduced cart abandonment by 40%",
            "Achieved 99.8% uptime",
            "Processed 1000+ orders in first month"
        ]
    },
    {
        id: 2,
        title: "Task Management App",
        description: "A productivity app for managing tasks with drag-and-drop functionality and team collaboration features.",
        fullDescription: "Developed a collaborative task management application with real-time updates, drag-and-drop interface, team assignments, and progress tracking. Features include file attachments, comments, deadline reminders, and project templates. Built with Vue.js and Firebase for seamless real-time synchronization across devices.",
        tags: ["Vue.js", "Firebase", "SCSS", "PWA", "Vuex", "Real-time DB"],
        icon: "fas fa-tasks",
        image: "images/project-2.jpg",
        liveUrl: "https://taskmanager-demo.example.com",
        githubUrl: "https://github.com/username/task-manager",
        featured: true,
        completionDate: "2023-09-20",
        challenges: [
            "Real-time collaboration features",
            "Offline functionality with sync",
            "Cross-platform compatibility"
        ],
        achievements: [
            "Used by 500+ active users",
            "4.8-star rating on app store",
            "Featured in productivity blogs"
        ]
    },
    {
        id: 3,
        title: "Weather Dashboard",
        description: "A beautiful weather application with location-based forecasts and interactive charts.",
        fullDescription: "Created a responsive weather dashboard that provides current conditions, 7-day forecasts, and interactive charts. Features geolocation, city search, weather map integration with multiple data sources, and severe weather alerts. Includes personalized weather preferences and location-based recommendations.",
        tags: ["JavaScript", "API Integration", "Chart.js", "CSS3", "OpenWeather API", "Geolocation"],
        icon: "fas fa-cloud-sun",
        image: "images/project-3.jpg",
        liveUrl: "https://weather-dashboard.example.com",
        githubUrl: "https://github.com/username/weather-app",
        featured: false,
        completionDate: "2023-07-10",
        challenges: [
            "Multiple API integration",
            "Data visualization complexity",
            "Location accuracy optimization"
        ],
        achievements: [
            "95% forecast accuracy",
            "Under 2-second load time",
            "10,000+ monthly active users"
        ]
    },
    {
        id: 4,
        title: "Portfolio Website",
        description: "A modern, responsive portfolio website with dark mode toggle and smooth animations.",
        fullDescription: "Designed and developed a personal portfolio website with dynamic project展示, blog integration, and contact form. Implemented smooth animations, responsive design, SEO optimization, and performance enhancements. Features include project filtering, dark/light mode, and mobile-first responsive design.",
        tags: ["HTML5", "CSS3", "JavaScript", "GSAP", "Responsive Design", "SEO"],
        icon: "fas fa-laptop-code",
        image: "images/project-4.jpg",
        liveUrl: "https://portfolio.example.com",
        githubUrl: "https://github.com/username/portfolio",
        featured: false,
        completionDate: "2023-06-01",
        challenges: [
            "Cross-browser compatibility",
            "Performance optimization",
            "Accessibility compliance"
        ],
        achievements: [
            "100% Lighthouse score",
            "WCAG 2.1 AA compliant",
            "Featured on web design platforms"
        ]
    },
    {
        id: 5,
        title: "Social Media Dashboard",
        description: "Analytics dashboard for social media metrics with data visualization and reporting.",
        fullDescription: "Built a comprehensive social media analytics dashboard that aggregates data from multiple platforms including Twitter, Facebook, and Instagram. Features include customizable reports, trend analysis, automated scheduling, competitor tracking, and influencer identification with advanced data visualization using D3.js.",
        tags: ["React", "D3.js", "Express", "MySQL", "REST API", "Data Visualization"],
        icon: "fas fa-chart-line",
        image: "images/project-5.jpg",
        liveUrl: "https://social-dashboard.example.com",
        githubUrl: "https://github.com/username/social-dashboard",
        featured: true,
        completionDate: "2023-04-15",
        challenges: [
            "Multiple API rate limiting",
            "Real-time data processing",
            "Complex data visualization"
        ],
        achievements: [
            "Processed 1M+ data points daily",
            "Reduced reporting time by 80%",
            "Used by marketing agencies"
        ]
    },
    {
        id: 6,
        title: "Fitness Tracker",
        description: "Mobile application for tracking workouts, nutrition, and fitness progress over time.",
        fullDescription: "Developed a cross-platform fitness tracking application with workout logging, nutrition tracking, and progress analytics. Integrated with health APIs and features social sharing, workout plans, personal trainer matching, and community challenges. Includes AI-powered workout recommendations based on user progress and goals.",
        tags: ["React Native", "Redux", "Firebase", "HealthKit", "Nutrition API", "AI Integration"],
        icon: "fas fa-dumbbell",
        image: "images/project-6.jpg",
        liveUrl: "https://fitness-tracker.example.com",
        githubUrl: "https://github.com/username/fitness-tracker",
        featured: false,
        completionDate: "2023-02-28",
        challenges: [
            "Health data synchronization",
            "Cross-platform performance",
            "Battery optimization"
        ],
        achievements: [
            "10,000+ app downloads",
            "4.9-star rating on app stores",
            "Partnership with fitness influencers"
        ]
    }
];

// Project filtering and rendering
class ProjectManager {
    constructor() {
        this.projectsContainer = document.getElementById('projectsContainer');
        this.filterButtons = document.getElementById('projectFilters');
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.renderProjects();
        this.createFilterButtons();
        this.setupEventListeners();
    }

    createFilterButtons() {
        if (!this.filterButtons) return;

        const filters = [
            { id: 'all', name: 'All Projects' },
            { id: 'featured', name: 'Featured' },
            { id: 'react', name: 'React' },
            { id: 'vue', name: 'Vue.js' },
            { id: 'mobile', name: 'Mobile' }
        ];

        this.filterButtons.innerHTML = filters.map(filter => `
            <button class="filter-btn ${filter.id === 'all' ? 'active' : ''}" 
                    data-filter="${filter.id}">
                ${filter.name}
            </button>
        `).join('');
    }

    setupEventListeners() {
        if (this.filterButtons) {
            this.filterButtons.addEventListener('click', (e) => {
                if (e.target.classList.contains('filter-btn')) {
                    this.handleFilterClick(e.target);
                }
            });
        }

        // View Details button events - now navigates to project details page
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('view-project-btn')) {
                e.preventDefault();
                const projectId = parseInt(e.target.dataset.projectId);
                this.navigateToProjectDetails(projectId);
            }
        });
    }

    handleFilterClick(button) {
        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');

        // Filter projects
        this.currentFilter = button.dataset.filter;
        this.renderProjects();
    }

    getFilteredProjects() {
        switch (this.currentFilter) {
            case 'featured':
                return projects.filter(project => project.featured);
            case 'react':
                return projects.filter(project => project.tags.includes('React'));
            case 'vue':
                return projects.filter(project => project.tags.includes('Vue.js'));
            case 'mobile':
                return projects.filter(project => project.tags.includes('React Native'));
            default:
                return projects;
        }
    }

    renderProjects() {
        if (!this.projectsContainer) return;

        const filteredProjects = this.getFilteredProjects();
        
        this.projectsContainer.innerHTML = filteredProjects.map(project => `
            <div class="project-card fade-in" data-project-id="${project.id}">
                <div class="project-image">
                    ${project.image ? 
                        `<img src="${project.image}" alt="${project.title}" onerror="this.style.display='none'">` : 
                        `<i class="${project.icon}"></i>`
                    }
                    ${project.featured ? '<span class="featured-badge">Featured</span>' : ''}
                </div>
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.slice(0, 4).map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                        ${project.tags.length > 4 ? `<span class="project-tag">+${project.tags.length - 4} more</span>` : ''}
                    </div>
                    <div class="project-actions">
                        <button class="btn view-project-btn" data-project-id="${project.id}">
                            <i class="fas fa-external-link-alt"></i> View Details
                        </button>
                        ${project.liveUrl ? `
                            <a href="${project.liveUrl}" class="btn btn-outline" target="_blank" rel="noopener">
                                <i class="fas fa-eye"></i> Live Demo
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        `).join('');

        // Re-initialize fade-in animations for new elements
        setTimeout(() => this.initFadeAnimations(), 100);
    }

    navigateToProjectDetails(projectId) {
        // Store the project data in sessionStorage for the details page
        const project = projects.find(p => p.id === projectId);
        if (project) {
            sessionStorage.setItem('currentProject', JSON.stringify(project));
            window.location.href = `project-details.html?id=${projectId}`;
        }
    }

    initFadeAnimations() {
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    }
}

// Navigation Manager
class NavigationManager {
    constructor() {
        this.sections = document.querySelectorAll('section');
        this.navItems = document.querySelectorAll('.nav-links a');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.handleScroll());
        this.setupSmoothScrolling();
    }

    handleScroll() {
        let current = '';
        
        this.sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        this.navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').substring(1) === current) {
                item.classList.add('active');
            }
        });
    }

    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
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
    }
}

// Contact Form Manager
class ContactFormManager {
    constructor() {
        this.contactForm = document.getElementById('contactForm');
        this.init();
    }

    init() {
        if (this.contactForm) {
            this.contactForm.addEventListener('submit', (e) => this.handleSubmit(e));
            this.setupFormValidation();
        }
    }

    setupFormValidation() {
        const inputs = this.contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearError(input));
        });
    }

    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        switch (field.type) {
            case 'text':
                if (value.length < 2) {
                    isValid = false;
                    errorMessage = 'This field must be at least 2 characters long';
                }
                break;
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    isValid = false;
                    errorMessage = 'Please enter a valid email address';
                }
                break;
            default:
                if (!value) {
                    isValid = false;
                    errorMessage = 'This field is required';
                }
        }

        if (!isValid) {
            this.showError(field, errorMessage);
        } else {
            this.clearError(field);
        }

        return isValid;
    }

    showError(field, message) {
        this.clearError(field);
        field.classList.add('error');
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        field.parentNode.appendChild(errorElement);
    }

    clearError(field) {
        field.classList.remove('error');
        const existingError = field.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        // Validate all fields
        const inputs = this.contactForm.querySelectorAll('input, textarea');
        let isFormValid = true;

        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isFormValid = false;
            }
        });

        if (!isFormValid) {
            this.showNotification('Please fix the errors in the form before submitting.', 'error');
            return;
        }

        // Get form data
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            subject: document.getElementById('subject').value.trim(),
            message: document.getElementById('message').value.trim(),
            timestamp: new Date().toISOString()
        };

        // Show loading state
        const submitBtn = this.contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        try {
            // Simulate API call - replace with actual endpoint
            await this.sendFormData(formData);
            
            this.showNotification('Thank you for your message! I will get back to you soon.', 'success');
            this.contactForm.reset();
            
        } catch (error) {
            console.error('Form submission error:', error);
            this.showNotification('Sorry, there was an error sending your message. Please try again later.', 'error');
        } finally {
            // Reset button state
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    }

    async sendFormData(formData) {
        // Simulate API call - replace with actual fetch to your backend
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate random success/failure for demo
                if (Math.random() > 0.2) { // 80% success rate for demo
                    console.log('Form data would be sent to server:', formData);
                    resolve();
                } else {
                    reject(new Error('Network error'));
                }
            }, 1500);
        });
    }

    showNotification(message, type) {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
                <span>${message}</span>
            </div>
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => notification.classList.add('show'), 100);

        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }
}

// Application Initialization
class PortfolioApp {
    constructor() {
        this.projectManager = null;
        this.navigationManager = null;
        this.contactFormManager = null;
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.initializeManagers();
            this.setupGlobalEventListeners();
            console.log('Portfolio application initialized');
        });
    }

    initializeManagers() {
        this.projectManager = new ProjectManager();
        this.navigationManager = new NavigationManager();
        this.contactFormManager = new ContactFormManager();
    }

    setupGlobalEventListeners() {
        // Global click handler for external links
        document.addEventListener('click', (e) => {
            if (e.target.matches('a[href^="http"]') && !e.target.href.includes(window.location.hostname)) {
                e.target.setAttribute('rel', 'noopener noreferrer');
                e.target.setAttribute('target', '_blank');
            }
        });

        // Prevent broken image icons
        document.addEventListener('error', (e) => {
            if (e.target.tagName === 'IMG' && e.target.classList.contains('project-image')) {
                e.target.style.display = 'none';
                const fallbackIcon = e.target.closest('.project-image').querySelector('.fa');
                if (fallbackIcon) {
                    fallbackIcon.style.display = 'block';
                }
            }
        }, true);
    }
}

// Initialize the application
const portfolioApp = new PortfolioApp();