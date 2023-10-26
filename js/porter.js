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
  //작은기계장치
  if( $(window).width()<=900 ){
		  $("#top button").click(function(){
			  if( $(this).text() =="menu" ){				 
				  $(this).text("close");				  
			  } else {
				  $(this).text("menu");
			  }
			  $("#top li>a").stop().slideToggle();			  
		  });
		  $("a#mainMenu").click(function(){
			$("nav.subMenu").stop().slideUp(300);
			$(this).next().stop().slideDown();  
		  });
  }
  
  // 배너이미지 슬라이드
  setInterval(toLeft, 2800);
  function toLeft() {
    $("#slide")
      .stop()
      .animate({ left: "-100%" }, 1200, function () {
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
    $("#tb2").fadeOut().removeClass("act");
    $("#rev").fadeOut().removeClass("act");
    $("#tb1").fadeIn().addClass("act");
  });
  $("#information .rev_1").click(function () {
    $("#tb1").fadeOut().removeClass("act");
    $("#tb2").fadeOut().removeClass("act");
    $("#rev").fadeIn().addClass("act");
  });
}); ////all end
