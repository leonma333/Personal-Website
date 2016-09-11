/*
 * class for menu transition
 */
var Menu = {
    // get the toggle -> menu
    theToggle: document.getElementById('toggle'),

    /* a function that checks if the element contains the given class */
    hasClass: 
    function(elem, className) {
        return new RegExp(className).test(elem.className);
    },

    /* a function that add the given class name to the element */
    addClass: 
    function(elem, className) {
        if (!this.hasClass(elem, className))
            elem.className += className;
    },

    /* a function that remove the given class name from the element */
    removeClass: 
    function(elem, className) {
        var newClass = elem.className.replace(/[\t\r\n]/g, '');
        if (this.hasClass(elem, className)) {
            while (newClass.indexOf(className) >= 0 )
                newClass = newClass.replace(className, '');
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
    },

    /* a function that change the class name */
    toggleClass: 
    function(elem, className) {
        var newClass = elem.className.replace(/[\t\r\n]/g, '');
        if (this.hasClass(elem, className)) {
            while (newClass.indexOf(className) >= 0 )
                newClass = newClass.replace(className, '');
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        } else
            elem.className += className;
    }
};

/* set menu toggle on click event listener */
Menu.theToggle.onclick = function() {
    Menu.toggleClass(this, 'on');
    return false;
}