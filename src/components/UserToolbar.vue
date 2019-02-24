<template>
  <div>
    <v-toolbar fixed class="toolbar-custom topbar" height="56">
      <v-layout align-center justify-space-between row fill-height>

        <div class="toolbar-left">
          <v-toolbar-side-icon @click.stop="$emit('toggle')"></v-toolbar-side-icon>
        </div>
        <div class="toolbar-center">
          <v-toolbar-title>
            {{ $route.meta.title }}
          </v-toolbar-title>
        </div>
        <div class="toolbar-right">
          <v-btn icon>
            <v-icon>add</v-icon>
          </v-btn>
        </div>
      </v-layout>
    </v-toolbar>

    <!-- <v-toolbar
    height="56"
    class="topbar"
    >
      <v-toolbar-side-icon @click.stop="$emit('toggle')"></v-toolbar-side-icon>
      <v-toolbar-title>
        {{ $route.meta.title }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>add</v-icon>
      </v-btn>

    </v-toolbar> -->

  </div>
</template>

<script>

export default {
  name: 'usertoolbar',
  data () {
    return {
      drawer: true,
    }
  },
}
</script>

<style scoped>

.v-toolbar {
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, .1);
  background-color: #FFFFFF;
  
}

.v-toolbar__title {
  margin-left: 0px;
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