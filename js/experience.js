function initHistoryHandler() {
    var clock = $("#history-clock");
    var yearList = $(".historic-year p");
       	
    var hoverOrClick = function() {
        clock.removeClass("animate1 animate2 animate3 animate4");
       	$(this).addClass("current");
        yearList.eq(0).css("font-size", "18px");
        for (var i = 1; i < yearList.length; i++) 
          yearList.eq(i).css("font-size", "16px");
       	$("#historic-event-2, #historic-event-3, #historic-event-4, #historic-event-5").removeClass("current");
    }

    $("#historic-dot-1, #historic-event-1").on("click mouseover touchstart", hoverOrClick);
       	
    hoverOrClick = function() {
        clock.addClass("animate1");
        clock.removeClass("animate2 animate3 animate4");
        $(this).addClass("current");
        yearList.eq(1).css("font-size", "18px");
        for (var i = 0; i < yearList.length; i++) { 
          if (i == 1) continue;
          yearList.eq(i).css("font-size", "16px");
        }
        $("#historic-event-1, #historic-event-3, #historic-event-4, #historic-event-5").removeClass("current");
    }

    $("#historic-dot-2, #historic-event-2").on("click mouseover touchstart", hoverOrClick);
       	
    hoverOrClick = function() {
        clock.addClass("animate2");
       	clock.removeClass("animate1 animate3 animate4");
       	$(this).addClass("current");
        yearList.eq(2).css("font-size", "18px");
        for (var i = 2; i < yearList.length; i++) { 
          if (i == 2) continue;
          yearList.eq(i).css("font-size", "16px");
        }
       	$("#historic-event-1, #historic-event-2, #historic-event-4, #historic-event-5").removeClass("current");
    }

    $("#historic-dot-3, #historic-event-3").on("click mouseover touchstart", hoverOrClick);
       	
    hoverOrClick = function() {
       	clock.addClass("animate3");
       	clock.removeClass("animate1 animate2 animate4");
       	$(this).addClass("current");
        yearList.eq(3).css("font-size", "18px");
        for (var i = 0; i < yearList.length; i++) {
          if (i == 3) continue;
          yearList.eq(i).css("font-size", "16px");
        }
       	$("#historic-event-1, #historic-event-2, #historic-event-3, #historic-event-5").removeClass("current");
    }

    $("#historic-dot-4, #historic-event-4").on("click mouseover touchstart", hoverOrClick);

    hoverOrClick = function() {
        clock.addClass("animate4");
        clock.removeClass("animate1 animate2 animate3");
        $(this).addClass("current");
        yearList.eq(4).css("font-size", "18px");
        for (var i = 0; i < yearList.length - 1; i++)
          yearList.eq(i).css("font-size", "16px");
        $("#historic-event-1, #historic-event-2, #historic-event-3, #historic-event-4").removeClass("current");
    }

    $("#historic-dot-5, #historic-event-5").on("click mouseover touchstart", hoverOrClick);

    // set up tooltip
    var titleList = jQuery(".back h3");

    // Kicks4Love
    titleList.eq(0).tipso({
        background: "white",
        titleBackground: "#c3c3c3",
        color: "black",
        tooltipHover: true,
        titleContent: "<strong>Kicks4Love</strong>",       
        position: "bottom-right",
        size: "default",
        content: "<p>40% Ruby (RoR); 40% Javascript (React Native); 20% Bash;</p><br><p>Ruby on Rails, React Native, Ngnix, Ngrok</p><br>" +
                 "<a style='color:black' target='_blank' href='https://kicks4love.com'>See Website</a>"
    });

    // Jewlr.com
    titleList.eq(1).tipso({
        background: "white",
        titleBackground: "#c3c3c3",
        color: "black",
        tooltipHover: true,
        titleContent: "<strong>Jewlr.com</strong>",       
        position: "bottom-left",
        size: "default",
        content: "<p>40% Ruby; 30% Javascript; 20% Bash; 10% CSS</p><br><p>Ruby on Rails, Vagrant, Docker, OpenSSL, MySql</p><br>" +
                 "<a style='color:black' target='_blank' href='https://www.jewlr.com'>See Website</a>"
    });

    // Ashlin BPG Marketing
    titleList.eq(2).tipso({
        background: "white",
        titleBackground: "#c3c3c3",
        color: "black",
        tooltipHover: true,
        titleContent: "<strong>Ashlin BPG Marketing</strong>",       
        position: "bottom-right",
        size: "default",
        content: "<p>50% C#; 30% SQL; 10% HTML; 5% CSS; 5% Javascript</p><br><p>.Net/ASP.Net, Microsoft Azure, SQL Server</p><br>" +
                 "<a style='color:black' target='_blank' href='https://www.ashlinbpg.com'>See Website</a>"
    });

    // University of Waterloo
    titleList.eq(3).tipso({
        background: "white",
        titleBackground: "#c3c3c3",
        color: "black",
        tooltipHover: true,
        titleContent: "<strong>University of Waterloo</strong>",       
        position: "bottom-left",
        size: "default",
        content: "<p>Current: 2B</p><br><p>1.Algorithms and Data Structures</p><p>2.Operating Systems</p><p>3.Embedded Microprocessor Systems</p>" +
                 "<p>4.Digital Computers</p><br><a style='color:black' target='_blank' href='https://uwaterloo.ca'>See Website</a>"
    });

    // Shanghai United International School
    titleList.eq(4).tipso({
        background: "white",
        titleBackground: "#c3c3c3",
        color: "black",
        tooltipHover: true,
        titleContent: "<strong>Shanghai United International School</strong>",       
        position: "bottom-right",
        size: "default",
        content: "<p>2nd Place - Class of 2015</p><br><p>AP Cusculus: 94</p><p>Physics: 98</p><p>Chemistry: 95</p>" +
                 "<p>Geography: 93</p><br><a style='color:black' target='_blank' href='http://www.suis.com.cn'>See Website</a>"
    });
}   