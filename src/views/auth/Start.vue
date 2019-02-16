<template>
<div>
    <img src="/static/img/logo/160.svg" alt="Logo" class="mb-2 logo"/>
    <v-card
    class="Introbox">
    <v-avatar size="90">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/postofficevue.appspot.com/o/49949379_1072520496263910_3913539685758009344_n.png?alt=media&token=d5810d88-caa2-4221-9e62-1975f5692979"
        alt="Føtex"
      >
    </v-avatar>
    <p>Sign up to Føtex<br>and create better content!</p>
  <form>
    <v-btn
      type="submit"
      class="mb-3"
      color="primary"
      block
      large
      depressed
      :to="{ name: 'SignUp' }"
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
  </form>
  </v-card>
</div>
</template>

<script>
export default {
  name: 'start'
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