<template>
  <v-app id="inspire">
    <!-- start navigation  LEFT SIDEBAR-->
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content >
          <v-list-item-title class="title purple--text"> Свадьба в Краснодаре </v-list-item-title>
          <v-list-item-subtitle class="purple--text"> 21 Августа 2021 года </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- end navigation LEFT SIDEBAR-->

    <!-- START HEADER -->
    <v-app-bar
      app
      color="#3faeac"
      dark
      prominent
      src=""
     height="60px"
      width="100%"
      
    >
    <!-- :height="heights" -->
      <!-- <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          
        ></v-img>
      </template> -->

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <!-- <v-app-bar-title text-center>Свадьба</v-app-bar-title> -->

<!-- <h3 mt-15>33</h3> -->
    <!-- <template> 
      <h3 class="mt-15 main-header-title" >Елена и Сергей</h3> 
    </template> -->
<v-toolbar-title>Свадьба
  <v-icon color="yellow" size="35">mdi-ring</v-icon>
  </v-toolbar-title>

<v-spacer></v-spacer>
    <v-btn icon :to="home">
        <v-icon>mdi-home</v-icon>
      </v-btn> 
  
    </v-app-bar>
    <!-- END HEADER -->

    <!-- START MAIN CONTENT -->
    <v-main>
   
      <router-view></router-view>
    </v-main>
    <!-- END MAIN CONTENT -->

     <v-footer
    dark
    padless
    app
    height="30px "
  >
    <v-card
      class="flex"
      flat
      tile
    >


      <v-card-text class="pa-1 white--text text-center">
        <strong>© Журавлёв С.И. Все права защищены, 2021 г.
        </strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      // mdi-whatsapp
      // mdi-instagram
      { title: "Главная", icon: "mdi-home", to: "/" },
      { title: "Церемония", icon: "mdi-map-marker", to: "/ceremony" },
      { title: "Такси и Отели", icon: "mdi-taxi", to: "/taxis-and-hotels" },
      { title: "Контакты", icon: "mdi-phone-in-talk", to: "/contacts" },
      { title: "О нас", icon: "mdi-human-male-female", to: "/about-us" },
    ],
    home: "/",
    images: [
      {
        id:1,
        url: require('./assets/header.jpg')
      },
            {
        id:2,
        url: require('./assets/header.jpg')
      },
            {
        id:3,
        url: require('./assets/header.jpg')
      },
            {
        id:4,
        url: require('./assets/header.jpg')
      }
    ]
  }),

  methods: {
    // https://github.com/SergeyZhur/vuetify-todo/blob/main/src/App.vue
    // https://learn.javascript.ru/settimeout-setinterval
    // https://github.com/cossack-don/nice-app/blob/main/src/pages/Product.vue
    // https://github.com/cossack-don/nice-app/blob/main/src/store/shop.js
// http://code.mu/ru/javascript/manual/math/Math.random/
    // идея заключается в том что хочу сделать чтобы картинки менялись через каждые 2 секунды в хедере
    go() {

// this.getRandomInRange(1,4)
      // return this.images[0].url
console.log(3)

//     setInterval(() => {
// console.log(3)
//     }, 4000);
    },


    getRandomInRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

  },
computed: {
  // https://vuetifyjs.com/en/features/breakpoints/#breakpoint-service
      //   heights () {
      //   switch (this.$vuetify.breakpoint.name) {
      //     case 'xs': return 200
      //     case 'sm': return 200
      //     case 'md': return 200
      //     case 'lg': return 150
      //     case 'xl': return 150
      //   }
      // },
}

   

};
</script>

<style>
.main-header-title{
  font-family: 'Yusei Magic', sans-serif;
background: rgb(172,232,230);
background: linear-gradient(90deg, rgba(172,232,230,0.8183648459383753) 0%, rgba(36,201,196,0.8491771708683473) 96%, rgba(172,232,230,0.8687850140056023) 100%);
    border-radius: 50px;
    /* padding: 15px; */
    /* padding-top: 5px;
    padding-bottom: 5px; */
    padding-right: 15px;
    padding-left: 15px;
    padding-bottom: 10px;
    padding-top: 5px;
    border: solid #cd72b7 5px;
  color:#4b51a6;

   
}

@media (max-width: 600px) {
  .main-header-title {
    font-size: 20px;
  }
}


</style>