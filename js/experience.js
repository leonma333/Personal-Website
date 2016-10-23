function initHistoryHandler() {
    var clock = $("#history-clock");
    var yearList = $(".historic-year p");
       	
    var hoverOrClick = function() {
        clock.removeClass("animate1 animate2 animate3");
       	$(this).addClass("current");
        yearList.eq(0).css("font-size", "18px");
        for (var i = 1; i < yearList.length; i++) 
          yearList.eq(i).css("font-size", "16px");
       	$("#historic-event-2, #historic-event-3, #historic-event-4").removeClass("current");
    }

    $("#historic-dot-1, #historic-event-1").click(hoverOrClick).hover(hoverOrClick);
       	
    hoverOrClick = function(){
        clock.addClass("animate1");
        clock.removeClass("animate2 animate3");
        $(this).addClass("current");
        yearList.eq(1).css("font-size", "18px");
        for (var i = 0; i < yearList.length; i++) { 
          if (i == 1) continue;
          yearList.eq(i).css("font-size", "16px");
        }
        $("#historic-event-1, #historic-event-3, #historic-event-4").removeClass("current");
    }

    $("#historic-dot-2, #historic-event-2").click(hoverOrClick).hover(hoverOrClick);
       	
    hoverOrClick = function(){
        clock.addClass("animate2");
       	clock.removeClass("animate1 animate3");
       	$(this).addClass("current");
        yearList.eq(2).css("font-size", "18px");
        for (var i = 2; i < yearList.length; i++) { 
          if (i == 2) continue;
          yearList.eq(i).css("font-size", "16px");
        }
       	$("#historic-event-1, #historic-event-2, #historic-event-4").removeClass("current");
    }

    $("#historic-dot-3, #historic-event-3").click(hoverOrClick).hover(hoverOrClick);
       	
    hoverOrClick = function(){
       	clock.addClass("animate3");
       	clock.removeClass("animate1 animate2");
       	$(this).addClass("current");
        yearList.eq(3).css("font-size", "18px");
        for (var i = 0; i < yearList.length - 1; i++)
          yearList.eq(i).css("font-size", "16px");
       	$("#historic-event-1, #historic-event-2, #historic-event-3").removeClass("current");
    }

    $("#historic-dot-4, #historic-event-4").click(hoverOrClick).hover(hoverOrClick);

    // set up tooltip
    jQuery('.back h3').tipso({
        background: 'white',
        titleBackground: '#c3c3c3',
        color: 'black',
        titleContent: 'eCommerce Web Developer',       
        position: 'bottom-left',
        size: 'default',
        content: 'In Progress ...'
    });
}
    