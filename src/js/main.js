import "../scss/main.scss";
import "animate.css";
import { animate } from "./helper/animation";
import AOS from "aos";
// import "aos/dist/aos.css";

const loadingWrapper = document.querySelector(".loading-wrapper");
const body = document.querySelector("body");

Promise.all([
  import("./components/toggle-theme"),
  import("./components/theme"),
  import("./components/menu"),
])
  .then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("hi");
        animate(loadingWrapper, "fadeOut", 500);
      }, 1000);
    });
  })
  .then(() => {
    loadingWrapper.style.display = "none";
    return animate(body, "fadeIn");
  });
