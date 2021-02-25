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
        <p class="mb-4 h3 font-lobster">
          Программа
        </p>
      

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

      <v-list-item v-for="(listItem,index) in listSchedule" :key="index">
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
          <v-list-item-title class="text-left color-text-white">{{listItem.title}}</v-list-item-title>

        </v-list-item-content>
       
      </v-list-item>
<!-- ITEM -->  
    </v-list>
  </v-card>

        
      </div>

    </div>
      </v-col>

    </v-row>

  </v-parallax>

  </div>