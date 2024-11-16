document.addEventListener("DOMContentLoaded", function() {
  const researchContent = document.querySelector(".research-content");

  // Set up an Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          researchContent.classList.add("fade-in-up"); // Trigger animation
        } else {
          researchContent.classList.remove("fade-in-up"); // Reset animation when out of view
        }
      });
    },
    {
      threshold: 0.3, // Trigger animation when 30% of the element is visible
    }
  );

  observer.observe(researchContent);
});
