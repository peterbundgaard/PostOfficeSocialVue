<template>
  <div>
    
    
    <v-toolbar class="toolbar-custom" app fixed>
      <v-layout align-center justify-space-between row fill-height>

        <div class="toolbar-left"><v-btn :to="{ name: 'Flow23' }" icon>
          <v-icon>arrow_back</v-icon>
          </v-btn>
        </div>
        <div class="toolbar-center">
          <v-toolbar-title >Sign up</v-toolbar-title>
        </div>
        <div class="toolbar-right">
          <v-btn
            color="primary"
            depressed
            :to="{ name: 'Flow25' }"
            >Next
          </v-btn>
        </div>
      </v-layout>
    </v-toolbar>
    
  <v-progress-linear
      color="primary"
      height="2"
      value="60"
    ></v-progress-linear>
  
  <v-container text-xs-center>
    <v-layout align-center justify-space-around wrap>
      <v-flex xs12 sm6 md4>
        <div class="signup-header headline1 ">Almost done! Let's connect the platforms you want to manage.</div>


          <v-list class="background-none list-signup" subheader>
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
              <img :src="item.icon">
              <!-- <v-icon large :color="item.active ? 'primary' : 'lightgrey'">check_circle_outline</v-icon> -->
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
          { active: true, title: 'Facebook', avatar: require('@/assets/facebook.svg'), icon: require('@/assets/check.svg') },
          { title: 'Instagram', avatar: require('@/assets/insta.svg'), icon: require('@/assets/check_disabled.svg') },
          { title: 'Linkedin', avatar: require('@/assets/linkedin.svg'), icon: require('@/assets/check_disabled.svg') },
          { title: 'Twitter', avatar: require('@/assets/twitter.svg'), icon: require('@/assets/check_disabled.svg') },
          { active: false, title: 'Email', avatar: require('@/assets/email.svg'), icon: require('@/assets/check_disabled.svg') },
          { active: false, title: 'SMS', avatar: require('@/assets/sms.svg'), icon: require('@/assets/check_disabled.svg') }
        ]
      }
    },
  components: {
    'add-facebook-dialog':AddFacebookDialog
  },
}
</script>