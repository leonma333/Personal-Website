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

        // trigger envelope animation on touch device
        document.querySelector(".envelope-container").addEventListener("touchstart", function(){}, true);

        // initialize email form submit handler
        this.sumbitForm("php/email.php", "POST");
    }

    /* function that submit data to server */
    this.sumbitForm = function(url, method) {
        // get the submit button first
        var submitButton = $("form#email-form input[type='submit']");

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
            submitButton.prop("disabled", true);

            // ajax post request
            $.ajax({
                type: method,
                url: url,
                data: $(this).serialize(),
                dataType: "json",
                success: function(data) { submitButton.val("Sent"); },
                error: function(data) {
                    submitButton.val("Send");
                    submitButton.prop("disabled", false);
                    alert("Sorry, my server said that\n" + data["responseJSON"]["message"]);
                }
            });

            event.preventDefault();
        });
    };
}

/*
 * Class for PhonePopup
 */
function PhonePopup() {
    // private flag
    var numberPass = false;
    var validKeyCode = { Delete: 8, Return: 13 }

    /* function that initialize event handler */
    this.initHandler = function() {
        $("#plus").click(function() {
            $("#phone-popup").css("margin-left", "-5px");
            $("#plus").css("margin-left", "-425px");
        });

        $("#close").click(function() {
            $("#phone-popup").css("margin-left", "-425px");
            $("#plus").css("margin-left", "-5px");
        });

        $("form#phone-form input[type='text']").keydown(function (event) {
            // only allow number input
            var valid = /^[0-9]+$/.test(String.fromCharCode(event.keyCode));
            if (!valid && event.keyCode != validKeyCode.Delete && event.keyCode != validKeyCode.Return) event.preventDefault();
        });

        $("form#phone-form input[type='text']").on("input", function() {
            var $this = $(this);
            var value = $this.val();

            if (value.length == 1 && value[0] == '+') {
                $this.val('');
                numberPass = false;
            } else if (value.length > 0 && value[0] != '+') {
                $this.val('+' + $this.val());
                numberPass = true;
            }
        });

        $("form#phone-form input[type='text']").focus(function() { $(this).parent("form#phone-form").find("span").slideDown("slow") });
        $("form#phone-form input[type='text']").blur(function() { $(this).parent("form#phone-form").find("span").slideUp("slow"); });

        // initialize phone form submit handler
        this.sumbitForm("php/phone.php", "POST");
    }

    /* function that submit data to server */
    this.sumbitForm = function(url, method) {
        // get the submit button first
        var submitButton = $("form#phone-form input[type='submit']");

        // set email form submit action
        $("#phone-form").submit(function(event) {
            // fields missing or incorrect handling
            if (!numberPass) return false;

            submitButton.val("Sending");
            submitButton.prop("disabled", true);

            // ajax post request
            $.ajax({
                type: method,
                url: url,
                data: $(this).serialize(),
                dataType: "json",
                success: function(data) { 
                    submitButton.val("Sent");
                },
                error: function(data) {
                    submitButton.val("Send");
                    submitButton.prop("disabled", false);
                    if (data["responseJSON"]["validation_code"]) verifyNumberAnimation(data["responseJSON"]["validation_code"]);
                    alert((data["responseJSON"]["validation_code"] ? "" : "Sorry, my server said that\n") + data["responseJSON"]["message"]);
                }
            });

            event.preventDefault();
        });
    }

    /* function that show the validation code */
    function verifyNumberAnimation(validationCode) {
        var smsTitle = $("#phone-form h2");
        smsTitle.text("Your validation code is \"" + validationCode + "\". Please try it again after your number is verified.");

        function loop() {
            smsTitle.animate({opacity: 0.5}, {
                duration: "slow",
                complete: function() {
                    smsTitle.animate({opacity: 1}, {
                        duration: "slow",
                        complete: function() { loop (); }
                    });
                }
            });
        }
        loop();
    }
}
