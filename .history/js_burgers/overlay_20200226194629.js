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
	 
	accordeonTeam.addEventListener("click", function(event) {
		event.preventDefault();
		
    let accordeonTeamItem = event.target.closest(".accordeon__item");
    let accordeonTeamActiveItem = event.target.closest(".accordeon__item--active");
			
		if (!accordeonTeamItem) return; 
					
		if (accordeonTeamItem.classList.contains("accordeon__item--active")){
			accordeonTeamItem.classList.remove("accordeon__item--active");
		} else {
			accordeonTeamItem.classList.add("accordeon__item--active");
			
    }
    
    if (!accordeonTeam.contains(accordeonTeamItem)) return;
      accordeonTeamItem.classList.remove("accordeon__item--active");
		
  });
    
    
})();

//accordeonTeam var2

/*(function() {
	
	let accordeonTeam = document.querySelector(".accordeon");
	
	accordeonTeam.addEventListener("click", function(event) {
		event.preventDefault();
		
		let accordeonTeamItem = event.target.closest(".accordeon__item");
					
		if (!accordeonTeamItem) return; 

							
		if (accordeonTeamItem.classList.contains("accordeon__item")){
			accordeonTeamItem.classList.toggle("accordeon__item--active");
		} 
		
		
  });
    
    
})();*/












