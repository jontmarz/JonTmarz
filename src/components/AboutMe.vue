<template>
  <section
    id="about"
    class="overflow-hidden"
  >
    <v-row
      class="white"
      no-gutters
    >
      <v-col
        class="pa-5"
        cols="12"
        md="7"
      >
        <base-bubble-1 style="transform: translate(5%, -5%)" />

        <v-col
          class="mx-auto"
          cols="10"
        >
          <base-heading class="font-weight-medium primary--text">
            About Me
          </base-heading>

          <base-text class="mb-5">
            Soy tecnólogo en Analisis y Desarrollo de Sistemas de Información, con especialidad en Desarrollo Web Full Stack, poseo alta experiencia en el desarrollo de proyectos en WordPress y Vue. También poseo conocimientos en NodeJS y Web Services.
          </base-text>

          <base-subheading class="accent--text">
            Habilidades
          </base-subheading>

          <base-text class="mb-5">
            Mis habilidades incluyen experiencia en HTML, SASS, MySQL, MongoDB, PHP y NodeJS.
          </base-text>

          <v-alert
            outlined
            color="info"
            class="px-7"
          >
            <v-row
              v-for="(skill, i) in skills"
              :key="i"
              style="color: #69A1BB;"
            >
              <v-col
                class="text-uppercase"
                cols="6"
                v-text="skill.name"
              />

              <v-col
                class="text-right"
                cols="6"
                v-text="`${skill.value}%`"
              />

              <v-progress-linear
                :buffer-value="skill.value - 100"
                :value="skill.value"
                color="accent"
                stream
                rounded
                height="8"
                class="w-90"
              />
            </v-row>
          </v-alert>
        </v-col>
        <v-col class="d-flex justify-center mb-16">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                class="mx-auto"
                href="https://drive.google.com/file/d/1OJKpZjHtiz6G1DoiBxj-fGnj6X-81lHS/view?usp=sharing"
                target="_blank"
                v-bind="attrs"
                v-on="on"
              >
                curriculum
                <v-icon right>
                  mdi-account-card-details
                </v-icon>
              </v-btn>
            </template>
            <span>Descarga mi curriculum</span>
          </v-tooltip>
        </v-col>
      </v-col>

      <v-col
        class="hidden-sm-and-down"
        md="5"
      >
        <v-img
          :src="require('@/assets/aboutme.png')"
          height="100%"
        />
      </v-col>
    </v-row>
  </section>
</template>

<script>
  export default {
    data: () => ({
      skills: [
        {
          name: 'WordPress',
          value: 70,
        },
        {
          name: 'Vue',
          value: 70,
        },
        {
          name: 'Laravel',
          value: 50,
        },
      ],
    }),
  }
</script>
