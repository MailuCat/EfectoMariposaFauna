<template>
<div class="contacto">
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSemw21Ok9uFiHvZsv7aOX7Mxij8LIXXEeSpT5E16Vk80-eFyw/viewform?embedded=true" frame-id="my-ifram" width="100%" height="800px" frameborder="0" marginheight="0" marginwidth="0" />
    <v-container class="pa-12">
        <v-row>
            <v-col>
                <h1>Contacto</h1>
            </v-col>
            <v-col>
                <v-form  action="https://formsubmit.co/f.tramites@gmail.com" method="POST" @submit.prevent="sendMessage" ref="form" v-model="valid" lazy-validation class="mb-16 mx-">
                    <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Nombre" required></v-text-field>
                    <v-text-field v-model="lastname" :counter="10" :rules="apellidoRules" label="Apellido" required></v-text-field>
                    <v-text-field v-model="email" :rules="emailRules" label="Correo electrónico" required></v-text-field>

                    <v-textarea v-model="message" name="input-7-1" filled label="Mensaje" :rules="mensajeRules" auto-grow value=""></v-textarea>

                    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
                        Enviar
                    </v-btn>

                    <v-btn color="error" class="mr-4" @click="reset">
                        Limpiar formulario
                    </v-btn>

                </v-form>
            </v-col>
        </v-row>
        <form action="https://formsubmit.co/f.tramites@gmail.com" method="POST">
     <input type="text" name="name" required>
     <input type="email" name="email" required>
     <button type="submit">Send</button>
</form>
    </v-container>
</div>
</template>

<script>
export default {
    name: 'Contact',
    data: () => ({
        myIframe: null,
        valid: true,
        
        name: '',
        lastname:'',
        email: '' ,
        message: '',
       
       nameRules: [
            v => !!v || 'Tienes que escribir un nombre',

            v => (v && v.length >= 2) || 'Debe tener al menos 2 caractéres',
        ],
          apellidoRules: [
            v => !!v || 'Tienes que escribir un apellido',

            v => (v && v.length >= 2) || 'Debe tener al menos 2 caractéres',
        ],
          emailRules: [
            v => !!v || 'Debes escribir un correo electr+onico',
            v => /.+@.+\..+/.test(v) || 'El correo debe ser válido',
        ],
           mensajeRules: [
            v => !!v || 'Escribe tu mensaje, por favor',

            v => (v && v.length >= 10) || 'Debe tener al menos 10 caractéres',
        ],
       
        select: null,

    }),
    methods: {
    

        onLoad(frame) {
            this.myIframe = frame.contentWindow
        },
        validate() {
            this.$refs.form.validate()
        },
        reset() {
            this.$refs.form.reset()
        },
        
    },

}
</script>

<style>
.contacto {
    background-color: #c6dadd;
}
.contacto h1{
  margin-top: 25%;
}
</style>
