<template>
  <div>

    <v-toolbar class="toolbar-custom" app fixed>
      <v-layout align-center justify-space-between row fill-height>

        <div class="toolbar-left"><v-btn :to="{ name: 'Flow22' }" icon>
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
            @click="dialog = true"
            >Next
          </v-btn>
        </div>
      </v-layout>
    </v-toolbar>

  <v-progress-linear
      color="primary"
      height="2"
      value="40"
    ></v-progress-linear>
    <v-container text-xs-center>
    <v-layout align-center justify-center row fill-height>
      <v-flex xs12 sm6 md4>
        <div class="signup-header headline1 ">Hurray, Welcome &#x1F64C;<br> Let's setup your business.</div>
        <v-form class="x-large-input">
          <div class="input-label">Company name</div>
          <v-text-field
            type="name"
            name="name"
            data-vv-delay="300"
            v-validate="'required|min:3'"
            single-line
            outline
            color="black"
            :disabled="submitting"/>
            <div class="input-label">Address</div>
            <v-text-field
            type="name"
            name="name"
            data-vv-delay="300"
            v-validate="'required|min:3'"
            single-line
            outline
            color="black"
            :disabled="submitting"/>
            <div class="input-label">Zip code</div>
            <v-text-field
            type="name"
            name="name"
            data-vv-delay="300"
            v-validate="'required|min:3'"
            single-line
            outline
            color="black"
            :disabled="submitting"/>
            <div class="input-label">City</div>
            <v-text-field
            type="name"
            name="name"
            data-vv-delay="300"
            v-validate="'required|min:3'"
            single-line
            outline
            color="black"
            :disabled="submitting"/>
            <div class="input-label">Phone</div>
            <v-text-field
            type="phone"
            name="phone"
            data-vv-delay="300"
            v-validate="'required|email'"
            single-line
            outline
            color="black"
            :disabled="submitting"/>
            <div class="input-label">Email</div>
          <v-text-field
            type="email"
            name="email"
            data-vv-delay="300"
            v-validate="'required|email'"
            :error-messages="errors.collect('email')"
            single-line
            outline
            color="black"
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
      <div class="signup-header headline1">Creating Business<br>Sit tight...</div>
    <v-progress-circular
      indeterminate
      :size="50"
      width="2"
      color="primary"
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