<template>
  <div class="admin-view">
    <navigation-drawer/>
    <router-view/>
  </div>
</template>

<script>
import NavigationDrawer from '@/components/NavigationDrawer'

export default {
  name: 'admin',
  components: {
    NavigationDrawer
  }
}
</script>
