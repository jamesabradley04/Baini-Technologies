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
