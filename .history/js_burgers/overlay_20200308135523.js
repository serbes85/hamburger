//fullscreen menu

(function () {
  let open = document.querySelector(".fullscreen");
  let close = document.querySelector(".fullscreen-close");
  let overlayElement = document.querySelector(".nav");

  open.addEventListener("click", function (event) {
    event.preventDefault();

    overlayElement.classList.add("nav--active");
  });

  close.addEventListener("click", function (event) {
    event.preventDefault();

    overlayElement.classList.remove("nav--active");
  });
})();

//accordeonTeam 

(function () {

  let accordeonTeam = document.querySelector(".accordeon");
  let items = document.querySelectorAll(".accordeon__item");
  // let currentActiveElement = Array.prototype.find.call(
  // 	items, elem => elem.classList.contains("accordeon__item--active")
  // );
  let currentItem;

  for (let i = 0; i < items.length; i++) {
    const element = items[i];

    if (element.classList.contains("accordeon__item--active")) {
      currentItem = element;
    }
  }

  accordeonTeam.addEventListener("click", function (event) {
    event.preventDefault();

    let accordeonTeamTrigger = event.target.closest(".accordeon__trigger");
    let accordeonTeamItem = event.target.closest(".accordeon__item");

    if (!accordeonTeamTrigger) {
      return;
    }

    if (currentItem !== accordeonTeamItem) {
      currentItem && currentItem.classList.remove("accordeon__item--active");
      currentItem = accordeonTeamItem;
      currentItem.classList.add("accordeon__item--active");
    } else {
      currentItem.classList.toggle("accordeon__item--active");
    }
  });
})();

//accordeonMenu

(function () {

  let accordeonMenu = document.querySelector(".menu__list");
  let items = document.querySelectorAll(".menu__item");
  // let currentActiveElement = Array.prototype.find.call(
  // 	items, elem => elem.classList.contains("accordeon__item--active")
  // );
  let currentItem;

  for (let i = 0; i < items.length; i++) {
    const element = items[i];

    if (element.classList.contains("menu__item--active")) {
      currentItem = element;
    }
  }

  accordeonMenu.addEventListener("click", function (event) {
    event.preventDefault();

    let accordeonMenuLink = event.target.closest(".menu__link");
    let accordeonMenuItem = event.target.closest(".menu__item");

    if (!accordeonMenuLink) {
      return;
    }

    if (currentItem !== accordeonMenuItem) {
      currentItem && currentItem.classList.remove("menu__item--active");
      currentItem = accordeonMenuItem;
      currentItem.classList.add("menu__item--active");
    } else {
      currentItem.classList.toggle("menu__item--active");
    }
  });
})();

// Reviews

(function () {
  let reviewsParent = document.querySelector(".reviews");
  const template = document.querySelector("#overlayTemplate").innerHTML;
  const overlay = createOverlay(template);

  reviewsParent.addEventListener("click", e => {
    e.preventDefault();

    if (e.target.classList.contains("button-detail")) {
      let reviewContent = e.target.closest(".person__description");

      if (!!reviewContent) {
        overlay.setContent(
          reviewContent.childNodes[1].textContent,
          reviewContent.childNodes[3].textContent
        );
        overlay.open();
      }
    }
  });

  function createOverlay(template) {
    let fragment = document.createElement("div");
    fragment.innerHTML = template;

    const overlayElement = fragment.querySelector(".overlay");
    const contentElement = fragment.querySelector(".overlay__text");
    const contentElementTitle = fragment.querySelector(".overlay__title");
    const closeElement = fragment.querySelector(".overlay__close");

    fragment = null;

    overlayElement.addEventListener("click", e => {
      if (e.target.parentNode === overlayElement) {
        closeElement.click();
      }
    });

    closeElement.addEventListener("click", () => {
      reviewsParent.removeChild(overlayElement);
    });

    return {
      open() {
        reviewsParent.appendChild(overlayElement);
      },
      close() {
        closeElement.click();
      },
      setContent(contentTitle, contentText) {
        contentElement.textContent = contentText;
        contentElementTitle.textContent = contentTitle;
      }
    };
  }
})();

// slider

(function () {
  let sliderList = document.querySelector(".slider__list");
  let sliderLeft = document.querySelector(".button-left");
  let sliderRight = document.querySelector(".button-right");
  const step = 20;
  let currentX = 0;

  sliderList.style.transform = "translateX(-" + currentX + "%)";

  sliderRight.addEventListener("click", function (event) {
    event.preventDefault();

    if (currentX < 80) {
      currentX += step;
      sliderList.style.transform = "translateX(-" + currentX + "%)";
    } else if (currentX == 80) {
      currentX = 0;
      sliderList.style.transform = "translateX(-" + currentX + "%)";
    }
  });

  sliderLeft.addEventListener("click", function (event) {
    event.preventDefault();

    if (currentX > 0) {
      currentX -= step;
      sliderList.style.transform = "translateX(-" + currentX + "%)";
    } else if (currentX == 0) {
      currentX = 80;
      sliderList.style.transform = "translateX(-" + currentX + "%)";
    }
  });
})();

// onePageScroll

(function () {

  const sections = $(".section");
  const display = $(".maincontent");
  const pagination = $(".pagination__item")
  let inScroll = false; //  флаг, для предотвращения инерции скролла при анимации

  const setActiveMenuPagination = paginationEq => {

    pagination
      .eq(paginationEq)
      .addClass("pagination__item--active")
      .siblings()
      .removeClass("pagination__item--active");


  }

  const performTransition = sectionEq => {
    const position = `${-sectionEq * 100}%`;

    if (inScroll) return;

    inScroll = true;

    sections
      .eq(sectionEq)
      .addClass("active")
      .siblings()
      .removeClass("active");

    display.css({
      transform: `translateY(${position})`,
      "-webkit-transform": `translateY(${position})`

    });

    const transitionDuration = parseInt(display.css("transition-duration")) * 1000; // умножение на 1000 для измерения в мс

    setTimeout(() => {

      inScroll = false;

      setActiveMenuPagination(sectionEq);

    }, transitionDuration + 300); // за 300 мс заканчивается инерция скролла

  };

  const scrollToSection = direction => {
    const sectionActive = sections.filter(".active");
    const nextSection = sectionActive.next();
    const prevSection = sectionActive.prev();

    if (direction == "up" && prevSection.length) {
      performTransition(prevSection.index());

    }


    if (direction == "down" && nextSection.length) {
      performTransition(nextSection.index());

    }

    // switch (true) {

    //   case direction = "up" && prevSection.length :
    //     performTransition(prevSection.index());
    //     break;

    //     case direction = "down" && nextSection.length :
    //     performTransition(nextSection.index());
    //     break;


    // }
  };

  $(document).on({
    wheel: e => {

      const deltaY = e.originalEvent.deltaY;

      if (deltaY > 0) {

        scrollToSection("down");
        // performTransition(2);

      }

      if (deltaY < 0) {

        scrollToSection("up");
        // console.log("up");

      }
      // console.log(e.originalEvent.deltaY);
    },

    keydown: e => {
      switch (e.keyCode) {

        case 40:
          scrollToSection("down");
          break;

        case 38:
          scrollToSection("up");
          break;

      }

    },

    touchmove: e => e.preventDefault()
  });

  $("[data-scroll-to]").on("click", e => {
    e.preventDefault();

    const target = $(e.currentTarget).data("scroll-to");

    performTransition(target);

    // console.log(target);

  })

  $(document).swipe({
    //Generic swipe handler for all directions
    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {

      const swipeDirection = direction === ("down") ? "up": "down";
      scrollToSection(direction);
    }
  });

})();










