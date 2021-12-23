<template>
  <div>
    <h3>Адрес</h3>
    <div class="main_info-container">
      <div class="main_info-item">
        <span class="main_info_key">Индекс</span>
        <input class="main_info_input" />
      </div>
      <div class="main_info-item">
        <span class="main_info_key">Страна</span>
        <input class="main_info_input" />
      </div>
      <div class="main_info-item">
        <span class="main_info_key">Область</span>
        <input class="main_info_input"/>
      </div>
      <div class="main_info-item">
        <span class="main_info_key">Город*</span>
        <input class="main_info_input" />
      </div>
      <div class="main_info-item">
        <span class="main_info_key">Улица</span>
        <input class="main_info_input" />
      </div>
      <div class="main_info-item">
        <span class="main_info_key">Дом</span>
        <input class="main_info_input" />
      </div>
    </div>
  </div>
  <router-link to="/passport" class="link-to">Далее</router-link>
  <router-view />
</template>

<script>

</script>
