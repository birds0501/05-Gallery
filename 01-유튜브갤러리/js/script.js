$(function () {
  //대상을 변수에 저장
  const $dim = $(".dim");
  const $videoWrap = $(".video-wrap");
  const $video = $videoWrap.find(".video iframe"); //find로 잡아주면 더 빨리 찾을 수 있다.
  const $btnClose = $(".btn-close");
  const $selectVideo = $(".video-list > li");

  //$selectVideo를 클릭했을 때

  $selectVideo.on("click", function () {
    //해당 li의 data-link 값을 가져와서 videoLink 변수에 담자
    const videoLink = $(this).attr("data-link");
    const videoTitle = $(this).text();

    console.log(videoLink, videoTitle);

    //그 값을 iframe의 src로 세팅
    $video.attr("src", videoLink);

    //videoTitle을 넣어주기
    $videoWrap.find(".video-title").text(videoTitle);

    //$dim을 보이게 - fadeIn() 사용
    $dim.fadeIn();
    //$videoWrap 보이게 -addClass()
    $videoWrap.addClass("active");

    console.log($(this));
  });
  //닫기 버튼을 클릭했을 때
  $btnClose.on("click", function () {
    $dim.fadeOut();
    $videoWrap.removeClass("active");
    $video.attr("src", "");
    $videoWrap.find(".video-title").text("");
  });

  // $dim.on("click", function () {
  //   $dim.fadeOut();
  //   $videoWrap.removeClass("active");
  // });

  $(document).keydown(function (event) {
    if (event.keyCode == 27 || event.which == 27) {
      $dim.fadeOut();
      $videoWrap.removeClass("active");
    }
  });
});
