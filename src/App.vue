<template>
  <v-app id="inspire">

    <!-- start navigation  LEFT SIDEBAR-->
    <v-navigation-drawer v-model="drawer" temporary app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title title-left-sidebar ">
            Свадьба в Краснодаре
          </v-list-item-title>
          <v-list-item-subtitle class="title-left-sidebar ">
            21 Августа 2021 года
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <!-- divider- перегородка -->
      <v-divider></v-divider>

      <v-list dense nav>
        <!-- <router-link to="/" @click="scrollToTop">11111</router-link>
        <router-link to="/ceremony" @click="scrollToTop">2222</router-link> -->
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon color="rgb(81 138 230)">{{ item.icon }}</v-icon>
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
      color="#CDE4F3"
      dark
      prominent
      src=""
      height="60px"
      width="100%"
    >
      <v-app-bar-nav-icon color="rgb(81 138 230)" @click="drawer = !drawer" class="main-menu">Меню</v-app-bar-nav-icon>

      <v-spacer></v-spacer>
      
        <v-toolbar-title class="font-lobster hide-link" >
          <router-link to="ceremony" class="header-link">Программа</router-link>
        </v-toolbar-title>

      <v-spacer></v-spacer>
        <v-toolbar-title class="font-lobster  hide-link" >
          <router-link to="taxis-and-hotels" class="header-link">Такси и отели</router-link>
        </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title class="font-lobster font-size-lobster header-main-title" 
        >Cергей и Елена
        <v-icon color="yellow" size="35" class="icon-ring-header">mdi-ring</v-icon>
      </v-toolbar-title>

      <v-spacer></v-spacer>
        <v-toolbar-title class="font-lobster  hide-link" >
          <router-link to="contacts" class="header-link">Контакты</router-link>
        </v-toolbar-title>
      <v-spacer></v-spacer>
       
      <v-spacer></v-spacer>
      <v-btn icon :to="home">
        <v-icon color="rgb(81 138 230)">mdi-home</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- END HEADER -->

    <!-- START MAIN CONTENT -->
    <v-main class="main-content">
      <router-view></router-view>
    </v-main>
    <!-- END MAIN CONTENT -->

    <v-footer  padless app height="30px" >
      <v-card class="flex main-footer" flat tile>
        <v-card-text class="pa-1 white--text text-center">
          <strong>© Журавлёв С.И. Все права защищены, 2021 г. </strong>
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
      { title: "Программа", icon: "mdi-map-marker", to: "/ceremony" },
      { title: "Такси и Отели", icon: "mdi-taxi", to: "/taxis-and-hotels" },
      { title: "Контакты", icon: "mdi-phone-in-talk", to: "/contacts" },
      // { title: "О нас", icon: "mdi-human-male-female", to: "/about-us" },
    ],

    home: "/",
  }),
  methods: {

  } 
};
</script>

<style lang="scss">
.router-link-exact-active {
  
  text-decoration: revert !important;
}
.main-menu {
  margin-left: 5px!important;
}
.main-content{
  height: 100%;
}
.main-footer {
  background: rgb(140, 190, 221)!important;
  height: 100%;
}
/* Цвет Сергей и Елена в шапке */
/* .header-main-title {
  color: #4296af;
} */

.title-left-sidebar {
  color: rgb(112, 170, 209) !important;
}
.v-toolbar--prominent .v-toolbar__content {
  align-items: center !important;
}

.v-toolbar--prominent:not(.v-toolbar--bottom) .v-toolbar__title {
  align-self: auto !important;
}

.header-link {
  text-decoration: none;
  transition: 0.5s;
  &:hover {
    color: blue;
    transition: 0.5s;
  }
}

@media (max-width:992px) {
.hide-link {
  display: none;
}
}
    /* скрываю иконку кольцо */
  @media (max-width: 360px) {
    .icon-ring-header {
      display: none !important;
    }
  }

</style>