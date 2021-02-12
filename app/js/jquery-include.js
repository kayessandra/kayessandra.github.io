$(function () {
	var includes = $('[data-include]')
	$.each(includes, function () {
		var file = '/sections' + $(this).data('include') + '.html'
		$(this).load(file)
	})
})

// var includes = $('[data-include]')
// $(this).each(includes, function() {
// 	var file = 'app/sections' + $(this).data('include') + '.html'
// 	$(this).load(file)
// });

$("#sample").load("app/sections/sample.html"); 

// var includes = $(this).data('include');
// var data = $('#'+includes);

// $(this).each(function() {
	
// });