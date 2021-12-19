'USE STRICT';

// FOOTER UI CONTROLLER
const FOOTER_UI_CONTROLLER = (function () {
    const DOMstrings = {
        urlFacebook: "https://facebook.com",
        urlTwitter: "https://twitter.com",
        urlInstagram: "https://instagram.com",
        urlLinkedIn: "https://instagram.com",

        anchorFacebook: "#anchorFacebook",
        anchorTwitter: "#anchorTwitter",
        anchorInstagram: "#anchorInstagram",
        anchorLinkedIn: "#anchorLinkedIn",
    };

    return {
        getUIDOMStrings: function() {
            return DOMstrings;
        },
    }
})();

// FOOTER MODAL CONTROLLER
var FOOTER_MODAL_CONTROLLER = (function(UICtrl) {
 
    var DOM = UICtrl.getUIDOMStrings();
    var source = COMMON_UI_CONTROLLER;

    var setupEventListeners = function() {
        source.addEventToElement(source.getQS(DOM.anchorFacebook), 'click', () => {window.open(DOM.urlFacebook, '_blank');});
        source.addEventToElement(source.getQS(DOM.anchorTwitter), 'click', () => {window.open(DOM.urlTwitter, '_blank');});
        source.addEventToElement(source.getQS(DOM.anchorInstagram), 'click', () => {window.open(DOM.urlInstagram, '_blank');});
        source.addEventToElement(source.getQS(DOM.anchorLinkedIn), 'click', () => {window.open(DOM.urlLinkedIn, '_blank');});
    };
 
    return {
        init: function() {
            setupEventListeners();
        }
    };
 
})(FOOTER_UI_CONTROLLER);
 
window.addEventListener('load', function () {
    FOOTER_MODAL_CONTROLLER.init(); 
});