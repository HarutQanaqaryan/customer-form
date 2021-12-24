<template>
    <div class="main-form" >
      <h1 class="main-header">Регистрация</h1>
      <router-view/>
    </div>
</template>

<script>
import MainInfo from "./components/MainInfo.vue";

export default {
  components: { MainInfo}
}

</script>

<style lang="scss">
@import "./assets/styles.scss";
</style>