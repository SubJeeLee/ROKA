// Screen Move
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

// Lock Screen Page
const openMenu = document.querySelector('.open-button');
openMenu.addEventListener("click", OpenAppScreen);
function OpenAppScreen() {
    document.querySelector('.lock-screen').classList.replace('active', 'animate-lock-screen');
    document.querySelector('.lock-screen').style.height = '0';
    document.querySelector('.application-menu').classList.add('active');
}

// CURRENT TIME
function getCurrentTime() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = ('0' + minutes).slice(-2);
    return hours + ':' + minutes
}
function updateClock() {
    // 현재 시간을 가져옴
    let currentTimeString = getCurrentTime();
    // currentTimeDisplay라는 id를 가진 요소를 찾아서 텍스트를 업데이트
    document.getElementById('currentTimeDisplay').textContent = currentTimeString;
    document.getElementById('currentTimeDisplay_2').textContent = currentTimeString;
}
// 페이지가 로드되면 매 초마다 시간을 업데이트
setInterval(updateClock, 1000);
// 페이지 로드 시 초기 한 번 호출
updateClock();


// DATE
function getCurrentDate() {
  let daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  let monthsOfYear = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  let currentDate = new Date();

  let dayOfWeek = daysOfWeek[currentDate.getDay()];
  let month = monthsOfYear[currentDate.getMonth()];
  let dayOfMonth = currentDate.getDate();

  return `${month + '월'} ${dayOfMonth + '일'} ${dayOfWeek + '요일'}`;
}
function updateDate() {
  let currentDateString = getCurrentDate();
  document.getElementById('currentDateDisplay').textContent = currentDateString;
}
// 페이지 로드 시 초기 한 번 호출
updateDate();