$('.btn-radio').on('click', function(){
	$(this).toggleClass('active');
});

var $progress = $('.progress-bar');
var $progressFill = $progress.find('.bar-fill');
var progressFrom = $progress.data('from');
var progressComplete = $progress.data('complete');
$progressFill.css('width', progressFrom+'%');
setTimeout(function() {
	$progressFill.css('width', progressComplete+'%');
}, 400);