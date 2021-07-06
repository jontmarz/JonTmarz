<template>
  <section
    id="recent-projects"
    class="overflow-hidden"
  >
    <v-row no-gutters>
      <v-col
        class="info text-center pa-5 accent--text"
        cols="12"
        md="7"
      >
        <base-bubble-1
          style="transform: rotate(180deg) translateX(25%)"
        />

        <base-heading class="font-weight-medium">
          Proyectos Recientes
        </base-heading>

        <base-text class="mb-5">
          Estos son misproyectos más recientes, de los cuales participé completa o parcialmente.
        </base-text>

        <v-card
          color="secondary"
          class="hover-card"
        >
          <v-container class="pa-2">
            <v-row>
              <v-col
                v-for="(project, i) in projects"
                :key="i"
                cols="12"
                md="6"
              >
                <!-- <a
                  :href="`https://${project.url}`"
                  target="_blank"
                >
                  <v-img
                    :src="require(`@/assets/projects/${project.img}.png`)"
                    max-height="300"
                    :aspect-ratio="16/9"
                  />
                </a> -->
                <v-hover v-slot="{ hover }">
                  <a
                    :href="`https://${project.url}`"
                    target="_blank"
                  >
                    <v-img
                      :src="require(`@/assets/projects/${project.img}.png`)"
                      max-height="300"
                      :aspect-ratio="16/9"
                    >
                      <v-expand-transition>
                        <div
                          v-if="hover"
                          class="d-flex transition-fast-in-fast-out accent v-card--reveal text-h2 white--text"
                          style="height: 100%;"
                        >
                          <p v-html="project.txt" />
                        </div>
                      </v-expand-transition>
                    </v-img>
                  </a>
                </v-hover>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>

      <v-col
        class="hidden-sm-and-down"
        md="5"
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
          txt: 'Empresa de ingenieros de pavimentos<br>2021',
        },
        {
          img: 'nui',
          url: 'nui.com.co',
          txt: 'Tienda de ropa para dormir<br>2021',
        },
        {
          img: 'huellabert',
          url: 'huellabert.com',
          txt: 'Tienda de zapatillas ecológicas<br>2021',
        },
        {
          img: 'cenifloresAcademy',
          url: 'academia.ceniflores.org',
          txt: 'Agremiación del sector floricultor<br>2021',
        },
        {
          img: 'portal40',
          url: 'portal40.com',
          txt: 'Constructora<br>2020',
        },
        {
          img: 'valenti',
          url: 'proyectovalenti.com',
          txt: 'Constructora<br>2020',
        },
        {
          img: 'turpial',
          url: 'reservadelturpial.com',
          txt: 'Constructora<br>2020',
        },
        {
          img: 'arrigui',
          url: 'arrigui.com',
          txt: 'Firma de abogados y auditores<br>2021',
        },
        {
          img: 'atelier',
          url: 'ateliercrump.com',
          txt: 'Tienda virtual de diseñadora<br>2021',
        },
        {
          img: 'quality',
          url: 'qualitycreationsagency.com',
          txt: 'Agencia de publicidad<br>2021',
        },
      ],
    }),
  }
</script>

<style lang="scss">
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .8;
    position: absolute;
    width: 100%;
    padding-left: 20%;
    padding-right: 20%;
  }
</style>
