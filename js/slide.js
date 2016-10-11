// fields for references to DOM elements
var homeWindow = $(window);
var homeDocument = $(document);

// fields for links that starts with #
var updownButtons = $(".centered a").filter("[href^=#]");
var slidesContainer = $(".slides-container");
var slidesList = $(".slide");
var currentSlide = slidesList.first();

// animating flag
var isAnimating = false;

// the height of the window
var pageHeight = homeWindow.innerHeight();

// key codes for up and down arrows on keyboard. We'll be using this to navigate change slides using the keyboard
var keyCodes = {
	UP: 38,
	DOWN: 40
}

/* When a button is clicked - first get the button href, and then slide to the container, if there's such a container */
function onSlideButtonClick(event) {
	// get clicked button
	var button = $(this);

	// the slide the button points to
	var slide = $(button.attr("href"));

	// if the slide exists, we go to it
	if(slide.length) {
		goToSlide(slide);
		event.preventDefault();
	}
}

/* Getting the pressed key. Only if it's up or down arrow, we go to prev or next slide and prevent default behaviour
   This way, if there's text input, the user is still able to fill it */
function onKeyDown(event) {
	// retrieve the key stroke code
	var PRESSED_KEY = event.keyCode;

	// check if the code is either up or down
	if(PRESSED_KEY == keyCodes.UP) {
		goToPrevSlide();
		event.preventDefault();
	} else if(PRESSED_KEY == keyCodes.DOWN) {
		goToNextSlide();
		event.preventDefault();
	}
}

/* When user scrolls with the mouse, we have to change slides */
function onMouseWheel(event) {
	// normalize event wheel delta
	var delta = event.originalEvent.wheelDelta / 30 || - event.originalEvent.detail;

	// if the user scrolled up, it goes to previous slide, otherwise - to next slide
	if(delta < -1)
		goToNextSlide();
	else if(delta > 1)
		goToPrevSlide();
	event.preventDefault();
}

/* If there's a previous slide, slide to it */
function goToPrevSlide() {
	if(currentSlide.prev().length)
		goToSlide(currentSlide.prev());
}

/* If there's a next slide, slide to it */
function goToNextSlide() {
	if(currentSlide.next().length)
		goToSlide(currentSlide.next());
}

/* Actual transition between slides */
function goToSlide(nextSlide) {
	// if the slides are not changing and there's such a slide
	if(!isAnimating && nextSlide.length) {
		// setting animating flag to true
		isAnimating = true;
		currentSlide = nextSlide;

		// sliding to current slide
		TweenLite.to(slidesContainer, 1.5, {scrollTo: {y: pageHeight * currentSlide.index()}, onComplete: onSlideChangeEnd, onCompleteScope: this});
	}
}

/* Once the sliding is finished, we need to restore "isAnimating" flag.
   You can also do other things in this function, such as changing page title */
function onSlideChangeEnd() {
	isAnimating = false;
	if (currentSlide.attr("id") == "slide-2") {
		try { pause(); } catch(error) { console.log(error.message); }
		Bubble.animateBubbleMenu(4);
	} else {
		try { resume(); } catch(error) { console.log(error.message); }
		Bubble.closeOtherCircles(4, "", true, 0);
	}
}