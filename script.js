// ===================================
// OUR LITTLE DATE ♡
// JavaScript interactions
// ===================================


// 1. FLOATING HEARTS 💗

const heartStyle = document.createElement("style");

heartStyle.textContent = `
    .floating-heart {
        position: fixed;
        bottom: -30px;
        pointer-events: none;
        z-index: 9999;
        animation: floatUp linear forwards;
        opacity: 0;
    }

    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
        }

        15% {
            opacity: 0.7;
        }

        85% {
            opacity: 0.7;
        }

        100% {
            transform: translateY(-110vh) rotate(35deg);
            opacity: 0;
        }
    }

    .section {
        opacity: 0;
        transform: translateY(25px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }

    .section.show {
        opacity: 1;
        transform: translateY(0);
    }

    @media (prefers-reduced-motion: reduce) {
        .floating-heart {
            display: none;
        }

        .section {
            opacity: 1;
            transform: none;
            transition: none;
        }
    }
`;

document.head.appendChild(heartStyle);


function createHeart() {
    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    const hearts = ["♡", "♥", "💕", "💗"];

    heart.textContent =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (17 + Math.random() * 15) + "px";
    heart.style.animationDuration = (7 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 13000);
}


// Buat hati setiap 1,2 detik
setInterval(createHeart, 1200);


// 2. SCROLL REVEAL ✨

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

sections.forEach((section) => {
    observer.observe(section);
});