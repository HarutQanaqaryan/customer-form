<template>
  <form class="form-container">
    <h3 class="form_title">Паспорт</h3>
    <div class="form-item">
      <label class="form-item_key">Тип документа*</label>
      <select class="form-item_select">
        <option>Паспорт</option>
        <option>Свидетельство о рождении</option>
        <option>Вод. удостоверение</option>
      </select>
    </div>
    <small class="form-helper invalid">Обязательное поле для заполнения</small>
    <div class="form-item">
      <label class="form-item_key">Серия</label>
      <input class="form-item_input" />
    </div>
    <div class="form-item">
      <label class="form-item_key">Номер</label>
      <input class="form-item_input" />
    </div>
    <div class="form-item">
      <label class="form-item_key">Кем выдан</label>
      <input class="form-item_input" />
    </div>
    <div class="form-item">
      <label class="form-item_key">Дата выдачи*</label>
      <input class="form-item_input" />
    </div>
    <small class="form-helper invalid">Обязательное поле для заполнения</small>
    <div class="form-item">
      <label class="form-item_key">Дом</label>
      <input class="form-item_input" />
    </div>
    <h6 class="main-wrapper_hint">*Поле обязательное для заполнения.</h6>
    <router-link to="/form-finnaly">
      <button type="submit" class="form-btn">Отправить</button>
    </router-link>
  </form>
</template>

<script>

</script>