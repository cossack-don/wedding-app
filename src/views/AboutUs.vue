<template>
  <div class="about-us pa-5">
    <!-- TITLE -->
    <h3 class="h3 pb-4">О нас</h3>

    <v-row>

    <v-col
      v-for="(foto, index) in galleryFotos"
      :key="index"
      class="d-flex child-flex  pa-2"
      cols="4"
    >

      <v-img
        :src="foto.img"
        aspect-ratio="1"
        class="grey lighten-2"
        
      >


      <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>

      </v-img>
    </v-col>
  </v-row>


  </div>
</template>

<script>
  export default {

    data: () => ({

      model: 0,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],

// фото в галлереи
// CЖАТЬ ВСЕ ФОТО
    galleryFotos: [

    {
      img: require('../assets/header.jpg')
    },

    {
      img: require('../assets/foto-gallery-about-us/1.jpg')
    },

    {
      img: require('../assets/foto-gallery-about-us/2.jpg')
    },

    {
      img: require('../assets/foto-gallery-about-us/3.jpg')
    },

    {
      img: require('../assets/foto-gallery-about-us/4.jpg')
    },

    {
      img: require('../assets/1.jpg')
    },

    ]
    }),

  }
</script>

<style>
.about-us {
  /* background: #ace8e6; */
      background: beige;
}

</style>