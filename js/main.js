$(function(){




//ハンバーガーメニュー
$(".toggle-btn").click(function(){
  $('header').toggleClass('open');

});

$(".header-menu a").click(function () {//ナビゲーションのリンクがクリックされたら
  $('header').removeClass('open');//ボタンの activeクラスを除去し
});





//フェードイン
$(window).scroll(function () {
  // fadeinクラスに対して順に処理を行う
  $(".fadein").each(function () {
    // スクロールした距離
    let scroll = $(window).scrollTop();
    // fadeinクラスの要素までの距離
    let target = $(this).offset().top;
    // 画面の高さ
    let windowHeight = $(window).height();
    // fadeinクラスの要素が画面下にきてから200px通過した
    // したタイミングで要素を表示
    if (scroll > target - windowHeight + 50) {
      $(this).css("opacity", "1");
      $(this).css("transform", "translateY(0)");
    }
  });
});
$(window).on("load", function () {
  $(".fadein-1").css("opacity", "1");
});
});