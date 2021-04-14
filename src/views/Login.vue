<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <v-card
      class="mx-auto"
      width="100%">
      <v-card-text>
        <div>Авторизация</div>
        <v-text-field
          label="E-mail"
          v-model="email"
          :error-messages="emailErrors"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <v-text-field
          label="password"
          type="password"
          v-model="password"
          :error-messages="passwordErrors"
          :counter="24"
          required
          @input="$v.password.$touch()"
          @blur="$v.password.$touch()"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn
          text
          color="teal accent-4"
          type="submit"
        >
          Войти
        </v-btn>
      </v-card-actions>
    </v-card>
  </form>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  name: "Login",
  data: ()=>({
    email: '',
    password: ''
  }),
  computed: {
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('password is required')
      return errors
    },
  },
  validations: {
    email: {email, required},
    password: {required, minLength: maxLength(24)}
  },
  async beforeCreate() {
    let uid = await this.$store.dispatch('getUid')
    if (uid !== null) {
      await this.$store.dispatch('logout')
    }
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
        email: this.email,
        password: this.password
      }
      try {
        console.log(this.$store)
        await this.$store.dispatch('login', formData)
        await this.$router.push('/')
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>