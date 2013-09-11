(function($) {
    "use strict";
    $.fn.clickout = function(callback) {            // Triggers the callback the next time a click event occurs OUTSIDE of the target, and then unbinds the click listener.
        this.each(function() {
            var el = this;
            var clickOutHandler = function(e) {
                if(!$.contains(el, e.target)) {
                    $(document).off("click", clickOutHandler);
                    callback.call(el, e);
                }
            };
            $(document).on("click", clickOutHandler);
        });
    }
})(jQuery);
