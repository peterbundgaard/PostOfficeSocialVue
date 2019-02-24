<template>
  <v-app>
    <v-content>
      <v-layout align-center justify-center row fill-height v-if="routing">
        <v-progress-circular :size="70" :width="3" color="primary" indeterminate/>
      </v-layout>
      <snackbar/>
      <loader/>
      <router-view v-show="!routing"/>
    </v-content>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Snackbar from '@/components/snackbar'
import Loader from '@/components/loader'
import './style.scss'


export default {
  name: 'app',
  computed: mapState(['routing']),
  components: {
    Snackbar,
    Loader
  }
}
</script>

