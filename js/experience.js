function initHistoryHandler() {
    var clock = $("#history-clock");
    var yearList = $(".historic-year p");

    var hoverOrClick = function() {
        clock.removeClass("animate1 animate2 animate3 animate4 animate5 animate6 animate7");
        $(this).addClass("current");
        yearList.eq(0).css("font-size", "18px");
        for (var i = 1; i < yearList.length; i++)
          yearList.eq(i).css("font-size", "16px");
        $("#historic-event-2, #historic-event-3, #historic-event-4, #historic-event-5, #historic-event-6, #historic-event-7, #historic-event-8").removeClass("current");
    }

    $("#historic-dot-1, #historic-event-1").on("click mouseover touchstart", hoverOrClick);

    hoverOrClick = function() {
        clock.addClass("animate1");
        clock.removeClass("animate2 animate3 animate4 animate5 animate6 animate7");
        $(this).addClass("current");
        yearList.eq(1).css("font-size", "18px");
        for (var i = 0; i < yearList.length; i++) {
          if (i == 1) continue;
          yearList.eq(i).css("font-size", "16px");
        }
        $("#historic-event-1, #historic-event-3, #historic-event-4, #historic-event-5, #historic-event-6, #historic-event-7, #historic-event-8").removeClass("current");
    }

    $("#historic-dot-2, #historic-event-2").on("click mouseover touchstart", hoverOrClick);

    hoverOrClick = function() {
        clock.addClass("animate2");
        clock.removeClass("animate1 animate3 animate4 animate5 animate6 animate7");
        $(this).addClass("current");
        yearList.eq(2).css("font-size", "18px");
        for (var i = 2; i < yearList.length; i++) {
          if (i == 2) continue;
          yearList.eq(i).css("font-size", "16px");
        }
        $("#historic-event-1, #historic-event-2, #historic-event-4, #historic-event-5, #historic-event-6, #historic-event-7, #historic-event-8").removeClass("current");
    }

    $("#historic-dot-3, #historic-event-3").on("click mouseover touchstart", hoverOrClick);

    hoverOrClick = function() {
        clock.addClass("animate3");
        clock.removeClass("animate1 animate2 animate4 animate5 animate6 animate7");
        $(this).addClass("current");
        yearList.eq(3).css("font-size", "18px");
        for (var i = 0; i < yearList.length; i++) {
          if (i == 3) continue;
          yearList.eq(i).css("font-size", "16px");
        }
        $("#historic-event-1, #historic-event-2, #historic-event-3, #historic-event-5, #historic-event-6, #historic-event-7, #historic-event-8").removeClass("current");
    }

    $("#historic-dot-4, #historic-event-4").on("click mouseover touchstart", hoverOrClick);

    hoverOrClick = function() {
        clock.addClass("animate4");
        clock.removeClass("animate1 animate2 animate3 animate5 animate6 animate7");
        $(this).addClass("current");
        yearList.eq(4).css("font-size", "18px");
        for (var i = 0; i < yearList.length; i++) {
          if (i == 4) continue;
          yearList.eq(i).css("font-size", "16px");
        }
        $("#historic-event-1, #historic-event-2, #historic-event-3, #historic-event-4, #historic-event-6, #historic-event-7, #historic-event-8").removeClass("current");
    }

    $("#historic-dot-5, #historic-event-5").on("click mouseover touchstart", hoverOrClick);

    hoverOrClick = function() {
        clock.addClass("animate5");
        clock.removeClass("animate1 animate2 animate3 animate4 animate6 animate7");
        $(this).addClass("current");
        yearList.eq(5).css("font-size", "18px");
        for (var i = 0; i < yearList.length; i++) {
          if (i == 5) continue;
          yearList.eq(i).css("font-size", "16px");
        }
        $("#historic-event-1, #historic-event-2, #historic-event-3, #historic-event-4, #historic-event-5, #historic-dot-7, #historic-event-8").removeClass("current");
    }

    $("#historic-dot-6, #historic-event-6").on("click mouseover touchstart", hoverOrClick);

    hoverOrClick = function() {
        clock.addClass("animate6");
        clock.removeClass("animate1 animate2 animate3 animate4 animate5 animate7");
        $(this).addClass("current");
        yearList.eq(6).css("font-size", "18px");
        for (var i = 0; i < yearList.length - 1; i++)
          yearList.eq(i).css("font-size", "16px");
        $("#historic-event-1, #historic-event-2, #historic-event-3, #historic-event-4, #historic-event-5, #historic-event-6, #historic-event-8").removeClass("current");
    }

    $("#historic-dot-7, #historic-event-7").on("click mouseover touchstart", hoverOrClick);

    hoverOrClick = function() {
        clock.addClass("animate7");
        clock.removeClass("animate1 animate2 animate3 animate4 animate5 animate6");
        $(this).addClass("current");
        yearList.eq(6).css("font-size", "18px");
        for (var i = 0; i < yearList.length - 1; i++)
          yearList.eq(i).css("font-size", "16px");
        $("#historic-event-1, #historic-event-2, #historic-event-3, #historic-event-4, #historic-event-5, #historic-event-6, #historic-event-7").removeClass("current");
    }

    $("#historic-dot-8, #historic-event-8").on("click mouseover touchstart", hoverOrClick);

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
        content: "<p>Coming soon</p><br>" +
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
                "<li><b>$</b> Created time tracking feature on admin software.</li>" +
                "<li><b>$</b> Utilized Google Cloud Platform to manage applications with Kubernetes.</li>" +
                "<li><b>$</b> Wrote multiple reliably comprehensive user interaction simulation tests for the deployment pipeline.</li>" +
                "<li><b>$</b> Involved in frequent meetings to update project progress on Jira board and share insights/reflections.</li>" +
                "</ul><br><hr><br>" +
                "<p>Google Cloud Platform; Flask; Ember.js; Capybara; Ruby; Python</p><br>" +
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
                "<li><b>$</b> Designed and developed a fault tolerance, low latency and high throughput Kafka stream processing application.</li>" +
                "<li><b>$</b> Wrote high coverage and race condition detectable test to ensure code quality.</li>" +
                "<li><b>$</b> Reported StatsD metrics to visualize application performance.</li>" +
                "<li><b>$</b> Setup thorough continuous integration to prevent building technical debt.</li>" +
                "</ul><br><hr><br>" +
                "<p>Kubernetes; Kafka; Hadoop; Go; Ruby; Bash; Shell</p><br>" +
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
                "<li><b>$</b> Started multi-language Kicks4Love web and app from scratch while arranging advertisement contract on the platform.</li>" +
                "<li><b>$</b> Set up fast and secure Nginx web server that enable Gzip compression, leverage browser caching, and prevent DDoS attack.</li>" +
                "<li><b>$</b> Executed fast production changes according to analytics data.</li>" +
                "<li><b>$</b> Engaged in agile work environment with constant software updates and releases.</li>" +
                "</ul><br><hr><br>" +
                "<p>Ruby on Rails; React Native; Nginx; MySQL; Ruby; JavaScript; Bash</p><br>" +
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
                "<li><b>$</b> Added new features to public commercial website and internal management system.</li>" +
                "<li><b>$</b> Individually integrated numerous payment methods such as Apple Pay on web, PayPal, ACH and Affirm.</li>" +
                "<li><b>$</b> Utilized Vagrant to develop the software that shipped and deployed in daily basis.</li>" +
                "<li><b>$</b> Cooperated within a small team with scrum development cycle.</li>" +
                "</ul><br><hr><br>" +
                "<p>Ruby on Rails; Vagrant; AWS; MySQL; Ruby; JavaScript; Bash</p><br>" +
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
                "<li><b>$</b> Independently designed, developed, and tested various financial applications.</li>" +
                "<li><b>$</b> Wrote multiple advanced SQL scripts in order to achieve better interaction between client and database.</li>" +
                "<li><b>$</b> Engaged in cloud computing to host database, web app and improve security on Azure.</li>" +
                "<li><b>$</b> Utilized numerous third party APIs to update and exchange data on ERP systems.</li>" +
                "</ul><br><hr><br>" +
                "<p>.Net/ASP.Net; Azure; SQL Server; C#</p><br>" +
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
