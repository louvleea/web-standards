// content title 버튼을 클릭하면 전체 메뉴가 보이게
$("#cont_title .sp_btn").click(function(e){
  e.preventDefault(); // 혹은 return false;
  // 열기 $("#cont;_nav").slideDown();
  // 혹은 $("#cont_nav").css("display","block");
  // 혹은 $("#cont_nav").show();
  // 혹은 $("#cont_nav").fadeIn();
  // 열었다 닫았다 $("#cont_nav").toggle();
  // 혹은 $("#cont_nav").fadeToggle();
  // 혹은 $("#cont_nav").slideToggle(300);
  $("#cont_nav").slideToggle(300);
  // 클래스 추가 $("#cont_title .sp_btn").addClass("on");
  // 클래스 제거 $("#cont_title .sp_btn").removeClass("on");
  // 클래스 추가했다 제거했다 $("#cont_title .sp_btn").toggleClass("on");
  $(this).toggleClass("on");
});

// banner carousel(Slick Plug-in)
$(".banner").slick({
  // setting-name: setting-value
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  dots: true
});

// layer popup
$(".layer_pop").click(function(e){
  e.preventDefault();
  $("#layer").css("display","block");
});
$("#layer .close").click(function(e){
  e.preventDefault();
  $("#layer").css("display","none");
});

// window popup
$(".window_pop").click(function(e){
  e.preventDefault();
  // window.open('팝업 주소(URL)', '팝업창 이름', '속성 옵션');
  // 옵션 및 기본값 : top, left, width, height
  window.open("./popup.html","window popup","left=50,top=50,width=800,height=560");
});

// light box(light gallery Plug-in)
$(".lightgallery").lightGallery();

// tab menu
function tabMenu(e){
  e.preventDefault();
  
  var $this = $(this);

  $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
}

$(".tab_menu>ul>li>ul").hide();
$(".tab_menu>ul>li.active>ul").show();
$(".tab_menu>ul>li>a").click(tabMenu).focus(tabMenu);

// gallery carousel(Slick Plug-in)
$(".g_img").slick({
  infinite: true,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,
  fade: true,
});
$(".play").click(function(){
  $(".g_img").slick("slickPlay");
});
$(".pause").click(function(){
  $(".g_img").slick("slickPause");
});
$(".prev").click(function(){
  $(".g_img").slick("slickPrev");
});
$(".next").click(function(){
  $(".g_img").slick("slickNext");
});