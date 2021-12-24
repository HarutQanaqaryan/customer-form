<template>
  <div class="form-container">
  <h3 class="form_title">Основная информация</h3>
    <div class="form-item">
      <span class="form-item_key">Фамилия*</span>
      <input class="form-item_input" />
    </div>
    <div class="form-item">
      <span class="form-item_key">Имя*</span>
      <input class="form-item_input" />
    </div>
    <div class="form-item">
      <span class="form-item_key">Отчество</span>
      <input class="form-item_input" />
    </div>
    <div class="form-item">
      <span class="form-item_key">Дата рождения*</span>
      <input type="date" class="form-item_input date" />
    </div>
    <div class="form-item">
      <span class="form-item_key">Номер телефона*</span>
      <input class="form-item_input" />
    </div>
    <div class="form-item">
      <span>
        <span class="form-item_key">Муж.</span>
        <input type="checkbox" class="form-item_checkbox" />
      </span>
      <span>
        <span class="form-item_key">Жен.</span>
        <input type="checkbox" class="form-item_checkbox" />
      </span>
    </div>
    <div class="form-item">
      <span class="form-item_key">Группа клиентов*</span>
      <select multiple class="form-item_select_multiple">
        <option>VIP</option>
        <option>Проблемные</option>
        <option>ОМС</option>
      </select>
    </div>
    <div class="form-item">
      <span class="form-item_key">Лечащий врач</span>
      <select class="form-item_select">
        <option>Иванов</option>
        <option>Захаров</option>
        <option>Чернышева</option>
      </select>
    </div>
    <div class="form-item-item">
      <span>
        <span class="form-item_key">Не отправлять СМС</span>
        <input type="checkbox" class="form-item_checkbox" />
      </span>
    </div>
  </div>
</template>

<script></script>


