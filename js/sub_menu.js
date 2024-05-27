$(function () {
    //.gnb>li에 마우스가 올라가면 내가 방금 마우스를 올렸던 li(this)의 자식 중 .sub(.children(".sub"))가 슬라이드되어 내려오고 .gnb>li에서 마우스가 나가면 .sub가 슬라이드되어 올라간다.
    $("#gnb>li").mouseover(function () {
        $(this).children(".sub").stop().slideDown();
        //여기서 stop은, slidedown이 전부되기 전에 행동이 취소되었을때, slidedown을 도중에 중지하고 다음 행동으로 넘어간다는 뜻이다.
    });
    $("#gnb>li").mouseleave(function () {
        $(this).children(".sub").stop().slideUp();
    });
});