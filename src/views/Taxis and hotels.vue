<template>
  <div class="taxis-and-hotels pa-5">
    
   
    <img src="../assets/Otel.png" alt="rose" class="element-rose">
    
    <p class="h3 font-lobster">Отели</p>
   
    <div style="position:relative;overflow:hidden;" @click="mapHotelsUseOnClick" id="map-wrap-two">
      <a href="https://yandex.ru/maps/35/krasnodar/search/%D0%93%D0%BE%D1%81%D1%82%D0%B8%D0%BD%D0%B8%D1%86%D0%B0/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Гостиница в Краснодаре</a>
      <a href="https://yandex.ru/maps/35/krasnodar/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">Краснодар</a>
      <iframe ref="mp" src="https://yandex.ru/map-widget/v1/-/CCUMy2QsoA" width="100%" height="500" frameborder="1" allowfullscreen="true" style="position:relative; border:none; pointer-events: none;"></iframe>
    </div>

    <!-- IMG ELEMENT ROSE -->
    <img src="../assets/z.png" alt="rose" class="element-rose">
    <!-- END IMG ELEMENT ROSE -->
    <p class="h3 font-lobster pa-3" >Контакты такси в Краснодаре</p>

     <v-card
    class="mx-auto border-rads"
    max-width="400px"
    
    >

    <v-list-item v-for="(tel, index) in tels" :key="index">
      <v-list-item-content>
        <v-list-item-title class="style-item-contacts"> 
          <span style="display:block; text-align: center;">{{tel.name}} </span> <br>
      
          <a :href="tel.href"  style="display:block; text-align: center;"> Телефон {{tel.telephone}}</a>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>


    </v-card>
      
  </div>
</template>

<script>



export default { 
  data() {
    return {
      tels:[

          {
            name:'Яндекс такси',
            href:'tel:+78612050020',
            telephone:'+7-(861)-20-500-20'
          },

          {
            name:'Везет такси',
            href:'tel:+78612166666',
            telephone:'+7-(861)-216-66-66',
          },

          {
            name:'Сатурн такси',
            href:'tel:+78612745555',
            telephone:'+7-(861)-274-55-55'
          }
      ]
    }
  },


methods:{

  mapHotelsUseOnClick() {

  document.addEventListener('click', function(e) {

  let map = document.querySelector('#map-wrap-two iframe')

    if(e.target.id === 'map-wrap-two') {
        map.style.pointerEvents = 'all'
    } else {
        map.style.pointerEvents = 'none'
    }

        })
        // end
  },
},

}
</script>

<style>

.taxis-and-hotels {
/* background: aliceblue; */
background: #85BDFF;
background: -webkit-linear-gradient(left, #85BDFF, #FFD5E4);
background: -moz-linear-gradient(left, #85BDFF, #FFD5E4);
background: linear-gradient(to right, #85BDFF, #FFD5E4);
position: relative;
height: 100%;
}

#map-wrap-two {
  /* border: solid rgb(128, 181, 216) 2px; */
  border-radius: 15px;
}
.style-item-contacts {
  color: rgba(0, 0, 0, 0.87);
  font-weight: bold;
}

.border-rads {
  border-radius: 10px !important;
}

/* img rose */
/* .element-rose {
    width: 50%;
    height: auto;
    display: block;#map-wrap-two
    margin: 0 auto;
    padding-bottom: 10px;
    padding-top: 10px;
} */
</style>