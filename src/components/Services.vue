<template>
  <section
    id="services"
    class="overflow-hidden"
  >
    <v-row
      class="accent"
      no-gutters
    >
      <v-col
        class="hidden-sm-and-down"
        md="6"
      >
        <v-img
          :src="require('@/assets/services.png')"
          height="100%"
        />
      </v-col>

      <v-col
        class="text-center pa-5"
        cols="12"
        md="6"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <v-col cols="12">
            <base-bubble-2
              style="transform: translateX(55%)"
            />
            <base-heading class="info--text font-weight-medium">
              Services
            </base-heading>

            <base-text class="mb-5 info--text">
              Mis especialidades<br>
              se describen a continuación:
            </base-text>
          </v-col>

          <v-col
            v-for="(service, i) in services"
            :key="i"
            class="text-center mb-3 info--text"
            cols="12"
            md="6"
          >
            <v-avatar
              class="elevation-6 mb-2 rounded-circle"
              color="transparet"
              size="64"
              tile
            >
              <v-icon
                dark
                size="52"
                v-text="service.icon"
              />
            </v-avatar>

            <base-text>
              <div
                class="mb-2 font-weight-black"
                v-text="service.name"
              />
              <div v-html="service.blurb" />
            </base-text>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>

<script>
  export default {
    name: 'Services',

    data: () => ({
      services: [
        {
          name: 'Desarrollo Front End',
          icon: 'mdi-account-check',
          blurb: 'Desarrollo de proyectos,<br>de lado del cliente.',
        },
        {
          name: 'Desarrollo Back End',
          icon: 'mdi-server-network',
          blurb: 'Desarrollo de proyectos,<br>de lado del servidor.',
        },
        {
          name: 'E-Commerce',
          icon: 'mdi-store-24-hour',
          blurb: 'Desarrollo de proyectos,<br>de Tiendas Virtuales.',
        },
        {
          name: 'SEO',
          icon: 'mdi-search-web',
          blurb: 'Visualización, tráfico,<br>popularidad, alcance.',
        },
      ],
    }),
  }
</script>
