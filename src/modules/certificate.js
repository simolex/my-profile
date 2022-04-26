import { animate, disableBodyScroll, enableBodyScroll } from "./helpers";

export const certificate = () => {
  const documents = document.getElementById("certificates");
  const documentOverlay = documents.querySelectorAll(".certificate__overlay");
  const overlay = document.querySelector(".overlay");
  const button = document.createElement("span");
  button.classList.add("overlay__close");
  button.textContent = "X";
  button.title = "Close";

  documents.addEventListener("click", (e) => {
    e.preventDefault();
    const sertificateDocument = e.target
      .closest(".certificate__docs")
      .querySelector(".certificate__image");
    if (sertificateDocument) {
      const sertificateImage = document.createElement("img");
      const startHeight = 35,
        finishHeight = 95;
      sertificateImage.style.height = `${startHeight}%`;
      sertificateImage.style.width = "auto";
      sertificateImage.classList.add("overlay--opened");
      sertificateImage.src = sertificateDocument.getAttribute("src");

      openOverlay();
      disableBodyScroll(true);
      window.glCloseModal = () => {
        closeOverlay();
        enableBodyScroll();
        window.glCloseModal = () => {};
      };

      overlay.append(sertificateImage);
      overlay.append(button);

      animate({
        duration: 400,
        timing: (timeFraction) => timeFraction,
        draw(progress) {
          sertificateImage.style.height = `${
            startHeight + Math.round((finishHeight - startHeight) * progress)
          }%`;
        },
      });
    }
  });
  documents.addEventListener(
    "mouseenter",
    (e) => {
      documentOverlay.forEach((overlay) => {
        if (overlay === e.target.closest(".certificate__overlay")) {
          overlay.style.opacity = 1;
        } else {
          overlay.style.opacity = 0;
        }
      });
    },
    true
  );
  documents.addEventListener(
    "mouseleave",
    (e) => {
      if (!e.target.closest(".certificate__overlay")) {
        documentOverlay.forEach((overlay) => (overlay.style.opacity = 0));
      }
    },
    true
  );
  document.addEventListener("click", (e) => {
    if (e.target === button) {
      glCloseModal();
    }
  });
};
