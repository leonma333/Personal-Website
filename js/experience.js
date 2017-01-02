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
       	
    hoverOrClick = function() {
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
       	
    hoverOrClick = function() {
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
       	
    hoverOrClick = function() {
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
    var titleList = jQuery(".back h3");

    // Jewlr.com
    titleList.eq(0).tipso({
        background: "white",
        titleBackground: "#c3c3c3",
        color: "black",
        tooltipHover: true,
        titleContent: "Jewlr.com",       
        position: "bottom-left",
        size: "default",
        content: "<p>40% Ruby; 30% Javascript; 20% Bash; 10% CSS</p><br><p>Ruby on Rails, Vagrant, Docker, OpenSSL, MySql</p><br>" +
                 "<a style='color:black' target='_blank' href='https://www.jewlr.com'>See Website</a>"
    });

    // Ashlin BPG Marketing
    titleList.eq(1).tipso({
        background: "white",
        titleBackground: "#c3c3c3",
        color: "black",
        tooltipHover: true,
        titleContent: "Ashlin BPG Marketing",       
        position: "bottom-right",
        size: "default",
        content: "<p>50% C#; 30% SQL; 10% HTML; 5% CSS; 5% Javascript</p><br><p>.Net/ASP.Net, Microsoft Azure, SQL Server</p><br>" +
                 "<a style='color:black' target='_blank' href='https://www.ashlinbpg.com'>See Website</a>"
    });

    // University of Waterloo
    titleList.eq(2).tipso({
        background: "white",
        titleBackground: "#c3c3c3",
        color: "black",
        tooltipHover: true,
        titleContent: "University of Waterloo",       
        position: "bottom-left",
        size: "default",
        content: "<p>Current: 2A</p><br><p>1.Algorithms and Data Structures</p><p>2.Embedded Systems</p><p>3.Digital Computers</p>" +
                 "<p>4.Advanced Calculus</p><br><a style='color:black' target='_blank' href='https://uwaterloo.ca'>See Website</a>"
    });

    // Shanghai United International School
    titleList.eq(3).tipso({
        background: "white",
        titleBackground: "#c3c3c3",
        color: "black",
        tooltipHover: true,
        titleContent: "Shanghai United International School",       
        position: "bottom-right",
        size: "default",
        content: "<p>2nd Place - Class of 2015</p><br><p>AP Cusculus: 94</p><p>Physics: 98</p><p>Chemistry: 95</p>" +
                 "<p>Geography: 93</p><br><a style='color:black' target='_blank' href='http://www.suis.com.cn'>See Website</a>"
    });
}   