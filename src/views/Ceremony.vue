<template>
  <div class="ceremony pa-5">
    <p class="ceremony__title h3 pb-6 font-lobster">Программа</p>
    <div class="first-day-container">
      <div
        @click="mapUseOnClickTwo"
        class="first-day-map wrapper-frame-map"
        id="map-wrap-two"
      >
        <iframe
          style="pointer-events: none"
          class="yandex-map"
          width="100%"
          height="90%"
          frameborder="0"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Aff88d5417dc32a8c9c510527081c8b7cf254ed8d0c5f908559fd31f73c1af4d5&amp;source=constructor"
        ></iframe>
      </div>

      <div class="first-day-list">
        <h2 class="first-day-list__title">1-й день:</h2>
        <ul class="first-day-list__list">
          <li class="template-style-item-event">Выкуп - 11:00</li>
          <div class="first-day-list__line"></div>
          <li class="template-style-item-event">
            Прогулка с женихом и невестой + фотосессия (Парк Краснодар) - сразу
            после выкупа. Примерно в 13:00 - 14:00.
          </li>
          <div class="first-day-list__line"></div>
          <li class="template-style-item-event">
            Ресторан Олимп Hall - сбор гостей в 16:30
          </li>
        </ul>
      </div>
    </div>

    <!-- second day -->

    <div class="second-day-container">
      <div class="second-day-list">
        <h2 class="second-day-list__title">2-й день:</h2>
        <ul class="second-day-list__list">
          <li class="template-style-item-event">
            Ждем вас у невесты дома в станице Ивановской, точный адрес уточняйте
            по телефону
          </li>
        </ul>
      </div>
      <div
        @click="mapUseOnClick"
        class="second-day-map wrapper-frame-map"
        id="map-wrap"
      >
        <iframe
          style="pointer-events: none"
          class="yandex-map"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A0a1c0bd76ecadabcf769205c7b4864f810ac8442ae0e6ff8e1af15c4d6fd0842&amp;source=constructor"
          width="100%"
          height="90%"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showArrows: false,

      listSchedule: [
        {
          icon: "mdi-hand-heart",
          title: "Выкуп - 12:00",
          city: "Cт. Ивановская",
          adress: "улица уточнить",
        },

        {
          icon: "mdi-human-scooter",
          title: "Прогулка - 14:00",
          city: "Краснодар - парк",
          adress: "улица уточнить",
        },

        {
          icon: "mdi-home-city",
          title: "Ресторан - 17:00",
          city: "Краснодар, Олимп Холл",
          adress: "улица Вишняковой, 1/5",
        },
      ],

      dayTwoListSchedule: [
        {
          icon: "mdi-home-flood",
          title: "Дома в станице Ивановская",
        },

        {
          icon: "mdi-swim",
          title: "Купание",
        },
      ],
    };
  },

  methods: {
    mapUseOnClick() {
      let map = document.querySelector("#map-wrap iframe");

      function mapActive(e) {
        if (e.target.id === "map-wrap") {
          map.style.pointerEvents = "all";
        } else {
          map.style.pointerEvents = "none";
        }
      }

      document.addEventListener("click", mapActive);

      map.style.pointerEvents = "auto";
    },

    mapUseOnClickTwo() {
      let map = document.querySelector("#map-wrap-two iframe");

      function mapActive(e) {
        if (e.target.id === "map-wrap-two") {
          map.style.pointerEvents = "all";
        } else {
          map.style.pointerEvents = "none";
        }
      }

      document.addEventListener("click", mapActive);

      map.style.pointerEvents = "auto";
    },
  },
};
</script>

<style>
ul {
  list-style: none;
}
.v-application ul {
  padding-left: 0;
}
.main-wrapper-ceremony {
  display: flex;
  flex-wrap: wrap;
}

.main-wrapper-ceremony__map {
  width: 50%;
}

.main-wrapper-ceremony__list-events {
  width: 45%;
  margin-left: 50px;
  margin-right: auto;
}

#map-wrap {
  height: 600px;
}
#map-wrap-two {
  height: 600px;
}
.yandex-map {
  /* padding: 5px; */
  border-radius: 10px;
  background: rgb(205, 228, 243);
}

.ceremony-title {
  color: #4b51a6;
  font-weight: bold;
}

.v-application .display-1 {
  font-weight: bold;
}

/* .color-text-white {
  color: black;
} */

/* НОВЫЕ СТИЛИ */
.ceremony {
  background: #57d7e5;
  background: -webkit-linear-gradient(left, #57d7e5, #ffd5e4);
  background: -moz-linear-gradient(left, #57d7e5, #ffd5e4);
  background: linear-gradient(to right, #57d7e5, #ffd5e4);
  height: 100%;
}
/* .ceremony::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
 background-repeat: unset;
  
  background-size: cover;
background: url(../assets/el.png) repeat;


} */

/* first */
.first-day-container {
  display: flex;

  /* flex-wrap: wrap; */
}

.first-day-map {
  /* background: red; */
  height: 200px;
  width: 100%;
}

.first-day-list {
  padding: 15px;
  /* background: green; */

  width: 100%;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 15px;
}
/* second */
.second-day-container {
  display: flex;
  /* flex-wrap: wrap; */
}

.second-day-map {
  /* background: yellow; */
  height: 200px;
  width: 100%;
}

.second-day-list {
  padding: 15px;
  /* background: pink; */

  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 15px;
}

.first-day-list__title,
.second-day-list__title {
  font-family: "Lobster", cursive !important;
  color: #ffffff;
  margin-bottom: 15px;
  letter-spacing: 4px;
  font-size: 40px;
  color: rgb(81 138 230);
}

.template-style-item-event {
  margin-bottom: 15px;
  font-family: "Lobster", cursive !important;
  color: #ffffff;
  letter-spacing: 2px;
  font-size: 35px;
}

.first-day-list__list,
.second-day-list__list {
  max-width: 590px;
}

.first-day-list__line {
  /* rgb(81 138 230) */
  background: rgb(81 138 230);
  height: 1px;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}

@media (max-width: 1100px) {
  .template-style-item-event {
    font-size: 30px;
  }
  .main-wrapper-ceremony__map {
    width: 100%;
    order: 1;
  }

  .main-wrapper-ceremony__list-events {
    width: 100%;
    margin-left: 0;
    margin-bottom: 50px;
  }
}

@media (min-width: 1100px) {
  #map-wrap,
  #map-wrap-two {
    height: 600px;
  }
}

@media screen and (max-width: 992px) {
  .first-day-container,
  .second-day-container {
    flex-wrap: wrap;
  }
  .first-day-list,
  .second-day-list {
    order: 0;
    /* margin-bottom: 25px; */
  }
  .first-day-map,
  .second-day-map {
    order: 1;
  }
}

@media screen and (max-width: 550px) {
  .first-day-list__title,
  .second-day-list__title {
    margin-bottom: 5px;
    font-size: 25px;
  }
  .template-style-item-event {
    font-size: 20px;
  }
}
</style>
