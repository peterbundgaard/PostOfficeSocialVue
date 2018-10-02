<template>
  <div>
    <v-container>
      <div class="ViewHeader">
        <div class="headline">Hi, {{ currentUser.displayName }}</div>
        <div class="body-1">Her kan man skrive en tagline</div>
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'home',
  computed: mapState(['currentUser'])
}
</script>
