import Swiper, { Navigation } from "swiper";
import { slider } from "/modules/slider";

slider(
  new Swiper(".certificate__swiper", {
    modules: [Navigation],
    loop: true,
    slidesPerView: 3,
    // Navigation arrows
    navigation: {
      nextEl: ".services__arrow--right",
      prevEl: ".services__arrow--left",
      disabledClass: "services__arrow--disabled",
    },
    //edgeSwipeThreshold: 50,
    passiveListeners: false,
    threshold: 30,
  })
);
