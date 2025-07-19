// Dark mode functionality
const darkModeToggle = document.getElementById('darkModeToggle');
const html = document.documentElement;

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    html.classList.toggle('dark', currentTheme === 'dark');
}

darkModeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    const theme = html.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});

// User menu dropdown
const userMenuButton = document.getElementById('userMenuButton');
const userMenu = document.getElementById('userMenu');

userMenuButton.addEventListener('click', (e) => {
    e.stopPropagation();
    userMenu.classList.toggle('hidden');
});

document.addEventListener('click', (e) => {
    if (!userMenu.contains(e.target) && !userMenuButton.contains(e.target)) {
        userMenu.classList.add('hidden');
    }
});

// Mobile menu
const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Properties data
const properties = [
    {
        id: 1,
        title: "Luxury Villa in Beverly Hills",
        price: "$2,850,000",
        location: "Beverly Hills, CA",
        bedrooms: 5,
        bathrooms: 4,
        sqft: 4500,
        image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400&h=300&fit=crop",
        type: "Villa",
        featured: true
    },
    {
        id: 2,
        title: "Modern Penthouse Downtown",
        price: "$1,200,000",
        location: "Manhattan, NY",
        bedrooms: 3,
        bathrooms: 2,
        sqft: 2800,
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
        type: "Penthouse",
        featured: true
    },
    {
        id: 3,
        title: "Seaside Beach House",
        price: "$950,000",
        location: "Malibu, CA",
        bedrooms: 4,
        bathrooms: 3,
        sqft: 3200,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
        type: "Beach House",
        featured: true
    },
    {
        id: 4,
        title: "Urban Loft Space",
        price: "$750,000",
        location: "Brooklyn, NY",
        bedrooms: 2,
        bathrooms: 2,
        sqft: 1800,
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
        type: "Loft",
        featured: false
    },
    {
        id: 5,
        title: "Mountain Retreat Cabin",
        price: "$480,000",
        location: "Aspen, CO",
        bedrooms: 3,
        bathrooms: 2,
        sqft: 2100,
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
        type: "Cabin",
        featured: false
    },
    {
        id: 6,
        title: "Contemporary Townhouse",
        price: "$620,000",
        location: "Austin, TX",
        bedrooms: 3,
        bathrooms: 3,
        sqft: 2400,
        image: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=400&h=300&fit=crop",
        type: "Townhouse",
        featured: false
    }
];

// Agents data
const agents = [
    {
        id: 1,
        name: "Sarah Johnson",
        title: "Senior Real Estate Agent",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        phone: "+1 (555) 123-4567",
        email: "sarah@peaneche.com",
        properties: 45,
        rating: 4.9,
        experience: "8 years"
    },
    {
        id: 2,
        name: "Michael Chen",
        title: "Luxury Property Specialist",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        phone: "+1 (555) 234-5678",
        email: "michael@peaneche.com",
        properties: 38,
        rating: 4.8,
        experience: "6 years"
    },
    {
        id: 3,
        name: "Emma Rodriguez",
        title: "Commercial Real Estate Expert",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        phone: "+1 (555) 345-6789",
        email: "emma@peaneche.com",
        properties: 52,
        rating: 5.0,
        experience: "10 years"
    },
    {
        id: 4,
        name: "David Thompson",
        title: "Investment Property Advisor",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        phone: "+1 (555) 456-7890",
        email: "david@peaneche.com",
        properties: 29,
        rating: 4.7,
        experience: "5 years"
    }
];

// Load properties
function loadProperties() {
    const propertiesGrid = document.getElementById('propertiesGrid');
    const featuredProperties = properties.filter(p => p.featured);
    
    propertiesGrid.innerHTML = featuredProperties.map(property => `
        <div class="property-card card overflow-hidden group">
            <div class="relative overflow-hidden mb-4">
                <img src="${property.image}" alt="${property.title}" class="property-image w-full h-64 object-cover transition-transform duration-300">
                <div class="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ${property.type}
                </div>
                <div class="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ${property.price}
                </div>
            </div>
            <div class="p-2">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">${property.title}</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4 flex items-center">
                    <i class="fas fa-map-marker-alt mr-2"></i>${property.location}
                </p>
                <div class="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <span class="flex items-center"><i class="fas fa-bed mr-1"></i>${property.bedrooms} beds</span>
                    <span class="flex items-center"><i class="fas fa-bath mr-1"></i>${property.bathrooms} baths</span>
                    <span class="flex items-center"><i class="fas fa-ruler-combined mr-1"></i>${property.sqft} sqft</span>
                </div>
                <div class="flex gap-2">
                    <button class="flex-1 btn-primary text-sm py-2" onclick="openBookingModal('${property.title}')">
                        <i class="fas fa-calendar mr-2"></i>Book Viewing
                    </button>
                    <button class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Load agents
function loadAgents() {
    const agentsGrid = document.getElementById('agentsGrid');
    
    agentsGrid.innerHTML = agents.map(agent => `
        <div class="agent-card card text-center">
            <div class="relative mb-4">
                <img src="${agent.avatar}" alt="${agent.name}" class="agent-avatar w-24 h-24 rounded-full mx-auto mb-4 object-cover transition-transform duration-300">
                <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-xs font-semibold">
                    ★ ${agent.rating}
                </div>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">${agent.name}</h3>
            <p class="text-primary-600 dark:text-primary-400 text-sm mb-3">${agent.title}</p>
            <div class="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <p>${agent.experience} experience</p>
                <p>${agent.properties} properties sold</p>
            </div>
            <div class="flex gap-2">
                <button class="flex-1 btn-primary text-sm py-2">
                    <i class="fas fa-phone mr-1"></i>Call
                </button>
                <button class="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm py-2 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                    <i class="fas fa-envelope mr-1"></i>Email
                </button>
            </div>
        </div>
    `).join('');
}

// Dashboard functionality
const dashboardTabs = document.querySelectorAll('.dashboard-tab');
const dashboardContent = document.getElementById('dashboardContent');

dashboardTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        dashboardTabs.forEach(t => t.classList.remove('active', 'bg-white', 'dark:bg-gray-700', 'text-primary-600'));
        tab.classList.add('active', 'bg-white', 'dark:bg-gray-700', 'text-primary-600');
        
        const tabType = tab.id.replace('DashTab', '').toLowerCase();
        loadDashboard(tabType);
    });
});

function loadDashboard(type) {
    let content = '';
    
    switch(type) {
        case 'user':
            content = `
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div class="card text-center">
                        <div class="text-3xl font-bold text-primary-600 mb-2">12</div>
                        <p class="text-gray-600 dark:text-gray-400">Saved Properties</p>
                    </div>
                    <div class="card text-center">
                        <div class="text-3xl font-bold text-secondary-600 mb-2">5</div>
                        <p class="text-gray-600 dark:text-gray-400">Scheduled Viewings</p>
                    </div>
                    <div class="card text-center">
                        <div class="text-3xl font-bold text-purple-600 mb-2">3</div>
                        <p class="text-gray-600 dark:text-gray-400">Active Inquiries</p>
                    </div>
                    <div class="card text-center">
                        <div class="text-3xl font-bold text-orange-600 mb-2">8</div>
                        <p class="text-gray-600 dark:text-gray-400">Property Alerts</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div class="card">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
                        <div class="space-y-3">
                            <div class="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <i class="fas fa-heart text-red-500"></i>
                                <div>
                                    <p class="font-medium text-gray-900 dark:text-white">Saved Luxury Villa in Beverly Hills</p>
                                    <p class="text-sm text-gray-500">2 hours ago</p>
                                </div>
                            </div>
                            <div class="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <i class="fas fa-calendar text-primary-500"></i>
                                <div>
                                    <p class="font-medium text-gray-900 dark:text-white">Scheduled viewing for Modern Penthouse</p>
                                    <p class="text-sm text-gray-500">Yesterday</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Recommended Properties</h3>
                        <div class="space-y-3">
                            <div class="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <img src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=60&h=60&fit=crop" class="w-12 h-12 rounded-lg object-cover">
                                <div class="flex-1">
                                    <p class="font-medium text-gray-900 dark:text-white">Luxury Villa</p>
                                    <p class="text-sm text-gray-500">$2,850,000 • Beverly Hills</p>
                                </div>
                                <button class="text-primary-600 hover:text-primary-700">View</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            break;
            
        case 'agent':
            content = `
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div class="card text-center">
                        <div class="text-3xl font-bold text-primary-600 mb-2">45</div>
                        <p class="text-gray-600 dark:text-gray-400">Active Listings</p>
                    </div>
                    <div class="card text-center">
                        <div class="text-3xl font-bold text-secondary-600 mb-2">23</div>
                        <p class="text-gray-600 dark:text-gray-400">This Month Sales</p>
                    </div>
                    <div class="card text-center">
                        <div class="text-3xl font-bold text-purple-600 mb-2">$2.4M</div>
                        <p class="text-gray-600 dark:text-gray-400">Total Revenue</p>
                    </div>
                    <div class="card text-center">
                        <div class="text-3xl font-bold text-orange-600 mb-2">15</div>
                        <p class="text-gray-600 dark:text-gray-400">Pending Viewings</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div class="card">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Recent Inquiries</h3>
                        <div class="space-y-3">
                            <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <div>
                                    <p class="font-medium text-gray-900 dark:text-white">John Doe</p>
                                    <p class="text-sm text-gray-500">Interested in Beverly Hills Villa</p>
                                </div>
                                <div class="flex gap-2">
                                    <button class="btn-primary text-xs px-3 py-1">Contact</button>
                                </div>
                            </div>
                            <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <div>
                                    <p class="font-medium text-gray-900 dark:text-white">Jane Smith</p>
                                    <p class="text-sm text-gray-500">Viewing request for Penthouse</p>
                                </div>
                                <div class="flex gap-2">
                                    <button class="btn-primary text-xs px-3 py-1">Schedule</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Performance Metrics</h3>
                        <div class="space-y-4">
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span class="text-sm text-gray-600 dark:text-gray-400">Conversion Rate</span>
                                    <span class="text-sm font-medium text-gray-900 dark:text-white">78%</span>
                                </div>
                                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                    <div class="bg-primary-600 h-2 rounded-full" style="width: 78%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span class="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</span>
                                    <span class="text-sm font-medium text-gray-900 dark:text-white">95%</span>
                                </div>
                                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                    <div class="bg-secondary-600 h-2 rounded-full" style="width: 95%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            break;
            
        case 'admin':
            content = `
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div class="card text-center">
                        <div class="text-3xl font-bold text-primary-600 mb-2">1,247</div>
                        <p class="text-gray-600 dark:text-gray-400">Total Properties</p>
                    </div>
                    <div class="card text-center">
                        <div class="text-3xl font-bold text-secondary-600 mb-2">89</div>
                        <p class="text-gray-600 dark:text-gray-400">Active Agents</p>
                    </div>
                    <div class="card text-center">
                        <div class="text-3xl font-bold text-purple-600 mb-2">5,234</div>
                        <p class="text-gray-600 dark:text-gray-400">Registered Users</p>
                    </div>
                    <div class="card text-center">
                        <div class="text-3xl font-bold text-orange-600 mb-2">$24.7M</div>
                        <p class="text-gray-600 dark:text-gray-400">Total Revenue</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div class="card">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Platform Analytics</h3>
                        <div class="space-y-4">
                            <div class="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <span class="text-gray-600 dark:text-gray-400">Daily Active Users</span>
                                <span class="font-semibold text-gray-900 dark:text-white">2,847</span>
                            </div>
                            <div class="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <span class="text-gray-600 dark:text-gray-400">Monthly Transactions</span>
                                <span class="font-semibold text-gray-900 dark:text-white">$3.2M</span>
                            </div>
                            <div class="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <span class="text-gray-600 dark:text-gray-400">System Uptime</span>
                                <span class="font-semibold text-green-600">99.9%</span>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Top Performing Assets</h3>
                        <div class="space-y-3">
                            <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <div>
                                    <p class="font-medium text-gray-900 dark:text-white">Beverly Hills Villa</p>
                                    <p class="text-sm text-gray-500">156 views, 23 inquiries</p>
                                </div>
                                <span class="text-green-600 font-semibold">+15%</span>
                            </div>
                            <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <div>
                                    <p class="font-medium text-gray-900 dark:text-white">Manhattan Penthouse</p>
                                    <p class="text-sm text-gray-500">134 views, 19 inquiries</p>
                                </div>
                                <span class="text-green-600 font-semibold">+12%</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            break;
    }
    
    dashboardContent.innerHTML = content;
}

// Booking modal functionality
const bookingModal = document.getElementById('bookingModal');
const bookingProperty = document.getElementById('bookingProperty');
const closeBookingModal = document.getElementById('closeBookingModal');
const cancelBooking = document.getElementById('cancelBooking');
const bookingForm = document.getElementById('bookingForm');

function openBookingModal(propertyTitle) {
    bookingProperty.value = propertyTitle;
    bookingModal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
}

function closeModal() {
    bookingModal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
}

closeBookingModal.addEventListener('click', closeModal);
cancelBooking.addEventListener('click', closeModal);

bookingModal.addEventListener('click', (e) => {
    if (e.target === bookingModal) {
        closeModal();
    }
});

bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Booking request submitted successfully! We will contact you soon to confirm the viewing.');
    closeModal();
    bookingForm.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            mobileMenu.classList.add('hidden');
        }
    });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    loadProperties();
    loadAgents();
    loadDashboard('user'); // Load default dashboard
});

// Newsletter form submission
document.querySelectorAll('form').forEach(form => {
    if (form.id !== 'bookingForm') {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for subscribing! You will receive the latest updates and property listings.');
            form.reset();
        });
    }
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.card, .property-card, .agent-card').forEach(el => {
    observer.observe(el);
});
