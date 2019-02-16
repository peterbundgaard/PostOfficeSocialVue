<template>
  <v-container text-xs-center>
    <v-layout align-center justify-center row fill-height>
      <v-flex xs12 sm6 md4>
        <img src="/static/img/logo/160.svg" alt="Logo" class="mb-2 logo"/>
        <v-card
        class="Introbox">
        <v-avatar size="90">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/postofficevue.appspot.com/o/49949379_1072520496263910_3913539685758009344_n.png?alt=media&token=d5810d88-caa2-4221-9e62-1975f5692979"
            alt="Føtex"
          >
        </v-avatar>
        <p>Sign up to Føtex<br>and start creating!</p>
      <form>
        <v-btn
          type="submit"
          class="mb-3"
          color="primary"
          block
          large
          depressed
          :to="{ name: 'Flow22' }"
          :disabled="submitting">Create user</v-btn>
        <v-btn
          color="indigo"
          class="mb-3"
          :dark="!submitting"
          block
          large
          depressed
          :to="{ name: 'SignUp' }"
          :disabled="submitting">Signup with facebook</v-btn>
          <v-btn
          block
          small
          flat
          :to="{ name: 'Login' }"
          :disabled="submitting">Already a user? Log in</v-btn>
      </form>
      </v-card>
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
  .Introbox {
      margin-top: 40px;
      height: 360px;
      padding: 20px;
      img {
          position: relative;
          top: -60px;
      }
      p{
          position: relative;
          top: -30px;
          font-size: 18px;
          font-weight: 100;
      }
  }
</style>