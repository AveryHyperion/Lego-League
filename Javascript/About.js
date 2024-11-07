document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector(".about-me");
  
    const handleScroll = () => {
      const sectionTop = aboutSection.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight / 1.2;
  
      if (sectionTop < triggerPoint) {
        aboutSection.classList.add("visible");
        window.removeEventListener("scroll", handleScroll);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  });
  