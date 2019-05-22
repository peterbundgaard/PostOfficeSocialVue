<template>
  <div>
    <v-navigation-drawer 
    v-model="drawer"
    :mini-variant="mini"
    fixed
    clipped
    app
    width="220"
    mobile-break-point="960"
  
    >

      <v-list>
        <v-list-tile :to="{ name: 'Home' }" ripple exact>
          <v-list-tile-action>
            <img src="@/assets/dashboardIcon.svg" alt="">
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="{ name: 'Calendar' }" ripple>
          <v-list-tile-action>
            <img src="@/assets/calendarIconAdmin.svg" alt="">
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Calendar</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="{ name: 'Templates' }" ripple>
          <v-list-tile-action>
            <img src="@/assets/templateIconAdmin.svg" alt="">
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Templates</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="{ name: 'Editor' }" ripple>
          <v-list-tile-action>
            <img src="@/assets/editorIconAdmin.svg" alt="">
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Editor</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="{ name: 'Campaigns' }" ripple>
          <v-list-tile-action>
            <img src="@/assets/campaignIconAdmin.svg" alt="">
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Campaigns</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="{ name: 'Insights' }" ripple>
          <v-list-tile-action>
            <img src="@/assets/insightsIconAdmin.svg" alt="">
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Insights</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

<!--         <v-list-group
        prepend-icon="account_circle"
        value="Collapse"
        no-action
        
      >
        <template v-slot:header>
          <v-list-tile>
            <v-list-tile-title>Insights</v-list-tile-title>
          </v-list-tile>
        </template>
        
        <v-list-tile :to="{ name: 'Insights' }" ripple>
          <v-list-tile-action>
            <img src="@/assets/insightsIconAdmin.svg" alt="">
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Insights 1</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="{ name: 'Insights' }" ripple>
          <v-list-tile-action>
            <img src="@/assets/insightsIconAdmin.svg" alt="">
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Insights 2</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>


      </v-list-group> -->

        <v-list-tile :to="{ name: 'Users' }" ripple>
          <v-list-tile-action>
            <img src="@/assets/userIconAdmin.svg" alt="">
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Users</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <!-- Button to open Full screen dialog component -->

        <!-- <v-divider></v-divider>
        <v-list-tile  ripple>
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile> -->

        

        <!-- <v-list-tile v-if="mini" @click.stop="mini = !mini">
            <v-list-tile-action>
              <v-icon>chevron_right</v-icon>
            </v-list-tile-action>
          </v-list-tile>

          <v-list-tile v-if="!mini" @click.stop="mini = !mini">
            <v-list-tile-action>
              <v-icon>chevron_left</v-icon>
            </v-list-tile-action>
          </v-list-tile>

          <v-list-tile disabled>
          <v-list-tile-content>
            <v-list-tile-title class="caption">&copy; {{ new Date().getFullYear() }} Post Office Social</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile> -->

      </v-list>
      
      

      <!-- <v-footer absolute color="white" >
        <div class="caption">&copy; {{ new Date().getFullYear() }} Post Office Social</div>  
      </v-footer> -->
      
    </v-navigation-drawer>

    <toolbar v-on:toggle="drawer = !drawer"/>

  </div>
</template>

<script>
import Toolbar from '@/components/Toolbar'

export default {
  name: 'navigation-drawer',

  data () {
    return {
      drawer: true,
      mini: false,
    }
  },

  components: {
    Toolbar
  }
}
</script>



<style scoped>

.v-list__tile__title {
  color: #afb8bc !important;
}

.v-list__tile--active .v-list__tile__title  {
  color: #2d2f39 !important;
}

.v-list__tile__action  {
  opacity: 0.4;
}

.v-list__tile--active .v-list__tile__action  {
  opacity: 1;
}


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