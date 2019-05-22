<template>
  <div>
    <v-container>
      <v-layout class="list-view">
        <v-flex xs2 sm1 offset-sm3>
          <div class="date-day">Fri</div>
          <div class="date-number">22</div>
        </v-flex>
        <v-flex xs10 sm5>
          <post-single-image/>
          <post/>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Post from '@/components/post'
import PostSingleImage from '@/components/postsingleimage'

export default {
  name: 'usercalendar',
  computed: mapState(['currentUser']),
  components: {
    Post,
    PostSingleImage
  }
}
</script>

<style lang="scss" scoped>
  .list-view {
    .v-card {
      margin-bottom: 30px;
    }
    .date-day {
      font-size: 14px;
      font-weight: 600 !important;
      color: #637178;
    }
    .date-number {
      font-size: 40px;
      font-weight: 500 !important;
      color: #2d2f39;
      line-height: 40px;
      @media only screen and (max-width: 600px) {
        font-size: 36px;
      }
    }
  }
</style>

