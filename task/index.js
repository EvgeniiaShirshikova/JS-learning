document.addEventListener("DOMContentLoaded", function () {
  const openButton = document.querySelector(".slider-cta-1");
  const modal = document.querySelector(".we-offer-modal");
  const closeButton = document.querySelector(".close-button-1");
  const overlay = document.querySelector(".we-offer-modal_overlay");
  const infoCard = document.querySelector(".we-offer-info-card");

  if (window.matchMedia("(min-width: 992px)").matches) {
    openButton.addEventListener("click", () => {
      modal.classList.add("is-open");
      setTimeout(() => {
        overlay.classList.add("is-open");
        infoCard.classList.add("is-open");
      }, 10);
      setTimeout(() => {
        Webflow.require("slider").ready();
      }, 10);
    });

    function closeAll() {
      infoCard.classList.remove("is-open");
      overlay.classList.remove("is-open");
      setTimeout(() => {
        modal.classList.remove("is-open");
      }, 1000);
      swiper.update();
    }
    closeButton.addEventListener("click", closeAll);
    overlay.addEventListener("click", closeAll);
  } else {
    openButton.addEventListener("click", () => {
      modal.classList.add("is-open");
      setTimeout(() => {
        Webflow.require("slider").ready();
      }, 10);
    });

    function closeAll() {
      modal.classList.remove("is-open");
      swiper.update();
    }
    closeButton.addEventListener("click", closeAll);
  }

  if (window.matchMedia("(min-width: 768px)").matches) {
    const containers = document.querySelectorAll(
      ".is-swiper-homepage-hero .swiper-slide"
    );

    containers.forEach((container, index) => {
      const orderNumber = container.querySelector(".order-number");
      const totalNumber = container.querySelector(".total");
      totalNumber.textContent = containers.length;
      orderNumber.textContent = index + 1;
    });
  }
});
