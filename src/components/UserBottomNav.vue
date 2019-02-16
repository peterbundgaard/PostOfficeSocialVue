<template>
    <v-bottom-nav
      :active.sync="bottomNav"
      :value="true"
      absolute
    >
      <v-btn
        :to="{ name: 'UserCalendar' }"
        color="blue"
        flat
        value="calendar"
      >
        <span>Calendar</span>
        <v-icon>calendar_today</v-icon>
      </v-btn>

      <v-btn
        :to="{ name: 'UserTemplates' }"
        color="blue"
        flat
        value="create"
      >
        <span>Create</span>
        <v-icon>gesture</v-icon>
      </v-btn>

      <v-btn
        :to="{ name: 'UserChat' }"
        color="blue"
        flat
        value="Chat"
      >
        <span>Chat</span>
        <v-icon>message</v-icon>
      </v-btn>
      
      <v-btn
        :to="{ name: 'UserInsights' }"
        color="blue"
        flat
        value="insights"
      >
        <span>Leaderboard</span>
        <v-icon>equalizer</v-icon>
      </v-btn>

      <v-btn
        :to="{ name: 'UserAccount' }"
        color="blue"
        flat
        value="account"
      >
        <span>Account</span>
        <v-icon>settings</v-icon>
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
