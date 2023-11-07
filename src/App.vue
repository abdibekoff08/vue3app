<template>
  <div class="wrapper">
    <AppHeader />
    <div class="wrapper-content">
      <div class="container">
        <router-view />
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
export default {
  components: {AppHeader, AppFooter},
};
</script>

<style lang="scss">
</style>
