<template>
  <v-container text-xs-center>
    <v-layout align-center justify-center row fill-height>
      <v-flex xs12 sm6 md4>
        <img src="/static/img/logo/160.svg" alt="Logo" class="mb-2 logo"/>
        <router-view/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'auth'
}
</script>

<style scoped lang="scss">
  
  .logo{
    padding: 40px 0;
  }
</style>

