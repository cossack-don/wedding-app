<template>
  <div>
    <h1>ИНФА ВЗЯТА С HOME</h1>

    <v-parallax class="pt-4" src="../assets/33.jpg" height="1000">
      <v-row justify="center">
        <v-col class="text-center" cols="12">
          <div class="mpa">Сергей и Елена</div>
          <h1>
            СЖАТЬ ВСЕ КАРТИНКИ, ПРОВЕРИТЬ ВСЕ ФИО, ПРОВЕРИТЬ КАК НА АДАПТИВЕ ВСЕ
            БУДЕТ, АКТУАЛЬНОСТЬ ИНФЫ
          </h1>
          <p>о нас - установить фото и сжать их</p>
          <p>
            контакты - установить аватарки и сжать их, проверить актуальность
            телов
          </p>
          <p>церемония уточнить время и адреса</p>

          <p>протестить кроссбраузерность и адаптив</p>

          <h1 class="display-1 mb-4 h3">До свадьбы осталось:</h1>

          <!-- <video width="300" autoplay="autoplay" muted="muted" loop="loop" src="../assets/video.mp4"></video>
<video width="300" autoplay="autoplay" muted="muted" loop="loop" src="../assets/video_2.mp4"></video> -->
          <!-- https://pixabay.com/ru/videos/search/%D1%81%D0%B2%D0%B0%D0%B4%D1%8C%D0%B1%D0%B0/ -->
          <div id="countdown" class="countdown">
            <div class="countdown-number days-block">
              <span class="days countdown-time">00</span>
              <span class="countdown-text">Дней</span>
            </div>
            <div class="countdown-number hours-block">
              <span class="hours countdown-time">00</span>
              <span class="countdown-text">Часов</span>
            </div>
            <div class="countdown-number minutes-block">
              <span class="minutes countdown-time">00</span>
              <span class="countdown-text">Минут</span>
            </div>
            <div class="countdown-number seconds-block">
              <span class="seconds countdown-time">00</span>
              <span class="countdown-text">Секунд</span>
            </div>
          </div>
          <p>Cжать все картинки в spa</p>
          <h3>Как доехать до Ресторана, РЖД, Аэропорт</h3>
          <div
            style="position: relative; overflow: hidden"
            @click="mapMainCheckPointOnClick"
            id="map-wrap-four"
          >
            <iframe
              style="pointer-events: none"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa3cc3445f1e2ff528a10faed7b52811f0d4237a102ca5620618a45308c1d2f8c&amp;source=constructor"
              width="100%"
              height="360"
              frameborder="0"
            ></iframe>
          </div>

          Тона свадьбы 3-5 шт кружочки хештег имя + лого инст и ссылка
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>