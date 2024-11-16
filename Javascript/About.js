document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll(".fade-in-left, .fade-in-right");

  const handleScroll = () => {
      const windowHeight = window.innerHeight;

      elementsToAnimate.forEach(element => {
          const elementTop = element.getBoundingClientRect().top;
          const elementBottom = element.getBoundingClientRect().bottom;

          // Check if the element is visible in the viewport
          if (elementTop < windowHeight && elementBottom > 0) {
              element.classList.add("visible");
          } else {
              element.classList.remove("visible");
          }
      });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Check on page load
});
