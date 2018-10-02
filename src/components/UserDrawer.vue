<template>
  <div>
    <v-navigation-drawer 
    v-model="drawer"
    absolute
    temporary
  
    >

    <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/18058215_1752593418365778_3629629973892930894_n.jpg?_nc_cat=0&oh=44583e6abc06fe13d5016d1bd79f6415&oe=5BEF9B00">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Føtex vejle</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-divider></v-divider>

      <v-list>
        <v-list-tile :to="{ name: 'Settings' }" ripple exact>
          <v-list-tile-action>
            <v-icon>view_stream</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>List</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="{ name: 'Settings' }" ripple>
          <v-list-tile-action>
            <v-icon>view_week</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Week</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>

      <v-divider></v-divider>

      <v-list>
        <v-list-tile :to="{ name: 'Settings' }" ripple exact>
          <v-list-tile-action>
            <v-icon>school</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Guidelines</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="{ name: 'Settings' }" ripple>
          <v-list-tile-action>
            <v-icon>phone</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Support</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="TOGGLE_FULLSCREEN_DIALOG(true)"  ripple>
          <v-list-tile-action>
            <v-icon>person</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Profile</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-tile :to="{ name: 'Home' }" ripple exact>
          <v-list-tile-action>
            <v-icon>cached</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Switch to admin</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
          <v-list-tile :to="{ name: 'Settings' }" ripple>
            <v-list-tile-action>
              <v-icon>exit_to_app</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Logout</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
     
      
    </v-navigation-drawer>

    <UserToolbar v-on:toggle="drawer = !drawer"/>
    <UserBottomNav/>
    <FullscreenDialog/>

  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import UserToolbar from '@/components/UserToolbar'
import UserBottomNav from '@/components/UserBottomNav'
import FullscreenDialog from '@/components/FullscreenDialog'

export default {
  name: 'user-drawer',

  data () {
    return {
      drawer: false,
      mini: false,
    }
  },

  components: {
    UserToolbar,
    UserBottomNav
  },

  methods: mapMutations(['TOGGLE_FULLSCREEN_DIALOG'])

}
</script>
