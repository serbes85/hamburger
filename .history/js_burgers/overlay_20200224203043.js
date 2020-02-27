(function() {
  let open = document.querySelector(".fullscreen");
  let close = document.querySelector(".fullscreen-close");
  let overlayElement = document.querySelector(".nav");
 
  open.addEventListener("click", function(event) {
    event.preventDefault();

    overlayElement.classList.add("nav--active");
  });

  close.addEventListener("click", function(event) {
    event.preventDefault();

    overlayElement.classList.remove("nav--active");
  });
})();
