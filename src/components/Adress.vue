<template>
  <form class="form-container">
    <h3 class="form_title">Адрес</h3>
    <div class="form-item">
      <label class="form-item_key">Индекс</label>
      <input class="form-item_input" />
    </div>
    <div class="form-item">
      <label class="form-item_key">Страна</label>
      <input class="form-item_input" />
    </div>
    <div class="form-item">
      <label class="form-item_key">Область</label>
      <input class="form-item_input" />
    </div>
    <div class="form-item">
      <label class="form-item_key">Город*</label>
      <input class="form-item_input" />
    </div>
    <small class="form-helper invalid">Обязательное поле для заполнения</small>
    <div class="form-item">
      <label class="form-item_key">Улица</label>
      <input class="form-item_input" />
    </div>
    <div class="form-item">
      <label class="form-item_key">Дом</label>
      <input class="form-item_input" />
    </div>
    <h6 class="main-wrapper_hint">*Поле обязательное для заполнения.</h6>
        <router-link to="/passport">
      <button type="submit" class="form-btn">Далее</button>
    </router-link>
  </form>
</template>

<script>

</script>
