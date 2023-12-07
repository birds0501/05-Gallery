$(function () {
  //대상을 변수에 저장
  const $dim = $(".dim");
  const $popup = $(".popup");
  const $galleryContent = $(".gallery-content");
  const $btnClose = $(".btn-close");
  const $gallery = $(".gallery-list > li");
  const $window = $(window);
  console.log($window);

  //갤러리를 클릭하면
  $gallery.on("click", function () {
    //dim을 보이게
    $dim.fadeIn();
    //popup에 active클래스 부여
    $popup.addClass("active");
    //클릭한 이미지의 src, alt, data-limk 정보를
    //imgSrc, imgTitle, videoSrc 변수에 저장해서 콘솔에 뿌리자
    const $target = $(this).find("img");

    const imgSrc = $target.attr("src");
    const imgTitle = $target.attr("alt");
    const videoSrc = $target.data("link");

    console.log(imgSrc, imgTitle, videoSrc);

    //상황에 따른 코드 작성 : videoSrc가 있다고 가정하고 = true 값을 가진 상황
    if (videoSrc) {
      //동영상을 뿌려야 하는 상황
      // $galleryContent.html("<h1>동영상 뿌려라</h1>");
      $galleryContent.html(
        `<iframe src="${videoSrc}?autoplay=1" allow='autoplay'></iframe>`
      );
      $popup.css("width", $window.outerWidth() / 2);
    } else {
      //이미지를 뿌려야하는 상황
      // $galleryContent.text("이미지 뿌려라");
      $galleryContent.html(`<img src="${imgSrc}"></img>`);
      $popup.css("width", $window.outerWidth() / 3);
    }

    //타이틀(imgTitle) 뿌려주기
    //대상.prepend('넣을요소')
    // $galleryContent.prepend(imgTitle);/* text()로 안부리는 이유- 텍스트만 뿌려짐 */
    $galleryContent.prepend(
      `<div class="title">${imgTitle}</div>`
    ); /* 이렇게 구조를 만들어놓으면 css에서 디자인 가능 */
  });

  //닫기 버튼 클릭했을 때
  $btnClose.on("click", function () {
    //dim을 안보이게
    $dim.fadeOut();
    //popup에 active클래스 삭제
    $popup.removeClass("active");

    //$galleryContent 초기화(동영상 끄면 완전히 꺼지게)
    $galleryContent.html("");
    $popup.css("width", "");
  });
  // 대상.append('넣을 요소') : 대상의 뒤 - 스크립트로 html구조 추가하기
  // 대상.prepend('넣을 요소') : 대상의 앞
  $("body").append("<h1>append : 마지막에 넣기</h1>");
  $("body").prepend("<h1>prepend : 처음에 넣기</h1>");
});
