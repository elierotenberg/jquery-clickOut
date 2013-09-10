jquery-clickOut
===============

Simple jQuery plugin to bind a once-only callback for a click **OUTSIDE** any element of a selection. 

Usage
=====
    // Simple case : once-only callback
    var callback = function() {
      console.log("clicked out.");
    };
    $sel.clickout(callback);
    
    // Re-bind callback each time
    var callback = function() {
      console.log("clicked out.");
      $sel.clickout(callback);
    }
    $sel.clickout(callback);
    
