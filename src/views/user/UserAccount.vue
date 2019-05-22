<template>
  <div>
    <v-container grid-list-lg>
      <v-layout
        class="user-account-header"
        slot="header"
        align-center
        row
        spacer
      >
        <v-flex>
          <div class="headline2">Føtex, Vejle</div>
          <div class="subheading">Jyllingevej 67</div>
        </v-flex>
        <v-flex>
          <v-avatar
              class="float-right"
              slot="activator"
              size="80px"
            >
              <img
                src="@/assets/img/føtexLogo.png"
                alt="Avatar"
              >
            </v-avatar>
        </v-flex>
      </v-layout>
      <v-layout
        slot="header"
        align-center
        justify-center=""
        row
        spacer
      >
        <!-- <v-btn depressed  color="primary" block>Edit profile</v-btn> -->
        
      </v-layout>


      <v-layout
        row
        spacer
        wrap
      >
        <v-flex xs12 md4 >
          <v-card flat hover>
          <v-list subheader>
        <v-layout row wrap>
          <v-flex>
            <v-subheader>Content</v-subheader>
          </v-flex>
          <v-flex>
            <div class="v-subheader-more float-right">+ add</div>
          </v-flex>
        </v-layout>
          <v-list-tile
            v-for="item in items"
            :key="item.title"
            avatar
            @click=""
          >
            <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <img :src="item.icon">
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        </v-card>
        </v-flex>
        <v-flex xs12 md4>
          <v-card flat hover>
          <v-list subheader>
          <v-layout row wrap>
          <v-flex>
            <v-subheader>Platforms</v-subheader>
          </v-flex>
          <v-flex>
            <div class="v-subheader-more float-right">+ Add</div>
          </v-flex>
        </v-layout>
          <v-list-tile
            v-for="item in items2"
            :key="item.title"
            avatar
            @click=""
          >
            <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <img :src="item.icon">
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        </v-card>
        </v-flex>
        <v-flex xs12 md4>
          <v-card flat hover>
          <v-list subheader>
          <v-layout row wrap>
          <v-flex>
            <v-subheader>Team</v-subheader>
          </v-flex>
          <v-flex>
            <div class="v-subheader-more float-right">+ Invite</div>
          </v-flex>
        </v-layout>

          <v-list-tile
            v-for="item in items3"
            :key="item.title"
            avatar
            @click=""
          >
            <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon :color="item.active ? 'primary' : 'backgrounddark'">lens</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        </v-card> 
        </v-flex>
      </v-layout>


        <!-- <v-divider></v-divider> -->

    </v-container>
  </div>
</template>

<script>
export default {
  name: 'useraccount',
  data () {
      return {
        items: [
          { title: 'Føtex', icon: require('@/assets/check.svg'), avatar: require('@/assets/img/føtexLogo.png') },
          { title: 'Coca Cola', icon: require('@/assets/check.svg'), avatar: require('@/assets/img/cocacola.png') }
        ],
        items2: [
          { title: 'Facebook', icon: require('@/assets/check.svg'), avatar: require('@/assets/facebook.svg') },
          { title: 'Instagram', icon: require('@/assets/check_disabled.svg'), avatar: require('@/assets/insta.svg') }
        ],
        items3: [
          { title: 'Henriette Hansen', avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg' },
          { title: 'Jens Møller', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' }
        ]
      }
    }
}
</script>

<style lang="scss" scoped>
  .v-list__tile__avatar {
    margin-right: 8px !important;
  }
  .user-account-header {
    margin-bottom: 20px !important;
    padding: 0 10px !important;
  }
</style>