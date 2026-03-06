// Slide 4 (Tầm nhìn)

const html = `
<div class="slide-container absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
    
    <div class="w-full max-w-5xl relative z-10 glass-panel p-12 md:p-16 rounded-[3rem] border border-emerald-500/30 overflow-hidden group">
        <!-- Animated background glow -->
        <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
        
        <div class="relative z-10">
            <h2 class="text-emerald-400 font-bold tracking-widest uppercase mb-4 text-sm md:text-md letter-spacing-2">Mục tiêu phát triển</h2>
            
            <h1 class="vision-title text-4xl md:text-6xl font-extrabold mb-8 text-white leading-tight">
                Chuyển Dịch Sang <br/>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Du Lịch Bền Vững</span>
            </h1>
            
            <div class="vision-slogan inline-block bg-white/10 px-8 py-4 rounded-full border border-white/20 mb-12 shadow-lg backdrop-blur-md">
                <span class="text-2xl md:text-3xl font-bold text-gray-200">"Giữ Chân Khách"</span>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-4 text-center md:text-left">
                <div class="vision-card bg-emerald-900/30 p-8 rounded-2xl border border-emerald-500/20">
                    <div class="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 mb-4 mx-auto md:mx-0">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-2 text-center md:text-left">Du Lịch Chữa Lành</h3>
                    <p class="text-gray-400 text-center md:text-left text-sm leading-relaxed">Đón đầu xu hướng du lịch phục hồi sức khỏe thể chất và tinh thần (wellness tourism), kết hợp không gian yên tĩnh của vùng nông thôn.</p>
                </div>
                
                <div class="vision-card bg-teal-900/30 p-8 rounded-2xl border border-teal-500/20">
                    <div class="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center text-teal-400 mb-4 mx-auto md:mx-0">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-2 text-center md:text-left">Du Lịch Xanh</h3>
                    <p class="text-gray-400 text-center md:text-left text-sm leading-relaxed">Gắn kết trải nghiệm với bảo tồn cảnh quan sinh thái, giảm tác động môi trường, tạo thu nhập bền vững cho cộng đồng bản địa.</p>
                </div>
            </div>
        </div>
    </div>
</div>
`;

function animateIn(el, timeline, direction) {
    const title = el.querySelector('.vision-title');
    const slogan = el.querySelector('.vision-slogan');
    const cards = el.querySelectorAll('.vision-card');
    const container = el.querySelector('.glass-panel');

    gsap.set(el, { opacity: 1 });
    
    const yStart = direction === 'next' ? 50 : -50;
    
    gsap.set(container, { scale: 0.9, opacity: 0 });
    gsap.set([title, slogan], { y: yStart, opacity: 0 });
    gsap.set(cards, { y: 30, opacity: 0 });

    timeline.to(container, { scale: 1, opacity: 1, duration: 1, ease: "power3.out" }, 0)
            .to(title, { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.2)" }, "-=0.6")
            .to(slogan, { y: 0, opacity: 1, duration: 0.8, ease: "elastic.out(1, 0.7)" }, "-=0.4")
            .to(cards, { y: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: "power2.out" }, "-=0.4");
}

function animateOut(el, timeline, direction) {
    const scaleEnd = direction === 'next' ? 1.1 : 0.9;
    timeline.to(el, {
        opacity: 0,
        scale: scaleEnd,
        duration: 0.6,
        ease: "power2.inOut"
    }, 0);
}

export default {
    html,
    animateIn,
    animateOut
};
