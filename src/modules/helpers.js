const animate = ({ timing, draw, duration }) => {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) {
      timeFraction = 1;
    }

    // вычисление текущего состояния анимации
    let progress = timing(timeFraction);

    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
};

const enableBodyScroll = (callback) => {
  if (document.readyState === "complete") {
    document.body.style.position = "";
    document.body.style.overflowY = "";
    document.body.style.width = "";
    document.body.setAttribute("data-scroll-disabled", "false");

    if (document.body.style.marginTop) {
      const scrollTop = -parseInt(document.body.style.marginTop, 10);
      document.body.style.marginTop = "";
      window.scrollTo(window.scrollX, scrollTop);
    }

    if (callback !== undefined) {
      callback();
    }
  } else {
    window.addEventListener("load", enableBodyScroll);
  }
};

const disableBodyScroll = (savePosition = false) => {
  if (document.readyState === "complete") {
    document.body.setAttribute("data-scroll-disabled", "true");

    if (document.body.scrollHeight > window.innerHeight) {
      if (savePosition) {
        document.body.style.marginTop = `-${window.pageYOffset}px`;
      }
      document.body.style.position = "fixed";
      document.body.style.overflowY = "scroll";
      document.body.style.width = "100%";
    }
  } else {
    window.addEventListener("load", () => disableBodyScroll(savePosition));
  }
};

export { animate, enableBodyScroll, disableBodyScroll };
