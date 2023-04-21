function initHistoryHandler() {
    var clock = $("#history-clock");
    var yearList = $(".historic-year p");

    var hoverOrClick = function() {
        clock.removeClass("animate1 animate2 animate3 animate4 animate5 animate6 animate7 animate8");
        $(this).addClass("current");
        yearList.eq(0).css("font-size", "18px");
        for (var i = 1; i < yearList.length; i++)
          yearList.eq(i).css("font-size", "16px");
        $("#historic-event-2, #historic-event-3, #historic-event-4, #historic-event-5, #historic-event-6, #historic-event-7, #historic-event-8, #historic-event-9").removeClass("current");
    }

    $("#historic-dot-1, #historic-event-1").on("click mouseover touchstart", hoverOrClick);

    hoverOrClick = function() {
        clock.addClass("animate1");
        clock.removeClass("animate2 animate3 animate4 animate5 animate6 animate7 animate 8");
        $(this).addClass("current");
        yearList.eq(1).css("font-size", "18px");
        for (var i = 0; i < yearList.length; i++) {
          if (i == 1) continue;
          yearList.eq(i).css("font-size", "16px");
        }
        $("#historic-event-1, #historic-event-3, #historic-event-4, #historic-event-5, #historic-event-6, #historic-event-7, #historic-event-8 #historic-event-9").removeClass("current");
    }

    $("#historic-dot-2, #historic-event-2").on("click mouseover touchstart", hoverOrClick);

    hoverOrClick = function() {
        clock.addClass("animate2");
        clock.removeClass("animate1 animate3 animate4 animate5 animate6 animate7 animate 8");
        $(this).addClass("current");
        yearList.eq(2).css("font-size", "18px");
        for (var i = 2; i < yearList.length; i++) {
          if (i == 2) continue;
          yearList.eq(i).css("font-size", "16px");
        }
        $("#historic-event-1, #historic-event-2, #historic-event-4, #historic-event-5, #historic-event-6, #historic-event-7, #historic-event-8 #historic-event-9").removeClass("current");
    }

    $("#historic-dot-3, #historic-event-3").on("click mouseover touchstart", hoverOrClick);

    hoverOrClick = function() {
        clock.addClass("animate3");
        clock.removeClass("animate1 animate2 animate4 animate5 animate6 animate7 animate 8");
        $(this).addClass("current");
        yearList.eq(3).css("font-size", "18px");
        for (var i = 0; i < yearList.length; i++) {
          if (i == 3) continue;
          yearList.eq(i).css("font-size", "16px");
        }
        $("#historic-event-1, #historic-event-2, #historic-event-3, #historic-event-5, #historic-event-6, #historic-event-7, #historic-event-8 #historic-event-9").removeClass("current");
    }

    $("#historic-dot-4, #historic-event-4").on("click mouseover touchstart", hoverOrClick);

    hoverOrClick = function() {
        clock.addClass("animate4");
        clock.removeClass("animate1 animate2 animate3 animate5 animate6 animate7 animate 8");
        $(this).addClass("current");
        yearList.eq(4).css("font-size", "18px");
        for (var i = 0; i < yearList.length; i++) {
          if (i == 4) continue;
          yearList.eq(i).css("font-size", "16px");
        }
        $("#historic-event-1, #historic-event-2, #historic-event-3, #historic-event-4, #historic-event-6, #historic-event-7, #historic-event-8 #historic-event-9").removeClass("current");
    }

    $("#historic-dot-5, #historic-event-5").on("click mouseover touchstart", hoverOrClick);

    hoverOrClick = function() {
        clock.addClass("animate5");
        clock.removeClass("animate1 animate2 animate3 animate4 animate6 animate7 animate 8");
        $(this).addClass("current");
        yearList.eq(5).css("font-size", "18px");
        for (var i = 0; i < yearList.length; i++) {
          if (i == 5) continue;
          yearList.eq(i).css("font-size", "16px");
        }
        $("#historic-event-1, #historic-event-2, #historic-event-3, #historic-event-4, #historic-event-5, #historic-dot-7, #historic-event-8 #historic-event-9").removeClass("current");
    }

    $("#historic-dot-6, #historic-event-6").on("click mouseover touchstart", hoverOrClick);

    hoverOrClick = function() {
        clock.addClass("animate6");
        clock.removeClass("animate1 animate2 animate3 animate4 animate5 animate7 animate 8");
        $(this).addClass("current");
        yearList.eq(6).css("font-size", "18px");
        for (var i = 0; i < yearList.length - 1; i++)
          yearList.eq(i).css("font-size", "16px");
        $("#historic-event-1, #historic-event-2, #historic-event-3, #historic-event-4, #historic-event-5, #historic-event-6, #historic-event-8 #historic-event-9").removeClass("current");
    }

    $("#historic-dot-7, #historic-event-7").on("click mouseover touchstart", hoverOrClick);

    hoverOrClick = function() {
        clock.addClass("animate7");
        clock.removeClass("animate1 animate2 animate3 animate4 animate5 animate6 animate8");
        $(this).addClass("current");
        yearList.eq(6).css("font-size", "18px");
        for (var i = 0; i < yearList.length - 1; i++)
          yearList.eq(i).css("font-size", "16px");
        $("#historic-event-1, #historic-event-2, #historic-event-3, #historic-event-4, #historic-event-5, #historic-event-6, #historic-event-7 #historic-event-9").removeClass("current");
    }

    $("#historic-dot-8, #historic-event-8").on("click mouseover touchstart", hoverOrClick);

    hoverOrClick = function() {
        clock.addClass("animate8");
        clock.removeClass("animate1 animate2 animate3 animate4 animate5 animate6 animate7");
        $(this).addClass("current");
        yearList.eq(6).css("font-size", "18px");
        for (var i = 0; i < yearList.length - 1; i++)
          yearList.eq(i).css("font-size", "16px");
        $("#historic-event-1, #historic-event-2, #historic-event-3, #historic-event-4, #historic-event-5, #historic-event-6, #historic-event-7 #historic-event-8").removeClass("current");
    }

    $("#historic-dot-9, #historic-event-9").on("click mouseover touchstart", hoverOrClick);

    // set up tooltip
    var titleList = jQuery(".back h3");

    // Wish
    titleList.eq(0).tipso({
        background: "white",
        titleBackground: "#c3c3c3",
        color: "black",
        tooltipHover: true,
        titleContent: "<strong>Wish</strong>",
        position: "bottom-right",
        width: 300,
        content: "<ul>" +
                "<li><b>$</b> Proposed and developed a shared integration test framework for the monolith project. Added code coverage check and visualization. New instances of uncaught exception reduced by 80% for our team and numerous dead code had been identified.</li><br>" +
                "<li><b>$</b> Improved automated campaign content result and relevancy by integrating with internal feed service. Campaign engagement rate increased by 10 %.</li>" +
                "</ul><br><hr><br>" +
                "<a style='color:black' target='_blank' href='https://www.wish.com/'>See Website</a>"
    });

    // Freshbooks
    titleList.eq(1).tipso({
        background: "white",
        titleBackground: "#c3c3c3",
        color: "black",
        tooltipHover: true,
        titleContent: "<strong>FreshBooks</strong>",
        position: "bottom-left",
        width: 300,
        content: "<ul>" +
                "<li><b>$</b> Collaborated within a small team to productionize time tracking feature on B2B SaaS to maximize businesses' productivity. NPS increased by 5%.</li><br>" +
                "<li><b>$</b> Advocated and led a new API gateway middleware to enforce timezone data to ensure consistency of timezone information across services. Prevented technical debt and unblocked future projects development.</li>" +
                "</ul><br><hr><br>" +
                "<a style='color:black' target='_blank' href='https://www.freshbooks.com/'>See Website</a>"
    });

    // Shopify
    titleList.eq(2).tipso({
        background: "white",
        titleBackground: "#c3c3c3",
        color: "black",
        tooltipHover: true,
        titleContent: "<strong>Shopify</strong>",
        position: "bottom-right",
        width: 300,
        content: "<ul>" +
                "<li><b>$</b> Designed and developed a fault tolerance, low latency and high throughput Kafka stream processing application to refine PII data for GDPR compliance.</li>" +
                "</ul><br><hr><br>" +
                "<p>Go, Ruby, Python, Kafka, Hadoop, Spark, StatsD, Buildkite, Codecov, Docker, Zookeeper</p><br>" +
                "<a style='color:black' target='_blank' href='https://www.shopify.ca/'>See Website</a>"
    });

    // Kicks4Love
    titleList.eq(3).tipso({
        background: "white",
        titleBackground: "#c3c3c3",
        color: "black",
        tooltipHover: true,
        titleContent: "<strong>Kicks4Love</strong>",
        position: "bottom-left",
        width: 300,
        content: "<ul>" +
                "<li><b>$</b> Started Kicks4Love web and app from scratch. Prevented DDoS attack.</li>" +
                "<li><b>$</b> Executed fast production changes according to analytics data.</li>" +
                "</ul><br><hr><br>" +
                "<p>Ruby, JavaScript, Ruby on Rails, React Native, MySQL, CircleCI, Nginx, Google AdSense, Google Analytics</p><br>" +
                "<a style='color:black' target='_blank' href='https://kicks4love.com'>See Website</a>"
    });

    // UW&WE
    titleList.eq(4).tipso({
        background: "white",
        titleBackground: "#c3c3c3",
        color: "black",
        tooltipHover: true,
        titleContent: "<strong>UW&WE</strong>",
        position: "bottom-right",
        width: 300,
        content: "<ul>" +
                "<li><b>$</b> Planning publicity strategies and campaigns.</li>" +
                "<li><b>$</b> Seek opportunities for partnerships, sponsorships and advertising.</li>" +
                "</ul><br><hr><br>" +
                "<a style='color:black' target='_blank' href='https://uwwe.ca/'>See Website</a>"
    });

    // Jewlr.com
    titleList.eq(5).tipso({
        background: "white",
        titleBackground: "#c3c3c3",
        color: "black",
        tooltipHover: true,
        titleContent: "<strong>Jewlr.com</strong>",
        position: "bottom-left",
        width: 300,
        content: "<ul>" +
                "<li><b>$</b> Integrated payment methods such as Apple Pay on the web, PayPal, ACH, and Affirm.</li>" +
                "<li><b>$</b> I can show you more of my contribution on jewlr.com.</li>" +
                "</ul><br><hr><br>" +
                "<p>Ruby, JavaScript, Ruby on Rails, Redis, MySQL, Vagrant, OpenSSL, FullStory</p><br>" +
                "<a style='color:black' target='_blank' href='https://www.jewlr.com'>See Website</a>"
    });

    // Ashlin BPG Marketing
    titleList.eq(6).tipso({
        background: "white",
        titleBackground: "#c3c3c3",
        color: "black",
        tooltipHover: true,
        titleContent: "<strong>Ashlin BPG Marketing</strong>",
        position: "bottom-right",
        width: 300,
        content: "<ul>" +
                "<li><b>$</b> Independently implemented microservice ERP system solution.</li>" +
                "<li><b>$</b> Contributed to open source product and order management applications.</li>" +
                "</ul><br><hr><br>" +
                "<p>C#, .NET, ASP.NET, SQL Server, Azure</p><br>" +
                "<a style='color:black' target='_blank' href='https://www.ashlinbpg.com'>See Website</a>"
    });

    // University of Waterloo
    titleList.eq(7).tipso({
        background: "white",
        titleBackground: "#c3c3c3",
        color: "black",
        tooltipHover: true,
        titleContent: "<strong>University of Waterloo</strong>",
        position: "bottom-left",
        content: "<p>Current: 4B</p><br><p>1.Distributed Computing</p><p>2.Programming for Performance</p><p>3.Advanced Topics in Networking</p><p>4.Computer Securities</p>" +
                 "<p>5.Compilers</p><br><a style='color:black' target='_blank' href='https://uwaterloo.ca'>See Website</a>"
    });

    // Shanghai United International School
    titleList.eq(8).tipso({
        background: "white",
        titleBackground: "#c3c3c3",
        color: "black",
        tooltipHover: true,
        titleContent: "<strong>Shanghai United International School</strong>",
        position: "bottom-right",
        content: "<p>2nd Place - Class of 2015</p><br><p>AP Cusculus: 94</p><p>Physics: 98</p><p>Chemistry: 95</p>" +
                 "<p>Geography: 93</p><br><a style='color:black' target='_blank' href='http://www.suis.com.cn'>See Website</a>"
    });
}
