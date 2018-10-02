<template>
  <div>
    <user-drawer/>
    <router-view/>
  </div>
</template>

<script>
import UserDrawer from '@/components/UserDrawer'

export default {
  name: 'user',
  components: {
    UserDrawer
  }
}
</script>
