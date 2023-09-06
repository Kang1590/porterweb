$(document).ready(function () {
  // 슬라이드다운 메뉴
  $("a.mainMenu").on("mouseenter focus", function () {
    $("a.mainMenu").removeClass("act");
    $(this).addClass("act");
    $("nav.subMenu").stop().hide();
    $(this).next().stop().slideDown();
  });
  $("#top ul").mouseleave(function () {
    $("nav.subMenu").removeClass("act");
    $("nav.subMenu").stop().slideUp();
    $("a.mainMenu").removeClass("act");
  });
  // 배너이미지 슬라이드
  setInterval(toLeft, 2800);
  function toLeft() {
    $("#slide")
      .stop()
      .animate({ left: "-1200px" }, 1200, function () {
        $("#slide").append($("#slide a").eq(0));
        $("#slide").css("left", "0");
      });
  }
});
