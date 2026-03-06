// Slide 7 (Vùng lõi) - Mystical Glow Rings & Colored Shadows

const html = `
<div class="slide-container absolute inset-0 flex flex-col items-center justify-center p-8">
    
    <div class="w-full max-w-7xl h-full mt-10 md:mt-16 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        
        <div class="text-content lg:w-5/12 flex flex-col justify-center space-y-8 z-10">
            <div>
                <h2 class="text-rose-400 font-bold tracking-[0.3em] uppercase mb-4 text-xs lg:text-sm flex items-center">
                    <span class="w-12 h-[1px] bg-rose-400 mr-4 shadow-[0_0_10px_rgba(251,113,133,0.8)]"></span> Phân Khu 1
                </h2>
                <h1 class="text-5xl lg:text-7xl font-playfair italic text-white mb-6 drop-shadow-2xl text-shadow-glow">Vùng Lõi</h1>
                <p class="text-gray-300 text-lg border-l-2 border-rose-500/50 pl-6 py-2 tracking-wide font-light bg-gradient-to-r from-rose-500/10 to-transparent">Trung tâm Tâm linh & Văn hóa Đầu nguồn.</p>
            </div>
            
            <div class="space-y-6">
                <div class="core-feature p-6 glass-panel rounded-3xl border border-rose-500/20 shadow-[0_0_30px_rgba(244,63,94,0.05)] hover:border-rose-400/50 transition-colors duration-500 group cursor-default">
                    <div class="w-12 h-12 bg-rose-500/20 text-rose-400 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-rose-500 group-hover:text-white transition-all shadow-[0_0_15px_rgba(244,63,94,0.3)]">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                    </div>
                    <h3 class="text-2xl font-bold text-white mb-3">Bảo Tồn Kiến Trúc</h3>
                    <p class="text-sm text-gray-400 leading-relaxed font-light">Nghiêm ngặt bảo vệ và trùng tu cấu trúc điêu khắc gỗ nguyên bản của Dinh Thầy Thím, tôn tạo cảnh quan tôn nghiêm.</p>
                </div>
                
                <div class="core-feature p-6 glass-panel rounded-3xl border border-orange-500/20 shadow-[0_0_30px_rgba(249,115,22,0.05)] hover:border-orange-400/50 transition-colors duration-500 group cursor-default">
                    <div class="w-12 h-12 bg-orange-500/20 text-orange-400 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                    </div>
                    <h3 class="text-2xl font-bold text-white mb-3">Lưu Niệm Truyền Thống</h3>
                    <p class="text-sm text-gray-400 leading-relaxed font-light">Quy hoạch đồng bộ các gian hàng với vật liệu tre, gỗ thân thiện. Cung cấp sản phẩm mộc mạc, đậm chất địa phương.</p>
                </div>
            </div>
        </div>
        
        <div class="gallery-content lg:w-7/12 relative flex items-center justify-center min-h-[500px]">
            <!-- Mystical Glow Rings -->
            <div class="glow-ring-1 absolute w-[600px] h-[600px] rounded-full border border-rose-500/10 mix-blend-screen opacity-50 shadow-[inset_0_0_50px_rgba(244,63,94,0.1)]"></div>
            <div class="glow-ring-2 absolute w-[400px] h-[400px] rounded-full border border-orange-500/20 mix-blend-color-dodge opacity-60 shadow-[0_0_80px_rgba(249,115,22,0.15)] flex justify-center items-center">
                <div class="glow-ring-3 absolute w-[200px] h-[200px] rounded-full bg-gradient-to-tr from-rose-500/20 to-orange-500/20 blur-[20px] mix-blend-screen"></div>
            </div>
            
            <!-- Floating Gallery Images with Colored Shadows -->
            <div class="gallery-img z-20 absolute -ml-40 -mt-20">
                <div class="relative rounded-2xl overflow-hidden glass-panel border border-white/20 p-2 bg-white/5 shadow-[0_20px_50px_rgba(244,63,94,0.3)] transform rotate-[-8deg] hover:rotate-0 transition-transform duration-700 w-80 h-56">
                    <div class="absolute inset-0 bg-rose-500/10 mix-blend-color z-10 pointer-events-none"></div>
                    <img src="./assets/images/e591ccc2-bao-tang-lich-su-quoc-gia-1.jpg" alt="Kiến trúc cổ" class="w-full h-full object-cover rounded-xl filter contrast-125">
                </div>
            </div>
            
            <div class="gallery-img z-30 absolute ml-32 mt-32">
                <div class="relative rounded-2xl overflow-hidden glass-panel border border-white/20 p-2 bg-white/5 shadow-[0_20px_50px_rgba(249,115,22,0.3)] transform rotate-[6deg] hover:rotate-0 transition-transform duration-700 w-80 h-56">
                    <div class="absolute inset-0 bg-orange-500/10 mix-blend-color z-10 pointer-events-none"></div>
                    <img src="./assets/images/qua-luu-niem-8.jpg" alt="Đồ lưu niệm" class="w-full h-full object-cover rounded-xl filter contrast-125">
                </div>
            </div>
        </div>
        
    </div>
</div>
`;

function animateIn(el, timeline, direction) {
    const textElements = el.querySelectorAll('.text-content > div');
    const features = el.querySelectorAll('.core-feature');
    const rings = el.querySelectorAll('[class*="glow-ring-"]');
    const images = el.querySelectorAll('.gallery-img');

    gsap.set(el, { opacity: 1 });
    gsap.set(textElements, { x: -50, opacity: 0 });
    gsap.set(features, { x: -30, opacity: 0 });
    gsap.set(rings, { scale: 0.5, opacity: 0, rotationZ: -45 });
    gsap.set(images, { scale: 0.8, opacity: 0, y: (i) => i === 0 ? 100 : -100, rotationZ: (i) => i === 0 ? '-20deg' : '20deg' });

    timeline.to(rings, { scale: 1, opacity: 1, rotationZ: 0, duration: 1.5, stagger: 0.2, ease: "power3.out" }, 0)
            .to(textElements, { x: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }, 0.2)
            .to(features, { x: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "back.out(1.2)" }, "-=0.6")
            .to(images, { scale: 1, opacity: 1, y: 0, rotationZ: 0, duration: 1.2, stagger: 0.2, ease: "back.out(1.5)" }, 0.4);
            
    // Ambient floating + Ring spinning
    el._floatTween = gsap.to(images, {
        y: (i) => i === 0 ? '-=20' : '+=15',
        x: (i) => i === 0 ? '+=10' : '-=10',
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
    });

    el._spinTween = gsap.to(rings[0], {
        rotationZ: 360,
        duration: 40,
        repeat: -1,
        ease: "none"
    });
}

function animateOut(el, timeline, direction) {
    if (el._floatTween) el._floatTween.kill();
    if (el._spinTween) el._spinTween.kill();
    
    timeline.to(el, {
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
