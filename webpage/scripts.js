document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    });
    const sections = document.querySelectorAll("section");

    function revealSections() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight * 0.75; // Adjust visibility trigger point

            if (sectionTop < triggerPoint) {
                section.classList.add("show");
            }
        });
    }

    
    window.addEventListener("scroll", revealSections);
    revealSections(); // Run on page load
});


document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".hidden");

    function fadeInOnScroll() {
        elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85 && rect.bottom > 0) {
                el.classList.add("show");
            } else {
                el.classList.remove("show"); // Removes class when out of view
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Trigger on load in case elements are already in view
});


window.addEventListener("scroll", function() {
    const hero = document.getElementById("hero")
    var scrollPosition = window.scrollY;
    var translateY = window.scrollY * -0.05;
    hero.style.transform = `translateY(${translateY}%)`;
});
