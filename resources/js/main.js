$(document).ready(function(){


        $(".js--services-scroll").waypoint(function(direction){
            if (direction == "down"){
                $(".navigation").addClass("sticky");
            } else {
                  $(".navigation").removeClass("sticky");
            }
        })






    //MIXITUP (For Animated circle)
    var  mixer = mixitup('.container');
});