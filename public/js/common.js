'USE STRICT';

// COMMON UI CONTROLLER
const COMMON_UI_CONTROLLER = (function () {
    const DOMstrings = {
        
    };

    return {
        getQS: function(elmnt) {
            return document.querySelector(elmnt);
        },

        getQSA: function(elmnt) {
            return document.querySelectorAll(elmnt);
        },

        toggleClass: function(elem, cls){
            elem.classList.toggle(cls);
        },

        addClass: function(elem, cls){
            if(!elem.classList.contains(cls))
                elem.classList.add(cls);   
        },
 
        removeClass: function(elem, cls){
            if(elem.classList.contains(cls))
                elem.classList.remove(cls);   
        },

        addEventToElement: function(elem, evnt, fnct, args) {
            elem.addEventListener(evnt, () => {
                fnct.apply(args);
            });
        },
    }
})();