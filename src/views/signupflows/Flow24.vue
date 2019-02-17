<template>
  <div>
    <v-toolbar app fixed>
      <v-btn :to="{ name: 'Flow23' }" icon>
        <v-icon>arrow_back</v-icon>
      </v-btn>

    
    <v-toolbar-title >Sign up</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn 
        flat
        :to="{ name: 'Flow25' }">Next</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <v-progress-linear
      color="primary"
      height="2"
      value="60"
    ></v-progress-linear>
  
  <v-container text-xs-center>
    <v-layout align-center justify-space-around wrap>
      <v-flex xs12 sm6 md4>
        <div class="signup-header headline font-weight-light ">Connect the platforms<br>you want to manage.</div>


          <v-list class="background-none" subheader>
          <!-- <v-subheader>Social media</v-subheader> -->
          <v-list-tile
            v-for="item in items"
            :key="item.title"
            avatar
            @click="confirmAddFacebookDialog=true" 
          >
            <v-list-tile-avatar>
              <!-- <img src="@/assets/facebook.svg" > -->
              <img :src="item.avatar">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon :color="item.active ? 'red' : 'grey'">check_circle</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

        <!-- <v-divider></v-divider> -->

        <v-list class="background-none" subheader>
          <v-subheader>Others</v-subheader>
          <v-list-tile
            v-for="item in items2"
            :key="item.title"
            avatar
            @click="confirmAddFacebookDialog=true" 
          >
            <v-list-tile-avatar>
              <!-- <img src="@/assets/facebook.svg" > -->
              <img :src="item.avatar">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon :color="item.active ? 'red' : 'grey'">check_circle</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>


        
        <add-facebook-dialog :confirmVisiblility="confirmAddFacebookDialog" @confirmClose="confirmAddFacebookDialog=false">
        </add-facebook-dialog >
      </v-flex>
    </v-layout>
  </v-container>
  </div>
</template>

<script>
import AddFacebookDialog from '@/views/signupflows/AddFacebookDialog'

export default {
  name: 'flow24',
  data () {
      return {
        confirmAddFacebookDialog:false,
        items: [
          { active: true, title: 'Facebook', avatar: require('@/assets/facebook.svg') },
          { active: true, title: 'Instagram', avatar: require('@/assets/insta.svg') },
          { title: 'Linkedin', avatar: require('@/assets/linkedin.svg') },
          { title: 'Twitter', avatar: require('@/assets/twitter.svg') }
        ],
        items2: [
          { active: false, title: 'Email', avatar: require('@/assets/email.svg') },
          { active: false, title: 'SMS', avatar: require('@/assets/sms.svg') }
        ]
      }
    },
  components: {
    'add-facebook-dialog':AddFacebookDialog
  },
}
</script>