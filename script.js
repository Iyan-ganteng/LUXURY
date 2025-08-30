console.log("Hello, world!");



function greet(name) {
    return `Halo, ${name}! Selamat datang di JavaScript.`;
}


console.log(greet("Paidi"));


document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("animButton");
    if (btn) {
        btn.addEventListener("click", function() {
            btn.classList.add("clicked");
            setTimeout(() => {
                btn.classList.remove("clicked");
            }, 100); 
        });
    }
});



document.addEventListener("DOMContentLoaded", function() {
    const btns = document.querySelectorAll(".animButton");
    btns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            btn.classList.add("clicked");
            setTimeout(() => {
                btn.classList.remove("clicked");
                const tujuan = btn.getAttribute("data-halaman");
                if (tujuan) {
                    window.location.href = tujuan;
                }
            }, 100);
        });
    });
});
 
        const toggleBtn = document.getElementById('toggleSidebar');
        const sidebar = document.getElementById('sidebarCategories');
        let sidebarOpen = false;

        toggleBtn.addEventListener('click', function() {
            sidebarOpen = !sidebarOpen;
            if(sidebarOpen) {
                sidebar.style.transform = 'translateX(0)';
            } else {
                sidebar.style.transform = 'translateX(-110%)';
            }
        });

       
        document.addEventListener('click', function(e) {
            if (sidebarOpen && !sidebar.contains(e.target) && e.target !== toggleBtn) {
                sidebar.style.transform = 'translateX(-110%)';
                sidebarOpen = false;
            }
        });