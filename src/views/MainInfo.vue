<template>
  <div class="main_info-container">
    <div class="main_info-item">
      <span class="main_info_key">Фамилия*</span>
      <input class="main_info_input" />
    </div>
    <div class="main_info-item">
      <span class="main_info_key">Имя*</span>
      <input class="main_info_input" />
    </div>
    <div class="main_info-item">
      <span class="main_info_key">Отчество</span>
      <input class="main_info_input"/>
    </div>
    <div class="main_info-item">
      <span class="main_info_key">Дата рождения*</span>
      <input type="date" class="main_info_input date" />
    </div>
    <div class="main_info-item">
      <span class="main_info_key">Номер телефона*</span>
      <input class="main_info_input" />
      </div>
       <div class="main_info-item">
      <span class="main_info_key">Муж.</span>
      <input type="checkbox" class="main_info_checkbox" />
      <span class="main_info_key">Жен.</span>
      <input type="checkbox" class="main_info_checkbox"/>
    </div>
    <div class="main_info-item">
      <span class="main_info_key">Группа клиентов*</span>
      <select multiple class="main_info_select_multiple">
        <option>VIP</option>
        <option>Проблемные</option>
        <option>ОМС</option>
      </select>
    </div>
    <div class="main_info-item">
      <span class="main_info_key">Лечащий врач</span>
      <select class="main_info_select">
        <option>Иванов</option>
        <option>Захаров</option>
        <option>Чернышева</option>
      </select>
    </div>
    <div class="main_info-item">
      <span class="main_info_key">Не отправлять СМС</span>
      <input type="checkbox" class="main_info_checkbox"/>
    </div>
  </div>
  <router-link to="/adress" class="link-to">Далее</router-link>
  <router-view />
</template>

<script></script>


