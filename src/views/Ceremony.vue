<template>
  <div class="ceremony">
   
  <v-parallax
    class="pt-4"
    src="../assets/1.jpg"
    height="1000"
    pb-5
  >
    <v-row
     
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <h1 class="display-1 mb-4 h3">
          Церемония
        </h1>
      

          <div  class="main-wrapper-ceremony ">
      <div class="main-wrapper-ceremony__map ">
    
        <div @click="mapUseOnClick" class="wrapper-frame-map" id="map-wrap" >
            <iframe style="pointer-events: none;" class="yandex-map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A0a1c0bd76ecadabcf769205c7b4864f810ac8442ae0e6ff8e1af15c4d6fd0842&amp;source=constructor" width="100%" height="90%" frameborder="0"></iframe>
        </div>

      </div>


      <div class="main-wrapper-ceremony__list-events">
         <v-card
    max-width="100%"
    
  >


    <v-list color="#ace8e6">
      <!-- ITEM -->
      <div class="pt-2 ceremony-title"><p>Первый день свадьбы 21.08.2021</p></div>

      <v-list-item v-for="(listItem,index) in listSchedule" :key="index"  class="">
        <v-list-item-icon>
          <v-icon color="indigo">
            <!-- mdi-phone -->
            {{listItem.icon}}
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="text-left">{{listItem.title}}</v-list-item-title>
                  <v-list-item-title class="text-left">{{listItem.city}}</v-list-item-title>
                  <v-list-item-title class="text-left">{{listItem.adress}}</v-list-item-title>
        </v-list-item-content>
  
       
      </v-list-item>
<!-- ITEM -->  
    </v-list>
   
        <v-list color="#ace8e6">
      <!-- ITEM -->
      <div class="ceremony-title"><p>Второй день свадьбы - 22.08.2021</p></div>

      <v-list-item v-for="(listItem,index) in dayTwoListSchedule" :key="index"  class="">
        <v-list-item-icon>
          <v-icon color="indigo">
            <!-- mdi-phone -->
            {{listItem.icon}}
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="text-left">{{listItem.title}}</v-list-item-title>

        </v-list-item-content>

       
      </v-list-item>
<!-- ITEM -->  
    </v-list>
  </v-card>

        
      </div>

<!-- <div  class="hide-block">1</div> -->

    </div>
      </v-col>

    </v-row>
    <template>

</template>
  </v-parallax>


    <!-- <h3 class="h3 pt-3 pb-3">Церемония</h3> -->







  </div>
</template>
https://blog.lisogorsky.ru/ignor-scroll-iframe-maps
    // https://qna.habr.com/q/455799

    // https://jsfiddle.net/9zc7vfam/1/

    // https://blog.lisogorsky.ru/ignor-scroll-iframe-maps
<script>
// @ is an alias to /src


export default {
 
  components: {
    
  },
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
          title:'Дома в станице Ивановская - 9:00'
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
/* .wrapper-frame-map {
height: 300px; 
width: 100%; 
margin: 0 auto;
} */
#map-wrap {
  height: 400px;
}


.yandex-map {
padding: 5px;
border-radius: 10px;
background: #4b51a6;
}
.hide-block {
  display: block;
  
  order: 3;
  height: 120px;
  padding-bottom: -50px;
  width: 100%;
  background: red;
  /* opacity: 0; */
  padding-bottom: 100px;
}

.ceremony-title {
color: #4b51a6;
font-weight: bold;
}

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


</style>

