gsap.registerPlugin(ScrollTrigger);

// Hero Animation
gsap.from(".hero-content h1", {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power3.out"
});

gsap.from(".hero-content p", {
    duration: 1,
    opacity: 0,
    y: 50,
    delay: 0.3,
    ease: "power3.out"
});
// About Animation
gsap.from(".about-content img", {
    scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
    },
    duration: 1,
    opacity: 0,
    x: -50,
    ease: "power3.out"
});

// Project Animations (Example)
gsap.utils.toArray(".project-item").forEach(item => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 80%",
        },
        duration: 0.8,
        opacity: 0,
        y: 50,
        ease: "power2.out"
    });
});