<template>
  <div>
    <v-toolbar app fixed>
      <v-btn :to="{ name: 'Flow24' }" icon>
        <v-icon>arrow_back</v-icon>
      </v-btn>

    
    <v-toolbar-title >Sign up</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn
      flat
      :to="{ name: 'UserCalendar' }"
      @click="snacktime()"
      >done</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <v-progress-linear
      color="secondary"
      height="2"
      value="80"
    ></v-progress-linear>
    <v-container text-xs-center>
    <v-layout align-center justify-center row fill-height>
      <v-flex xs12 sm6 md4>
        <div class="signup-header headline font-weight-light ">Post Office is funnier with your colleagues around. Invite them now.</div>
  <v-form >
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
      type="email"
      name="email"
      data-vv-delay="300"
      v-validate="'required|email'"
      :error-messages="errors.collect('email')"
      label="Email"
      single-line
      outline
      :disabled="submitting"/>

    <v-btn
      :to="{ name: '' }"
      type="submit"
      color="primary"
      block
      large
      depressed
      class="mb-3"
      @click="sentInvitations()"
      :disabled="submitting">SEND INVITE</v-btn>
  </v-form>
  </v-flex>
    </v-layout>
  </v-container>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'flow25',

  methods: {
    ...mapMutations([
      'HIDE_SNACKBAR',
      'SHOW_SNACKBAR'
    ]),
    sentInvitations () {
      this.SHOW_SNACKBAR('invitations has been sent.')
    },
    snacktime () {
      this.SHOW_SNACKBAR('Welcome to Post Office')
    }
  },

}
</script>

<style scoped lang="scss">

</style>