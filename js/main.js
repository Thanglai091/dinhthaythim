// Main entry point and state machine

gsap.registerPlugin(MotionPathPlugin);

const TOTAL_SLIDES = 12; 
let currentSlideIndex = 1;
let isAnimating = false;

const container = document.getElementById('app-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicator = document.getElementById('slide-indicator');

const slideCache = {};

// Ambient background slow animation
gsap.to("#ambient-bg", {
    backgroundPosition: "200px 200px",
    duration: 30,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

// Interactive Spotlight Logic (Mouse tracking)
document.addEventListener('mousemove', (e) => {
    // Update CSS variables for spotlight effect
    document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
});

// Magnetic Buttons
const magBtns = document.querySelectorAll('.magnetic-btn');
magBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(btn, { x: x * 0.4, y: y * 0.4, duration: 0.3, ease: "power2.out" });
    });
    btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
    });
});

// Canvas Particles (Fireflies effect)
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');
let particlesArray;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * -0.5 - 0.1;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.glow = Math.random() * 3 + 1;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.y < 0) this.y = canvas.height;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`;
        ctx.shadowBlur = this.glow * 5;
        ctx.shadowColor = '#d4af37';
        ctx.fill();
    }
}

function initParticles() {
    particlesArray = [];
    let numberOfParticles = (canvas.width * canvas.height) / 15000;
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    requestAnimationFrame(animateParticles);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
});

initParticles();
animateParticles();

// Router logic
async function loadSlide(index) {
    if (slideCache[index]) return slideCache[index];
    try {
        const module = await import(`./slides/slide${index}.js`);
        slideCache[index] = module.default;
        return slideCache[index];
    } catch (error) {
        console.error(`Failed to load slide ${index}:`, error);
        return {
            html: `<div class="slide-container active flex flex-col items-center justify-center h-full w-full"><h1 class="text-4xl text-emerald-400 mb-4">Slide ${index} đang cập nhật...</h1></div>`,
            animateIn: (el) => gsap.fromTo(el, {opacity:0}, {opacity:1, duration:1}),
            animateOut: (el) => gsap.to(el, {opacity:0, duration:0.5})
        };
    }
}

async function renderSlide(index, direction) {
    if (isAnimating) return;
    isAnimating = true;

    updateUI(index);

    const newSlideModule = await loadSlide(index);
    const newSlideEl = document.createElement('div');
    newSlideEl.innerHTML = newSlideModule.html;
    const incomingConfig = newSlideEl.firstElementChild; 
    container.appendChild(incomingConfig);

    const currentSlideEl = container.children.length > 1 ? container.children[0] : null;

    const timeline = gsap.timeline({
        onComplete: () => {
            if (currentSlideEl) currentSlideEl.remove();
            isAnimating = false;
        }
    });

    if (currentSlideEl) {
        const oldModule = slideCache[currentSlideIndex];
        if (oldModule && oldModule.animateOut) {
            oldModule.animateOut(currentSlideEl, timeline, direction);
        } else {
            timeline.to(currentSlideEl, { opacity: 0, scale: 0.95, duration: 0.6, ease: "power2.inOut" }, 0);
        }
    }

    gsap.set(incomingConfig, { visibility: 'visible', opacity: 1 });
    
    if (newSlideModule.animateIn) {
        newSlideModule.animateIn(incomingConfig, timeline, direction);
    } else {
        timeline.fromTo(incomingConfig, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.2");
    }

    currentSlideIndex = index;
}

function updateUI(index) {
    indicator.textContent = `${index} / ${TOTAL_SLIDES}`;
    prevBtn.disabled = index === 1;
    nextBtn.disabled = index === TOTAL_SLIDES;
}

function nextSlide() { if (currentSlideIndex < TOTAL_SLIDES && !isAnimating) renderSlide(currentSlideIndex + 1, 'next'); }
function prevSlide() { if (currentSlideIndex > 1 && !isAnimating) renderSlide(currentSlideIndex - 1, 'prev'); }

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
    else if (e.key === 'ArrowLeft') prevSlide();
});

renderSlide(1, 'next');
