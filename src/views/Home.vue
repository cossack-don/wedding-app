<template>
  <div class="home">
  <v-parallax
    class="pt-4"
    src="../assets/33.jpg"
    height="1000"
  >
    <v-row
     
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12"
      >
      <h1>СЖАТЬ ВСЕ КАРТИНКИ, ПРОВЕРИТЬ ВСЕ ФИО, ПРОВЕРИТЬ КАК НА АДАПТИВЕ ВСЕ БУДЕТ, АКТУАЛЬНОСТЬ ИНФЫ</h1>
      <p>о нас - установить фото и сжать их</p>
      <p>контакты - установить аватарки и сжать их, проверить актуальность телов</p>
      <p>церемония уточнить время и адреса</p>

      <p>протестить кроссбраузерность и адаптив</p>


        <h1 class="display-1 mb-4 h3">
          До свадьбы осталось:
        </h1>
   
<!-- <video width="300" autoplay="autoplay" muted="muted" loop="loop" src="../assets/video.mp4"></video>
<video width="300" autoplay="autoplay" muted="muted" loop="loop" src="../assets/video_2.mp4"></video> -->
<!-- https://pixabay.com/ru/videos/search/%D1%81%D0%B2%D0%B0%D0%B4%D1%8C%D0%B1%D0%B0/ -->
<div id="countdown" class="countdown">
  <div class="countdown-number days-block">
    <span class="days countdown-time">00</span>
    <span class="countdown-text">Дней</span>
  </div>
  <div class="countdown-number hours-block">
    <span class="hours countdown-time">00</span>
    <span class="countdown-text">Часов</span>
  </div>
  <div class="countdown-number minutes-block">
    <span class="minutes countdown-time">00</span>
    <span class="countdown-text">Минут</span>
  </div>
  <div class="countdown-number seconds-block">
    <span class="seconds countdown-time">00</span>
    <span class="countdown-text">Секунд</span>
  </div>
</div>
<p>Cжать все картинки в spa</p>
<h3>Как доехать до Ресторана, РЖД, Аэропорт</h3>
          <div style=" position:relative;overflow:hidden;" @click="mapMainCheckPointOnClick" id="map-wrap-four">
      <iframe style="pointer-events: none;" src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa3cc3445f1e2ff528a10faed7b52811f0d4237a102ca5620618a45308c1d2f8c&amp;source=constructor" width="100%" height="360" frameborder="0"></iframe>
    </div>

    Тона свадьбы 3-5 шт кружочки

    хештег имя + лого инст и ссылка


      </v-col>
    </v-row>
  </v-parallax>
  </div>
</template>

<script>



export default {

  data() {
    return {
      h1: '6rem'
    }
  },
  methods: {
    c() {
      
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
 
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
  
   
    function updateClock() {
      var t = getTimeRemaining(endtime);
  
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  
  var deadline="August 21 2021"; 

initializeClock('countdown', deadline); 


    },
          mapMainCheckPointOnClick() {
      document.addEventListener('click', function(e) {
          let map = document.querySelector('#map-wrap-four iframe')

          if(e.target.id === 'map-wrap-four') {
              map.style.pointerEvents = 'all'
          } else {
              map.style.pointerEvents = 'none'
          }

            })
    },
  },
  mounted() {
    this.c()
  }
}
</script>

<style>
.countdown {
  display: flex;
  justify-content: center;
  opacity: 0.8;
  background: #ace8e6;
  max-width: 600px;
  margin: 0 auto;
  border-radius: 15px;
  flex-wrap: wrap;
}
.seconds-block,
.days-block,
.hours-block,
.minutes-block {
  background: rgb(63, 174, 172);
  padding: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  font-weight: bold;
  border-radius: 15px;
  width: 100px;
  height: 100px;
  font-size: 25px;
}
.countdown-text {
   font-weight: normal;
   font-size: 20px;
}
.countdown-number {
  margin: 15px;

}
</style>