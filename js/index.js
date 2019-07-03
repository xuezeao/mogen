const MAX_PAGENUM=9
const MIN_PAGENUM=1
var music_array = new Array();


function musicStop() {
    var i = 0;
    while (i < 10) {
        music_array[i].pause();
        i++;
    }
}
function hide_allElement() {
	$("div").each(function () {
		$(this).css("display", "none");
	});
}
$(document).ready(function() {
	$("#page_one").hide();
    $("#one_font").hide();
    music_array[0] = document.getElementById("music01");
    music_array[1] = document.getElementById("music02");
    music_array[2] = document.getElementById("music03");
    music_array[3] = document.getElementById("music04");
    music_array[4] = document.getElementById("music05_1");
    music_array[5] = document.getElementById("music05_2");
    music_array[6] = document.getElementById("music06");
    music_array[7] = document.getElementById("music07");
    music_array[8] = document.getElementById("music08");
    music_array[9] = document.getElementById("music09");

    showPage_First();
});

function showPage_First() {
    //first page set
    $("#page_one").show();
    $("#one_font").fadeIn(3000);
}

function  showPage_Second() {
    //second page set

    music_array[0].play();
    music_array[0].onended =  function() {
        music_array[1].play();
        $("#introduce02").fadeOut(1000);
        show_page_second_step();
    }
    music_array[1].onended =  function() {
        page_switch("up");
    }
	$("#page_two").show();
	$("#introduce02").fadeIn();
  /*  $("#page_two").show();
    $("#introduce02").css("right","640px").show().animate({left:'0px'}, 1000);*/
    function show_page_second_step() {
        show_page_animate_show("introduce04", "640px", "right", 500, 2000);
        show_page_animate_show("introduce03", "640px", "right", 500, 2000);
    }
}

function showPage_Third() {
        //third page set
    music_array[2].play();
    music_array[2].onended =  function() {
        page_switch("up");
    }
   /* $("#page_three").css("bottom", "1000px");
    $("#page_three").show().animate({top:'0px'}, 2000, show_page_third_step_01());*/
	$("#page_three").fadeIn(2000, show_page_third_step_01());
    function show_page_third_step_01() {
        show_page_animate_show("service02", "2000px", "top", 500, 2000);
        show_page_animate_show("service03", "2000px", "top", 1000, 2000);
        show_page_animate_show("service04", "2000px", "top", 1500, 2000);
    }
}

function showPage_Fourth() {
    //fourth page set
    music_array[3].play();
    music_array[3].onended =  function() {
        page_switch("up");
    }

    $("#page_four").css("top", "2000px");
    $("#page_four").show().animate({top:'0px'}, 2000);

    show_page_animate_show("design02", "640px", "right", 1000, 1500);
    show_page_animate_fadeIn("design03","10px","bottom",2500,500);
    show_page_animate_fadeIn("design04","10px","bottom",3000,500);
    show_page_animate_fadeIn("design05","10px","bottom",3800,500);
    show_page_animate_fadeIn("design06", "10px", "left", 4600, 500);
    show_page_animate_fadeIn("design07","10px","bottom",5200,500);
    show_page_animate_fadeIn("design08","10px","bottom",5800,500);
    show_page_animate_fadeIn("design09","10px","bottom",6400,500);
    show_page_animate_show("design10","640px","right",7000,500);
    show_page_animate_fadeIn("design11","10px","bottom",7600,500);
    show_page_animate_fadeIn("design12","10px","bottom",8200,500);
    show_page_animate_fadeIn("design13","10px","bottom",8800,500);
    show_page_animate_fadeIn("design14","10px","bottom",9400,500);
    show_page_animate_show("design15","640px","right",10000,500);
    show_page_animate_fadeIn("design16","10px","bottom",10600,500);
}

function showPage_Fifth() {
    //fifth page set
    music_array[4].play();
    music_array[4].onended =  function() {
        music_array[5].play();
    }
    music_array[5].onended =  function() {
        page_switch("up");
    }
    show_page_animate_show("page_five", "2000px", "top", 500, 1000);
    $("#brand02").delay(2000).fadeIn();
    $("#brand03").delay(3000).fadeIn();
    $("#brand04").delay(4000).fadeIn();
    $("#brand05").delay(5000).fadeIn();
    $("#brand06").delay(6000).fadeIn();
}

function showPage_Sixth() {
        //sixth page set
    music_array[6].play();
    music_array[6].onended =  function() {
        page_switch("up");
    }
    show_page_animate_show("page_six", "2000px", "top", 500, 2000);
    $("#award02").delay(3000).slideDown(2000);
}

function showPage_Seventh() {
    //seventh page set
    music_array[7].play();
    music_array[7].onended =  function() {
        page_switch("up");
    }
    //show_page_animate_show("page_seven", "1008px", "bottom", 500, 1000);
	$("#page_seven").fadeIn(1000);
    $("#cooperation02").delay(1500).fadeIn("slow");
    $("#cooperation03").delay(2000).fadeIn("slow");
    $("#cooperation04").delay(2500).fadeIn("slow");
}

function showPage_Eight() {
    //eighth page set
    music_array[8].play();

    $("#page_eight").show();
	$("#iteminfo01").fadeIn();

    show_page_animate_show("iteminfo01", "2000px", "top", 500, 1000);
    show_page_animate_show("iteminfo02", "2000px", "top", 2500, 1000);
    show_page_animate_show("iteminfo03", "2000px", "top", 4500, 1000);
    show_page_animate_show("iteminfo04", "2000px", "top", 6500, 1000);
    show_page_animate_show("iteminfo05", "2000px", "top", 8500, 1000);
    show_page_animate_show("iteminfo06", "2000px", "top", 10500, 1000);
    show_page_animate_show("iteminfo07", "2000px", "top", 12500, 1000);
    show_page_animate_show("iteminfo08", "2000px", "top", 14500, 1000);
    show_page_animate_show("iteminfo09", "2000px", "top", 16500, 1000);
    show_page_animate_show("iteminfo10", "2000px", "top", 18500, 1000);
    show_page_animate_show("iteminfo11", "2000px", "top", 20500, 1000);
    show_page_animate_show("iteminfo12", "2000px", "top", 22500, 1000);
    $("#iteminfo01").delay(2000).fadeOut();
    $("#iteminfo02").delay(2000).fadeOut();
    $("#iteminfo03").delay(2000).fadeOut();
    $("#iteminfo04").delay(2000).fadeOut();
    $("#iteminfo05").delay(2000).fadeOut();
    $("#iteminfo06").delay(2000).fadeOut();
    $("#iteminfo07").delay(2000).fadeOut();
    $("#iteminfo08").delay(2000).fadeOut();
    $("#iteminfo09").delay(2000).fadeOut();
    $("#iteminfo10").delay(2000).fadeOut();
    $("#iteminfo11").delay(2000).fadeOut();
    $("#iteminfo12").delay(2000).slideUp("slow", function() {
        page_switch("up");
    });
}

function showPage_Nine() {
       // nineth page set
    music_array[9].play();
    music_array[9].onended =  function() {
        page_switch("up");
    }
	$("#page_nine").fadeIn(2000);

   // show_page_animate_show("page_nine", "1500px", "bottom", 500, 2000);
}


/*
    @brief:
        The function can capture touch events;
    Detects swipes in 4 directions, “up”, “down”, “left” and “right”
    Detects pinches “in” and “out”
    Supports single finger or double finger touch events
    Supports click events both on the touchSwipe object and its child objects
    Definable threshold / maxTimeThreshold to determin when a gesture is actually a swipe
    Events triggered for swipe “start”,”move”,”end” and “cancel”
    End event can be triggered either on touch release, or as soon as threshold is met
    Allows swiping and page scrolling
    Disables user input elements (Button, form, text etc) from triggering swipes
 */
$(document).ready(function() {
    $("body").swipe({
        swipe:function(event, direction, distance, duration, fingerCount) {
            page_switch(direction);
        }
    });
});

/*
    @brief:
        The function is used to handle page switching
    @input_param:
 */
var pageNum = 1;
var old_pageNum = 0;

function page_switch(move_direction) {
    if (move_direction != "up" && move_direction != "down") {
        console.log(move_direction);
        return -1;
    } else if (move_direction === "up") {
        if (check_pageNum(pageNum, move_direction)) {
            pageNum++;
        }
    } else if (move_direction === "down") {
        if (check_pageNum(pageNum, move_direction)) {
            pageNum--;
        }
    }
    musicStop();
    if (old_pageNum != pageNum) {
        selectGoalPage(pageNum);
        old_pageNum = pageNum;
    }
    console.log("N:" + pageNum + "  O:" + old_pageNum);
}
//@brief: execute switch page
function selectGoalPage(input_num) {
   // $("div").css("display", "none");
   	hide_allElement();

    switch (input_num) {
        case 1:showPage_First();
            break;
        case 2:showPage_Second();
            break;
        case 3:showPage_Third();
            break;
        case 4:showPage_Fourth();
            break;
        case 5:showPage_Fifth();
            break;
        case 6:showPage_Sixth();
            break;
        case 7:showPage_Seventh();
            break;
        case 8:showPage_Eight();
            break;
        case 9:showPage_Nine();
            break;
        default:
    }
}

function check_pageNum(input_num, move_direction) {
    if (input_num >= MAX_PAGENUM && move_direction === "up")
        return false;
    else if (input_num <= MIN_PAGENUM && move_direction === "down")
        return false;
    return true;
}

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
