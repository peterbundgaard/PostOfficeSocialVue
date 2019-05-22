<template>
  <div>
    <v-toolbar
    fixed
    clipped-left
    height="56"
    app
    class="topbar"
    >
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="$emit('toggle')"></v-toolbar-side-icon>
      <v-toolbar-title>
        <img src="/static/img/logo/123.svg" alt="Logo">
        <!-- {{ $route.meta.title }} -->
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="profileBtn">
        <v-menu>
          <v-btn slot="activator" flat>
            <v-avatar
              size="36px"
            >
            <img
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              alt="John"
            >
            </v-avatar>
            <v-list-tile class="hidden-xs-only">
            <v-list-tile-content>
              <v-list-tile-title class="body-2 font-weight-semibold text-capitalize">{{ currentUser.displayName }}</v-list-tile-title>
              <v-list-tile-sub-title class="caption font-weight-regular text-capitalize">Føtex</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-icon class="hidden-xs-only">keyboard_arrow_down</v-icon>

          </v-btn>
          <!-- <v-list>
            <v-list-tile
              v-for="(item, i) in items"
              :key="i"
              @click=""
            >
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list> -->
          <v-list>
        <v-list-tile :to="{ name: 'Settings' }" ripple exact>
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile :to="{ name: 'UserCalendar' }" ripple exact>
          <v-list-tile-action>
            <v-icon>cached</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Switch to user</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="{ name: 'User' }" ripple exact>
          <v-list-tile-action>
            <v-icon>cached</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Switch account</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile @click="toggleLogoutDialog()" ripple>
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
        </v-menu>
      </v-toolbar-items>

    </v-toolbar>

    <v-dialog v-model="logoutDialog" @keydown.esc="toggleLogoutDialog()" max-width="290">
      <v-card>
        <v-card-title>Are you sure you want to logout?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat="flat" @click="toggleLogoutDialog()">
            No
          </v-btn>
          <v-btn color="primary" flat="flat" @click="logout()">
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
import firebase from '@/config/firebase'
import { mapMutations } from 'vuex'
import { mapState } from 'vuex'

export default {

  computed: mapState(['currentUser']),
  name: 'toolbar',
  data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' }
      ]
    }),
  data () {
    return {
      drawer: true,
      logoutDialog: false
    }
  },

  watch: {
    logoutDialog (active) {
      if (!active) {
        this.drawer = true
      }
    }
  },

  methods: {
    ...mapMutations([
      'SHOW_SNACKBAR',
      'HIDE_SNACKBAR',
    ]),
    toggleLogoutDialog () {
      this.logoutDialog = !this.logoutDialog
      this.drawer = !this.drawer
    },
    logout () {
      this.HIDE_SNACKBAR()

      firebase.auth().signOut().then(response => {
        this.$router.replace({
          name: 'Login'
        })
      }).catch(error => {
        this.SHOW_SNACKBAR(error.message)
      })
    }
  }
}
</script>

<style scoped>

.v-toolbar {
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, .1);
  background-color: #FFFFFF;
  
}

.v-toolbar__title {
  margin-left: 0px;
  margin-top: 8px;
}
.topbar .v-toolbar__content{
  padding: 0px;
}
.v-list__tile__title {
  height: 20px;
}

.profileBtn {
  position: relative;
  right: -24px;
}

</style>