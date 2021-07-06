<template>
  <section>
    <v-fab-transition>
      <v-tooltip
        top
        color="accent lighten-4"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            fixed
            bottom
            right
            fab
            v-bind="attrs"
            href="https://bit.ly/3qNde5f"
            target="_blank"
            v-on="on"
          >
            <v-icon>mdi-whatsapp</v-icon>
          </v-btn>
        </template>
        <span class="text-center"><p>¡Escribeme!,</p><p>Tendré el gusto de ayudarte</p></span>
      </v-tooltip>
    </v-fab-transition>
  </section>
</template>

<script>
  export default {
    name: 'WhatsApp',
  }
</script>
