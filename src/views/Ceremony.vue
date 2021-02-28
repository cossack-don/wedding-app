<template>
<div class="ceremony pa-5">
<p class="h3 pb-4 font-lobster">Программа</p>
    <div class="first-day-container">

      <div @click="mapUseOnClick" class="first-day-map wrapper-frame-map" id="map-wrap" >
                <iframe style="pointer-events: none;" class="yandex-map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A0a1c0bd76ecadabcf769205c7b4864f810ac8442ae0e6ff8e1af15c4d6fd0842&amp;source=constructor" width="100%" height="90%" frameborder="0"></iframe>
      </div>

      <div class="first-day-list">1-й день

        <ul>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
      </div>

    </div>

    <!-- second day -->

    <div class="second-day-container">

      
      <div class="second-day-list">2-й день

                <ul>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
      </div>
            <div @click="mapUseOnClick" class="second-day-map wrapper-frame-map" id="map-wrap" >
                <iframe style="pointer-events: none;" class="yandex-map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A0a1c0bd76ecadabcf769205c7b4864f810ac8442ae0e6ff8e1af15c4d6fd0842&amp;source=constructor" width="100%" height="90%" frameborder="0"></iframe>
      </div>
    </div>

</div>
</template>

<script>

export default {
 
  data() {
    return {

      showArrows:false,

      listSchedule : [
        {
          icon:'mdi-hand-heart',
          title:'Выкуп - 12:00',
          city:'Cт. Ивановская',
          adress:'улица уточнить'
        },

        {
          icon:'mdi-human-scooter',
          title:'Прогулка - 14:00',
          city:'Краснодар - парк',
          adress:'улица уточнить'
        },

        {
          icon:'mdi-home-city',
          title:'Ресторан - 17:00',
          city:'Краснодар, Олимп Холл',
          adress:'улица Вишняковой, 1/5'
        },

      ],

      dayTwoListSchedule: [

        {
          icon:'mdi-home-flood',
          title:'Дома в станице Ивановская'
        },

        {
          icon:'mdi-swim',
          title:'Купание'
        },

      ],

    }
  },


  methods: {
    mapUseOnClick() {
      document.addEventListener('click', function(e) {

          let map = document.querySelector('#map-wrap iframe')

          if(e.target.id === 'map-wrap') {
              map.style.pointerEvents = 'all'
          } else {
              map.style.pointerEvents = 'none'
          }

            })
    },


  },

}
</script>

<style>
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
  height: 400px;
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

@media (max-width: 1100px) {
.main-wrapper-ceremony__map {
  width: 100%;
  order: 1;
}

.main-wrapper-ceremony__list-events {
  width:100%;
  margin-left: 0;
  margin-bottom: 50px;
}

}

@media (min-width: 1100px) {
#map-wrap {
height: 600px;
}
}


/* НОВЫЕ СТИЛИ */
.ceremony {
background: #57D7E5;
background: -webkit-linear-gradient(left, #57D7E5, #FFD5E4);
background: -moz-linear-gradient(left, #57D7E5, #FFD5E4);
background: linear-gradient(to right, #57D7E5, #FFD5E4);
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
  background: green;
  height: 200px;
  width: 100%;
  display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
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
  background: pink;
  height: 200px;
  width: 100%;
  display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

</style>
