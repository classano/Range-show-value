/*
	Created by Claes Norén
	GitHub: Classano
	Licens: Free to use

	Please comit improvements or new features...
*/
$(function() {
	// Create an output element after each range-input
	$('input[type=range]').each(function(){
        $('<output>0</output>').insertAfter(this);
    });
	
	// On click and hold or touch and hold
    $('input[type=range]').on('mousedown touchstart',function(mouseDownEvent){
        var el = $(this);
        var currentMousePos = { x: -1, y: -1 };
        if(mouseDownEvent.type.toLowerCase() === 'touchstart'){
            currentMousePos.y = mouseDownEvent.originalEvent.touches[0].pageY;
            currentMousePos.x = mouseDownEvent.originalEvent.touches[0].pageX;
        }else{
            currentMousePos.y = mouseDownEvent.pageY;
        }
        el.next('output').css({'display':'block'});
       
		// When the mouse or finger is moving 
        $(this).on('mousemove touchmove',function(event) {
            if(event.type.toLowerCase() === 'touchmove'){
                el.next('output').css({
                    'left':currentMousePos.x+'px', 
                    'top':(currentMousePos.y-50)+'px',
                }).html(el.val());
            }else{
                currentMousePos.x = event.pageX;
                el.next('output').css({
                    'left':currentMousePos.x+'px', 
                    'top':(currentMousePos.y-50)+'px',
                }).html(el.val());
            }
        });
    }).on('mouseup touchend',function() {
        $('output').css({
			'left':'-9999px', 
			'top':'-9999px',
			'display':'none'
        });
    });
	
});