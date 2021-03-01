// load partial htmls

$('#site-header').load('app/sections/site-header.html', function() {
	var menuIcon = $(this).find('.menu-icon');
	var navLink = $('.nav-link');
	var menuNav = $('.main-nav .menu-icon').find('.material-icons');

	menuIcon.on('click', function(e) {
		e.preventDefault();

		navLink.toggleClass('drop');

		if (navLink.hasClass('drop')) {
			menuNav.html('close');
		} else {
			menuNav.html('menu');
		}
	});
});

$('#site-footer').load('app/sections/site-footer.html');


// filters

var chipsActive = $('.chip').find('a:first');
var chipsClose = $('.chip').find('a:last');

chipsActive.on('click', function(e) {
	e.preventDefault();

	$(this).parent('.chip').addClass('active');
});

chipsClose.on('click', function(e) {
	e.preventDefault();

	$(this).parent('.chip').removeClass('active');
});


// bottomsheet

var bottomSheetTigger = $('.bottomsheet-trigger');
var bottomSheet = $('.bottomsheet');
var bottomSheetClose = $('.bottomsheet').find('.close');
var backDrop = $('.backdrop');

bottomSheetTigger.on('click', function(e) {
	e.preventDefault();

	bottomSheet.addClass('open');
	backDrop.removeClass('hide');
});

bottomSheetClose.on('click', function(e) {
	e.preventDefault();

	bottomSheet.removeClass('open');
	backDrop.addClass('hide');
});

backDrop.on('click', function(e){
	e.preventDefault();

	bottomSheet.removeClass('open');
	backDrop.addClass('hide');
});

// modal 

var modalTrigger = $('.modal-trigger');
var modal = $('.modal');
var modalClose = $('.modal').find('.close');

modalTrigger.on('click', function(e) {
	e.preventDefault();

	modal.addClass('open');
	backDrop.removeClass('hide');
});

modalClose.on('click', function(e) {
	e.preventDefault();

	modal.removeClass('open');
	backDrop.addClass('hide');
});

backDrop.on('click', function(e){
	e.preventDefault();

	modal.removeClass('open');
	backDrop.addClass('hide');
});

// alert

var getSample = $('.get-sample');
var addToCart = $('.add-to-cart');
var alert = $('#site-header').find('.alert');

addToCart.on('click', function(e) {
	e.preventDefault();

	$('#site-header').load('app/sections/site-header.html');

	alert.addClass('active');
	console.log('asd')
});
