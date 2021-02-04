<template>
  <v-app id="inspire">
    <!-- start navigation  LEFT SIDEBAR-->
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"> Vuetify Todo! </v-list-item-title>
          <v-list-item-subtitle> Best Todo! </v-list-item-subtitle>
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
      color="primary"
      dark
      prominent
      :src="go()"
      height="200px"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Vuetify Todo</v-app-bar-title>

      <v-spacer></v-spacer>

      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn> -->
    </v-app-bar>
    <!-- END HEADER -->

    <!-- START MAIN CONTENT -->
    <v-main>
      <!--  -->1
      <!-- <img :src="go()" alt=""> -->
      <router-view></router-view>
    </v-main>
    <!-- END MAIN CONTENT -->
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: "Todo", icon: "mdi-format-list-checks", to: "/" },
      { title: "About", icon: "mdi-help-box", to: "/about" },
    ],
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

};
</script>