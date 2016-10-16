/*
 * Class for ContactForm
 */
function ContactForm() {}

/* function that initialize event handler */
ContactForm.prototype.initHandler = function() {
    $("textarea").blur(function () {
        $("#hire textarea").each(function () {
            var $this = $(this);
            if (this.value != "") {
                $this.addClass("focused");
                $("textarea + label + span").css({"opacity": 1});
                return;
            }
            $this.removeClass("focused");
            $("textarea + label + span").css({"opacity": 0});
        });
     });

    $("#hire .field:first-child input").blur(function () {
        $("#hire .field:first-child input").each(function () {
            var $this = $(this);
            if (this.value != "") {
                $this.addClass("focused");
                $(".field:first-child input + label + span").css({"opacity": 1});
                return;
            }
            $this.removeClass("focused");
            $(".field:first-child input + label + span").css({"opacity": 0});
        });
    });

    $("#hire .field:nth-child(2) input").blur(function () {
        $("#hire .field:nth-child(2) input").each(function () {
            var $this = $(this);
            if (this.value != "") {
                $this.addClass("focused");
                $(".field:nth-child(2) input + label + span").css({"opacity": 1});
                return;
            }
            $this.removeClass("focused");
            $(".field:nth-child(2) input + label + span").css({"opacity": 0});
        });
    });

    $(".envelope-container").on("touchstart", function() {
        var $this = $(this);
        $this.hasClass("hover") ? $this.removeClass("hover") : $this.addClass("hover");
    });

    this.sumbitForm("php/email.php", "POST");
}

/* function that submit data to server */
ContactForm.prototype.sumbitForm = function(url, method) {
    // get the submit button first
    submitButton = $("form#email-form input[type='submit']");

    // set email form submit action
    $("#email-form").submit(function(event) {
        $.ajax({
            type: method,
            url: url,
            data: $(this).serialize(),
            dataType: "json",
            success: function(data) {
                submitButton.prop("disabled", true);
                submitButton.val("Sent");
                console.log(data.responseJSON["message"]);
            },
            error: function(data) {
                console.log(data.responseJSON["message"]);
            }
        });

        event.preventDefault();
    });
};