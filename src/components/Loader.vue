<template>
  <v-dialog
        v-model="loader.show"
        hide-overlay
        persistent
        width="300"
        :timeout="5000"
      >
        <v-card
          color="primary"
          dark
        >
          <v-card-text>
            {{ loader.text }}
            <v-progress-linear
              indeterminate
              color="white"
              class="mb-0"
            ></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'loader',
  computed: mapState(['loader']),
  methods: mapMutations(['HIDE_LOADER']),
  data () {
      return {
        dialog: false
      }
    },

    watch: {
      dialog (val) {
        if (!val) return

        setTimeout(() => (this.dialog = false), 4000)
      }
    }
}
</script>