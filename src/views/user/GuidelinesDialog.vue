<template>
  <v-layout row justify-center>
    <v-dialog v-model="confirmVisiblility" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="confirmClose">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Guidelines</v-toolbar-title>
          <!-- <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click="confirmClose">Save</v-btn>
          </v-toolbar-items> -->
        </v-toolbar>
        

      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
    name: 'GuidelinesDialog',
    props:['confirmVisiblility'],
    data () {
      return { 
        notifications: false,
        sound: true,
        widgets: false
      }
    },
    methods: {
      confirmClose() {
        this.$emit('confirmClose');
      }
    }
  }
</script>
