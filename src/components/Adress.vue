<template>
  <form class="form-container" @submit.prevent="checkForm">
    <h3 class="form_title">Адрес</h3>
    <div class="form-item">
      <label class="form-item_key" for="index">Индекс</label>
      <input class="form-item_input" id="index" v-model="adressForm.index" />
    </div>
    <div class="form-item">
      <label class="form-item_key" for="country">Страна</label>
      <div>
        <input class="form-item_input" id="country" v-model="adressForm.country" />
        <small
          v-if="v$.adressForm.country.$dirty && v$.adressForm.country.russianLetters.$invalid"
          class="form-helper"
        >Разрешено только кирилица</small>
      </div>
    </div>
    <div class="form-item">
      <label class="form-item_key" for="region">Область</label>
      <div>
        <input class="form-item_input" id="region" v-model="adressForm.region" />
        <small
          v-if="v$.adressForm.region.$dirty && v$.adressForm.region.russianLetters.$invalid"
          class="form-helper"
        >Разрешено только кирилица</small>
      </div>
    </div>
    <div class="form-item">
      <label class="form-item_key" for="city">Город*</label>
      <div>
        <input
          class="form-item_input"
          :class="v$.adressForm.city.$error ? 'invalid' : ''"
          id="city"
          v-model="adressForm.city"
        />
        <small
          v-if="v$.adressForm.city.$dirty && v$.adressForm.city.required.$invalid"
          class="form-helper"
        >Обязательное поле для заполнения</small>
        <small
          v-else-if="v$.adressForm.city.$dirty && v$.adressForm.city.russianLetters.$invalid"
          class="form-helper"
        >Разрешено только кирилица</small>
      </div>
    </div>
    <div class="form-item">
      <label class="form-item_key" for="street">Улица</label>
      <div>
        <input class="form-item_input" id="street" v-model="adressForm.street" />
        <small
          v-if="v$.adressForm.street.$dirty && v$.adressForm.street.russianLetters.$invalid"
          class="form-helper"
        >Разрешено только кирилица</small>
      </div>
    </div>
    <div class="form-item">
      <label class="form-item_key" for="house">Дом</label>
      <input class="form-item_input" id="house" v-model="adressForm.house" />
    </div>
    <h6 class="main-wrapper_hint">*Поле обязательное для заполнения.</h6>
      <button type="submit" class="form-btn">Далее</button>
  </form>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { adressForm } from '../helpers/form-inputs'
import { russianLetters } from '../helpers/check-inputs'

export default {
  data() {
    return {
      v$: useVuelidate(),
      adressForm,
    }
  },

  validations() {
    return {
      adressForm: {
        country: { russianLetters },
        region: { russianLetters },
        city: { required, russianLetters },
        street: { russianLetters },
      }
    }
  },
  methods: {
    checkForm() {
      this.v$.adressForm.$touch()
      if (!this.v$.adressForm.$error) {
        this.$router.push("/passport")
      }
    }
  }
}
</script>
