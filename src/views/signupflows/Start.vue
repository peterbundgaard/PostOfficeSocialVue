<template>
<div>
  
</div>
</template>

<template>
  <v-container text-xs-center>
    <v-layout align-center justify-center row fill-height>
      <v-flex xs12 sm6 md4>
        <form>
          <v-btn
            type="submit"
            class="mb-3"
            color="primary"
            block
            large
            depressed
            :to="{ name: 'Flow11' }"
            :disabled="submitting">Normal</v-btn>
            <v-btn
            type="submit"
            class="mb-3"
            color="primary"
            block
            large
            depressed
            :to="{ name: 'Flow21' }"
            :disabled="submitting">Invite - first user</v-btn>
            <v-btn
            type="submit"
            class="mb-3"
            color="primary"
            block
            large
            depressed
            :to="{ name: 'SignUp' }"
            :disabled="submitting">Invite - second user</v-btn>
          
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'start'
}
</script>

<style scoped lang="scss">
  
</style>