$(document).ready(function () {
    var jbOffset = $('header').offset();
    /*선택자는 본인 구조에 맞게 수정*/
    $(window).scroll(function () {
        if ($(document).scrollTop() > 95) {
            $('header').addClass("on");
        }
        else {
            $('header').removeClass("on");
        }
    });
});

