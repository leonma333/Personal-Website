/*
 * Class for ContactForm
 */
function ContactForm() {
    // private fields for form inputs
    var msgText = $("#hire textarea");
    var nameText = $("#hire .field:first-child input");
    var emailText = $("#hire .field:nth-child(2) input");

    var msgPass = false;
    var namePass = false;
    var emailPass = false;

    /* function that initialize event handler */
    this.initHandler = function() {
        // function that validate an email address
        function validateEmail(email) {
            var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(email);
        }

        // making focus animation
        msgText.blur(function () {
            $(this).each(function () {
                var $this = $(this);
                if (this.value != "") {
                    $this.addClass("focused");
                    $("textarea + label + span").css({"opacity": 1});
                    msgPass = true;
                    return;
                }
                $this.removeClass("focused");
                $("textarea + label + span").css({"opacity": 0});
                msgPass = false;
            });
        });
        nameText.blur(function () {
            $(this).each(function () {
                var $this = $(this);
                if (this.value != "") {
                    $this.addClass("focused");
                    $(".field:first-child input + label + span").css({"opacity": 1});
                    namePass = true;
                    return;
                }
                $this.removeClass("focused");
                $(".field:first-child input + label + span").css({"opacity": 0});
                namePass = false;
            });
        });
        emailText.blur(function () {
            $(this).each(function () {
                var $this = $(this);
                if (this.value != "" && validateEmail(this.value)) {
                    $this.addClass("focused");
                    $(".field:nth-child(2) input + label + span").css({"opacity": 1});
                    emailPass = true;
                    return;
                }
                $this.removeClass("focused");
                $(".field:nth-child(2) input + label + span").css({"opacity": 0});
                emailPass = false;
            });
        });

        $(".envelope-container").on("click touchstart", function() {
            var $this = $(this);
            $this.hasClass("hover") ? $this.removeClass("hover") : $this.addClass("hover");
        });

        // initialize email form submit handler
        this.sumbitForm("php/email.php", "POST");
    }

    /* function that submit data to server */
    this.sumbitForm = function(url, method) {
        // get the submit button first
        submitButton = $("form#email-form input[type='submit']");

        // set email form submit action
        $("#email-form").submit(function(event) {
            // fields missing handling
            if (!namePass) {
                nameText.focus();
                return false;
            }
            if (!emailPass) {
                emailText.focus();
                return false;
            }
            if (!msgPass) {
                msgText.focus();
                return false;
            }
            submitButton.val("Sending");

            // ajax post request
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
                    submitButton.val("Send");
                    alert("Error occurs: my server said that\n" + JSON.stringify(data));
                }
            });

            event.preventDefault();
        });
    };
}