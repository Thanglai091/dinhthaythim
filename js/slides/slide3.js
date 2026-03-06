// Slide 3 (Di sản)

const html = `
<div class="slide-container absolute inset-0 flex items-center justify-center p-8">
    <div class="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div class="image-section relative h-[500px] w-full rounded-3xl overflow-hidden glass-panel border border-white/20">
            <div class="absolute inset-0 bg-[url('./assets/images/dinh-thay-thim-1.jpg')] bg-cover bg-center opacity-100 group-hover:scale-105 transition-transform duration-700"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent pointer-events-none slide3-overlay"></div>
            
            <div class="absolute bottom-8 left-8 right-8">
                <div class="w-16 h-1 w-full bg-emerald-500 rounded mb-4 max-w-[100px] origin-left decoration-line"></div>
                <h3 class="text-2xl font-bold text-white mb-2">Dinh Thầy Thím</h3>
                <p class="text-gray-300">Biểu tượng tín ngưỡng đặc sắc của vùng đất Bình Thuận.</p>
            </div>
        </div>

        <div class="content-section z-10 glass-panel p-10 rounded-3xl">
            <h2 class="text-emerald-400 font-bold tracking-widest uppercase mb-2 text-sm">Giá trị cốt lõi</h2>
            <h1 class="text-4xl md:text-5xl font-bold mb-6 text-white text-gradient bg-gradient-to-r from-amber-200 to-yellow-500">Di Sản Lịch Sử</h1>
            
            <div class="space-y-6 mt-8">
                <div class="heritage-item flex flex-col p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                    <h3 class="text-xl font-bold text-amber-400 mb-2 flex items-center">
                        <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                        Di Tích Cấp Quốc Gia
                    </h3>
                    <p class="text-gray-300 leading-relaxed">Được công nhận là di tích lịch sử văn hóa cấp quốc gia, mang ý nghĩa to lớn trong đời sống tâm linh của người dân địa phương và du khách thập phương.</p>
                </div>
                
                <div class="heritage-item flex flex-col p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                    <h3 class="text-xl font-bold text-yellow-400 mb-2 flex items-center">
                        <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                        Kiến Trúc Thời Nguyễn
                    </h3>
                    <p class="text-gray-300 leading-relaxed">Mang đậm dấu ấn nghệ thuật điêu khắc gỗ tinh xảo, phản ánh rõ nét kỹ thuật xây dựng và phong cách nghệ thuật kiến trúc thời Nguyễn.</p>
                </div>
            </div>
        </div>
        
    </div>
</div>
`;

function animateIn(el, timeline, direction) {
    const imageSection = el.querySelector('.image-section');
    const contentSection = el.querySelector('.content-section');
    const items = el.querySelectorAll('.heritage-item');
    const line = el.querySelector('.decoration-line');

    gsap.set(el, { opacity: 1 });
    
    // Initial states
    gsap.set(imageSection, { scale: 0.9, opacity: 0, transformOrigin: "left center" });
    gsap.set(contentSection, { x: 50, opacity: 0 });
    gsap.set(items, { y: 20, opacity: 0 });
    gsap.set(line, { scaleX: 0 });

    timeline.to(imageSection, { scale: 1, opacity: 1, duration: 1, ease: "power2.out" }, 0)
            .to(line, { scaleX: 1, duration: 0.6, ease: "power2.out" }, "-=0.4")
            .to(contentSection, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6")
            .to(items, { y: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: "back.out(1.5)" }, "-=0.4");
}

function animateOut(el, timeline, direction) {
    const xOffset = direction === 'next' ? -50 : 50;
    timeline.to(el, {
        x: xOffset,
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut"
    }, 0);
}

export default {
    html,
    animateIn,
    animateOut
};
