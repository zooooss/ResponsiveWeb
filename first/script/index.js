(function (){
  const imageEl = document.querySelector('.landing-img');

  if (!imageEl) {
    console.error('이미지 엘리먼트가 없습니다.');
    return;
  }

  const mediaQuery = window.matchMedia('(min-width: 780px)');

  function changeImage(matchesTablet) {
    if (matchesTablet) {
      imageEl.src = './asset/image_tablet.png';
    } else {
      imageEl.src = './asset/image_mobile.png';
    }
  }

  mediaQuery.onchange = (event) => {
    changeImage(event.matches);
  }
  
  const width = window.innerWidth;
  changeImage(width >= 780);
})()