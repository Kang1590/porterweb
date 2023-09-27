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
      .animate({ left: "-1950px" }, 1200, function () {
        $("#slide").append($("#slide a").eq(0));
        $("#slide").css("left", "0");
      });
  }
  // 상세이미지
  $(".smallimg a").mouseenter(function () {
    const x = $(this).children().attr("src");
    console.log(x);
    $(".bigimg img").attr("src", x);
  });

  // RELATED ITEMS부분
  // 왼쪽으로 화살표클릭시 이동
  $(".material-symbols-outlined:first-of-type").click(function toLeft() {
    $(".items")
      .stop()
      .animate({ left: "-600px" }, 1000, function () {
        $(".items").append($(".items a").eq(0));
        $(".items").css("left", "-300px");
      });
  });
  // 오른쪽 화살표클릭시 이동
  $(".material-symbols-outlined:nth-of-type(2)").click(function () {
    $(".items")
      .stop()
      .animate({ left: "0" }, 1000, function () {
        $(".items").prepend($(".items a").eq(6));
        $(".items").css("left", "-300px");
      });
  });

  // 버튼클릭시 테이블나오기
  $("#information .tb_2").click(function () {
    $("#tb1").fadeOut().removeClass("act");
    $("#rev").fadeOut().removeClass("act");
    $("#tb2").fadeIn().addClass("act");
  });
  $("#information .tb_1").click(function () {
    $("#tb2").fadeOut();
    $("#rev").fadeOut();
    $("#tb1").fadeIn();
  });
  $("#information .rev_1").click(function () {
    $("#tb1").fadeOut();
    $("#tb2").fadeOut();
    $("#rev").fadeIn();
  });
}); ////all end
