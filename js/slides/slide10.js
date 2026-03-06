// Slide 10 (Sản phẩm) - Interactive Staggered Lists

const html = `
<div class="slide-container absolute inset-0 flex flex-col items-center justify-center p-8">
    
    <div class="text-center mb-12 z-10">
        <h2 class="text-amber-400 font-bold tracking-widest uppercase mb-2 text-sm">Gói Sản Phẩm</h2>
        <h1 class="text-4xl md:text-5xl font-bold text-white">Chạm Vào Văn Hóa & Đời Sống</h1>
    </div>

    <div class="w-full max-w-4xl z-10 product-list">
        
        <!-- Product 1 -->
        <div class="product-item glass-panel flex flex-col md:flex-row items-center p-4 rounded-3xl mb-6 border border-white/10 shadow-lg transform transition-transform hover:scale-[1.02] cursor-pointer group">
            <div class="w-full md:w-48 h-32 rounded-2xl overflow-hidden mb-4 md:mb-0 md:mr-6 shrink-0 relative">
                <div class="absolute inset-0 bg-amber-500/20 group-hover:bg-amber-500/0 transition-colors duration-300 z-10"></div>
                <img src="https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=400&q=80" alt="Hồn Di Sản" class="w-full h-full object-cover">
            </div>
            <div class="flex-1 pr-4">
                <div class="flex items-center justify-between mb-2">
                    <h3 class="text-2xl font-bold text-amber-400">Tour "Hồn Di Sản" (Buổi Tối)</h3>
                    <span class="bg-amber-500/20 text-amber-300 text-xs px-2 py-1 rounded border border-amber-500/30">Tâm Linh</span>
                </div>
                <p class="text-gray-300">Khám phá Dinh Thầy Thím về đêm dưới ánh sáng sắp đặt nghệ thuật. Kể chuyện lịch sử qua trải nghiệm âm thanh và biểu diễn múa bóng rỗi truyền thống, tránh đông đúc ban ngày.</p>
            </div>
        </div>

        <!-- Product 2 -->
        <div class="product-item glass-panel flex flex-col md:flex-row items-center p-4 rounded-3xl mb-6 border border-white/10 shadow-lg transform transition-transform hover:scale-[1.02] cursor-pointer group">
            <div class="w-full md:w-48 h-32 rounded-2xl overflow-hidden mb-4 md:mb-0 md:mr-6 shrink-0 relative">
                <div class="absolute inset-0 bg-emerald-500/20 group-hover:bg-emerald-500/0 transition-colors duration-300 z-10"></div>
                <img src="https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=400&q=80" alt="Nông Ngư Dân" class="w-full h-full object-cover">
            </div>
            <div class="flex-1 pr-4">
                <div class="flex items-center justify-between mb-2">
                    <h3 class="text-2xl font-bold text-emerald-400">Một Ngày Làm Nông/Ngư Dân</h3>
                    <span class="bg-emerald-500/20 text-emerald-300 text-xs px-2 py-1 rounded border border-emerald-500/30">Trải Nghiệm</span>
                </div>
                <p class="text-gray-300">Buổi sáng cùng ngư dân kéo lưới tại biển Cam Bình, buổi chiều cắt tỉa cành thanh long, chăm sóc nhãn tại vườn xã Tân Tiến.</p>
            </div>
        </div>

        <!-- Product 3 -->
        <div class="product-item glass-panel flex flex-col md:flex-row items-center p-4 rounded-3xl mb-6 border border-white/10 shadow-lg transform transition-transform hover:scale-[1.02] cursor-pointer group">
            <div class="w-full md:w-48 h-32 rounded-2xl overflow-hidden mb-4 md:mb-0 md:mr-6 shrink-0 relative">
                <div class="absolute inset-0 bg-red-500/20 group-hover:bg-red-500/0 transition-colors duration-300 z-10"></div>
                <img src="./assets/images/2R6A0022-1024x683.jpg" alt="Ẩm Thực mâm cơm" class="w-full h-full object-cover">
            </div>
            <div class="flex-1 pr-4">
                <div class="flex items-center justify-between mb-2">
                    <h3 class="text-2xl font-bold text-red-400">Mâm Cơm Tam Tân</h3>
                    <span class="bg-red-500/20 text-red-300 text-xs px-2 py-1 rounded border border-red-500/30">Ẩm Thực</span>
                </div>
                <p class="text-gray-300">Set menu đặc sản thiết kế dành riêng cho du khách. Thưởng thức gỏi cá mai giòn rụm, cá kho tộ đậm đà và canh chua cá bớp nấu lá me non.</p>
            </div>
        </div>

    </div>
</div>
`;

function animateIn(el, timeline, direction) {
    const headerRow = el.querySelector('.text-center');
    const items = el.querySelectorAll('.product-item');

    gsap.set(el, { opacity: 1 });
    gsap.set(headerRow, { y: -30, opacity: 0 });
    gsap.set(items, { x: 100, opacity: 0 });

    timeline.to(headerRow, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, 0)
            .to(items, { 
                x: 0, 
                opacity: 1, 
                duration: 0.8, 
                stagger: 0.2, 
                ease: "back.out(1.2)" 
            }, "-=0.4");
}

function animateOut(el, timeline, direction) {
    const items = el.querySelectorAll('.product-item');
    
    // Quick stagger out
    timeline.to(items, { 
        x: -50, 
        opacity: 0, 
        duration: 0.4, 
        stagger: 0.1, 
        ease: "power2.in" 
    }, 0).to(el, { opacity: 0, duration: 0.4 }, 0.2);
}

export default {
    html,
    animateIn,
    animateOut
};
