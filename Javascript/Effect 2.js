const leftToRightObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, {
    threshold: 0.1
});

const leftToRightCards = document.querySelectorAll('.left-to-right-card');
leftToRightCards.forEach(card => {
    leftToRightObserver.observe(card);
});
