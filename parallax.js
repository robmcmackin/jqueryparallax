jQuery(document).ready(function($){
	$('#parallax').mousemove(
			function(e){
				/* Work out mouse position */
				var offset = $(this).offset();
				var xPos = e.pageX - offset.left;
				var yPos = e.pageY - offset.top;

				/* Get percent­age positions */
				var mouseXPercent = Math.round(xPos / $(this).width() * 100);
				var mouseYPercent = Math.round(yPos / $(this).height() * 100);

				/* Position Each Layer */
				$(this).children('div').each(
				function(){
					var diffX = $('#parallax').width() - $(this).width();
					var diffY = $('#parallax').height() - $(this).height();

					var myX = diffX * (mouseXPercent / 100);
					var myY = diffY * (mouseYPercent / 100);
					/* translate is slightly faster than .animate left and top, translateZ enables 3D acceleration, which makes  way smoother!!  */
					$(this).css('transform', 'translate(' + myX + 'px, ' + myY + 'px) translatez(0)');
					//$(this).animate({left: myX, top: myY},{duration: 50, queue: false, easing: 'linear'});
				}
				);
			}
		);
}