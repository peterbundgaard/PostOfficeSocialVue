<template>
  <v-snackbar
    class="snack-style"
    v-model="snackbar.show"
    :top="false"
    :bottom="true"
    :left="false"
    :right="true"
    :multi-line="false"
    :timeout="3000" :vertical="false">
    {{ snackbar.text }}
    <!-- <v-icon class="icon-white">check</v-icon> -->
    <v-btn
      dark
      flat
      @click="HIDE_SNACKBAR()">Close</v-btn>
  </v-snackbar>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'snackbar',
  computed: mapState(['snackbar']),
  methods: mapMutations(['HIDE_SNACKBAR'])
}
</script>


<style lang="scss" scoped>
  
</style>