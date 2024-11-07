document.addEventListener("scroll", () => {
    const graphSection = document.querySelector(".graph-section");
    const graphLine = document.querySelector(".graph-line");
  
    const sectionPosition = graphSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
  
    if (sectionPosition < screenPosition) {
      graphLine.style.strokeDashoffset = "0"; // Draw the line
    }
  });
  