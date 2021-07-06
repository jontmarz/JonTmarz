<template>
  <v-footer
    height="88"
    class="justify-space-around"
  >
    <social-media large />
    <copy-right />
    <whats-app />
  </v-footer>
</template>

<script>
  export default {
    name: 'CoreFooter',

    components: {
      SocialMedia: () => import('@/components/SocialMedia'),
      CopyRight: () => import('@/components/CopyRight'),
      WhatsApp: () => import('@/components/base/WhatsApp'),
    },
  }
</script>
