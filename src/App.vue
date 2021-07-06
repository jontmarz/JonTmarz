<template>
  <v-app>
    <core-app-bar />
    <!-- <vue-page-transition name="fade-in-up"> -->
    <core-view />
    <!-- </vue-page-transition> -->
    <core-footer />
  </v-app>
</template>

<script>
  export default {
    name: 'App',

    components: {
      CoreAppBar: () => import('@/components/core/AppBar'),
      CoreFooter: () => import('@/components/core/Footer'),
      CoreView: () => import('@/components/core/View'),
    },
  }
</script>
