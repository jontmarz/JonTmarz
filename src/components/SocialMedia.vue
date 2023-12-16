<template>
  <div class="mb-10">
    <v-btn
      v-for="(item, i) in items.slice(0, large ? items.length : 3)"
      :key="i"
      fab
      class="ma-2 hidden-sm-and-down"
      color="accent"
      :small="!large"
      :href="item.url"
      target="_blank"
    >
      <v-icon
        dark
        v-text="item.icon"
      />
    </v-btn>
  </div>
</template>

<script>
  export default {
    props: {
      large: {
        type: Boolean,
        default: false,
      },
    },

    data: () => ({
      items: [
        /* {
          name: 'LinkedIn',
          icon: 'mdi-linkedin',
          url: 'https://www.linkedin.com/in/john-tmarz/',
        },
        {
          name: 'Git Hub',
          icon: 'mdi-github-circle',
          url: 'https://github.com/jontmarz',
        },
        {
          name: 'YouTube',
          icon: 'mdi-youtube',
          url: 'https://www.youtube.com/user/hardjonedi',
        },
        {
          name: 'Twitter',
          icon: 'mdi-twitter',
          url: 'https://twitter.com/JonTMarz',
        },
        {
          name: 'Instagram',
          icon: 'mdi-instagram',
          url: 'https://www.instagram.com/jon_tmarz/',
        },
        {
          name: 'Facebook',
          icon: 'mdi-facebook',
          url: 'https://www.facebook.com/Ing.Johntorres',
        }, */
      ],
    }),
  }
</script>

<span class="iconify" data-icon="mdi-github" data-inline="false"></span>
