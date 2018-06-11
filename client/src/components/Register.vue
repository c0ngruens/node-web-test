<template>
  <div style="min-height: 100vh; overflow-x: hidden;" class="md-layout">
    <form novalidate class="md-layout md-alignment-center-center" @submit.prevent="validateUser">
      <md-card class="md-layout-item md-size-33 md-large-size-33 md-medium-size-45 md-small-size-75 md-xsmall-size-90">
        <md-progress-bar md-mode="indeterminate" v-if="sending"></md-progress-bar>
        <md-card-header class="md-layout md-alignment-center">
          <div class="md-title">
            <span>Registration form</span>
          </div>
        </md-card-header>
        <md-card-content>
          <md-field :class="getValidationClass ('email')">
            <label>Email</label>
            <md-input v-model="form.email" type="email" name="email" required :disabled="sending"></md-input>
            <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
            <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
          </md-field>
          <md-field :class="getValidationClass ('password')">
            <label>Password</label>
            <md-input v-model="form.password" type="password" maxlength="30" :disabled="sending"></md-input>
            <span class="md-error" v-if="!$v.form.password.required">The password is required</span>
            <span class="md-error" v-else-if="!$v.form.password.minLength">Password must contanin no less then {{ $v.form.password.$params.minLength.min }} characters</span>
            <span class="md-error" v-else-if="!$v.form.password.maxLength">Password must contanin no more then 30 characters</span>
          </md-field>
          <md-field :class="getValidationClass ('confirmPassword')" :md-toggle-password="false">
            <label>Confirm password</label>
            <md-input v-model="form.confirmPassword" type="password" :disabled="sending"></md-input>
            <span class="md-error" v-if="!$v.form.confirmPassword.required">The password is required</span>
            <span class="md-error" v-else-if="!$v.form.confirmPassword.sameAs">Passwords must be identical</span>
          </md-field>
        </md-card-content>
        <md-card-actions class="md-layout md-alignment-center">
          <md-button type="submit" class="md-raised md-primary" :disabled="sending">Register</md-button>
        </md-card-actions>
        <div class="space"></div>
      </md-card>
    </form>
</div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import {
  required,
  email,
  minLength,
  maxLength,
  sameAs
} from 'vuelidate/lib/validators'
export default {
  name: 'Register',
  mixins: [validationMixin],
  data: () => ({
    form: {
      email: 'vlada.ramone@gmail.com',
      password: 'babasruja22',
      confirmPassword: 'babasruja22'
    },
    sending: false
  }),
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        minLength: minLength(8),
        maxLength: maxLength(30),
        required
      },
      confirmPassword: {
        sameAsPassword: sameAs('password'),
        required
      }
    }
  },
  methods: {
    getValidationClass (fieldName) {
      const field = this.$v.form[fieldName]

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        }
      }
    },
    validateUser () {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.saveUser()
      }
    },
    clearForm () {
      this.$v.$reset()
      this.form.email = null
      this.form.password = null
      this.form.confirmPassword = null
    },
    saveUser () {
      this.sending = true

      // Instead of this timeout, here you can call your API
      window.setTimeout(() => {
        this.sending = false
        // this.clearForm()
      }, 1500)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.space {
  padding-bottom: 8px;
}
</style>
