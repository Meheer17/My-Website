const navSlide = () => {
        
	const hamburger = document.querySelector(".hamburger");
	const navbar = document.querySelector(".navbar");
	const navLinks = document.querySelectorAll(".navbar-links li");

    hamburger.onclick = () => {
	navbar.classList.toggle("nav-active");
      //Animation links
	navLinks.forEach((link, index) => {
		if (link.style.animation) {
			link.style.animation = "";
		} else {
			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 10+ 1}s`;
		   }
		});
	  //hamburger animation
	hamburger.classList.toggle("toggle");
    }
}

window.onload = () => navSlide();

$(window).on('scroll', function(){
    if($(window).scrollTop()){
      $('#header').addClass('nav-show');
    } else {
      $('#header').removeClass('nav-show');
    }
})