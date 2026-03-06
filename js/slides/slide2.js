// Slide 2 (Vị trí) - Interactive Google Maps (Dark Mode)

const html = `
<div class="slide-container absolute inset-0 flex items-center justify-center p-8 bg-[#030706]">
    
    <!-- Background Ambient Glow -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div class="absolute top-1/4 -right-1/4 w-[50vw] h-[50vw] bg-emerald-900/10 rounded-full blur-[100px]"></div>
        <div class="absolute -bottom-1/4 -left-1/4 w-[50vw] h-[50vw] bg-teal-900/10 rounded-full blur-[100px]"></div>
    </div>

    <div class="w-full max-w-7xl h-full max-h-[85vh] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
        
        <!-- Left Content -->
        <div class="lg:col-span-5 h-full flex flex-col justify-center content-left z-10 p-4 lg:p-8">
            <h2 class="text-emerald-400 font-bold tracking-[0.3em] uppercase mb-4 text-xs lg:text-sm flex items-center mt-8 lg:mt-0">
                <span class="w-8 h-[1px] bg-emerald-500 mr-4"></span> Vị trí địa lý
            </h2>
            <h1 class="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-8 text-white leading-tight drop-shadow-2xl font-playfair">
                Tâm Điểm <br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">Chiến Lược</span>
            </h1>
            
            <div class="space-y-8 mt-4 lg:mt-8">
                <!-- Location Item 1 -->
                <div class="location-item group flex items-start">
                    <div class="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-emerald-400 mr-5 border border-white/10 group-hover:border-emerald-500/50 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold text-gray-100 group-hover:text-emerald-300 transition-colors">Tam Giác Du Lịch</h3>
                        <p class="text-gray-400 mt-2 text-sm leading-relaxed">Nằm ngay trung tâm chóp tam giác TP.HCM - Vũng Tàu - Phan Thiết.</p>
                    </div>
                </div>
                
                <!-- Location Item 2 -->
                <div class="location-item group flex items-start">
                    <div class="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-cyan-400 mr-5 border border-white/10 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold text-gray-100 group-hover:text-cyan-300 transition-colors">Kết Nối Tiện Lợi</h3>
                        <p class="text-gray-400 mt-2 text-sm leading-relaxed">Giao thông thông suốt, tiếp cận nhanh qua các tuyến sinh thái đường thuỷ bộ.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Right Content: Interactive Map -->
        <div class="lg:col-span-7 content-right relative w-full h-[400px] lg:h-[600px] rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            
            <!-- Floating overlay UI to make it look embedded -->
            <div class="absolute top-4 left-4 z-20 px-4 py-2 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 pointer-events-none map-float-tag">
                <div class="flex items-center text-emerald-400 text-xs font-bold uppercase tracking-widest">
                    <span class="w-2 h-2 rounded-full bg-emerald-500 mr-2 shadow-[0_0_8px_rgba(16,185,129,1)]"></span>
                    Live GPS Location
                </div>
            </div>

            <!-- The Iframe Map -->
            <iframe 
                src="https://maps.google.com/maps?q=Dinh%20Th%E1%BA%A7y%20Th%C3%ADm@10.7234742,107.8445932&z=16&output=embed" 
                class="w-full h-full border-0 iframe-map outline-none" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                style="filter: grayscale(85%) invert(100%) contrast(90%) hue-rotate(185deg) brightness(85%);"
            ></iframe>
            
            <!-- Protective glass edge -->
            <div class="absolute inset-0 pointer-events-none border border-white/5 rounded-3xl z-30"></div>
        </div>
        
    </div>
</div>
`;

function animateIn(el, timeline, direction) {
    const leftContent = el.querySelector('.content-left');
    const items = el.querySelectorAll('.location-item');
    const mapBox = el.querySelector('.content-right');
    const floatTag = el.querySelector('.map-float-tag');

    gsap.set(el, { opacity: 1 });
    
    // Initial states for Left Panel
    gsap.set(leftContent, { x: -50, opacity: 0 });
    gsap.set(items, { y: 20, opacity: 0 });
    
    // Initial states for Map Right Panel
    gsap.set(mapBox, { x: 100, opacity: 0, clipPath: 'inset(0 100% 0 0 rounded 1.5rem)' });
    gsap.set(floatTag, { y: -20, opacity: 0 });

    // Entry Animations
    timeline.to(leftContent, { x: 0, opacity: 1, duration: 1, ease: "power3.out" }, 0.2)
            .to(items, { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "back.out(1.5)" }, 0.5)
            .to(mapBox, { 
                x: 0, 
                opacity: 1, 
                clipPath: 'inset(0 0% 0 0 rounded 1.5rem)', 
                duration: 1.5, 
                ease: "power3.inOut" 
            }, 0)
            .to(floatTag, { y: 0, opacity: 1, duration: 0.6, ease: "back.out(2)" }, 1.2);
}

function animateOut(el, timeline, direction) {
    const leftContent = el.querySelector('.content-left');
    const mapBox = el.querySelector('.content-right');
    
    timeline.to(leftContent, { x: -30, opacity: 0, duration: 0.5, ease: "power2.in" }, 0)
            .to(mapBox, { scale: 0.95, opacity: 0, duration: 0.6, ease: "power2.inOut" }, 0.1)
            .to(el, { opacity: 0, duration: 0.8, ease: "power2.inOut" }, 0.2);
}

export default {
    html,
    animateIn,
    animateOut
};
