/*
 * Class for Slide
 */
var Slide = {
	// fields for references to DOM elements
	homeWindow: $(window),
	homeDocument: $(document),

	// fields for links that starts with #
	updownButtons: $(".centered a").filter("[href^=#]"),
	slidesContainer: $(".slides-container"),
	slidesList: $(".slide"),
	currentSlide: $(".slide").first(),

	// animating flag
	isAnimating: false,

	// the height of the window
	pageHeight: $(window).innerHeight(),

	// key codes for up and down arrows on keyboard. We'll be using this to navigate change slides using the keyboard
	keyCodes: {
		UP: 38,
		DOWN: 40
	},

	/* When a button is clicked - first get the button href, and then slide to the container, if there's such a container */
	onSlideButtonClick: function(event) {
		// get clicked button
		var button = $(this);

		// the slide that the button points to
		var slide = $(button.attr("href"));

		// if the slide exists, we go to it
		if(slide.length) {
			Slide.goToSlide(slide);
			event.preventDefault();
		}
	},

	/* Getting the pressed key. Only if it's up or down arrow, we go to prev or next slide and prevent default behaviour
	   This way, if there's text input, the user is still able to fill it */
	onKeyDown: function(event) {
		// retrieve the key stroke code
		var PRESSED_KEY = event.keyCode;

		// check if the code is either up or down
		if(PRESSED_KEY == Slide.keyCodes.UP) {
			Slide.goToPrevSlide();
			event.preventDefault();
		} else if(PRESSED_KEY == Slide.keyCodes.DOWN) {
			Slide.goToNextSlide();
			event.preventDefault();
		}
	},

	/* When user scrolls with the mouse, we have to change slides */
	onMouseWheel: function(event) {
		// normalize event wheel delta
		var delta = event.originalEvent.wheelDelta / 30 || - event.originalEvent.detail;

		// if the user scrolled up, it goes to previous slide, otherwise - to next slide
		if(delta < -1)
			Slide.goToNextSlide();
		else if(delta > 1)
			Slide.goToPrevSlide();
		event.preventDefault();
	},

	/* If there's a previous slide, slide to it */
	goToPrevSlide: function() {
		if(this.currentSlide.prev().length)
			this.goToSlide(this.currentSlide.prev());
	},

	/* If there's a next slide, slide to it */
	goToNextSlide: function() {
		if(this.currentSlide.next().length)
			this.goToSlide(this.currentSlide.next());
	},

	/* Actual transition between slides */
	goToSlide: function(nextSlide) {
		// if the slides are not changing and there's such a slide
		if(!this.isAnimating && nextSlide.length) {
			// setting animating flag to true
			this.isAnimating = true;
			this.currentSlide = nextSlide;

			// sliding to current slide
			TweenLite.to(this.slidesContainer, 1.5, {scrollTo: {y: this.pageHeight * this.currentSlide.index()}, onComplete: this.onSlideChangeEnd, onCompleteScope: this});
		}
	},

	/* Once the sliding is finished, we need to restore "isAnimating" flag.
	   You can also do other things in this function, such as changing page title */
	onSlideChangeEnd: function() {
		this.isAnimating = false;
		if (this.currentSlide.attr("id") == "slide-2") {
			try { pause(); } catch(error) { console.log(error.message); }
			Bubble.animateBubbleMenu(4);
		} else {
			try { resume(); } catch(error) { console.log(error.message); }
			Bubble.closeOtherCircles(4, "", true, 0);
		}
	}
}