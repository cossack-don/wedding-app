<template>
  <div class="contacts pa-5">
    <img src="../assets/2.png" alt="rose" class="element-rose">
    <p class="h3 pb-4 font-lobster">Контакты</p>
    <!-- Список контактов -->
    <v-card max-width="100%" class="mx-auto">
      <v-list three-line>
        <template v-for="(item, index) in items">
          <v-subheader
            style="color: #4b51a6; font-weight: bold"
            v-if="item.header"
            :key="item.header"
            v-text="item.header"
          ></v-subheader>

          <v-divider
            v-else-if="item.divider"
            :key="index"
            :inset="item.inset"
            color="#ace8e6"
          ></v-divider>

          <!-- ITEM CARD -->
          <v-list-item v-else :key="item.title">
            <!-- avatar -->
            <v-list-item-avatar size="80">
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>

            <!-- end avatar -->

            <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle
                v-html="item.subtitle"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <!-- END ITEM CARD -->
        </template>
      </v-list>
    </v-card>

    <v-card max-width="100%" class="mx-auto mt-8">
      <v-list three-line>
        <template v-for="(item, index) in parents">
          <v-subheader
            style="color: #4b51a6; font-weight: bold"
            v-if="item.header"
            :key="item.header"
            v-text="item.header"
          ></v-subheader>

          <v-divider
            v-else-if="item.divider"
            :key="index"
            :inset="item.inset"
            color="#ace8e6"
          ></v-divider>

          <!-- ITEM CARD -->
          <v-list-item v-else :key="item.title">
            <!-- avatar -->
            <v-list-item-avatar size="80">
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>

            <!-- end avatar -->

            <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle
                v-html="item.subtitle"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <!-- END ITEM CARD -->
        </template>
      </v-list>
    </v-card>
    <!-- конец Список контактов -->
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      // ФОТО 128 НА 128 АВАТАРКИ
      // CЖАТЬ ФОТО
      // ПРОВЕРИТЬ АКТУАЛЬНОСТЬ ТЕЛЕФОНОВ
      { header: "Жених и Невеста" },

      {
        avatar: require("../assets/foto-contacts-page/2.jpg"),
        title: "Журавлёв Сергей",
        subtitle: `<span class="text--primary">Телефон: <a href="tel:+79660890786"> 8-966-089-07-86</a></span>`,
      },

      { divider: true, inset: true },

      {
        avatar: require("../assets/foto-contacts-page/girl.jpg"),
        title: "Фоменко Елена",
        subtitle: `<span class="text--primary">Телефон: <a href="tel:+79998155660"> 8-999-815-56-60</a></span>`,
      },
    ],

    parents: [
      { header: "Родители" },

      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Фоменко Светлана <br> Евгеньевна",
        subtitle: `<span class="text--primary">Телефон: <a href="tel:+79180243600"> 8-918-024-36-00</a></span>`,
      },

      { divider: true, inset: true },

      {
        avatar: require("../assets/foto-contacts-page/man_2.jpg"),
        title: "Фоменко Андрей <br> Валентинович",
        subtitle: `<span class="text--primary">Телефон: <a href="tel:+79181722320"> 8-918-172-23-20</a></span>`,
      },

      { divider: true, inset: true },

      {
        avatar: require("../assets/foto-contacts-page/woman.jpg"),
        title: "Журавлёва Ольга <br> Ивановна",
        subtitle: `<span class="text--primary">Телефон: <a href="tel:+79031228847"> 8-903-122-88-47</a></span>`,
      },

      { divider: true, inset: true },

      {
        avatar: require("../assets/foto-contacts-page/man.jpg"),
        title: "Журавлёв Игорь <br> Николаевич",
        subtitle: `<span class="text--primary">Телефон: <a href="tel:+79055702615"> 8-905-570-26-15</a></span>`,
      },
    ],
  }),
};
</script>

<style>
.contacts {
  /* background: #ace8e6; */
background: aliceblue;
height: 100%;
}
</style>