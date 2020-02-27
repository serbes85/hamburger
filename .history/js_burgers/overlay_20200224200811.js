(function() {
  let open = document.querySelector(".overlay");
  let close = document.querySelector(".overlay-x");
  let overlayElement = document.querySelector("nav");
 
  open.addEventListener("click", function(event) {
    event.preventDefault();

    overlayElement.classList.add("nav--active");
  });

  close.addEventListener("click", function(event) {
    event.preventDefault();

    overlayElement.classList.remove("nav--active");
  });
})();
