<template>
  <section
    id="get-in-touch"
    class="overflow-hidden"
  >
    <v-row
      class="info white--text"
      no-gutters
    >
      <v-col
        class="hidden-sm-and-down"
        md="6"
      >
        <v-img
          :src="require('@/assets/contact.png')"
          height="100%"
        />
      </v-col>

      <v-col
        class="pa-5"
        cols="12"
        md="6"
      >
        <base-bubble-1 />

        <base-heading class="mb-10 text-center">
          Contáctame
        </base-heading>

        <v-sheet
          color="transparent"
          max-width="70%"
          class="mx-auto mb-15"
        >
          <validation-observer
            ref="observer"
            v-slot="{ invalid }"
          >
            <form @submit.prevent="submit">
              <validation-provider
                v-slot="{ errors }"
                name="Name"
                rules="required|max:15"
                class="d-flex"
              >
                <v-icon left>
                  mdi-account
                </v-icon>
                <v-text-field
                  v-model="contact.name"
                  :counter="10"
                  :error-messages="errors"
                  label="Name"
                  required
                />
              </validation-provider>
              <validation-provider
                v-slot="{ errors }"
                name="email"
                rules="required|email"
                class="d-flex"
              >
                <v-icon left>
                  mdi-email
                </v-icon>
                <v-text-field
                  v-model="contact.email"
                  :error-messages="errors"
                  label="E-mail"
                  required
                />
              </validation-provider>
              <validation-provider
                name="message"
                class="d-flex"
              >
                <v-icon left>
                  mdi-message-text
                </v-icon>
                <v-textarea
                  v-model="contact.message"
                  label="Mensaje"
                />
              </validation-provider>
              <validation-provider
                id="terms"
                v-slot="{ errors }"
                rules="required"
                name="checkbox"
              >
                <v-checkbox
                  v-model="contact.checkbox"
                  :error-messages="errors"
                  value="1"
                  label="Acepto los términos y condiciones"
                  type="checkbox"
                  required
                />
              </validation-provider>

              <v-btn
                class="mr-4"
                type="submit"
                :disabled="invalid"
              >
                <v-icon left>
                  mdi-send
                </v-icon>
                submit
              </v-btn>
              <v-alert
                v-model="alert.state"
                class="text-center mt-6"
                :color="alert.color"
                dark
                dismissible
              >
                {{ alert.message }}
              </v-alert>
            </form>
          </validation-observer>
        </v-sheet>
      </v-col>
    </v-row>
  </section>
</template>

<script>
  import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
  import emailjs from 'emailjs-com'

  setInteractionMode('eager')

  extend('digits', {
    ...digits,
    message: '{_field_} necesita ser de {length} digitos. ({_value_})',
  })

  extend('required', {
    ...required,
    message: '{_field_} no puede estar vacío',
  })

  extend('max', {
    ...max,
    message: '{_field_} no puede tener más de {length} caracteres',
  })

  extend('regex', {
    ...regex,
    message: '{_field_} {_value_} no coincide {regex}',
  })

  extend('email', {
    ...email,
    message: 'Formato de Email no válido',
  })
  export default {
    name: 'GetInTouch',
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      contact: {
        name: '',
        email: '',
        checkbox: null,
      },
      alert: {
        state: false,
        color: '',
        message: '',
      },
      message: {
        sendSuccess: '* El mensaje ha sido enviado exitosamente',
        sendError: 'No se pudo enviar el mensaje. Vuelve a intentarlo más tarde',
      },
    }),

    methods: {
      submit () {
        this.$refs.observer.validate()
        this.save()
      },
      clear () {
        this.name = ''
        this.email = ''
        this.message = ''
        this.checkbox = null
        this.$refs.observer.reset()
      },
      save () {
        const templateParams = {
          name: this.contact.name,
          email: this.contact.email,
          message: this.contact.message,
        }
        // console.log(templateParams)
        emailjs.send('quantum-gmail', 'template_zwovztu', templateParams, 'user_9xS93ryM5JePmUJF9Pbu1')
          .then((response) => {
            console.log('SUCCESS!', response.status, response.templateParams)
            this.alert = {
              state: true,
              color: 'accent',
              message: `${this.message.sendSuccess}`,
            }
          }, (err) => {
            console.log('FAILED...', err)
            this.alert = {
              state: true,
              color: 'error',
              message: `${this.message.sendError} codigo ${err}`,
            }
          })
      },
    },
  }
</script>
