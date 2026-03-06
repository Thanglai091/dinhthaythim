// Slide 5 (SWOT 1) - Exposed content

const html = `
<div class="slide-container absolute inset-0 flex flex-col items-center justify-center p-8">
    
    <div class="header-section text-center mb-10">
        <h2 class="text-emerald-400 font-bold tracking-widest uppercase mb-2 text-sm">Phân tích chiến lược</h2>
        <h1 class="text-4xl md:text-5xl font-bold text-white">Điểm Mạnh & Điểm Yếu</h1>
        <p class="text-gray-400 mt-4 max-w-2xl mx-auto">Đánh giá hiện trạng để xây dựng nền tảng phát triển du lịch bền vững.</p>
    </div>

    <div class="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        
        <!-- Strengths Panel -->
        <div class="swot-panel glass-panel p-8 rounded-3xl border border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.15)] flex flex-col h-full bg-emerald-900/20 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full border-b border-l border-emerald-500/20"></div>
            
            <div class="flex items-center mb-8 border-b border-emerald-500/30 pb-4">
                <div class="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mr-4">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <div>
                    <h2 class="text-3xl font-bold text-white">Strengths</h2>
                    <h3 class="text-emerald-400 font-medium">Điểm Mạnh</h3>
                </div>
            </div>
            
            <ul class="space-y-6 flex-1">
                <li class="swot-item flex items-start">
                    <span class="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/30 text-emerald-300 flex items-center justify-center mr-4">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    </span>
                    <p class="text-gray-200">Điểm du lịch tâm linh nổi tiếng, thu hút lượng lớn du khách tự tìm đến hành hương.</p>
                </li>
                <li class="swot-item flex items-start">
                    <span class="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/30 text-emerald-300 flex items-center justify-center mr-4">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    </span>
                    <p class="text-gray-200">Địa hình đa dạng, phong phú bao gồm rừng bạch mai, biển Cam Bình đẹp hoang sơ.</p>
                </li>
                <li class="swot-item flex items-start">
                    <span class="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/30 text-emerald-300 flex items-center justify-center mr-4">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    </span>
                    <p class="text-gray-200">Văn hóa địa phương đặc sắc, cộng đồng người dân bản địa thân thiện và hiếu khách.</p>
                </li>
            </ul>
        </div>

        <!-- Weaknesses Panel -->
        <div class="swot-panel glass-panel p-8 rounded-3xl border border-rose-500/50 shadow-[0_0_30px_rgba(225,29,72,0.15)] flex flex-col h-full bg-rose-900/20 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-bl-full border-b border-l border-rose-500/20"></div>

            <div class="flex items-center mb-8 border-b border-rose-500/30 pb-4">
                <div class="w-16 h-16 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center mr-4">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                </div>
                <div>
                    <h2 class="text-3xl font-bold text-white">Weaknesses</h2>
                    <h3 class="text-rose-400 font-medium">Điểm Yếu</h3>
                </div>
            </div>
            
            <ul class="space-y-6 flex-1">
                <li class="swot-item flex items-start">
                    <span class="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-rose-500/30 text-rose-300 flex items-center justify-center mr-4">
                        <span class="text-sm font-bold">!</span>
                    </span>
                    <p class="text-gray-200">Cơ sở hạ tầng và đường giao thông tại khu vực nông thôn quanh dinh còn nghèo nàn.</p>
                </li>
                <li class="swot-item flex items-start">
                    <span class="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-rose-500/30 text-rose-300 flex items-center justify-center mr-4">
                        <span class="text-sm font-bold">!</span>
                    </span>
                    <p class="text-gray-200">Dịch vụ đi kèm quanh dinh chủ yếu là đồ cúng bái, chưa có các sản phẩm du lịch sáng tạo để giữ chân khách.</p>
                </li>
                <li class="swot-item flex items-start">
                    <span class="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-rose-500/30 text-rose-300 flex items-center justify-center mr-4">
                        <span class="text-sm font-bold">!</span>
                    </span>
                    <p class="text-gray-200">Dễ bị tình trạng quá tải cục bộ vào mùa cao điểm (đặc biệt dịp lễ hội rằm 15 tháng 9).</p>
                </li>
            </ul>
        </div>

    </div>
</div>
`;

function animateIn(el, timeline, direction) {
    const header = el.querySelector('.header-section');
    const panels = el.querySelectorAll('.swot-panel');
    const items = el.querySelectorAll('.swot-item');

    gsap.set(el, { opacity: 1 });
    gsap.set(header, { y: -30, opacity: 0 });
    gsap.set(panels, { y: 50, opacity: 0 });
    gsap.set(items, { x: -20, opacity: 0 });

    timeline.to(header, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, 0)
            .to(panels, { 
                y: 0, 
                opacity: 1, 
                duration: 0.8, 
                stagger: 0.2, 
                ease: "power2.out" 
            }, "-=0.4")
            .to(items, {
                x: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.1,
                ease: "power2.out"
            }, "-=0.2");
}

function animateOut(el, timeline, direction) {
    const yOffset = direction === 'next' ? -50 : 50;
    
    timeline.to(el, {
        y: yOffset,
        opacity: 0,
        scale: 0.95,
        duration: 0.5,
        ease: "power2.in"
    }, 0);
}

export default {
    html,
    animateIn,
    animateOut
};
