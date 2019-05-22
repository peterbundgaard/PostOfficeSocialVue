<template>
  <div>
    <v-container>
      <v-list class="background-none" subheader>
          <v-subheader>Channels</v-subheader>
          <v-list-tile
            v-for="item in items"
            :key="item.title"
            avatar
            @click=""
          >
            <v-list-tile-avatar>
              <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon size="10" :color="item.active ? 'primary' : 'backgrounddark'">lens</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

        <!-- <v-divider></v-divider> -->

        <v-list class="background-none" subheader>
          <v-layout row wrap>
          <v-flex>
            <v-subheader>Direct Messages</v-subheader>
          </v-flex>
          <v-flex>
            <div class="v-subheader-more float-right">new</div>
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
              <v-icon size="10" :color="item.active ? 'primary' : 'backgrounddark'">lens</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'userchat',
  data () {
      return {
        items: [
          { active: true, title: 'General', icon: 'folder', iconClass: 'grey lighten-1 white--text' },
          { active: true, title: 'Content', icon: 'folder', iconClass: 'grey lighten-1 white--text' },
          { title: 'KPI', icon: 'folder', iconClass: 'grey lighten-1 white--text' },
          { title: 'Support', icon: 'folder', iconClass: 'grey lighten-1 white--text' }
        ],
        items2: [
          { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg' },
          { active: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
          { title: 'Ranee Carlson', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
          { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
          { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' }
        ]
      }
    }
}
</script>


<style lang="scss" scoped>
  .v-list__tile__avatar {
    margin-right: 8px !important;
  }
</style>