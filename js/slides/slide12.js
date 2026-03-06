// Slide 12 (Kết luận) - Không Gian Lắng Đọng (Spotlight & Typography)

const html = `
<div class="slide-container absolute inset-0 flex flex-col items-center justify-center p-8 bg-[#010302] overflow-hidden">
    
    <!-- Stage Spotlight -->
    <div class="spotlight absolute top-0 left-1/2 transform -translate-x-1/2 w-[150vw] md:w-[80vw] h-[100vh] bg-[radial-gradient(ellipse_at_top,rgba(52,211,153,0.15)_0%,rgba(52,211,153,0.02)_40%,transparent_70%)] pointer-events-none opacity-0 z-0 origin-top"></div>
    <div class="spotlight-core absolute top-0 left-1/2 transform -translate-x-1/2 w-[80vw] md:w-[40vw] h-[100vh] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1)_0%,transparent_60%)] pointer-events-none opacity-0 z-0 origin-top"></div>

    <!-- Floating Dust Particles -->
    <div class="dust-container absolute inset-0 pointer-events-none z-0"></div>

    <!-- Content -->
    <div class="conclusion-box max-w-4xl relative z-10 text-center flex flex-col items-center">
        
        <p class="conclusion-quote text-2xl md:text-4xl text-gray-200 font-light italic leading-[1.8] tracking-wide mb-16 px-4">
            "Người dân sẽ tự nguyện bảo vệ nguyên vẹn di tích và tài nguyên, khi họ có thể sống ấm no bằng chính hoạt động du lịch trên chính ngôi nhà của mình."
        </p>

        <div class="thanks-wrapper relative overflow-hidden px-8 py-2">
            <h2 class="thanks-text text-4xl md:text-6xl font-playfair italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-white drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]">
                Cảm ơn Quý Vị Đã Lắng Nghe
            </h2>
            <div class="thanks-mask absolute inset-0 bg-[#010302] z-20 origin-left"></div>
        </div>
        
    </div>
</div>
`;

function animateIn(el, timeline, direction) {
    const spotlight = el.querySelector('.spotlight');
    const spotlightCore = el.querySelector('.spotlight-core');
    const quote = el.querySelector('.conclusion-quote');
    const thanksMask = el.querySelector('.thanks-mask');
    const dustContainer = el.querySelector('.dust-container');

    // Generate dust particles dynamically
    dustContainer.innerHTML = '';
    for(let i=0; i<30; i++) {
        const dust = document.createElement('div');
        dust.className = 'absolute rounded-full bg-emerald-200/50';
        const size = Math.random() * 3 + 1;
        dust.style.width = size + 'px';
        dust.style.height = size + 'px';
        dust.style.left = Math.random() * 100 + '%';
        dust.style.top = Math.random() * 100 + '%';
        dust.style.opacity = 0;
        dustContainer.appendChild(dust);
        
        gsap.to(dust, {
            y: "-=100",
            x: "+=" + (Math.random() * 40 - 20),
            opacity: Math.random() * 0.8,
            duration: 5 + Math.random() * 5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: Math.random() * 2
        });
    }

    gsap.set(el, { opacity: 1 });
    
    // Set for text reveal
    gsap.set([spotlight, spotlightCore], { opacity: 0, scaleY: 0 });
    gsap.set(quote, { opacity: 0, filter: "blur(15px)", y: 20 });
    gsap.set(thanksMask, { scaleX: 1 }); // Fully covers text

    // Cinematic sequence
    timeline.to([spotlight, spotlightCore], { opacity: 1, scaleY: 1, duration: 2.5, ease: "power2.out" }, 0.5)
            .to(quote, { y: 0, opacity: 1, filter: "blur(0px)", duration: 3, ease: "power1.inOut" }, 1)
            .to(thanksMask, { scaleX: 0, duration: 2.5, ease: "power2.inOut" }, 3);
            
    // Ambient spotlight sway
    el._swayTween1 = gsap.to(spotlight, {
        rotationZ: 2,
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
    });
    el._swayTween2 = gsap.to(spotlightCore, {
        rotationZ: -1,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
    });
}

function animateOut(el, timeline, direction) {
    if (el._swayTween1) el._swayTween1.kill();
    if (el._swayTween2) el._swayTween2.kill();
    
    // Fade out to pure black
    timeline.to(el, {
        opacity: 0,
        duration: 1.5,
        ease: "power2.inOut"
    }, 0);
}

export default {
    html,
    animateIn,
    animateOut
};
