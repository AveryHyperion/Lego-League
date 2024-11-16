document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll('.fade-in-left, .fade-in-right');
  
    const handleScroll = () => {
      animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight / 1.3;
  
        if (elementTop < triggerPoint) {
          element.classList.add("visible");
        }
      });
    };
  
    window.addEventListener("scroll", handleScroll);
  });
  