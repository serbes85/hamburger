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

//accordeonTeam var1

(function() {
	
  let accordeonTeam = document.querySelector(".accordeon");
  let accordeonTrigger = document.querySelector(".accordeon__trigger");
	 
	accordeonTeam.addEventListener("click", function(event) {
		event.preventDefault();
		
    let accordeonTeamItem = event.target.closest(".accordeon__item");
    
			
    if (!accordeonTeamItem) return; 
    
    if (!accordeonTeam.contains(accordeonTeamItem)) return;    
					
		if (accordeonTeamItem.classList.contains("accordeon__item--active")){
			accordeonTeamItem.classList.remove("accordeon__item--active");
		} else {
			accordeonTeamItem.classList.add("accordeon__item--active");
			
    }
    
        
  });
    
    
})();














