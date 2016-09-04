/* a function that start the document */
$(document).ready(function(){
	// event listners trigger page transition on click of menu item
	$("#language").click(function(){menuSelect(4, 1, true, 'Java, C#, C++, Ruby, JavaScript, SQL, HTML, CSS, XML, JSON, UML ...');});
	$("#front-end").click(function(){menuSelect(4, 2, true, 'jQuery, React, Angular, Bootstrap, Pure, Phaser ...');});
    $("#back-end").click(function(){menuSelect(4, 3, true, 'ASP.Net, Ruby on Rails, Node ...');});
    $("#database").click(function(){menuSelect(4, 4, true, 'SQL Server, MySQL, PostgreSQL, Firebase ...');});
	$("#technology").click(function(){menuSelect(4, 1, false, 'AJAX, RESTful API, Microsoft Azure, Android ...');});
	$("#tool").click(function(){menuSelect(4, 2, false, 'Eclipse, Visual Studio, Xcode, Sublime Text, Dreamweaver, Android Studio, SSMS ...');});
    $("#version-control").click(function(){menuSelect(4, 3, false, 'GitHub, Bitbucket, GitLab, SVN ...');});
    $("#other").click(function(){menuSelect(4, 4, false, 'jUnit, OpenCV, JavaFX/Swing ...');});
});

// get elements in the modal
var bubbleModal = $('#bubble-modal');
var bubbleModalHeader = $('#bubble-modal h2');
var bubbleModalContent = $('#bubble-modal p').first();

/* a function that when circle is clicked */
menuSelect = function(numCircles, circleNum, left, text) {
	// write full circle name
	circleName = (left ? '#left-circle' : '#right-circle') + circleNum;

	// calculate the starting position of the selected circle
	var startPos = -380+((270/numCircles)*(circleNum-1));
		
	// shift other circles - then fade them away. Pass in the degs to shift by.
	closeOtherCircles(numCircles, circleName, left, -360-startPos);
	
	if (left) {
		// resets the rotation and origin for easier positioning
		$(circleName).animateRotate(-startPos,360, 3000, 0, 'easeOutCubic', function() {});
		$('#left-inner'+ circleNum).animateRotate(startPos,-360, 3000, 0, 'easeOutCubic', function() {});
		
		// strip it of it's bubble
		$(circleName).delay(1500).animate({
			backgroundColor: 'transparent',
			borderColor: 'transparent'		
		}, {
	    	duration: 1200, 
	    	easing: "swing"
		});
  
		// fade out label
		$('#left-text'+ circleNum).delay(500).animate({
			opacity: '0'
		},{
			duration: 1200, 
	    	easing: "swing"
		});
	} else {
		// resets the rotation and origin for easier positioning
		$(circleName).animateRotate(startPos,-360, 3000, 0, 'easeOutCubic', function() {});
		$('#right-inner'+ circleNum).animateRotate(-startPos,360, 3000, 0, 'easeOutCubic', function() {});
		
		// strip it of it's bubble
		$(circleName).delay(1500).animate({
			backgroundColor: 'transparent',
			borderColor: 'transparent'		
		}, {
	    	duration: 1200, 
	    	easing: "swing"
		});
  
		// fade out label
		$('#right-text'+ circleNum).delay(500).animate({
			opacity: '0'
		},{
			duration: 1200, 
	    	easing: "swing"
		});
	}

	// change the content in the modal according to the selected topic
	switch($(circleName + ' a').attr('id')) {
		case 'language':
			bubbleModalHeader.text('Programming, Scripting and Markup Languages I know');
			break;
		case 'front-end':
			bubbleModalHeader.text('Front-End Frameworks I know');
			break;
		case 'back-end':
			bubbleModalHeader.text('Back-End Frameworks and MVC I know');
			break;
		case 'database':
			bubbleModalHeader.text('Database I have been using');
			break;
		case 'technology':
			bubbleModalHeader.text('Technologies I am expert in');
			break;
		case 'tool':
			bubbleModalHeader.text('Tools I have been using');
			break;
		case 'version-control':
			bubbleModalHeader.text('Version Control I know');
			break;
		case 'other':
			bubbleModalHeader.text('Other Tools and Frameworks I know');
			break;
	}
	bubbleModalContent.text(text);
	bubbleModal.css('display', 'block');
};

/* --- Override --- a function that handles rotation of html elements */
$.fn.animateRotate = function(startAngle, endAngle, duration, delay, easing, complete){
    return this.each(function() {
        var elem = $(this);

        $({deg: startAngle}).delay(delay).animate({deg: endAngle}, {
            duration: duration,
            easing: easing,
            step: function(now){
                elem.css({
                  '-moz-transform':'rotate('+now+'deg)',
                  '-webkit-transform':'rotate('+now+'deg)',
                  '-o-transform':'rotate('+now+'deg)',
                  '-ms-transform':'rotate('+now+'deg)',
                  'transform':'rotate('+now+'deg)'
                });
            },
            complete: complete || $.noop
        });
    });
};

/* a function that shows circles into view */
animateBubbleMenu = function(numCircles){
	for(i = 0; i < numCircles; i++) {
		var delay = i * 500;
		    	
		// animation for the circles
		$('#left-circle'+(i+1)).delay(delay).animate({
			opacity: '1.0',
		});
		$('#left-circle'+(i+1)).animateRotate(0,380-((270/numCircles)*i), 3000, delay, 'easeOutCubic', function() {});
		$('#right-circle'+(i+1)).delay(delay).animate({
			opacity: '1.0',
		});
		$('#right-circle'+(i+1)).animateRotate(0,(-380+((270/numCircles)*i)), 3000, delay, 'easeOutCubic', function() {});		

		// rotate the inner content circle in the opposite direction to stabalize content
		$('#left-inner'+(i+1)).animateRotate(0,-380+((270/numCircles)*i), 3000, delay, 'easeOutCubic', function() {});
		$('#right-inner'+(i+1)).animateRotate(0,-(-380+((270/numCircles)*i)), 3000, delay, 'easeOutCubic', function() {});
			    
		// fade in content 
		$('#left-inner'+(i+1)).delay(800+(delay)).animate({
			opacity: '1.0',
		});
		$('#right-inner'+(i+1)).delay(800+(delay)).animate({
			opacity: '1.0',
		});
		
		// fades in text after animation
		$('#left-text'+(i+1)).delay(1500+(delay)).animate({
			opacity: '1.0',
		});   
		$('#right-text'+(i+1)).delay(1500+(delay)).animate({
			opacity: '1.0',
		});   
	}
}

/* a function that close all the circles which are not selected */
closeOtherCircles = function(numCircles, selected, left, shiftBy) {
	for (i = numCircles - 1; 0 <= i; i--) {
		var startPos = [380-((270/numCircles)*i),(-380+((270/numCircles)*i))];
		var delay = 300/(i+1); 

		// the case the it is not the selected circle -> make it vanish
		if(('#left-circle'+(i+1)) != selected && ('#right-circle'+(i+1)) != selected) { 
		    $('#left-circle'+(i+1)).animateRotate(startPos[0],startPos[0]-shiftBy, 1500, delay, 'easeOutCubic', function() {});
			$('#right-circle'+(i+1)).animateRotate(startPos[1],startPos[1]+shiftBy, 1500, delay, 'easeOutCubic', function() {});
			    
			// rotate the inner content circle in the opposite direction to stabalize content
			$('#left-inner'+(i+1)).animateRotate(-startPos[0],-(startPos[0]-shiftBy), 1500, delay, 'easeOutCubic', function() {});
			$('#right-inner'+(i+1)).animateRotate(-startPos[1],-(startPos[1]+shiftBy), 1500, delay, 'easeOutCubic', function() {});

			$('#left-circle'+(i+1)).delay(800).animate({
			    opacity: '0.0',
			});
			$('#right-circle'+(i+1)).delay(800).animate({
			    opacity: '0.0',
			});
			    
			// fade out content
			$('#left-inner'+(i+1)).delay(800).animate({
			    opacity: '0.0',
			});
			$('#right-inner'+(i+1)).delay(800).animate({
			    opacity: '0.0',
			});

			// fades in text after animation
			$('#left-text'+(i+1)).delay(800).animate({
			    opacity: '0.0',
			});
			$('#right-text'+(i+1)).delay(800).animate({
			    opacity: '0.0',
			});
	    } else {
	    	if (left) {
	    		$('#right-circle'+(i+1)).animateRotate(startPos[0],startPos[0]-shiftBy, 1500, delay, 'easeOutCubic', function() {});
			    $('#right-inner'+(i+1)).animateRotate(-startPos[0],-(startPos[0]-shiftBy), 1500, delay, 'easeOutCubic', function() {});
			    $('#right-circle'+(i+1)).delay(800).animate({
				    opacity: '0.0',
				});
				$('#right-inner'+(i+1)).delay(800).animate({
				    opacity: '0.0',
				});
				$('#right-text'+(i+1)).delay(800).animate({
				    opacity: '0.0',
				});
				continue;
			}

			$('#left-circle'+(i+1)).animateRotate(startPos[0],startPos[0]-shiftBy, 1500, delay, 'easeOutCubic', function() {});
		    $('#left-inner'+(i+1)).animateRotate(-startPos[0],-(startPos[0]-shiftBy), 1500, delay, 'easeOutCubic', function() {});
		    $('#left-circle'+(i+1)).delay(800).animate({
			    opacity: '0.0',
			});
			$('#left-inner'+(i+1)).delay(800).animate({
			    opacity: '0.0',
			});
			$('#left-text'+(i+1)).delay(800).animate({
			    opacity: '0.0',
			});
	    }
	}
}

/* when span in the modal is clicked -> close the modal */
$('#bubble-modal span').click(function() {
    bubbleModal.css('display', 'none');
    animateBubbleMenu(4);
});

/* when outside of the modal is clicked -> close the modal */
window.onclick = function(event) {
    if (event.target.id == bubbleModal.attr('id')) {
        bubbleModal.css('display', 'none');
        animateBubbleMenu(4);
    }
}