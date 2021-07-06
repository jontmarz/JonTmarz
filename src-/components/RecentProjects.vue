<template>
  <section
    id="recent-projects"
    class="overflow-hidden"
  >
    <v-row no-gutters>
      <v-col
        class="info text-center pa-5 white--text"
        cols="12"
        md="6"
      >
        <base-bubble-1
          style="transform: rotate(180deg) translateX(25%)"
        />

        <base-heading>
          Proyectos Recientes
        </base-heading>

        <base-text class="mb-5">
          Estos son misproyectos más recientes, de los cuales participé completa o parcialmente.
        </base-text>

        <v-card color="secondary">
          <v-container class="pa-2">
            <v-row>
              <v-col
                v-for="project in projects"
                :key="project"
                cols="12"
                md="6"
              >
                <a
                  :href="`https://${project.url}`"
                  target="_blank"
                >
                  <v-img
                    :src="require(`@/assets/projects/${project.img}.png`)"
                    max-height="300"
                  />
                </a>
                <!-- <hover v-slot="{ hover }">
                  <a :href="project.url">
                    <v-img
                      :src="require(`@/assets/projects/${project.img}.png`)"
                      max-height="300"
                    >
                      <v-expand-transition>
                        <div
                          v-if="hover"
                          class="d-flex transition-fast-in-fast-out secondary lighten-2 v-card--reveal text-h2 white--text"
                          style="height: 100%;"
                        >
                          $14.99
                        </div>
                      </v-expand-transition>
                    </v-img>
                  </a>
                </hover> -->
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>

      <v-col
        class="hidden-sm-and-down"
        md="6"
      >
        <v-img
          :src="require('@/assets/recentprojects.png')"
          height="100%"
        />
      </v-col>
    </v-row>
  </section>
</template>

<script>
  export default {
    name: 'RecentProjects',

    data: () => ({
      projects: [
        {
          img: 'fresar',
          url: 'fresaringenieros.co',
          txt: '',
        },
        {
          img: 'nui',
          url: 'nui.com.co',
          txt: '',
        },
        {
          img: 'huellabert',
          url: 'huellabert.com',
          txt: '',
        },
        {
          img: 'cenifloresAcademy',
          url: 'academia.ceniflores.org',
          txt: '',
        },
        {
          img: 'portal40',
          url: 'portal40.com',
          txt: '',
        },
        {
          img: 'valenti',
          url: 'proyectovalenti.com',
          txt: '',
        },
        {
          img: 'turpial',
          url: 'reservadelturpial.com',
          txt: '',
        },
        {
          img: 'arrigui',
          url: 'arrigui.com',
          txt: '',
        },
        {
          img: 'atelier',
          url: 'ateliercrump.com',
          txt: '',
        },
        {
          img: 'quality',
          url: 'qualitycreationsagency.com',
          txt: '',
        },
      ],
    }),
  }
</script>
