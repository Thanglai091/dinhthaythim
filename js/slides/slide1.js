// Slide 1 (Hero) - Cinematic Reveal & Organic Pulse

const titlePart1 = 'Di sản'.split('').map(c => c === ' ' ? ' &nbsp; ' : `<span class="hero-char inline-block tracking-normal md:tracking-[0.1em]">${c}</span>`).join('');
const titlePart2 = 'Dinh Thầy Thím'.split('').map(c => c === ' ' ? ' &nbsp; ' : `<span class="hero-char inline-block tracking-normal md:tracking-[0.1em]">${c}</span>`).join('');

const html = `
<div class="slide-container absolute inset-0 flex flex-col items-center justify-center p-8 text-center overflow-hidden bg-[#030706]">
    
    <!-- Giant Glowing Pulse Backdrop -->
    <div class="glow-pulse absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[100vw] md:h-[100vw] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,rgba(6,78,59,0.05)_40%,transparent_70%)] rounded-full mix-blend-screen pointer-events-none z-0"></div>
    <div class="glow-pulse-core absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.08)_0%,transparent_60%)] rounded-full mix-blend-color-dodge pointer-events-none z-0"></div>

    <div class="relative z-10 w-full max-w-7xl flex flex-col items-center justify-center mt-8">
        
        <div class="hero-top-text flex items-center mb-6 md:mb-10 overflow-hidden">
            <span class="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent to-emerald-500 mr-4 md:mr-6 transform -translate-x-full line-left"></span>
            <h1 class="text-emerald-100/70 font-medium tracking-[0.3em] md:tracking-[0.8em] uppercase text-xs md:text-sm title-sub">
                Quy Hoạch Du Lịch Nông Thôn
            </h1>
            <span class="w-16 md:w-24 h-[1px] bg-gradient-to-l from-transparent to-emerald-500 ml-4 md:ml-6 transform translate-x-full line-right"></span>
        </div>
        
        <h2 class="hero-main-title flex flex-col items-center justify-center text-[2.5rem] sm:text-5xl md:text-7xl lg:text-[8rem] font-playfair font-black text-white leading-[1.3] md:leading-[1.1] drop-shadow-2xl mb-12 lg:mb-16 gap-4 md:gap-6 w-full px-2">
            <span class="block relative z-10 w-full text-center tracking-normal md:tracking-wide bg-transparent whitespace-nowrap">${titlePart1}</span>
            <span class="block w-full text-center text-emerald-300 drop-shadow-[0_0_30px_rgba(52,211,153,0.5)] relative z-20 pr-0 md:pr-4 tracking-normal md:tracking-wide bg-transparent whitespace-nowrap">
                ${titlePart2}
            </span>
        </h2>
        
        <div class="overflow-hidden mt-4">
            <p class="hero-slogan text-lg md:text-4xl font-light text-gray-300 italic font-playfair tracking-normal md:tracking-wide opacity-0 translate-y-full">
                "Không chỉ là hành hương, đó là trải nghiệm"
            </p>
        </div>
        
    </div>
    
    <!-- Ambient floating particles specific to hero -->
    <div class="hero-dust absolute inset-0 pointer-events-none z-0"></div>
</div>
`;

function animateIn(el, timeline, direction) {
    const lines = el.querySelectorAll('.line-left, .line-right');
    const subTitle = el.querySelector('.title-sub');
    const chars = el.querySelectorAll('.hero-char');
    const slogan = el.querySelector('.hero-slogan');
    const glow1 = el.querySelector('.glow-pulse');
    const glow2 = el.querySelector('.glow-pulse-core');
    const dustContainer = el.querySelector('.hero-dust');

    // Create Hero Dust
    dustContainer.innerHTML = '';
    for(let i=0; i<20; i++) {
        const dust = document.createElement('div');
        dust.className = 'absolute rounded-full bg-white/40 blur-[1px]';
        const size = Math.random() * 4 + 1;
        dust.style.width = size + 'px';
        dust.style.height = size + 'px';
        dust.style.left = Math.random() * 100 + '%';
        dust.style.top = Math.random() * 100 + '%';
        dust.style.opacity = 0;
        dustContainer.appendChild(dust);
        
        gsap.to(dust, {
            y: "-=150",
            x: "+=" + (Math.random() * 60 - 30),
            opacity: Math.random() * 0.6,
            duration: 6 + Math.random() * 6,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: Math.random() * 3
        });
    }

    // Initial states
    gsap.set(el, { opacity: 1 });
    gsap.set(subTitle, { opacity: 0, scale: 0.9, filter: "blur(5px)" });
    gsap.set(chars, { opacity: 0, y: 80, filter: "blur(20px)", scale: 1.2, rotationX: -40, transformOrigin: "50% 100%" });
    gsap.set([glow1, glow2], { scale: 0.7, opacity: 0 });

    timeline.to([glow1, glow2], { scale: 1, opacity: 1, duration: 3, ease: "sine.out" }, 0)
            .to(lines, { x: 0, duration: 1.5, ease: "power3.out" }, 0.2)
            .to(subTitle, { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.5, ease: "power2.out" }, 0.5)
            .to(chars, {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
                rotationX: 0,
                duration: 1.5,
                stagger: 0.08,
                ease: "power4.out"
            }, 0.8)
            .to(slogan, {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power3.out"
            }, 2.5);

    // Continuous pulsing organic lights - Slower & Smoother
    el._pulse1 = gsap.to(glow1, {
        scale: 1.05,
        opacity: 0.8,
        duration: 5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
    });
    el._pulse2 = gsap.to(glow2, {
        scale: 1.1,
        opacity: 0.6,
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: 1
    });
}

function animateOut(el, timeline, direction) {
    if (el._pulse1) el._pulse1.kill();
    if (el._pulse2) el._pulse2.kill();

    const chars = el.querySelectorAll('.hero-char');
    const slogan = el.querySelector('.hero-slogan');
    
    timeline.to(slogan, { opacity: 0, y: -20, duration: 0.4 }, 0)
    .to(chars, {
        opacity: 0,
        y: -40,
        filter: "blur(10px)",
        scale: 0.9,
        duration: 0.8,
        stagger: 0.02,
        ease: "power2.in"
    }, 0.1)
    .to(el, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut"
    }, 0.5);
}

export default {
    html,
    animateIn,
    animateOut
};
