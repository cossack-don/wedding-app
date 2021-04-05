<template>
  <div class="error-no-page">
    <p class="error-no-page__text">Ошибка 404</p>

    <div class="wrapper-error">
      <img src="@/assets/404.png" alt="404-img" class="wrapper-error__img" />

      <div class="wrapper-error__title">
        К сожалению, этой страницы нет в spa&nbsp;...
      </div>
      <div class="wrapper-error__list">
        <h3 class="wrapper-error__header-title">
          Возможно это произошло по следующим причинам:
        </h3>
        <ul>
          <li class="wrapper-error__list-item">
            Действующая страница была удалена
          </li>
          <li class="wrapper-error__list-item">
            Вы перешли по битой/неработающей ссылке
          </li>
          <li class="wrapper-error__list-item">
            Произошел системный сбой в работе spa
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.error-no-page {
  height: 100%;
  background: #57d7e5;
  background: linear-gradient(90deg, #57d7e5, #ffd5e4);

  &__text {
    padding: 15px;
  }
}

.wrapper-error {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  /* height: 100%; */
  margin-top: 50px;

  &__img {
    max-width: 80% !important;
    height: auto !important;
  }

  &__title {
    font-size: 30px;
    margin-top: 25px;
    padding: 20px;
    text-align: center;
  }

  &__header-title {
    font-size: 20px;
    margin-bottom: 10px;
    color: rgb(81 138 230);
    padding: 10px;
  }

  &__list-item {
    font-size: 18px;
    margin: 5px;
    color: #000000;
  }
}

@media screen and (max-width: 700px) {
  .wrapper-error__title {
    font-size: 23px;
  }
  .wrapper-error__header-title {
    font-size: 18px;
    text-align: center;
  }
}

@media screen and (max-width: 550зч) {
  .v-application ul,
  .v-application ol {
    padding-left: 35px;
  }
}
</style>