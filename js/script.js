let clicked = false;

// first menu:
document.querySelector(".menu-first").addEventListener("click", () => {
  clicked = !clicked;
  console.log(clicked);
  if (clicked) {
    document.querySelector(".menu-first .circle1").style.cssText =
      "background-color: blue;";
    document.querySelector(".menu-first .circle2").style.cssText =
      "background-color: blue;";
    document.querySelector(".menu-first .circle3").style.cssText =
      "background-color: blue;";
    document.querySelector(".menu-first .circle4").style.cssText =
      "background-color: blue;";
    document.querySelector(".menu-first .circle5").style.cssText =
      "background-color: blue;";
    document.querySelector(".menu-first .circle6").style.cssText =
      "background-color: blue;";
    document.querySelector(".menu-first .circle7").style.cssText =
      "background-color: blue;";
    document.querySelector(".menu-first .circle8").style.cssText =
      "background-color: blue;";
    document.querySelector(".menu-first .circle9").style.cssText =
      "background-color: blue;";
  } else {
    document.querySelector(".menu-first .circle1").style.cssText =
      "background-color: var(--light-gray);";
    document.querySelector(".menu-first .circle2").style.cssText =
      "background-color: var(--light-gray);";
    document.querySelector(".menu-first .circle3").style.cssText =
      "background-color: var(--light-gray);";
    document.querySelector(".menu-first .circle4").style.cssText =
      "background-color: var(--light-gray);";
    document.querySelector(".menu-first .circle5").style.cssText =
      "background-color: var(--light-gray);";
    document.querySelector(".menu-first .circle6").style.cssText =
      "background-color: var(--light-gray);";
    document.querySelector(".menu-first .circle7").style.cssText =
      "background-color: var(--light-gray);";
    document.querySelector(".menu-first .circle8").style.cssText =
      "background-color: var(--light-gray);";
    document.querySelector(".menu-first .circle9").style.cssText =
      "background-color: var(--light-gray);";
  }
});
// gonna use loop for this later

// second menu:

// fourth menu:
// document.querySelector(".menu-fourth").addEventListener("click", () => {
//   clicked = !clicked;
//   if (clicked) {
//     document.querySelector(".menu-fourth").style.cssText =
//       "background-color: rgb(238, 158, 101); transform: scale(1.3); transition-duration: 1s;";
//   }
// });

// sixth menu:
// clicked = false;
// document.querySelector(".menu-sixth").addEventListener("click", () => {
//   clicked = !clicked;
//   if (clicked) {
//     document.querySelector(".menu-sixth .line1").style.cssText =
//       "position: relative; animation-name: sound-bars; animation-duration: 2s; animation-timing-function: ease-out; animation-iteration-count: infinite; animation-delay: 0s; animation-direction: alternate; animation-fill-mode: none; animation-play-state: running;";
//     document.querySelector(".menu-sixth .line2").style.cssText =
//       "position: relative; animation-name: sound-bars; animation-duration: 2s; animation-timing-function: ease-out; animation-iteration-count: infinite; animation-delay: 0s; animation-direction: alternate; animation-fill-mode: none; animation-play-state: running;";
//     document.querySelector(".menu-sixth .line3").style.cssText =
//       "position: relative; animation-name: sound-bars; animation-duration: 2s; animation-timing-function: ease-out; animation-iteration-count: infinite; animation-delay: 0s; animation-direction: alternate; animation-fill-mode: none; animation-play-state: running;";
//   }
// });
// wanna add keyframes here when I know how to do it

// seventh menu:
// clicked = false;
// document.querySelector(".menu-seventh").addEventListener("click", () => {
//   clicked = !clicked;
//   if (clicked) {
//     document.querySelector(".menu-seventh .line1").style.cssText =
//       "transition: 1s; width: 10rem; height: 1rem; transform: rotate(45deg) translate(2.2rem, 2.4rem); background-color: chartreuse;";
//     document.querySelector(".menu-seventh .line3").style.cssText =
//       "transition: 1s; width: 10rem; height: 1rem; transform: rotate(-45deg) translate(2.2rem, -2.4rem); background-color: chartreuse;";
//   } else {
//     document.querySelector(".menu-seventh .line1").style.cssText =
//       "width: 7.5rem;height: 1rem;background-color: var(--light-gray);border-radius: 5rem;z-index: 2; transition: 1s";
//     document.querySelector(".menu-seventh .line3").style.cssText =
//       "width: 7.5rem;height: 1rem;background-color: var(--light-gray);border-radius: 5rem;z-index: 2; transition: 1s";
//   }
// });
