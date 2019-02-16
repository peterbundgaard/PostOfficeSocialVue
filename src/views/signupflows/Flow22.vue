<template>
  <div>
    <v-toolbar app fixed>
      <v-btn :to="{ name: 'Flow21' }" icon>
        <v-icon>arrow_back</v-icon>
      </v-btn>
    <v-toolbar-title >Sign up</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      
      <v-btn 
        flat
        @click="dialog = true"
        >Next</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <v-progress-linear
      color="secondary"
      height="2"
      value="20"
    ></v-progress-linear>
  <!-- <v-progress-linear :indeterminate="true"></v-progress-linear> -->
    <v-container text-xs-center>
    <v-layout align-center justify-center row fill-height>
      <v-flex xs12 sm6 md4>
        <div class="signup-header headline font-weight-light ">Create a profile to get started!</div>
    <v-form >
    <v-text-field
      type="name"
      name="name"
      data-vv-delay="300"
      v-validate="'required|min:3'"
      label="Name"
      single-line
      outline
      :disabled="submitting"/>
    <v-text-field
      type="email"
      name="email"
      data-vv-delay="300"
      v-validate="'required|email'"
      :error-messages="errors.collect('email')"
      label="Email"
      single-line
      outline
      :disabled="submitting"/>
    <v-text-field
      type="password"
      name="password"
      data-vv-delay="300"
      v-validate="'required|min:6|confirmed:password_confirmation'"
      :error-messages="errors.collect('password')"
      label="Password"
      single-line
      outline
      :disabled="submitting"/>
    <v-text-field
      type="password"
      name="password_confirmation"
      data-vv-delay="300"
      v-validate="'required|min:6'"
      label="Confirm the password"
      ref="password_confirmation"
      single-line
      outline
      :disabled="submitting"/>

      <v-checkbox
      type="checkbox"
      value="1"
      data-vv-name="remember"
      data-vv-delay="300"
      label="Accept terms and privacy policy"
      color="primary"
      :disabled="submitting"/>
      
      <v-checkbox
      type="checkbox"
      value="1"
      data-vv-name="remember"
      data-vv-delay="300"
      label="Send me news and info about product updates"
      color="primary"
      :disabled="submitting"/>
<!-- 
    <v-btn
      type="submit"
      color="primary"
      block
      large
      depressed
      class="mb-3"
      :disabled="submitting">REGISTER</v-btn>
    <v-btn
      :to="{ name: 'Login' }"
      color="indigo"
      :dark="!submitting"
      block
      large
      depressed
      :disabled="submitting">ALREADY HAVE AN ACCOUNT?</v-btn> -->
  </v-form>
  
  </v-flex>
    </v-layout>
  </v-container>
  <v-dialog
        content-class="v-dialog-nude v-dialog-light"
        v-model="dialog"
        persistent
        width="300"
      >
      <div class="text-xs-center">
      <div class="signup-header headline font-weight-light ">Creating Profile<br>Hang on...</div>
    <v-progress-circular
      indeterminate
      :size="50"
      color="red"
    ></v-progress-circular>
    
  </div>
        <!-- <v-card
          color="#033"
          dark
        >
          <v-card-text>
            Creating profile
            <v-progress-linear
              indeterminate
              color="white"
              class="mb-0"
            ></v-progress-linear>
          </v-card-text>
        </v-card> -->
      </v-dialog>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {  
  name: 'flow22',
  
  methods: {
    ...mapMutations([
      'HIDE_SNACKBAR',
      'SHOW_SNACKBAR'
    ])
  },
  data () {
      return { 
        dialog: false
      }
    },
  watch: {
      dialog (val) {
        if (!val) return

        setTimeout(() => (
          this.$router.push({name:'Flow23'}),
          this.SHOW_SNACKBAR('Profile successfully created. Welcome to Post Office :-)')
          ), 4000)
      }
    },
}

</script>

<style scoped lang="scss">

</style>
