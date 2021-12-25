<template>
  <form class="form-container" @submit.prevent="checkForm">
    <h3 class="form_title">Основная информация</h3>

    <div class="form-item">
      <label class="form-item_key" for="surname">Фамилия*</label>
      <div>
        <input
          class="form-item_input"
          :class="v$.mainForm.surname.$error ? 'invalid' : ''"
          v-model.trim="mainForm.surname"
          id="surname"
        />
        <div>
          <small
            v-if="v$.mainForm.surname.$dirty && v$.mainForm.surname.required.$invalid"
            class="form-helper"
          >Обязательное поле для заполнения</small>
          <small
            v-else-if="v$.mainForm.surname.$dirty && v$.mainForm.surname.russianLetters.$invalid"
            class="form-helper"
          >Разрешено только кирилица</small>
        </div>
      </div>
    </div>

    <div class="form-item">
      <label class="form-item_key" for="firstName">Имя*</label>
      <div>
        <input
          class="form-item_input"
          :class="v$.mainForm.firstName.$error ? 'invalid' : ''"
          v-model.trim="mainForm.firstName"
          id="firstName"
        />
        <small
          v-if="v$.mainForm.firstName.$dirty && v$.mainForm.firstName.required.$invalid"
          class="form-helper"
        >Обязательное поле для заполнения</small>
        <small
          v-else-if="v$.mainForm.firstName.$dirty && v$.mainForm.firstName.russianLetters.$invalid"
          class="form-helper"
        >Разрешено только кирилица</small>
      </div>
    </div>

    <div class="form-item">
      <label class="form-item_key" for="midleName">Отчество</label>
      <div>
        <input class="form-item_input" v-model.trim="mainForm.midleName" id="midleName" />
        <small
          v-if="v$.mainForm.midleName.$dirty && v$.mainForm.midleName.russianLetters.$invalid"
          class="form-helper"
        >Разрешено только кирилица</small>
      </div>
    </div>

    <div class="form-item">
      <label class="form-item_key" for="birthday">Дата рождения*</label>
      <div>
        <input
          type="date"
          class="form-item_input date"
          :class="v$.mainForm.birthday.$error ? 'invalid' : ''"
          v-model.trim="mainForm.birthday"
          id="birthday"
        />
        <small
          class="form-helper"
          v-if="v$.mainForm.birthday.$error"
        >Обязательное поле для заполнения</small>
      </div>
    </div>

    <div class="form-item">
      <label class="form-item_key" for="phone">Номер телефона*</label>
      <div>
        <input
          type="number"
          class="form-item_input phone_input"
          v-model.trim="mainForm.phone"
          id="phone"
          :class="v$.mainForm.phone.$error ? 'invalid' : ''"
        />
        <small
          class="form-helper"
          v-if="v$.mainForm.phone.$dirty && v$.mainForm.phone.required.$invalid"
        >Обязательное поле для заполнения</small>
        <small
          class="form-helper"
          v-else-if="v$.mainForm.phone.$dirty && v$.mainForm.phone.checkLengthPhone.$invalid"
        >Должно быть 11 чисел</small>
        <small
          class="form-helper"
          v-else-if="v$.mainForm.phone.$dirty && v$.mainForm.phone.checkFirstNumberPhone.$invalid"
        >Номер телефона должен начаться с 7</small>
      </div>
    </div>

    <div class="form-item">
      <span>
        <input
          type="radio"
          value="male"
          class="form-item_checkbox"
          id="male"
          v-model.trim="mainForm.gender"
        />
        <label class="form-item_key" for="male">Мужчина</label>
        <input
          type="radio"
          value="female"
          class="form-item_checkbox"
          id="female"
          v-model.trim="mainForm.gender"
        />
        <label class="form-item_key" for="female">Женщина</label>
      </span>
    </div>

    <div class="form-item">
      <label class="form-item_key" for="clientGroup">Группа клиентов*</label>
      <div>
        <select
          multiple
          class="form-item_select_multiple"
          :class="v$.mainForm.clientGroup.$error ? 'invalid' : ''"
          v-model="mainForm.clientGroup"
          id="clientGroup"
        >
          <option
            v-for="(client, idx) in mainForm.clientsGorup"
            :key="idx"
            :value="client.value"
          >{{ client.label }}</option>
        </select>
        <small
          v-if="v$.mainForm.clientGroup.$dirty && v$.mainForm.clientGroup.required.$invalid"
          class="form-helper"
        >Обязательное поле для заполнения</small>
      </div>
    </div>

    <div class="form-item">
      <label class="form-item_key" for="doctor">Лечащий врач</label>
      <Select
        :options="mainForm.doctors"
        @select="optionSelected"
        :selected="selectedDoctor"
        :validation="false"
        id="doctor"
      />
    </div>

    <div class="form-item-item">
      <label>
        <label class="form-item_key" for="notSms">Не отправлять СМС</label>
        <input type="checkbox" class="form-item_checkbox" v-model="mainForm.notSms" id="notSms" />
      </label>
    </div>
    <h6 class="main-wrapper_hint">*Поле обязательное для заполнения.</h6>

    <button type="submit" class="form-btn">Далее</button>
  </form>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { russianLetters, checkLengthPhone, checkFirstNumberPhone } from '../helpers/check-inputs';
import { mainForm } from '../helpers/form-inputs';
import Select from '../helpers/select/Select.vue';

export default {
  components: {
    Select
  },
  data() {
    return {
      v$: useVuelidate(),
      mainForm,
      selectedDoctor: mainForm.doctors[0].label
    };
  },
  validations() {
    return {
      mainForm: {
        surname: { required, russianLetters },
        firstName: { required, russianLetters },
        midleName: { russianLetters },
        birthday: { required },
        phone: {
          required,
          checkLengthPhone,
          checkFirstNumberPhone
        },
        clientGroup: { required },
      }
    };
  },
  methods: {
    checkForm() {
      this.v$.mainForm.$touch();
      if (!this.v$.mainForm.$error) {
        this.$router.push("/adress");
      }
    },
    optionSelected(option) {
      this.selectedDoctor= option.label
      this.mainForm.doctor = option.label
    }
  },

}
</script>


