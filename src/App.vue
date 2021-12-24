<template>
    <form class="main-form" @submit.prevent="">
      <h1 class="main-header">Форма Клиента</h1>
      <MainInfo />
      <Adress />
      <Passport />
      <h6 class="main-wrapper_hint">*Поле обязательное для заполнения.</h6>
      <button type="submit" class="form-btn">Зарегистрироваться</button>
    </form>
</template>

<script>
import MainInfo from "./components/MainInfo.vue";
import Adress from "./components/Adress.vue";
import Passport from "./components/Passport.vue";

export default {
  components: { MainInfo, Adress, Passport }
}

</script>

<style lang="scss">
@import "./assets/styles.scss";
</style>