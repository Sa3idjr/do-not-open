document.addEventListener("DOMContentLoaded", function() {
    // تأثير الكتابة التلقائية على العنوان
    const textElement = document.querySelector("h1");
    const text = textElement.innerHTML;
    textElement.innerHTML = "";
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            textElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            textElement.style.borderRight = "none";
        }
    }
    typeWriter();

    // تأثير الأيقونات العائمة
    const floatingIcons = document.querySelector(".floating-icons");
    for (let i = 0; i < 30; i++) {
        let icon = document.createElement("div");
        icon.classList.add("icon");
        icon.style.left = Math.random() * 100 + "vw";
        icon.style.animationDuration = (Math.random() * 5 + 5) + "s";
        icon.style.animationDelay = Math.random() * 3 + "s";
        icon.style.width = Math.random() * 30 + 30 + "px"; // أحجام مختلفة
        icon.style.opacity = Math.random() * 0.6 + 0.4; // شفافية متغيرة
        floatingIcons.appendChild(icon);
    }

    // تأثيرات دخول الصفحة
    document.querySelector(".container").style.opacity = "1";
    document.querySelector(".container").style.transform = "translateY(0)";

    // تأثير حركة على الماوس
    document.addEventListener("mousemove", (e) => {
        document.querySelectorAll(".icon").forEach((icon) => {
            let speed = icon.dataset.speed || (Math.random() * 3 + 1);
            let x = (window.innerWidth - e.pageX * speed) / 100;
            let y = (window.innerHeight - e.pageY * speed) / 100;
            icon.style.transform = `translate(${x}px, ${y}px) rotate(360deg)`;
        });
    });
});
