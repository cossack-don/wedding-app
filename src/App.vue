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

<!-- divider- перегородка -->
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

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>


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

  }),

};
</script>

<style>
</style>