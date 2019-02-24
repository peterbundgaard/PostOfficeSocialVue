<template>
  <v-layout row justify-center>
    <v-dialog v-model="confirmVisiblility" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar light color="primary">
          <v-btn icon light @click="confirmClose">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Change Location</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>add</v-icon>
          </v-btn>
        </v-toolbar>
        
        <v-list class="background-none" subheader>
          <v-subheader>Current location</v-subheader>
          <v-list-tile
            v-for="item in items"
            :key="item.title"
            avatar
            @click="confirmClose"
          >
            <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
            </v-list-tile-content>

            <!-- <v-list-tile-action>
              <v-icon :color="item.active ? 'teal' : 'grey'">chat_bubble</v-icon>
            </v-list-tile-action> -->
          </v-list-tile>
        </v-list>

        <v-divider></v-divider>

        <v-list class="background-none" subheader>
          <v-subheader>Other locations</v-subheader>

          <v-list-tile
            v-for="item in items2"
            :key="item.title"
            avatar
            @click="dialog = true"
          >
            <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>

      <v-dialog
        v-model="dialog"
        hide-overlay
        persistent
        width="300"
      >
        <v-card
          color="primary"
          dark
        >
          <v-card-text>
            Changing location
            <v-progress-linear
              indeterminate
              color="white"
              class="mb-0"
            ></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>

    </v-dialog>
  </v-layout>
</template>

<script>
export default {
    name: 'changelocationdialog',
    props:['confirmVisiblility'],
    data () {
      return { 
        notifications: false,
        sound: true,
        widgets: false,
        items: [
          { active: true, title: 'Føtex Vejle', avatar: 'https://firebasestorage.googleapis.com/v0/b/postofficevue.appspot.com/o/49949379_1072520496263910_3913539685758009344_n.png?alt=media&token=d5810d88-caa2-4221-9e62-1975f5692979' },
        ],
        items2: [
          { title: 'Føtex Horsens', avatar: 'https://firebasestorage.googleapis.com/v0/b/postofficevue.appspot.com/o/49949379_1072520496263910_3913539685758009344_n.png?alt=media&token=d5810d88-caa2-4221-9e62-1975f5692979' },
          { title: 'Føtex Hedensted', avatar: 'https://firebasestorage.googleapis.com/v0/b/postofficevue.appspot.com/o/49949379_1072520496263910_3913539685758009344_n.png?alt=media&token=d5810d88-caa2-4221-9e62-1975f5692979' }
        ],
        dialog: false
      }
    },
    watch: {
      dialog (val) {
        if (!val) return

        setTimeout(() => (this.$emit('confirmClose')), 4000)
      }
    },
    methods: {
      confirmClose() {
        this.$emit('confirmClose');
      }
    }
  }
</script>