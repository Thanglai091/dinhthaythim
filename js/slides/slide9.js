// Slide 9 (Trục Xanh) - SVG Glowing Trail & Glowing Features

const html = `
<div class="slide-container absolute inset-0 flex flex-col items-center justify-center p-8">
    
    <div class="text-center mb-8 slide-header z-10 w-full max-w-7xl pt-10">
        <h2 class="text-cyan-400 font-bold tracking-[0.3em] uppercase mb-4 text-xs lg:text-sm">Phân Khu 3</h2>
        <h1 class="text-5xl lg:text-7xl font-playfair italic text-white mb-4 drop-shadow-2xl text-shadow-glow">Trục Tuyến Tính & Lưu Trú Sinh Thái</h1>
    </div>

    <div class="w-full max-w-7xl relative flex-grow flex items-center justify-center min-h-[450px]">
        
        <!-- Connecting Glowing SVG Path -->
        <svg class="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]" preserveAspectRatio="none" viewBox="0 0 1000 400" z-index="0">
            <!-- Background track -->
            <path id="green-axis" d="M 100 200 C 300 50, 700 350, 900 200" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="4" stroke-linecap="round" />
            <!-- Animated glowing trail -->
            <path class="trail-line" d="M 100 200 C 300 50, 700 350, 900 200" fill="none" stroke="url(#cyanGrad)" stroke-width="4" stroke-linecap="round" />
            
            <defs>
                <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="rgba(34,211,238,0)" />
                    <stop offset="50%" stop-color="#22d3ee" />
                    <stop offset="100%" stop-color="#818cf8" />
                </linearGradient>
            </defs>
        </svg>

        <!-- Shooting Star (Particle moving along path) -->
        <div class="shooting-star absolute w-6 h-6 z-10 -ml-3 -mt-3">
            <div class="w-full h-full bg-white rounded-full shadow-[0_0_30px_rgba(255,255,255,1),0_0_60px_rgba(34,211,238,0.8)]"></div>
        </div>

        <!-- Node 1 -->
        <div class="axis-node absolute left-[10%] top-[45%] flex flex-col items-center transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div class="w-16 h-16 rounded-3xl glass-panel bg-white/5 border border-white/20 flex items-center justify-center text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.2)] mb-4 node-icon relative group">
                <div class="absolute inset-0 bg-cyan-400/20 rounded-3xl filter blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <svg class="w-8 h-8 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            </div>
            <div class="text-center w-56 glass-panel p-4 rounded-2xl border border-white/10 opacity-0 transform translate-y-4 node-info">
                <h3 class="font-bold text-white mb-2 text-lg">Homestay Gỗ Tre</h3>
                <p class="text-xs text-gray-400 font-light">Khu lưu trú thân thiện môi trường xen kẽ vườn cây.</p>
            </div>
        </div>

        <!-- Node 2 -->
        <div class="axis-node absolute left-[50%] top-[50%] flex flex-col items-center transform -translate-x-1/2 -translate-y-1/2 z-20 mt-16">
            <div class="text-center w-56 glass-panel p-4 rounded-2xl border border-white/10 opacity-0 transform -translate-y-4 node-info mb-4">
                <h3 class="font-bold text-white mb-2 text-lg">Trục Cảnh Quan Xanh</h3>
                <p class="text-xs text-gray-400 font-light">Tuyến đường hoa, cây bụi bản địa kết nối Dinh - Biển.</p>
            </div>
            <div class="w-16 h-16 rounded-3xl glass-panel bg-white/5 border border-white/20 flex items-center justify-center text-emerald-300 shadow-[0_0_30px_rgba(52,211,153,0.2)] node-icon relative group">
                <div class="absolute inset-0 bg-emerald-400/20 rounded-3xl filter blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <svg class="w-8 h-8 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
        </div>

        <!-- Node 3 -->
        <div class="axis-node absolute left-[90%] top-[45%] flex flex-col items-center transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div class="w-16 h-16 rounded-3xl glass-panel bg-white/5 border border-white/20 flex items-center justify-center text-indigo-300 shadow-[0_0_30px_rgba(129,140,248,0.2)] mb-4 node-icon relative group">
                <div class="absolute inset-0 bg-indigo-400/20 rounded-3xl filter blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <svg class="w-8 h-8 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg>
            </div>
            <div class="text-center w-56 glass-panel p-4 rounded-2xl border border-white/10 opacity-0 transform translate-y-4 node-info">
                <h3 class="font-bold text-white mb-2 text-lg">Biển Thể Thao Cam Bình</h3>
                <p class="text-xs text-gray-400 font-light">Khu lướt ván, thuyền buồm bãi biển. Không bê tông hóa.</p>
            </div>
        </div>

    </div>
</div>
`;

function animateIn(el, timeline, direction) {
    const header = el.querySelector('.slide-header');
    const trail = el.querySelector('.trail-line');
    const nodes = el.querySelectorAll('.node-icon');
    const infos = el.querySelectorAll('.node-info');
    const star = el.querySelector('.shooting-star');

    gsap.set(el, { opacity: 1 });
    gsap.set(header, { y: -30, opacity: 0 });
    gsap.set(nodes, { scale: 0, opacity: 0 });
    gsap.set(star, { opacity: 0 });
    
    // Trail line drawing
    const length = trail.getTotalLength();
    gsap.set(trail, { strokeDasharray: length, strokeDashoffset: length });

    timeline.to(header, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, 0)
            .to(trail, { strokeDashoffset: 0, duration: 2, ease: "power1.inOut" }, 0.5)
            .to(nodes, { scale: 1, opacity: 1, duration: 0.6, stagger: 0.6, ease: "back.out(2)" }, 0.5)
            .to(infos, { y: 0, opacity: 1, duration: 0.5, stagger: 0.6, ease: "power2.out" }, 0.7);

    // Shooting star animation running along SVG path continuously
    el._starTween = gsap.to(star, {
        duration: 4,
        ease: "power1.inOut",
        motionPath: {
            path: "#green-axis",
            align: "#green-axis",
            alignOrigin: [0.5, 0.5]
        },
        repeat: -1,
        yoyo: true,
        delay: 1,
        onStart: () => gsap.to(star, {opacity: 1, duration: 0.3})
    });
    
    // Ambient node float
    el._nodesTween = gsap.to(nodes, {
        y: -10,
        duration: 2,
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
        ease: "sine.inOut"
    });
}

function animateOut(el, timeline, direction) {
    if (el._starTween) el._starTween.kill();
    if (el._nodesTween) el._nodesTween.kill();

    const xOffset = direction === 'next' ? -50 : 50;
    timeline.to(el, {
        x: xOffset,
        opacity: 0,
        scale: 0.95,
        duration: 0.6,
        ease: "power2.inOut"
    }, 0);
}

export default {
    html,
    animateIn,
    animateOut
};
