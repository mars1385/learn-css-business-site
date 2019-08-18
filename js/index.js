//google map
function initMap() {
	const loc = { lat: -34.397, lng: 150.644 };
	const map = new google.maps.Map(document.querySelector('.map'), {
		center: loc,
		zoom: 14
	});

	const marker = new google.maps.Marker({ position: loc, map: map });
}

//scroll opacity
window.addEventListener('scroll', function() {
	if (window.scrollY > 150) {
		this.document.querySelector('#navbar').style.opacity = 0.8;
	} else {
		this.document.querySelector('#navbar').style.opacity = 1;
	}
});

//scrolling
$('#navbar a, .btn').on('click', function(e) {
	if (this.hash !== '') {
		e.preventDefault();
		const hash = this.hash;
		$('html , body').animate(
			{
				scrollTop: $(hash).offset().top - 100
			},
			800
		);
	}
}); //end
