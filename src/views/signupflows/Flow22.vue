<template>
  <div>
    <v-toolbar class="toolbar-custom" app fixed>
      <v-layout align-center justify-space-between row fill-height>

        <div class="toolbar-left"><v-btn :to="{ name: 'Flow21' }" icon>
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
      value="20"
    ></v-progress-linear>
    <i data-feather="circle"></i>
  <!-- <v-progress-linear :indeterminate="true"></v-progress-linear> -->
    <v-container text-xs-center>
    <v-layout align-center justify-center row fill-height>
      <v-flex xs12 sm6 md4>
        <!-- <div class="dotstyle dotstyle-fillup">
        <ul>
          <li class="current"><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
        </ul>
      </div> -->
        <div class="signup-header headline1 ">Here we go! &#x1F44B;<br>Create a profile to get started!</div>
    <v-form >
    <div class="input-label">Name</div>
    <v-text-field
      type="name"
      name="name"
      data-vv-delay="300"
      v-validate="'required|min:3'" 
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
    <div class="input-label">Password</div>
    <v-text-field
      type="password"
      name="password"
      data-vv-delay="300"
      v-validate="'required|min:6|confirmed:password_confirmation'"
      :error-messages="errors.collect('password')"
      single-line
      outline
      color="black"
      :disabled="submitting"/>
    <div class="input-label">Confirm the password</div>
    <v-text-field
      type="password"
      name="password_confirmation"
      data-vv-delay="300"
      v-validate="'required|min:6'"
      ref="password_confirmation"
      single-line
      outline
      color="black"
      :disabled="submitting"/>

      <v-checkbox
      type="checkbox"
      value="1"
      data-vv-name="remember"
      data-vv-delay="300"
      label="I would like to hear about Post Office updates and special offers."
      color="black"
      :disabled="submitting"/>
      
      <v-checkbox
      type="checkbox"
      value="1"
      data-vv-name="remember"
      data-vv-delay="300"
      label="I accept the Terms of use and subscription*"
      color="black"
      :disabled="submitting"/>
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
      <div class="signup-header headline1">Creating Profile<br>Hang on...</div>
    <v-progress-circular
      indeterminate
      :size="50"
      width="2"
      color="primary"
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
          this.SHOW_SNACKBAR('Profile successfully created.')
          ), 4000)
      }
    },
}

</script>

<style scoped lang="scss">

  
  .dotstyle ul {
    position: relative;
    display: inline-block;
    margin: 0;
    padding: 0;
    list-style: none;
    cursor: default;
  }

  .dotstyle li {
    position: relative;
    display: block;
    float: left;
    margin: 0 4px;
    width: 4px;
    height: 4px;
    cursor: pointer;
  }

  .dotstyle li a {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    outline: none;
    border-radius: 50%;
    background-color: #fff;
    background-color: #d6dcdf;
    text-indent: -999em;
    cursor: pointer; /* make the text accessible to screen readers */
    position: absolute;
  }

  .dotstyle .current a {
    background-color: #1089f9;
  }

</style>
