function initHistoryHandler() {
    var clock = $("#history-clock");
    var yearList = $(".historic-year p");
       	
    var hoverOrClick = function() {
        clock.removeClass("animate1 animate2 animate3");
       	$(this).addClass("current");
        yearList.eq(0).css("font-size", "18px");
       	$("#historic-event-2, #historic-event-3, #historic-event-4").removeClass("current");
    }

    $("#historic-dot-1, #historic-event-1").click(hoverOrClick).hover(hoverOrClick);
       	
    hoverOrClick = function(){
        clock.addClass("animate1");
        clock.removeClass("animate2 animate3");
        $("#historic-event-2").addClass("current");
        $("#historic-event-1, #historic-event-3, #historic-event-4").removeClass("current");
    }

    $("#historic-dot-2, #historic-event-2").click(hoverOrClick).hover(hoverOrClick);
       	
    hoverOrClick = function(){
        clock.addClass("animate2");
       	clock.removeClass("animate1 animate3");
       	$("#historic-event-3").addClass("current");
       	$("#historic-event-1, #historic-event-2, #historic-event-4").removeClass("current");
    }

    $("#historic-dot-3, #historic-event-3").click(hoverOrClick).hover(hoverOrClick);
       	
    hoverOrClick = function(){
       	clock.addClass("animate3");
       	clock.removeClass("animate1 animate2");
       	$("#historic-event-4").addClass("current");
       	$("#historic-event-1, #historic-event-2, #historic-event-3").removeClass("current");
    }

    $("#historic-dot-4, #historic-event-4").click(hoverOrClick).hover(hoverOrClick);
}
    