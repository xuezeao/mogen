USER_AGENT = navigator.userAgent;
APP_VERSION = navigator.appVersion;
INIT_PAGE = 0;
var GLOBAL = { 'DEVICE_TYPE': 0, 'HORIZONTAL_STYLE': false };
STYLE_SHEET_ADD = true;


$(document).ready(function() {
    //first page set
    $("#page_one").show();
    $("#one_font").fadeIn(3000);

    //second page set
    $("#page_one").hide();
    $("#page_two").show();
    $("#introduce02").css("right","640px").show().animate({left:'0px'}, 1000).fadeOut(show_page_two_step());

    function show_page_two_step() {
        show_page_animate_show("introduce04", "640px", "right", 500, 2000);
        show_page_animate_show("introduce03", "640px", "right", 500, 2000);
    }

    //third page set
    $("#page_two").hide();
    $("#page_three").css("bottom", "1000px");
    $("#page_three").show().animate({top:'0px'}, 2000, show_page_three_step_01());

    function show_page_three_step_01() {
        show_page_animate_show("service02", "2000px", "top", 500, 2000);
        show_page_animate_show("service03", "2000px", "top", 1000, 2000);
        show_page_animate_show("service04", "2000px", "top", 1500, 2000);
    }

    //fourth page set
    $("#page_three").hide();
    $("#page_four").css("top", "2000px");
    $("#page_four").show().animate({top:'0px'}, 2000);

    show_page_animate_show("design02", "640px", "right", 1000, 1500);
     show_page_animate_fadeIn("design03","100px","bottom",2500,1000);


/*
    @brief:
        control the direction of image movement and small range distance
    @input_param: goal: string: The target that needs to be moved
    @input_param: move_distance: string
    @input_param: move_direction: string("right","left","top","bottom")
    @input_param: wait_delay: int: wait time
    @input_param: exec_time: int: animation working time
 */
    function show_page_animate_fadeIn(goal, move_distance, move_direction, wait_delay, exec_time) {
        if (move_direction != "bottom" &&
            move_direction != "top" &&
            move_direction != "right" &&
            move_direction != "left") {
            alert("the parameter of move_dirction is error!");
            return;
        }
        var div = $("#"+ goal);
        div.css(move_direction,move_distance);

        if (move_direction === "bottom")
            div.delay(wait_delay).fadeIn().animate({"bottom":'0px'}, exec_time);
        else if (move_direction === "top")
            div.delay(wait_delay).fadeIn().animate({"top":'0px'}, exec_time);
        else if (move_direction === "left")
            div.delay(wait_delay).fadeIn().animate({"left":'0px'}, exec_time);
        else if (move_direction === "right")
            div.delay(wait_delay).fadeIn().animate({"right":'0px'}, exec_time);
    }
/*
    @brief:
        control the direction of image movement and distance
    @input_param: goal: string: The target that needs to be moved
    @input_param: move_distance: string
    @input_param: move_direction: string("right","left","top","bottom")
    @input_param: wait_delay: int: wait time
    @input_param: exec_time: int: animation working time
 */
    function show_page_animate_show(goal, move_distance, move_direction, wait_delay, exec_time) {
        if (move_direction != "bottom" &&
            move_direction != "top" &&
            move_direction != "right" &&
            move_direction != "left") {
            alert("the parameter of move_dirction is error!");
            return;
        }
        var div = $("#"+ goal);
        div.css(move_direction,move_distance);

        if (move_direction === "bottom")
            div.delay(wait_delay).show().animate({"bottom":'0px'}, exec_time);
        else if (move_direction === "top")
            div.delay(wait_delay).show().animate({"top":'0px'}, exec_time);
        else if (move_direction === "left")
            div.delay(wait_delay).show().animate({"left":'0px'}, exec_time);
        else if (move_direction === "right")
            div.delay(wait_delay).show().animate({"right":'0px'}, exec_time);
    }

});

