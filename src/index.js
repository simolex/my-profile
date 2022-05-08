import Swiper, { Navigation } from "swiper";
import { overlay } from "./modules/overlay";
import { slider } from "/modules/slider";
import { certificate } from "./modules/certificate";

overlay();
slider(
  new Swiper(".certificate__swiper", {
    modules: [Navigation],
    //loop: true,
    slidesPerView: 3,
    navigation: {
      nextEl: ".certificate__button--next",
      prevEl: ".certificate__button--prev",
      disabledClass: "certificate__button--disabled",
    },

    //edgeSwipeThreshold: 50,
    passiveListeners: false,
    threshold: 30,
    //////
    //breakpointsBase: "container",

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      608: {
        slidesPerView: 3,
      },
    },
  })
);
certificate();
