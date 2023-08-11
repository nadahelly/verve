var swiper = new Swiper(".slide-g", {
  slidesPerView: "auto",
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".sale-slide", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 더 보기 버튼 구현 (women-rank)
$(document).ready(function () {
  $(".sec-rank .lst-rank li:lt(6)").show();
  var items =  10;
  var shown =  4;
  $(".btn-rank-more button").click(function () {
      shown = $(".sec-rank .lst-rank li:visible").length+4;
      if(shown< items) {
        $(".sec-rank .lst-rank li:lt("+shown+")").show(300);
      } else {
        $(".sec-rank .lst-rank li:lt("+items+")").show(300);
        $(".btn-rank-more").hide();
      }
    });
  });

  // 더 보기 버튼 구현 (event)
$(document).ready(function () {
  $(".sec-event-end .event-end-box:lt(3)").show();
  var items =  6;
  var shown =  3;
  $(".btn-event-more button").click(function () {
      shown = $(".sec-event-end .event-end-box:visible").length+3;
      if(shown< items) {
        $(".sec-event-end .event-end-box:lt("+shown+")").show(300);
      } else {
        $(".sec-event-end .event-end-box:lt("+items+")").show(300);
        $(".btn-event-more").hide();
      }
    });
  });

        
// tab 색상넣기 (women)
$(".tab-women .w-d").on("click", function () {
  if($(this).hasClass("active")){
    $(this).removeClass("active");
  }else{
    $(".tab-women .w-d").removeClass("active");
    $(this).addClass("active");
  }
})
// tab 색상넣기 (event)
$(".event-depth .e-d").on("click", function () {
  if($(this).hasClass("active")){
    $(this).removeClass("active");
  }else{
    $(".event-depth .e-d").removeClass("active");
    $(this).addClass("active");
  }
})