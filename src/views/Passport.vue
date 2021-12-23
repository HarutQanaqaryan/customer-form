<template>
  <div>
    <h3>Паспорт</h3>
    <div class="main_info-container">
      <div class="main_info-item">
        <span class="main_info_key">Тип документа*</span>
        <select class="main_info_select">
        <option>Паспорт</option>
        <option>Свидетельство о рождении</option>
        <option>Вод. удостоверение</option>
      </select>
      </div>
      <div class="main_info-item">
        <span class="main_info_key">Серия</span>
        <input class="main_info_input" />
      </div>
      <div class="main_info-item">
        <span class="main_info_key">Номер</span>
        <input class="main_info_input" />
      </div>
      <div class="main_info-item">
        <span class="main_info_key">Кем выдан</span>
        <input class="main_info_input" />
      </div>
      <div class="main_info-item">
        <span class="main_info_key">Дата выдачи*</span>
        <input class="main_info_input" />
      </div>
      <div class="main_info-item">
        <span class="main_info_key">Дом</span>
        <input class="main_info_input" />
      </div>
    </div>
  </div>
  <router-link to="/" class="link-to">В Начало</router-link>
  <router-view />
</template>

<script>

</script>

