let clicked = false;
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

// document.querySelector(".menu-fourth").addEventListener("click", () => {
//   clicked = !clicked;
//   if (clicked) {
//     document.querySelector(".menu-fourth").style.cssText =
//       "background-color: rgb(238, 158, 101); transform: scale(1.3); transition-duration: 1s;";
//   }
// });
