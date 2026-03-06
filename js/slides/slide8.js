// Slide 8 (Vùng đệm) - Bento Grid & Organic Overlays

const html = `
<div class="slide-container absolute inset-0 flex flex-col items-center justify-center p-4 lg:p-12 overflow-hidden">
    
    <!-- Organic Forest Overlay -->
    <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-overlay opacity-10 filter grayscale z-0"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-[#050908] via-[#050908]/90 to-transparent z-0"></div>

    <div class="w-full max-w-7xl h-full flex flex-col z-10 mt-10 relative">
        
        <div class="text-center mb-10 slide-header relative">
            <h2 class="text-emerald-400 font-bold tracking-[0.3em] uppercase mb-4 text-xs lg:text-sm inline-flex items-center">
                <span class="w-8 h-[1px] bg-emerald-500 mr-4"></span> Phân Khu 2 <span class="w-8 h-[1px] bg-emerald-500 ml-4"></span>
            </h2>
            <h1 class="text-5xl lg:text-7xl font-playfair italic text-white drop-shadow-2xl text-shadow-glow">Vùng Đệm</h1>
        </div>
        
        <!-- Bento Grid Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-6 lg:grid-rows-2 gap-6 flex-grow pb-8 bento-grid relative">
            
            <!-- Main Large Card -->
            <div class="bento-item lg:col-span-4 lg:row-span-2 relative group rounded-[2.5rem] overflow-hidden glass-panel border border-white/10 hover:border-emerald-500/30 transition-colors duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <div class="absolute inset-0 bg-[url('./assets/images/b3e3a4564f8e30f071cc287f5e4aa40d.jpg')] bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-1000"></div>
                <div class="absolute inset-0 bg-gradient-to-tr from-[#050908] via-[#050908]/60 to-transparent"></div>
                
                <div class="absolute bottom-0 left-0 p-10 w-full lg:w-3/4">
                    <div class="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(52,211,153,0.3)]">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                    </div>
                    <h3 class="text-3xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors">Khu Dân Cư Sinh Thái</h3>
                    <p class="text-gray-300 text-lg font-light leading-relaxed">Giữ nguyên hiện trạng làng xóm thuần nông, tạo bước chuyển tiếp mềm mại từ khu bảo tồn ra không gian sống. Tôn vinh vẻ đẹp bình dị của nông thôn Bình Thuận.</p>
                </div>
            </div>
            
            <!-- Small Card 1: Dragon Fruit -->
            <div class="bento-item lg:col-span-2 lg:row-span-1 relative group rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-rose-500/40 transition-colors duration-500 hover:shadow-[0_0_40px_rgba(244,63,94,0.15)] flex flex-col justify-end p-8">
                <div class="absolute inset-0 bg-[url('./assets/images/h26.jpg')] bg-cover bg-center opacity-30 group-hover:scale-110 transition-transform duration-1000 filter sepia-[20%]"></div>
                <div class="absolute inset-0 bg-gradient-to-t from-[#050908] to-transparent"></div>
                
                <div class="relative z-10">
                    <div class="flex items-center mb-3">
                        <span class="w-2 h-2 rounded-full bg-rose-500 mr-3 shadow-[0_0_10px_rgba(244,63,94,1)]"></span>
                        <h3 class="text-2xl font-bold text-white group-hover:text-rose-300 transition-colors">Vườn Thanh Long</h3>
                    </div>
                    <p class="text-gray-400 text-sm font-light">Cho phép khách du lịch trải nghiệm hái quả tại vườn và lắp đặt trạm nghỉ chân bằng gỗ tre.</p>
                </div>
            </div>
            
            <!-- Small Card 2: Longan -->
            <div class="bento-item lg:col-span-2 lg:row-span-1 relative group rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-amber-500/40 transition-colors duration-500 hover:shadow-[0_0_40px_rgba(251,191,36,0.15)] flex flex-col justify-end p-8">
                <div class="absolute inset-0 bg-[url('./assets/images/vuon-nhan-vinh-tuy-toa-do-song-ao-dep-het-nac-giua-long-thu-do-1-1640050576.jpg')] bg-cover bg-center opacity-30 group-hover:scale-110 transition-transform duration-1000 filter sepia-[20%]"></div>
                <div class="absolute inset-0 bg-gradient-to-t from-[#050908] to-transparent"></div>
                
                <div class="relative z-10">
                    <div class="flex items-center mb-3">
                        <span class="w-2 h-2 rounded-full bg-amber-500 mr-3 shadow-[0_0_10px_rgba(251,191,36,1)]"></span>
                        <h3 class="text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">Vườn Nhãn Vải</h3>
                    </div>
                    <p class="text-gray-400 text-sm font-light">Không gian rợp bóng mát, thích hợp cho mô hình dã ngoại, picnic dưới tán cây ăn trái.</p>
                </div>
            </div>
            
        </div>
        
    </div>
</div>
`;

function animateIn(el, timeline, direction) {
    const header = el.querySelector('.slide-header');
    const items = el.querySelectorAll('.bento-item');

    gsap.set(el, { opacity: 1 });
    
    // Clear any potential transform values explicitly to avoid conflict
    gsap.set(items, { clearProps: "transform,opacity" });

    if(header) gsap.set(header, { y: -30, opacity: 0 });
    
    if(items.length > 0) gsap.set(items[0], { x: -50, opacity: 0, scale: 0.95 });
    if(items.length > 1) gsap.set(items[1], { x: 50, opacity: 0, scale: 0.95 });
    if(items.length > 2) gsap.set(items[2], { y: 50, opacity: 0, scale: 0.95 });

    if(header) {
        timeline.to(header, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, 0);
    }
    
    if(items.length > 0) {
        timeline.to(items, { 
            x: 0, 
            y: 0, 
            scale: 1,
            opacity: 1, 
            duration: 1.2, 
            stagger: 0.15, 
            ease: "power3.out" 
        }, 0.2);

        // More organic, subtle floating that doesn't conflict with scale transforms
        el._floatTween = gsap.to(items, {
            y: (i) => i === 0 ? '-=8' : (i === 1 ? '+=6' : '-=6'),
            duration: (i) => 3.5 + i * 0.7,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
            delay: 1.5 // Only start floating after entry animation completely finishes
        });
    }
}

function animateOut(el, timeline, direction) {
    if (el._floatTween) el._floatTween.kill();
    
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
