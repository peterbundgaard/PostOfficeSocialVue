<template>
  <div>
    <v-toolbar app fixed>
      <v-btn :to="{ name: 'Flow22' }" icon>
        <v-icon>arrow_back</v-icon>
      </v-btn>

    <v-toolbar-title >Sign up</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn 
        flat
        @click="dialog = true">Next
        </v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <v-progress-linear
      color="secondary"
      height="2"
      value="40"
    ></v-progress-linear>
    <v-container text-xs-center>
    <v-layout align-center justify-center row fill-height>
      <v-flex xs12 sm6 md4>
        <div class="signup-header headline font-weight-light ">Create a location<br>for your business.</div>
        <v-form >
          <v-text-field
            type="name"
            name="name"
            data-vv-delay="300"
            v-validate="'required|min:3'"
            label="Company name"
            single-line
            outline
            :disabled="submitting"/>
            <v-text-field
            type="name"
            name="name"
            data-vv-delay="300"
            v-validate="'required|min:3'"
            label="Address"
            single-line
            outline
            :disabled="submitting"/>
            <v-text-field
            type="name"
            name="name"
            data-vv-delay="300"
            v-validate="'required|min:3'"
            label="Zip code"
            single-line
            outline
            :disabled="submitting"/>
            <v-text-field
            type="name"
            name="name"
            data-vv-delay="300"
            v-validate="'required|min:3'"
            label="City"
            single-line
            outline
            :disabled="submitting"/>
            <v-text-field
            type="phone"
            name="phone"
            data-vv-delay="300"
            v-validate="'required|email'"
            label="Phone"
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
      <div class="signup-header headline font-weight-light ">Creating location<br>sit tight...</div>
    <v-progress-circular
      indeterminate
      :size="50"
      color="red"
      ></v-progress-circular>
    
      </div>
    </v-dialog>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'flow23',
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
          this.$router.push({name:'Flow24'}),
          this.SHOW_SNACKBAR('Location successfully created')
          ), 4000)
      }
    }
}
</script>

<style scoped lang="scss">

</style>