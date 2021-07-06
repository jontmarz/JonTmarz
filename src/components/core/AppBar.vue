<template>
  <v-app-bar
    v-scroll="onScroll"
    :color="!isScrolling ? 'transparent' : 'white'"
    fixed
    flat
    height="105"
  >
    <v-menu
      open-on-hover
      bottom
      offset-x
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="accent"
          light
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </template>
      <v-list rounded>
        <v-list-item-group
          v-model="selectedItem"
        >
          <v-list-item
            v-for="(item, i) in Mitems"
            :key="i"
          >
            <v-list-item-content>
              <a
                :href="item.url"
                class="accent--text style-link"
              >
                {{ item.name }}
              </a>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
    <v-slide-x-transition>
      <v-img
        v-if="showLogo"
        :src="require('@/assets/logo.svg')"
        class="shrink"
        contain
        height="100"
      />
    </v-slide-x-transition>

    <v-spacer />

    <social-media />
  </v-app-bar>
</template>

<script>
  export default {
    name: 'CoreAppBar',

    components: {
      SocialMedia: () => import('@/components/SocialMedia'),
    },

    data: () => ({
      showLogo: false,
      isScrolling: false,
      selectedItem: 1,
      Mitems: [
        {
          name: 'inicio',
          url: '#welcome',
        },
        {
          name: 'Proyectos',
          url: '#recent-projects',
        },
        {
          name: 'Servicios',
          url: '#services',
        },
        {
          name: 'Acerca de mi',
          url: '#about',
        },
        {
          name: 'Contacto',
          url: '#get-in-touch',
        },
      ],
    }),

    methods: {
      onScroll () {
        const offset = window.pageYOffset
        this.isScrolling = offset > 50
        this.showLogo = offset > 200
      },
    },
  }
</script>

<style lang="scss">
.style-link {
  text-decoration: none;
}
</style>
