<template>
  <v-container text-xs-center>
    <v-layout align-center justify-center row fill-height>
      <v-flex xs12 sm6 md4>
        <div><img src="@/assets/logoMark.svg" alt="Logo" class="logoMark"/></div>
        <div><img src="@/assets/logoLarge.svg" alt="Logo" class="logoLarge"/></div>
        <div class="logoTitle">Post Office helps you create<br>better content faster.</div>
        <div class="connectToTitle"><img src="@/assets/connectIcon.svg" alt="">
          Føtex</div>
      <form>
        <v-btn
          type="submit"
          class="mb-3 large-btn"
          color="primary"
          block
          large
          depressed
          :to="{ name: 'Flow22' }"
          :disabled="submitting">Create account</v-btn>
        <v-btn
          color="#3A589B"
          class="mb-3 large-btn"
          :dark="!submitting"
          block
          large
          depressed
          :to="{ name: 'SignUp' }"
          :disabled="submitting"><img class="btn-icon-Left" src="@/assets/facebookSmall.svg" alt="fbLogo"/>Continue with Facebook</v-btn>
          <v-btn
          class="mb-3 flat-btn"
          block
          small
          flat
          :to="{ name: 'Login' }"
          :disabled="submitting">Already a user? Log in</v-btn>
      </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'flow21'
}
</script>

<style scoped lang="scss">
  .logoMark{
    margin-top: 50px;
  }
  .logoLarge{
  padding: 40px 0 30px 0;
  }
  .logoTitle {
    font-size: 20px;
    font-weight: 500;
    color: #818E94;
    line-height: 29px;
    margin-bottom: 48px;
  }
  .connectToTitle {
    img {
      margin-right: 4px;
      position: relative;
      top: 1px;
    }
    font-size: 16px;
    font-weight: 600;
    color: #818E94;
    line-height: 29px;
    margin-bottom: 44px;
  }
</style>