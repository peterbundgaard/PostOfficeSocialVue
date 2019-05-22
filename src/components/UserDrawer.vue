<template>
  <div>
    <v-navigation-drawer 
    v-model="drawer"
    absolute
    temporary
  
    >

    <v-list class="pa-1">
        <v-list-tile @click="confirmChangeLocationDialog=true" avatar>
          <v-list-tile-avatar>
            <img src="https://firebasestorage.googleapis.com/v0/b/postofficevue.appspot.com/o/49949379_1072520496263910_3913539685758009344_n.png?alt=media&token=d5810d88-caa2-4221-9e62-1975f5692979">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Føtex vejle</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <change-location-dialog :confirmVisiblility="confirmChangeLocationDialog" @confirmClose="confirmChangeLocationDialog=false">
        </change-location-dialog>
      </v-list>

      <v-divider></v-divider>

      <v-list>
        <v-list-tile @click="drawer = !drawer" ripple exact>
          <v-list-tile-action>
            <img src="@/assets/listViewIcon.svg" alt="">
            <!-- <v-icon>view_stream</v-icon> -->
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>List</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="drawer = !drawer" ripple>
          <v-list-tile-action>
            <img src="@/assets/weekViewIcon.svg" alt="">
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Week</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>

      <v-divider></v-divider>

      <v-list>
        <v-list-tile @click="confirmGuidelinesDialog=true" ripple exact>
          <v-list-tile-action>
            <img src="@/assets/guidelinesIcon.svg" alt="">
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Guidelines</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <guidelines-dialog :confirmVisiblility="confirmGuidelinesDialog" @confirmClose="confirmGuidelinesDialog=false">
        </guidelines-dialog >

        <v-list-tile @click="confirmSupportDialog=true" ripple>
          <v-list-tile-action>
            <img src="@/assets/supportIcon.svg" alt="">
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Support</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <support-dialog :confirmVisiblility="confirmSupportDialog" @confirmClose="confirmSupportDialog=false">
        </support-dialog >

        <v-list-tile @click="confirmProfileDialog=true" ripple>
          <v-list-tile-action>
            <img src="@/assets/profileIcon.svg" alt="">
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Profile</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <profile-dialog :confirmVisiblility="confirmProfileDialog" @confirmClose="confirmProfileDialog=false">
        </profile-dialog >

        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-tile :to="{ name: 'Home' }" ripple exact>
          <v-list-tile-action>
            <img src="@/assets/switchIcon.svg" alt="">
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Switch to admin</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
          <v-list-tile :to="{ name: 'Settings' }" ripple>
            <v-list-tile-action>
              <img src="@/assets/logoutIcon.svg" alt="">
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
import Profiledialog from '@/views/user/ProfileDialog'
import SupportDialog from '@/views/user/SupportDialog'
import GuidelinesDialog from '@/views/user/GuidelinesDialog'
import ChangeLocationDialog from '@/views/user/ChangeLocationDialog'





export default {
  name: 'user-drawer',

  data () {
    return {
      confirmProfileDialog:false,
      confirmSupportDialog:false,
      confirmGuidelinesDialog:false,
      confirmChangeLocationDialog:false,
      drawer: false,
      mini: false,
    }
  },

  components: {
    UserToolbar,
    UserBottomNav,
    'profile-dialog':Profiledialog,
    'support-dialog':SupportDialog,
    'guidelines-dialog':GuidelinesDialog,
    'change-location-dialog':ChangeLocationDialog
  },

}
</script>
