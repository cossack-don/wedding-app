<template>
  <div class="home">
    <section class="home-first-block-wrapper home-first-block">
      <div class="home-first-block__block-info"></div>
    </section>

    <section class="home-second-block-wrapper home-second-block">
      <div class="home-second-block__block-info"></div>
    </section>

    <section class="home-third-block-wrapper home-third-block">
      <div class="home-third-block__block-info"></div>
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

.mpa {
  font-family: "Lobster", cursive;
  font-size: 35px;
  /* font-family: 'Open Sans', sans-serif; */
}

/* FIRST BLOCK SECTION */
.home-first-block-wrapper {
  background: url(../assets/first-block-bg.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 800px;

  position: relative;
}

.home-first-block__block-info {
  position: absolute;
  width: 50%;
  height: 100px;
  background: red;
  opacity: 0.7;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
}
/* SECOND BLOCK */
.home-second-block-wrapper {
  background: url(../assets/second-block-bg.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 800px;

  position: relative;
}
.home-second-block__block-info {
  position: absolute;
  width: 50%;
  height: 100px;
  background: blue;
  opacity: 0.7;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
}
/* third  SECTION */

.home-third-block-wrapper {
  background: url(../assets/thid-block-bg.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 800px;

  position: relative;
}
.home-third-block__block-info {
  position: absolute;
  width: 50%;
  height: 100px;
  background: pink;
  opacity: 0.7;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
}
</style>