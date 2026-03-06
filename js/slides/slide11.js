// Slide 11 (Quản lý) - The Glowing Tree / Organic Network Concept

const html = `
<div class="slide-container absolute inset-0 bg-[#020504] overflow-hidden flex items-center justify-center">
    
    <!-- Background Ambient & Organic Glow -->
    <div class="absolute inset-0 pointer-events-none z-0">
        <div class="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-emerald-900/10 rounded-full blur-[120px]"></div>
        <div class="absolute top-[10%] right-[10%] w-[40vw] h-[40vw] bg-amber-900/10 rounded-full blur-[100px]"></div>
    </div>

    <!-- The Organic Network SVG (Glowing Tree branches) -->
    <svg class="absolute inset-0 w-full h-full pointer-events-none z-0 organic-svg drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1920 1080">
        <defs>
            <linearGradient id="branch-grad-main" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#10b981" />
                <stop offset="50%" stop-color="#34d399" />
                <stop offset="100%" stop-color="#fbbf24" stop-opacity="0.8" />
            </linearGradient>
            <linearGradient id="branch-grad-sub" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#10b981" stop-opacity="0.8"/>
                <stop offset="100%" stop-color="#2dd4bf" stop-opacity="0.5"/>
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
        </defs>
        
        <!-- Main Trunk starting from bottom left -->
        <path class="tree-branch" d="M -100 1180 C 200 1000, 300 800, 450 540" fill="none" stroke="url(#branch-grad-main)" stroke-width="8" stroke-linecap="round" filter="url(#glow)"/>
        
        <!-- Branch 1 (to bottom right) -->
        <path class="tree-branch" d="M 450 540 C 600 300, 800 600, 1050 750 C 1300 900, 1600 850, 1850 700" fill="none" stroke="url(#branch-grad-main)" stroke-width="4" stroke-linecap="round" filter="url(#glow)"/>
        
        <!-- Branch 2 (to top middle) -->
        <path class="tree-branch" d="M 450 540 C 550 350, 750 200, 1100 250 C 1400 300, 1600 150, 1800 100" fill="none" stroke="url(#branch-grad-sub)" stroke-width="3" stroke-linecap="round" filter="url(#glow)"/>
        
        <!-- Branch 3 (sub branch) -->
        <path class="tree-branch" d="M 1050 750 C 1200 600, 1300 500, 1550 450" fill="none" stroke="url(#branch-grad-sub)" stroke-width="2" stroke-linecap="round" filter="url(#glow)"/>
        
        <!-- Nodes/Leaves of light -->
        <circle class="tree-node" cx="450" cy="540" r="6" fill="#fbbf24" filter="url(#glow)"/>
        <circle class="tree-node" cx="1050" cy="750" r="5" fill="#34d399" filter="url(#glow)"/>
        <circle class="tree-node" cx="1100" cy="250" r="5" fill="#10b981" filter="url(#glow)"/>
        <circle class="tree-node" cx="1550" cy="450" r="4" fill="#2dd4bf" filter="url(#glow)"/>
    </svg>

    <!-- Asymmetric Layout Container -->
    <div class="relative z-10 w-full h-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 px-8 py-16 lg:py-24">
        
        <!-- Left Column: Title (1/3) -->
        <div class="lg:col-span-4 flex flex-col justify-end lg:justify-center h-full pb-12 lg:pb-0 z-20">
            <div class="title-cluster backdrop-blur-md bg-white/5 rounded-2xl border border-white/5 p-6 lg:p-8">
                <h2 class="text-emerald-500 font-bold tracking-[0.4em] uppercase mb-4 text-xs lg:text-sm pl-1 border-l-2 border-emerald-500">Mô hình vận hành</h2>
                <div class="overflow-hidden mb-6">
                    <h1 class="main-heading text-5xl lg:text-7xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-200 via-yellow-400 to-amber-600 leading-[1.1] pb-2 drop-shadow-[0_0_20px_rgba(251,191,36,0.3)] transform translate-y-full">
                        Giải Pháp <br/>& Quản Lý
                    </h1>
                </div>
                <p class="lead-text text-gray-400 font-light text-base lg:text-lg leading-relaxed max-w-sm opacity-0">
                    Chuyển đổi chiến lược không chỉ là quy hoạch không gian, mà là <span class="text-emerald-300">đánh thức cộng đồng</span> và <span class="text-amber-300">bảo tồn linh hồn di sản</span>.
                </p>
            </div>
        </div>

        <!-- Right Column: Organic Typography Clusters (2/3) -->
        <div class="lg:col-span-8 relative h-[80vh] w-full z-20 layout-right-clusters">
            
            <!-- Cluster 1: Hợp tác xã (Top Left of Right Col) -->
            <div class="text-cluster absolute top-[0%] lg:top-[2%] left-[0%] lg:left-[2%] max-w-[320px] xl:max-w-md float-item backdrop-blur-md bg-white/5 rounded-2xl border border-white/5 p-6 z-30">
                <div class="overflow-hidden mb-2">
                    <h3 class="cluster-title text-xl lg:text-2xl font-playfair font-bold text-emerald-100 flex items-center transform translate-y-full">
                        <span class="w-6 h-[1px] bg-emerald-500 mr-2 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
                        Hợp Tác Xã Du Lịch
                    </h3>
                </div>
                <p class="cluster-text text-gray-300 text-xs xl:text-sm leading-relaxed font-light tracking-wide opacity-0 blur-filter">
                    <span class="float-left text-4xl lg:text-5xl font-playfair font-black text-emerald-400 pr-2 pt-1 leading-[0.8] drop-shadow-[0_0_15px_rgba(52,211,153,0.4)]">X</span>ây dựng mô hình du lịch dựa vào cộng đồng. Người dân không chỉ cung cấp dịch vụ, mà được đào tạo thành <span class="text-emerald-500 font-bold">"Đại sứ văn hóa"</span>, trực tiếp kể lại huyền tích <span class="text-amber-500 font-bold">Thầy Thím</span> bằng sự chân thành.
                </p>
            </div>

            <!-- Cluster 2: Hành Hương Xanh (Middle Right) -->
            <div class="text-cluster absolute top-[35%] lg:top-[35%] right-[-5%] lg:right-[-8%] xl:right-[-5%] max-w-[320px] xl:max-w-md float-item backdrop-blur-md bg-white/5 rounded-2xl border border-white/5 p-6 z-30" style="animation-delay: -1.5s;">
                <div class="overflow-hidden mb-2">
                    <h3 class="cluster-title text-xl lg:text-2xl font-playfair font-bold text-teal-200 flex items-center justify-end transform translate-y-full">
                        Hành Hương Xanh
                        <span class="w-6 h-[1px] bg-teal-400 ml-2 shadow-[0_0_10px_rgba(45,212,191,0.8)]"></span>
                    </h3>
                </div>
                <p class="cluster-text text-gray-300 text-xs xl:text-sm leading-relaxed font-light tracking-wide text-right opacity-0 blur-filter">
                    Thay đổi thói quen tín ngưỡng, khuyến khích <span class="text-teal-600 font-bold">dâng lễ nhẹ nhàng, thân thiện</span> môi trường thay vì đốt vàng mã. Bố trí trạm lọc nước sạch để giảm thiểu rác thải nhựa.
                </p>
            </div>

            <!-- Cluster 3: Marketing 4.0 (Bottom Left) -->
            <div class="text-cluster absolute bottom-[5%] lg:bottom-[8%] left-[0%] xl:left-[5%] max-w-[320px] xl:max-w-md float-item backdrop-blur-md bg-white/5 rounded-2xl border border-white/5 p-6 z-30" style="animation-delay: -3s;">
                <div class="overflow-hidden mb-2">
                    <h3 class="cluster-title text-xl lg:text-2xl font-playfair font-bold text-amber-200 flex items-center transform translate-y-full">
                        <span class="w-6 h-[1px] bg-amber-400 mr-2 shadow-[0_0_10px_rgba(251,191,36,0.8)]"></span>
                        Marketing 4.0
                    </h3>
                </div>
                <p class="cluster-text text-gray-300 text-xs xl:text-sm leading-relaxed font-light tracking-wide opacity-0 blur-filter">
                    Thiết kế thước phim ngắn <span class="text-amber-500 font-bold">đậm chất điện ảnh</span> về vẻ đẹp La Gi trên TikTok, Facebook. Kết hợp cùng <span class="text-emerald-500 font-bold">KOLs du lịch trải nghiệm</span> để lan tỏa cảm xúc chân thực, thay vì quảng cáo suông.
                </p>
            </div>

        </div>
    </div>
    
    <!-- Custom CSS for continuous breathing animations -->
    <style>
        @keyframes subtleFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
        }
        .float-item {
            animation: subtleFloat 6s ease-in-out infinite;
        }
    </style>
</div>
`;

function animateIn(el, timeline, direction) {
    // Select elements
    const mainHeading = el.querySelector('.main-heading');
    const leadText = el.querySelector('.lead-text');
    
    const branches = el.querySelectorAll('.tree-branch');
    const nodes = el.querySelectorAll('.tree-node');
    
    const textClusters = el.querySelectorAll('.text-cluster');

    // Initial setup
    gsap.set(el, { opacity: 1 });
    gsap.set(nodes, { scale: 0, opacity: 0, transformOrigin: 'center center' });
    
    // Prepare branch drawing SVG stroke
    branches.forEach(branch => {
        const length = branch.getTotalLength();
        gsap.set(branch, { strokeDasharray: length, strokeDashoffset: length });
    });

    // 1. Reveal Main Title (Left)
    timeline.to(mainHeading, { 
        y: "0%", 
        duration: 1.2, 
        ease: "power4.out" 
    }, 0.2)
    .to(leadText, { 
        opacity: 1, 
        duration: 1.5, 
        ease: "power2.out" 
    }, 0.6);

    // 2. Draw Organic Branches from tree trunk (bottom-left towards right)
    timeline.to(branches, {
        strokeDashoffset: 0,
        duration: 3,
        stagger: 0.4,
        ease: "power2.inOut"
    }, 0.5);

    // Fade in glowing nodes
    timeline.to(nodes, {
        scale: 1.5,
        opacity: 1,
        duration: 1.5,
        stagger: 0.3,
        ease: "elastic.out(1, 0.5)",
        yoyo: true, // Creates a pulse
        repeat: 1
    }, 2);
    timeline.to(nodes, {
        scale: 1,
        opacity: 0.8,
        duration: 1
    }, 3.5);

    // 3. Stagger Typography Clusters as "Light" reaches them
    // Updated: Wait for the branches to finish drawing before making text appear
    textClusters.forEach((cluster, index) => {
        const title = cluster.querySelector('.cluster-title');
        const text = cluster.querySelector('.cluster-text');
        
        // Base delay increased so text appears AFTER the 3s branch drawing completes (0.5s + 3s = 3.5s)
        const delay = 3.6 + (index * 0.5); 
        
        // Mask Reveal for Title
        timeline.to(title, {
            y: "0%",
            duration: 1,
            ease: "power3.out"
        }, delay);
        
        // Blur / Opacity reveal for Journal-style text
        timeline.fromTo(text, 
            { filter: "blur(12px)", opacity: 0 },
            { filter: "blur(0px)", opacity: 1, duration: 2, ease: "power2.out" },
            delay + 0.3
        );
    });
}

function animateOut(el, timeline, direction) {
    const branches = el.querySelectorAll('.tree-branch');
    const clusters = el.querySelectorAll('.text-cluster');
    const mainCol = el.querySelector('.lg\\:col-span-4');

    // Retract branches
    timeline.to(branches, {
        strokeDashoffset: (i, target) => target.getTotalLength(),
        duration: 0.8,
        ease: "power2.in"
    }, 0);

    // Fade out text clusters
    timeline.to(clusters, {
        opacity: 0,
        y: -20,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.in"
    }, 0.1);

    timeline.to(mainCol, {
        opacity: 0,
        x: -30,
        duration: 0.6,
        ease: "power2.in"
    }, 0.2);

    timeline.to(el, { opacity: 0, duration: 0.6 }, 0.5);
}

export default {
    html,
    animateIn,
    animateOut
};
