<template>
  <div>
    <v-container>
      <v-layout class="list-view">
        <v-flex xs12 sm6 offset-sm3>
          <v-layout row wrap>
          <v-flex>
            <v-subheader>Top 10 Posts</v-subheader>
          </v-flex>
          <v-flex>
            <div class="v-subheader-more float-right">Last 7 days</div>
          </v-flex>
          </v-layout>
          <post/>
          <post/>
          <post/>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Post from '@/components/post'

export default {
  name: 'userinsights',
  components: {
    Post
  }
}
</script>

<style lang="scss" scoped>
  .list-view {
    .v-card {
      margin-bottom: 30px;
    }
  }
</style>
