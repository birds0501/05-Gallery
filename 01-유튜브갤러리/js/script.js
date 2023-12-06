$(function () {
  //대상을 변수에 저장

  const $dim = $(".dim");
  const $videoWrap = $(".video-wrap");
  const $video = $videoWrap.find(".video iframe"); //find로 잡아주면 더 빨리 찾을 수 있다.
  const $btnClose = $(".btn-close");
  const $selectVideo = $(".video-list > li");

  //이미지를 저장한 배열을 생성
  const imgArr = [
    {
      title: "[NCT FANCAM WEEK] NCT 127, Regular, Mark Focus [THE SHOW]",
      video: "https://youtu.be/Cu1rois7Mwo?feature=shared",
      pic: "https://file3.instiz.net/data/cached_img/upload/2020/04/15/0/e2c9292403b07385d98ae0727bcd4eed.gif",
    },
    {
      title: "NCT U - 'PADO' Archiving Video",
      video: "https://www.youtube.com/watch?v=6BawyJf4aKs",
      pic: "https://pbs.twimg.com/media/E1BR9_ZUYAQiV5t.jpg",
    },
    {
      title: "NCT 127 엔시티 127 'Lemonade' Track Video #4",
      video: "https://youtu.be/ie7IYOYlRkQ?feature=shared",
      pic: "https://file3.instiz.net/data/cached_img/upload/2018/09/22/4/a9f915fab8fdb255fe7cfa48d43fe381.gif",
    },
    {
      title:
        "[MPD직캠] 엔시티 127 마크 직캠 4K 'Faster' (NCT 127 MARK FanCam) | @MCOUNTDOWN_2022.9.22",
      video: "https://youtu.be/MmUNXU77waQ?feature=shared",
      pic: "https://mblogthumb-phinf.pstatic.net/MjAxOTA1MjVfMTQg/MDAxNTU4Nzc2OTIzMTIz.YwfNolFIwJ5mv4I6VblYMOhpJpuIhZJzHHEeDg2IPFYg.Dkjg2GOM9-y38yaoFGpLJqgT6UFrpyrJd5_aTfbYBq8g.GIF.leenilee/PleasedClosedDutchsmoushond-size_restricted.gif?type=w800",
    },
  ];

  //접근 테스트
  console.log(imgArr[0].pic);

  //배열에 접근하는 방법은? : 배열[인덱스]
  console.log(imgArr[1]);

  $selectVideo.each(function (index, item) {
    console.log(index, item);
    setBgImage(item, index);
  });

  //$selectVideo를 클릭했을 때
  $selectVideo.on("click", function () {
    const videoIdx = $(this).index();

    $("body").css("background-image", `url(${imgArr[videoIdx]})`);
    setBgImage("body", videoIdx);

    let videoLink = imgArr[videoIdx].video;
    videoLink += "?autoplay=1";
    $video.attr("src", videoLink);

    const videoTitle = imgArr[videoIdx].title;

    //videoTitle을 넣어주기
    $videoWrap.find(".video-title").text(videoTitle);

    //$dim을 보이게 - fadeIn() 사용
    $dim.fadeIn();
    //$videoWrap 보이게 -addClass()
    $videoWrap.addClass("active");
  });

  //닫기 버튼을 클릭했을 때
  $btnClose.on("click", function () {
    $dim.fadeOut();
    $videoWrap.removeClass("active");
    $video.attr("src", "");
    $videoWrap.find(".video-title").text("");
  });

  $(document).keydown(function (e) {
    if (e.keyCode == 27) {
      $dim.fadeOut();
      $videoWrap.removeClass("active");
    }
  });

  //배경 이미지를 적용하는 공통의 동작을 함수로 정의
  function setBgImage(item, index) {
    $(item).css("background-image", `url(${imgArr[index].pic})`);
  }
});
