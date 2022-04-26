export const overlay = () => {
  const overlayModal = document.querySelector(".overlay");

  window.openOverlay = () => {
    overlayModal.style.display = "block";
  };

  window.closeOverlay = () => {
    overlayModal.style.display = "";
    overlayModal.innerHTML = "";
  };

  document.addEventListener("click", (e) => {
    if (e.target === overlayModal) {
      closeOverlay();
      glCloseModal();
    }
  });
};
