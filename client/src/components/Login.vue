<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Login">
         <form name="tab-tracker-form"
          autocomplete="off">
            <v-text-field
              label="Email"
              v-model="email"
            ></v-text-field>
            <br>
            <v-text-field
              label="Password"
              v-model="password"
              type="password"
            ></v-text-field>
            <br>
            <div class="error" v-html="error" />
            <v-btn dark class="cyan"
              @click="login" >Login
            </v-btn>
         </form>
      </panel>
    </v-flex>
  </v-layout>



  
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  props: [
    'title'
  ],
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>
<style scoped>
.error {
  color: red
}

</style>
