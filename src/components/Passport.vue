<template>
  <form class="form-container" @submit.prevent="checkForm">
    <h3 class="form_title">Паспорт</h3>
    <div class="form-item">
      <label class="form-item_key">Тип документа*</label>
      <div>
        <Select
          :options="passportForm.documents"
          @select="optionSelected"
          :selected="selectedDocument"
          :validation="v$.passportForm.document.$error ? true : false"
          id="doctor"
        />
        <small
          v-if="v$.passportForm.document.$dirty && v$.passportForm.document.required.$invalid"
          class="form-helper"
        >Обязательное поле для заполнения</small>
      </div>
    </div>
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
      <label class="form-item_key" for="issued">Дата выдачи*</label>
      <div>
        <input
          type="date"
          class="form-item_input date"
          :class="v$.passportForm.dateIssue.$error ? 'invalid' : ''"
          v-model.trim="passportForm.dateIssue"
          id="issued"
        />
        <small
          class="form-helper"
          v-if="v$.passportForm.dateIssue.$error"
        >Обязательное поле для заполнения</small>
      </div>
    </div>
    <div class="form-item">
      <label class="form-item_key">Дом</label>
      <input class="form-item_input" />
    </div>
    <h6 class="main-wrapper_hint">*Поле обязательное для заполнения.</h6>
    <button type="submit" class="form-btn">Отправить</button>
  </form>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { passportForm } from '../helpers/form-inputs'
import Select from '../helpers/select/Select.vue';

export default {
  components: {
    Select
  },
  data() {
    return {
      v$: useVuelidate(),
      passportForm,
      selectedDocument: ""
    }
  },

  validations() {
    return {
      passportForm: {
        document: { required },
        dateIssue: { required },
      }
    }
  },
  methods: {
    checkForm() {
      this.v$.passportForm.$touch()
      if (!this.v$.passportForm.$error) {
        this.$router.push("/form-finnaly")
      }
    },
        optionSelected(option) {
      this.selectedDocument= option.label
      this.passportForm.document = option.label
    }
  }
}
</script>