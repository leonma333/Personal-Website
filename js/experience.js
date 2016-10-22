function initHistoryHandler() {
    $('.about_nav_content li:first-child a').click( function() {
       	$('#historic_event_1').addClass('current');
       	$('#historic_event_2').removeClass('current');
       	$('#historic_event_3').removeClass('current');
       	$('#historic_event_4').removeClass('current');
       	$('#history_clock').removeClass('animate1 animate2 animate3');
    });
       	
    var hoverOrClick = function() {
        $("#history_clock").removeClass('animate1 animate2 animate3');
       	$('#historic_event_1').addClass('current');
       	$('#historic_event_2, #historic_event_3, #historic_event_4').removeClass('current');
    }

    $('#historic_dot_1, #historic_event_1').click(hoverOrClick).hover(hoverOrClick);
       	
    var hoverOrClick = function(){
        $('#history_clock').addClass('animate1');
        $("#history_clock").removeClass('animate2 animate3');
        $('#historic_event_2').addClass('current');
        $('#historic_event_1, #historic_event_3, #historic_event_4').removeClass('current');
    }

    $('#historic_dot_2, #historic_event_2').click(hoverOrClick).hover(hoverOrClick);
       	
    var hoverOrClick = function(){
        $('#history_clock').addClass('animate2');
       	$("#history_clock").removeClass('animate1 animate3');
       	$('#historic_event_3').addClass('current');
       	$('#historic_event_1, #historic_event_2, #historic_event_4').removeClass('current');
    }

    $('#historic_dot_3, #historic_event_3').click(hoverOrClick).hover(hoverOrClick);
       	
    var hoverOrClick = function(){
       	$('#history_clock').addClass('animate3');
       	$("#history_clock").removeClass('animate1 animate2');
       	$('#historic_event_4').addClass('current');
       	$('#historic_event_1, #historic_event_2, #historic_event_3').removeClass('current');
    }

    $('#historic_dot_4, #historic_event_4').click(hoverOrClick).hover(hoverOrClick);
}
    