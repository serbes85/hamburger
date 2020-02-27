//fullscreen menu

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

//accordeonTeam 

(function() {
	
	let accordeonTeam = document.querySelector(".accordeon");
	let items = document.querySelectorAll(".accordeon__item");
	// let currentActiveElement = Array.prototype.find.call(
	// 	items, elem => elem.classList.contains("accordeon__item--active")
	// );
	let currentItem;

	for (let i = 0; i < items.length; i++) {
		const element = items[i];
		
		if(element.classList.contains("accordeon__item--active")) {
			currentItem = element;
		}	
	}

	accordeonTeam.addEventListener("click", function(event) {
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

(function() {
	
	let accordeonMenu = document.querySelector(".menu__list");
	let items = document.querySelectorAll(".menu__item");
	// let currentActiveElement = Array.prototype.find.call(
	// 	items, elem => elem.classList.contains("accordeon__item--active")
	// );
	let currentItem;

	for (let i = 0; i < items.length; i++) {
		const element = items[i];
		
		if(element.classList.contains("menu__item--active")) {
			currentItem = element;
		}	
	}

	accordeonMenu.addEventListener("click", function(event) {
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











