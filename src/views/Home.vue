<template>
  <div class="home">
    <section class="home-first-block-wrapper home-first-block">
      <div class="home-first-block__block-info block-info-first"></div>

      <div class="wrapper-first-block-text">
          <p class="wrapper-first-block-text__title font-lobster ">Ожнажды <br> произошло чудо</p>
          <p class="wrapper-first-block-text__text">История о том, как все прекрасно сложилось</p>
      </div>
    </section>

    <section class="home-second-block-wrapper home-second-block">
      <div class="home-second-block__block-info"></div>

          <div class="wrapper-second-block-text">
          <p class="wrapper-second-block-text__title font-lobster ">Cергей и Елена</p>
          <p class="wrapper-second-block-text__text">
          <span class="wrapper-second-block-text__span ">21 Августа 2021 года</span>
          <br> г. Краснодар, ул.Вишняковой, 1/5 <br>
           Cбор гостей в 16:30 
           <span class="wrapper-second-block-text__span font-lobster"> <br> До торжества осталось:</span></p>

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

    <section class="home-third-block-wrapper home-third-block">
      <div class="home-third-block__block-info"></div>

          <div class="wrapper-third-block-text">
          <p class="wrapper-third-block-text__title wrapper-third-block-text__title--big font-lobster ">Cпасибо</p>
          <p class="wrapper-third-block-text__text wrapper-third-block-text__text--big">что разделили с нами этот особый день!</p>
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
  margin: 15px;
}

.wrapper-footer-countdown,
.wrapper-header-countdown {
display: flex;
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

.mpa {
  font-family: "Lobster", cursive;
  font-size: 35px;
  /* font-family: 'Open Sans', sans-serif; */
}

/* FIRST BLOCK SECTION */
.home-first-block-wrapper {
  background: url(../assets/12.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 500px;

  position: relative;
}

.home-first-block__block-info {
  position: absolute;
  width: 50%;
  height:250px;
  border-radius: 15px;
  background: #a5ab9d;
  opacity: 0.7;
  /* bottom: 25px; */
  top: 25%;
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
  top: 28%;
   transform: translateY(-28%);

  /* bottom: 0; */
  left: 50%;
  transform: translateX(-50%);
}
/* SECOND BLOCK */
.home-second-block-wrapper {
  background: url(../assets/123.jpg);
  /* background: #cee1f0; */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 700px;

  position: relative;
}
.home-second-block__block-info {
  position: absolute;
  width: 50%;
  height: 450px;
  background: #d3bbc8;
  border-radius: 15px;
  top: 25%;
  transform: translateY(-25%);
  left: 50%;
  transform: translateX(-50%);
   opacity: 0.7;
}

.wrapper-second-block-text__span {
  color: #977aba;
}
/* third  SECTION */

.home-third-block-wrapper {
  background: url(../assets/thid-block-bg.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 500px;

  position: relative;
}
.home-third-block__block-info {
  position: absolute;
  width: 50%;
  height:300px;
  background: #cde4f4;
  border-radius: 15px;
  opacity: 0.7;
  /* bottom: 25px; */
  top: 25%;
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
    top: 23%;
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
      height: 1000px;
      
    }
    .home-second-block__block-info {
      height:65%;
      width: 85%;
    }
  }

@media (max-width: 720px) {
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

}

/* THIRD BLOCK */
  @media (max-width: 800px) {

.home-third-block__block-info {
  width: 80%;
  top: 18%;
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





</style>

