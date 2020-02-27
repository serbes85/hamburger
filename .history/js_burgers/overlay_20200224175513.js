(function() {
  let open = document.querySelector(".overlay");
  let close = document.querySelector(".overlay-x");
  let overlayElement = document.querySelector("nav");
  let bodyActive = document.querySelector("body");
  let htmlActive = document.querySelector("html");

  open.addEventListener("click", function(event) {
   event.preventDefault();
   // bodyActive.classList.add("active");
   // htmlActive.classList.add("active");
   overlayElement.classList.add("breadcrumbs--active");
    // flag = true;
  });

  close.addEventListener("click", function(event) {
    event.preventDefault();
    // bodyActive.classList.remove("active");
    // htmlActive.classList.remove("active");
    overlayElement.classList.remove("breadcrumbs--active");
    // flag = false;
  });
})();

