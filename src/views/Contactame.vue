<template>
  <div >
      <Menu />
      <v-row class="contacto">
  <v-container class="mt-5">
        
            <v-col sx="12" sm="12" md="12" lg="4">
                <h1>Contacto con Efecto Mariposa</h1>
            </v-col>
            <v-col sx="12" sm="12" md="12" lg="8">
                <v-form action="mailto:f.tramites@gmail.com">
                    <v-text-field type="text"  label="Nombre"  v-model="name"></v-text-field>
                    <v-text-field type="email"  label="Correo electrónico" v-model="mail" ></v-text-field>
                     <v-textarea type="text" label="Mensaje" v-model="message"></v-textarea>
                   <v-btn type="submit" class="mr-4">
                        Enviar
                    </v-btn>
              </v-form>
           </v-col>
    
    </v-container>
    </v-row>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";

export default {
    name: 'Contactame',
     components: {
        Menu,
     },
    data() {
        return {
            name: '',
            email: '',
            message: ''
        }
    }
   }
</script>

<style scope>
@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&display=swap');

.contacto {
    background-color: #c6dadd;
}
 h1{
  margin-top: 10%;
  font-family: 'Cinzel Decorative', cursive;
}
</style>