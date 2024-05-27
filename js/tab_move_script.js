$(document).ready(function () {
  //탭버튼 동작 소스


  $(".tab_content").hide(); //tab_content 부분을 모두 숨김.
  $("ul.tabs li:first").addClass("active").show(); //첫번째 탭이 active클래스를 붙이고, 보여줌.
  $(".tab_content:first").show();

  //On Click Event
  $("ul.tabs li").click(function () {

    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");
    $(".tab_content").hide();

    var activeTab = $(this).find("span").attr("tabs");
    $(activeTab).fadeIn();
    return false;
  });

  //같은 페이지 내에서 동작하게 하는 코드
  $(".sub li").click(function () {
    var indexNo = $(this).index();
    $("ul.tabs li").removeClass("active");
    $(".tabs li").eq(indexNo).addClass("active");
    $(".tab_content").hide();
    var activeTab2 = $(".tabs li.active").find("span").attr("tabs");
    $(activeTab2).fadeIn();
    return false;
  });


  //다른 페이지에서 이동할때 필요한 코드
  var location = window.location.hash;
  var tab_arr = [];
  $(".tabs li span").each(function (index, element) {
    tab_arr.push($(this).attr("tabs"));
  });

  var numb = jQuery.inArray(location, tab_arr)
  $('.tabs li').removeClass("active");
  $('.tabs li').eq(numb).addClass("active");
  $(".tab_content").hide();
  $('.tab_container').find(location).show();

  return false;

});