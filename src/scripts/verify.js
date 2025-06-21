const cursorFollower = document.querySelector('.cursor-follower');
let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateFollower() {
    // Reduced movement speed by using a smaller multiplier (0.05 instead of 0.1)
    followerX += (mouseX - followerX) * 0.05;
    followerY += (mouseY - followerY) * 0.05;

    cursorFollower.style.left = followerX - 7.5 + 'px'; // Reduced offset
    cursorFollower.style.top = followerY - 7.5 + 'px'; // Reduced offset

    requestAnimationFrame(animateFollower);
}
animateFollower();

// Generate floating particles
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        particlesContainer.appendChild(particle);
    }
}
createParticles();

// Input field interactions
const inputField = document.getElementById('internId');

inputField.addEventListener('input', function () {
    this.value = this.value.toUpperCase();
});

inputField.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        verifyIntern();
    }
});

// Verify function
function verifyIntern() {
    const internId = document.getElementById('internId').value.trim();

    if (!internId) {
        showNotification('Please enter your Intern ID', 'error');
        return;
    }

    if (!/^[A-Z]{2,4}\d{3,4}$/.test(internId)) {
        showNotification('Please enter a valid Intern ID format (e.g., ITID000)', 'warning');
        return;
    }

    // Simulate verification process
    const verifyBtn = document.querySelector('.verify-btn');
    verifyBtn.innerHTML = 'Verifying...';
    verifyBtn.disabled = true;

    setTimeout(() => {
        showNotification('Verification complete! Certificate found.', 'success');
        verifyBtn.innerHTML = 'Verify';
        verifyBtn.disabled = false;
    }, 2000);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 30px;
        right: 30px;
        padding: 15px 25px;
        border-radius: 12px;
        color: white;
        font-weight: 600;
        z-index: 10000;
        backdrop-filter: blur(10px);
        border: 1px solid;
        animation: slideIn 0.3s ease;
    `;

    switch (type) {
        case 'success':
            notification.style.background = 'rgba(104, 229, 230, 0.2)';
            notification.style.borderColor = '#68e5e6';
            break;
        case 'error':
            notification.style.background = 'rgba(244, 67, 54, 0.2)';
            notification.style.borderColor = '#f44336';
            break;
        case 'warning':
            notification.style.background = 'rgba(255, 193, 7, 0.2)';
            notification.style.borderColor = '#ffc107';
            break;
        default:
            notification.style.background = 'rgba(82, 169, 198, 0.2)';
            notification.style.borderColor = '#52a9c6';
    }

    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 4000);
}

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
`;
document.head.appendChild(style);

// Add reduced mouse interaction effects (75% reduction)
document.addEventListener('mousemove', (e) => {
    const container = document.querySelector('.container');
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        // Reduced tilt effect by 75% (dividing by 80 instead of 20)
        const rotateX = (y - centerY) / 80;
        const rotateY = (centerX - x) / 80;

        container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    } else {
        container.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    }
});