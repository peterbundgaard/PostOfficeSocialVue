<template>

    <v-bottom-nav
      class="userBottomNav"
      :active.sync="bottomNav"
      :value="true"
      fixed
    >
      <v-btn
        :to="{ name: 'UserCalendar' }"
        color="#000"
        flat
        value="calendar"
      >
        <span>Calendar</span>
        <!-- <v-icon>calendar_today</v-icon> -->
        <img src="@/assets/calIcon.svg" alt="">
      </v-btn>

      <v-btn
        :to="{ name: 'UserTemplates' }"
        color="#000"
        flat
        value="create"
      >
        <span>Create</span>
        <!-- <v-icon>gesture</v-icon> -->
        <img src="@/assets/createIcon.svg" alt="">
      </v-btn>

      <v-btn
        :to="{ name: 'UserChat' }"
        color="#000"
        flat
        value="Chat"
      >
        <span>Messages</span>
        <!-- <v-icon>message</v-icon> -->
        <img src="@/assets/mesIcon.svg" alt="">
      </v-btn>
      
      <v-btn
        :to="{ name: 'UserInsights' }"
        color="#000"
        flat
        value="insights"
      >
        <span>Leaderboard</span>
        <!-- <v-icon>equalizer</v-icon> -->
        <img src="@/assets/leaderIcon.svg" alt="">
      </v-btn>

      <v-btn
        :to="{ name: 'UserAccount' }"
        color="#000"
        flat
        value="account"
      >
        <span>Account</span>
        <!-- <v-icon>settings</v-icon> -->
        <img src="@/assets/settingsIcon.svg" alt="">
      </v-btn>

    </v-bottom-nav>
</template>

<script>
  export default {
    name: 'user-bottom-nav',
  }
</script>

<style lang="scss" scoped>

  .v-bottom-nav {
    box-shadow: 0 -1px 0px 0px rgba(0, 0, 0, .1);
    background-color: #FFFFFF !important;
  }

</style>
