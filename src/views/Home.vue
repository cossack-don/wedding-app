<template>
  <div class="home" style="height:100%;">
   
    <img src="../assets/z.png" alt="rose" class="element-rose">
    <section class="home-first-block-wrapper home-first-block">

      <div class="home-first-block__block-info block-info-first"></div>

      <div class="wrapper-first-block-text">
          <p class="wrapper-first-block-text__title font-lobster ">Приглашаем <br> на свадьбу!</p>
          <p class="wrapper-first-block-text__text wrapper-first-block-text__text--white">Разделите с нами этот день, подарите свое тепло и поддержку!</p>
      </div>
    </section>

<img src="../assets/Serdechko.png" alt="rose" class="element-rose">

    <section class="home-second-block-wrapper home-second-block">
      <div class="home-second-block__block-info"></div>

          <div class="wrapper-second-block-text">
          <p class="wrapper-second-block-text__title font-lobster ">Cергей и Елена</p>
          <p class="wrapper-second-block-text__text">
          <span class="wrapper-second-block-text__span ">21 августа 2021 года</span>
          <br> г. Краснодар, ул.Вишняковой, 1/5 <br>
          Ресторан "Олимп Hall" <br>
           Cбор гостей в 16:30 
           <span class="wrapper-second-block-text__span wrapper-second-block-text__span--title font-lobster"> <br> До торжества осталось:</span></p>

           <!-- Таймер -->
          <div id="countdown" class="countdown">
            <div class="wrapper-header-countdown">
            <div class="countdown-number days-block">
              <span class="days countdown-time">00</span>
              <span class="countdown-text">Дней</span>
            </div>
            <div class="countdown-number hours-block">
              <span class="hours countdown-time">00</span>
              <span class="countdown-text">Часов</span>
            </div>
            </div>
<div class="wrapper-footer-countdown">
            <div class="countdown-number minutes-block">
              <span class="minutes countdown-time">00</span>
              <span class="countdown-text">Минут</span>
            </div>
            <div class="countdown-number seconds-block">
              <span class="seconds countdown-time">00</span>
              <span class="countdown-text">Секунд</span>
            </div>
</div>

          </div>
      </div>
    </section>

<img src="../assets/z.png" alt="rose" class="element-rose element-rose-width-1116">

    <section class="home-third-block-wrapper home-third-block">
      <div class="home-third-block__block-info"></div>

          <div class="wrapper-third-block-text">
          <p class="wrapper-third-block-text__title wrapper-third-block-text__title--big font-lobster ">Cпасибо</p>
          <p class="wrapper-third-block-text__text wrapper-third-block-text__text--big">что разделите с нами этот особый день!</p>
      </div>
    </section>
  </div>
</template>

<script>


export default {
  data() {
    return {
      h1: "6rem",
    };
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
          total: t,
          days: days,
          hours: hours,
          minutes: minutes,
          seconds: seconds,
        };
      }

      function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var daysSpan = clock.querySelector(".days");
        var hoursSpan = clock.querySelector(".hours");
        var minutesSpan = clock.querySelector(".minutes");
        var secondsSpan = clock.querySelector(".seconds");

        function updateClock() {
          var t = getTimeRemaining(endtime);

          daysSpan.innerHTML = t.days;
          hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
          minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
          secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

          if (t.total <= 0) {
            clearInterval(timeinterval);
          }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
      }

      var deadline = "August 21 2021";

      initializeClock("countdown", deadline);
    },
    mapMainCheckPointOnClick() {
      document.addEventListener("click", function (e) {
        let map = document.querySelector("#map-wrap-four iframe");

        if (e.target.id === "map-wrap-four") {
          map.style.pointerEvents = "all";
        } else {
          map.style.pointerEvents = "none";
        }
      });
    },
  },
  mounted() {
    this.c();
  },
};
</script>

<style>
.countdown {
  display: flex;
  justify-content: center;
  opacity: 0.8;
  /* background: #ace8e6; */
   background: #CDE4F3;
  max-width: 600px;
  /* margin: 0 auto; */
  border-radius: 15px;
  flex-wrap: wrap;
  margin: 5px;
}

.wrapper-footer-countdown,
.wrapper-header-countdown {
display: flex;
}
.seconds-block,
.days-block,
.hours-block,
.minutes-block {
  background: rgb(112, 170, 209);
  padding: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  font-weight: bold;
  border-radius: 15px;
  width: 90px;
  height: 90px;
  font-size: 25px;
}
.countdown-text {
  font-weight: normal;
  font-size: 20px;
}
.countdown-number {
  margin: 15px;
}

.mpa {
  font-family: "Lobster", cursive;
  font-size: 35px;
  /* font-family: 'Open Sans', sans-serif; */
}

/* FIRST BLOCK SECTION */
.home-first-block-wrapper {
  /* background: url(../assets/12.jpg); */

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height:250px;

  position: relative;
}

.home-first-block__block-info {
  position: absolute;
  width: 50%;
  height:250px;
  border-radius: 15px;
  /* background: #a5ab9d; */
  background: url(../assets/12.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.4;
  /* bottom: 25px; */
  /* top: 25%; */
  transform: translateY(-25%);
  left: 50%;
  transform: translateX(-50%);
}

.wrapper-first-block-text__title,
.wrapper-second-block-text__title,
.wrapper-third-block-text__title
 {
text-align: center;
color: #fdfffe;
font-size: 45px !important;
padding: 10px;

}
.wrapper-first-block-text__text,
.wrapper-second-block-text__text,
.wrapper-third-block-text__text
 {
  color:#1d1d1c;
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
}
.v-application p {
  margin-bottom: 0;
}
.wrapper-second-block-text__text {
text-align: center;
}

.wrapper-first-block-text,
.wrapper-second-block-text,
.wrapper-third-block-text {
    position: absolute;
text-align: center;
  height:250px;
  /* top: 28%; */
   transform: translateY(-28%);

  /* bottom: 0; */
  left: 50%;
  transform: translateX(-50%);
}
/* SECOND BLOCK */
.home-second-block-wrapper {
  /* background: url(../assets/123.jpg); */
  /* background: #cee1f0; */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 450px;

  position: relative;
}
.home-second-block__block-info {
  position: absolute;
  width: 50%;
  height: 450px;
  /* background: #d3bbc8; */
   background: url(../assets/33.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 15px;
  /* top: 25%; */
  transform: translateY(-25%);
  left: 50%;
  transform: translateX(-50%);
   opacity: 0.4;
}

.wrapper-second-block-text__span {
  /* color: #977aba; */
  color: #ffffff;
  /* letter-spacing: 1.4px; */
}
/* third  SECTION */

.home-third-block-wrapper {
  /* background: url(../assets/thid-block-bg.jpg); */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 350px;

  position: relative;
}
.home-third-block__block-info {
  position: absolute;
  width: 50%;
  height:300px;
  /* background: #cde4f4; */
     background: url(../assets/123.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 15px;
  opacity: 0.4;
  /* bottom: 25px; */
  /* top: 25%; */
  transform: translateY(-25%);
  left: 50%;
  transform: translateX(-50%);
}

.wrapper-third-block-text__title--big {
  font-size: 75px !important;
}
.wrapper-third-block-text__text--big {
  font-size: 35px !important;
  font-weight: normal;
  color: azure;
}

.wrapper-first-block-text__text--white {
  color:azure;
}

.wrapper-second-block-text__span--title {
  font-size: 30px !important;
  letter-spacing: 2px;
}
/* ADAPTIV */
/* FIRST BLOCK */

  @media (max-width: 720px) {
    .wrapper-first-block-text,
    .wrapper-third-block-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* top: 23%; */
    }

.wrapper-first-block-text__title,
.wrapper-third-block-text__title {
  font-size: 25px !important;
  margin-bottom: 20px !important;
}

.wrapper-first-block-text__text,
.wrapper-third-block-text__text {
  font-size: 15px;
}
  }
  
@media (max-width: 800px) {

.home-first-block__block-info {
    width: 80%;
}

}
    @media (max-width: 340px) {
.wrapper-first-block-text,
.wrapper-third-block-text {
   padding-top:15px;
}
    }

/* SECOND BLOCK */
  @media (max-width: 1116px)  {
    .home-second-block-wrapper {
      /* height: 1000px; */
      
    }
    .element-rose-width-1116 {
      margin-top: 150px !important;
    }
    .home-second-block__block-info {
      height:125%;
      width: 85%;
    }
  }

@media (max-width: 790px) {
  .wrapper-second-block-text__title {
  font-size: 35px !important;
  margin-bottom: 20px !important;
}

.wrapper-second-block-text__text {
  font-size: 15px;
}
.wrapper-second-block-text__span {
font-size: 25px !important;
}

/* счетчик */
.seconds-block, .days-block, .hours-block, .minutes-block {
    width: 80px;
    height: 80px;
    font-size: 15px;
}
.countdown-text {
  font-size: 15px;
}
.home-second-block__block-info {
  height: 135%;
}
}

/* THIRD BLOCK */
  @media (max-width: 800px) {

.home-third-block__block-info {
  width: 80%;
  /* top: 18%; */
  height: 320px;
}

.wrapper-third-block-text__title--big {
  font-size: 45px !important;
  margin-bottom: 20px !important;
}


.wrapper-third-block-text__text--big {
  font-size: 20px !important;
  width: 300px;
}
  }

    @media (max-width: 350px)  {
.wrapper-third-block-text__text--big {
  
  width: 250px;
}
    }


/* эЛЕМЕНТ ЦВЕТОВ */
.element-rose {
    width: 50%;
    height: auto;
    display: block;
    margin: 0 auto;
    padding-top: 10px;
    padding-bottom: 10px;
}
@media(max-width: 600px) {
.element-rose {
  width: 80%;
}
}
.home {
background: #85BDFF;
background: -webkit-linear-gradient(left, #85BDFF, #FFD5E4);
background: -moz-linear-gradient(left, #85BDFF, #FFD5E4);
background: linear-gradient(to right, #85BDFF, #FFD5E4);
position: relative;

}
.home::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
 background-repeat: no-repeat;
  
  background-size: contain;
/* background: url(../assets/ros.png); */


}
</style>

