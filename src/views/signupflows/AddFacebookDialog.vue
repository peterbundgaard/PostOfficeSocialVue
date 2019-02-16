<template>
  <v-layout row justify-center>
    <v-dialog v-model="confirmVisiblility" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="confirmClose">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Choose page</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn 
            dark 
            flat 
            @click="done"
            >Done</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        

      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name: 'addfacebookdialog',
    props:['confirmVisiblility'],
    data () {
      return { 
        notifications: false,
        sound: true,
        widgets: false
      }
    },
    methods: {
      ...mapMutations([
      'HIDE_SNACKBAR',
      'SHOW_SNACKBAR'
    ]),
      confirmClose() {
        this.$emit('confirmClose');
      },
      done() {
        this.$emit('confirmClose');
        this.SHOW_SNACKBAR('Facebook is now connected.')

      }
    }
  }
</script>
