document.addEventListener("DOMContentLoaded", function() {
    const profileImg = document.querySelector(".profile-img");
    
    // تأثير نبض للصورة
    setInterval(() => {
        profileImg.style.transform = "scale(1.05)";
        setTimeout(() => profileImg.style.transform = "scale(1)", 500);
    }, 3000);

    // تأثير ظهور النصوص عند التمرير
    const options = { threshold: 0.5 };
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, options);

    document.querySelectorAll(".points p").forEach(p => {
        p.style.opacity = "0";
        p.style.transform = "translateY(20px)";
        observer.observe(p);
    });
});
