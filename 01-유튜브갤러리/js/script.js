$(function () {
  //대상을 변수에 저장

  const $dim = $(".dim");
  const $videoWrap = $(".video-wrap");
  const $video = $videoWrap.find(".video iframe"); //find로 잡아주면 더 빨리 찾을 수 있다.
  const $btnClose = $(".btn-close");
  const $selectVideo = $(".video-list > li");

  //이미지를 저장한 배열을 생성
  const imgArr = [
    "https://file3.instiz.net/data/cached_img/upload/2020/04/15/0/e2c9292403b07385d98ae0727bcd4eed.gif",
    "https://pbs.twimg.com/media/E1BR9_ZUYAQiV5t.jpg",
    "https://file3.instiz.net/data/cached_img/upload/2018/09/22/4/a9f915fab8fdb255fe7cfa48d43fe381.gif",
    "https://mblogthumb-phinf.pstatic.net/MjAxOTA1MjVfMTQg/MDAxNTU4Nzc2OTIzMTIz.YwfNolFIwJ5mv4I6VblYMOhpJpuIhZJzHHEeDg2IPFYg.Dkjg2GOM9-y38yaoFGpLJqgT6UFrpyrJd5_aTfbYBq8g.GIF.leenilee/PleasedClosedDutchsmoushond-size_restricted.gif?type=w800",
  ];
  //배열에 접근하는 방법은? : 배열[인덱스]
  console.log(imgArr[1]);
  //body에 배경이미지로 첫번째 이미지 적용
  // $("body").css("background-image", "url(" + imgArr[0] + ")");
  // $("body").css("background-image", `url(${imgArr[0]})`);
  // $selectVideo.css("background-image", `url(${imgArr[0]})`);
  // console.log($selectVideo, imgArr);

  //li에 이미지를 각각 뿌리자
  //여러개의 요소에 각각 어떤 것을 해주려 할 때
  //자바스크립트: for each(function (item) {index})
  //제이쿼리: each(function (index, item) {})
  $selectVideo.each(function (index, item) {
    console.log(index, item);
    // $(item).css("background-image", `url(${imgArr[index]})`);
    setBgImage(item, index);
  });

  //$selectVideo를 클릭했을 때
  $selectVideo.on("click", function () {
    //해당 li의 인덱스를 받아서 videoIdx변수에 담아
    const videoIdx = $(this).index();
    //body에 imgArr배열에서 인덱스에 해당하는 배경이미지를 body에 적용

    $("body").css("background-image", `url(${imgArr[videoIdx]})`);
    setBgImage("body", videoIdx);
    //해당 li의 data-link 값을 가져와서 videoLink 변수에 담자
    let videoLink = $(this).attr("data-link");
    videoLink += "?autoplay=1"; //videoLink = videoLink + '?autoplay=1'
    const videoTitle = $(this).text();

    // console.log(videoLink, videoTitle);

    //그 값을 iframe의 src로 세팅
    $video.attr("src", videoLink);

    //videoTitle을 넣어주기
    $videoWrap.find(".video-title").text(videoTitle);

    //$dim을 보이게 - fadeIn() 사용
    $dim.fadeIn();
    //$videoWrap 보이게 -addClass()
    $videoWrap.addClass("active");

    // console.log($(this));
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

  $(document).keydown(function (e) {
    if (e.keyCode == 27) {
      $dim.fadeOut();
      $videoWrap.removeClass("active");
    }
  });

  //배경 이미지를 적용하는 공통의 동작을 함수로 정의
  function setBgImage(item, index) {
    $(item).css("background-image", `url(${imgArr[index]})`);
  }
});
