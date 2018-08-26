        var t;
var index = 0;
/////自动播放
t = setInterval(play, 1000)

function play() {
    index++;
    if (index>3) {
        index = 0
    };

    console.log(index)
    $("#lunbobox ul li").eq(index).css({
        "background": "red",
        "border": "1px solid #ffffff"
    }).siblings().css({
        "background": "#999",
        "border": ""
    })

    $(".lunbo a").eq(index).fadeIn(1000).siblings().fadeOut(1000);
};