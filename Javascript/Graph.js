document.addEventListener("scroll", () => {
  const graphSection = document.querySelector(".graph-section");
  const graphLine = document.querySelector(".graph-line");

  const sectionPosition = graphSection.getBoundingClientRect().top;
  const sectionBottomPosition = graphSection.getBoundingClientRect().bottom;
  const screenPosition = window.innerHeight;

  // Check if the section is within the viewport
  if (sectionPosition < screenPosition && sectionBottomPosition > 0) {
      graphLine.style.strokeDashoffset = "0"; // Draw the line when in view
  } else {
      graphLine.style.strokeDashoffset = "1000"; // Reset line when out of view
  }
});
