<template>
  <form class="form-container" @submit.prevent="checkForm">
    <h3 class="form_title">Основная информация</h3>

    <div class="form-item">
      <label class="form-item_key" for="surname">Фамилия*</label>
      <div>
        <input
          class="form-item_input"
          :class="v$.form.surname.$error ? 'invalid' : ''"
          v-model.trim="form.surname"
          id="surname"
        />
        <div>
          <small
            v-if="v$.form.surname.$dirty && v$.form.surname.required.$invalid"
            class="form-helper"
          >Обязательное поле для заполнения</small>
          <small
            v-else-if="v$.form.surname.$dirty && v$.form.surname.russianLetters.$invalid"
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
          :class="v$.form.firstName.$error ? 'invalid' : ''"
          v-model.trim="form.firstName"
          id="firstName"
        />
        <small
          v-if="v$.form.firstName.$dirty && v$.form.firstName.required.$invalid"
          class="form-helper"
        >Обязательное поле для заполнения</small>
        <small
          v-else-if="v$.form.firstName.$dirty && v$.form.firstName.russianLetters.$invalid"
          class="form-helper"
        >Разрешено только кирилица</small>
      </div>
    </div>

    <div class="form-item">
      <label class="form-item_key" for="midleName">Отчество</label>
      <div>
        <input
          class="form-item_input"
          :class="v$.form.midleName.$error ? 'invalid' : ''"
          v-model.trim="form.midleName"
          id="midleName"
        />
        <small
          v-if="v$.form.midleName.$dirty && v$.form.midleName.russianLetters.$invalid"
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
          :class="v$.form.birthday.$error ? 'invalid' : ''"
          v-model.trim="form.birthday"
          id="birthday"
        />
        <small class="form-helper" v-if="v$.form.birthday.$error">Обязательное поле для заполнения</small>
      </div>
    </div>

    <div class="form-item">
      <label class="form-item_key" for="phone">Номер телефона*</label>
      <div>
        <input
          type="number"
          class="form-item_input phone_input"
          v-model.trim="form.phone"
          id="phone"
          :class="v$.form.phone.$error ? 'invalid' : ''"
        />
        <small
          class="form-helper"
          v-if="v$.form.phone.$dirty && v$.form.phone.required.$invalid"
        >Обязательное поле для заполнения</small>
        <small
          class="form-helper"
          v-else-if="v$.form.phone.$dirty && v$.form.phone.checkLengthPhone.$invalid"
        >Должно быть 11 чисел</small>
        <small
          class="form-helper"
          v-else-if="v$.form.phone.$dirty && v$.form.phone.checkFirstNumberPhone.$invalid"
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
          v-model.trim="form.gender"
        />
        <label class="form-item_key" for="male">Мужчина</label>
        <input
          type="radio"
          value="female"
          class="form-item_checkbox"
          id="female"
          v-model.trim="form.gender"
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
          :class="v$.form.clientGroup.$error ? 'invalid' : ''"
          v-model="form.clientGroup"
          id="clientGroup"
        >
          <option
            v-for="(client, idx) in form.clientsGorup"
            :key="idx"
            :value="client.value"
          >{{ client.label }}</option>
        </select>
        <small
          class="form-helper"
          v-if="v$.form.clientGroup.$error"
        >Обязательное поле для заполнения</small>
      </div>
    </div>

    <div class="form-item">
      <label class="form-item_key" for="doctor">Лечащий врач</label>
      <div>
        <select class="form-item_select" v-model="form.doctor" id="doctor">
          <option
            v-for="(doctor, idx) in form.doctors"
            :key="idx"
            :value="doctor.value"
          >{{ doctor.label }}</option>
        </select>
      </div>
    </div>

    <div class="form-item-item">
      <label>
        <label class="form-item_key" for="notSms">Не отправлять СМС</label>
        <input type="checkbox" class="form-item_checkbox" v-model="form.notSms" id="notSms" />
      </label>
    </div>
    <h6 class="main-wrapper_hint">*Поле обязательное для заполнения.</h6>

    <button type="submit" class="form-btn">Далее</button>
    <router-link to="/adress"></router-link>
  </form>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

const patternLetters = /^[а-яА-Я ]+$/;


const russianLetters = (value) => patternLetters.test(value)
const checkFirstNumberPhone = (value) => value[0] === "7"
const checkLengthPhone = (value) => value.length === 11;

export default {
  data() {
    return {
      v$: useVuelidate(),
      form: {
        surname: "",
        firstName: "",
        midleName: "",
        birthday: "",
        phone: "7",
        gender: "",
        clientGroup: [],
        clientsGorup: [{
          label: "VIP",
          value: "VIP"
        }, {
          label: "Проблемные",
          value: "Problematic"
        }, {
          label: "ОМС",
          value: "OMS"
        }],
        doctor: "Ivanov",
        doctors: [{
          label: "Иванов",
          value: "Ivanov"
        }, {
          label: "Захаров",
          value: "Zakharov"
        }, {
          label: "Чернышева",
          value: "Chernisheva"
        }],
        notSms: false,
      }
    }
  },

  validations() {
    return {
      form: {
        surname: { required, russianLetters },
        firstName: { required, russianLetters },
        midleName: { russianLetters },
        birthday: { required },
        phone: {
          required,
          checkLengthPhone,
          checkFirstNumberPhone
        },
        gender: {},
        clientGroup: { required },
        clientsGorup: {},
        doctor: {},
        doctors: {},
        notSms: {},
      }
    }
  },
  methods: {
    checkForm() {
      this.v$.form.$touch()
      if (!this.v$.form.$error) {
        this.$router.push("/adress")
      }
    }
  }
}
</script>

<style lang="scss">
@import "../assets/styles.scss";
</style>

