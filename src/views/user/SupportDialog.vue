<template>
  <v-layout row justify-center>
    <v-dialog v-model="confirmVisiblility" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar>
          <v-btn icon @click="confirmClose">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Support</v-toolbar-title>
          <!-- <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click="confirmClose">Save</v-btn>
          </v-toolbar-items> -->
        </v-toolbar>
        <v-list three-line subheader>
          <v-subheader>User Controls</v-subheader>
          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title>Content filtering</v-list-tile-title>
              <v-list-tile-sub-title>Set the content filtering level to restrict apps that can be downloaded</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title>Password</v-list-tile-title>
              <v-list-tile-sub-title>Require password for purchase or use password to restrict purchase</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
    name: 'SupportDialog',
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
