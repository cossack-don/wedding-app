<template>
  <div class="taxis-and-hotels pa-5">
    
    
    <p class="h3">Отели</p>
    <div style="position:relative;overflow:hidden;" @click="mapHotelsUseOnClick" id="map-wrap-two">
      <a href="https://yandex.ru/maps/35/krasnodar/search/%D0%93%D0%BE%D1%81%D1%82%D0%B8%D0%BD%D0%B8%D1%86%D0%B0/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Гостиница в Краснодаре</a>
      <a href="https://yandex.ru/maps/35/krasnodar/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">Краснодар</a>
      <iframe src="https://yandex.ru/map-widget/v1/-/CCUMy2QsoA" width="100%" height="500" frameborder="1" allowfullscreen="true" style="position:relative; border:none; pointer-events: none;"></iframe>
      </div>

      <p class="h3">Контакты такси</p>
  </div>
</template>

<script>
export default {
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
    },
}
}
</script>

<style>
.taxis-and-hotels {
background: aliceblue;
}

</style>