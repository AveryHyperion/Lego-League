function togglePopup() {
  const popupBox = document.getElementById('popup-box');
  
  // If popup is already visible, fade it out and then hide
  if (popupBox.classList.contains('active')) {
    popupBox.classList.remove('active');
    popupBox.classList.add('fade-out');
    setTimeout(() => {
      popupBox.classList.remove('fade-out');
      popupBox.style.display = 'none';
    }, 1000); // Match this delay to fade-out transition time
  } else {
    // Show popup and fade in
    popupBox.style.display = 'block';
    setTimeout(() => {
      popupBox.classList.add('active');
    }, 10); // Small delay to trigger transition
  }
}