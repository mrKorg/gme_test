jQuery(document).ready(function($) {

    "use strict";

    // Vars
    var roundRadius = $(".round").width() / 2,
        roundOffset = $(".round").offset(),
        roundCenter = { x: roundRadius, y: roundRadius },
        objRadius = $(".obj").width() / 2;

    // Определение расстояния между центрами
    function distance(roundCenter, objCenter) {
        var x = roundCenter.x - objCenter.x,
            y = roundCenter.y - objCenter.y;
        return Math.sqrt(x * x + y * y);
    }

    // Движение в области
    $(".round").mousemove(function(e) {
        var x = e.pageX - roundOffset.left - objRadius,
            y = e.pageY - roundOffset.top - objRadius + 25,
            objCenter = {x: x + objRadius, y: y + objRadius},
            distanceSize = distance(roundCenter, objCenter);
        if (distanceSize < (roundRadius - objRadius)){
            $(".obj").css({"top": y,"left": x});
        }
    });
    
});


