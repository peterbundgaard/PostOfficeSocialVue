<template>
  <div>

    <v-toolbar class="toolbar-custom" app fixed>
      <v-layout align-center justify-space-between row fill-height>

        <div class="toolbar-left"><v-btn :to="{ name: 'Flow24' }" icon>
          <v-icon>arrow_back</v-icon>
          </v-btn>
        </div>
        <div class="toolbar-center">
          <v-toolbar-title >Sign up</v-toolbar-title>
        </div>
        <div class="toolbar-right">
          <v-btn
            color="primary"
            depressed
            :to="{ name: 'UserCalendar' }"
            @click="snacktime()"
            >Done
          </v-btn>
        </div>
      </v-layout>
    </v-toolbar>


  <v-progress-linear
      color="primary"
      height="2"
      value="80"
    ></v-progress-linear>
    <v-container text-xs-center>
    <v-layout align-center justify-center row fill-height>
      <v-flex xs12 sm6 md4>
        <!-- <div class="signup-header headline font-weight-light ">Post Office is funnier with your colleagues around. Invite them now.</div> -->
        <div class="signup-header headline1">Last step &#x1F607; Invite some colleagues to help you do the work.</div>
  <v-form class="x-large-input">
    <div class="input-label">Email</div>
    <v-text-field
      type="email"
      name="email"
      data-vv-delay="300"
      v-validate="'required|email'"
      :error-messages="errors.collect('email')"
      single-line
      color="black"
      outline
      :disabled="submitting"/>
      <div class="input-label">Email</div>
      <v-text-field
      type="email"
      name="email"
      data-vv-delay="300"
      v-validate="'required|email'"
      :error-messages="errors.collect('email')"
      single-line
      color="black"
      outline
      :disabled="submitting"/>
      <div class="input-label">Email</div>
      <v-text-field
      type="email"
      name="email"
      data-vv-delay="300"
      v-validate="'required|email'"
      :error-messages="errors.collect('email')"
      single-line
      color="black"
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
      :disabled="submitting">Send invite</v-btn>
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