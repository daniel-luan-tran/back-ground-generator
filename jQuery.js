function set_Gradient () {
    var color1 = $(".color1").val();
    var color2 = $(".color2").val();
    var linear = "linear-gradient( to right," 
        + color1 
        + "," 
        + color2 
        + ")";

    $("body").css({
        "background" : linear
    });
}

$(".color1").on("change", set_Gradient);

$(".color2").on("change", set_Gradient);