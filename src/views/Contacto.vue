<template>
<div class="main">
    <Menu />
    <v-container class="contacto mt-5">
        <v-row>
            <v-col sx="12" sm="12" md="12" lg="4">
                <h1>Contacto</h1>
            </v-col>
            <v-col sx="12" sm="12" md="12" lg="8">
                    <v-form action="https://formsubmit.co/f.tramites@gmail.com" method="POST">
                        <v-text-field type="text" name="name" label="Nombre"></v-text-field>
                        <v-text-field type="email" name="email" label="Correo electrónico"></v-text-field>
                        <v-textarea type="text" label="Mensaje"></v-textarea>
                        <v-btn type="submit" class="mr-4">
                            Enviar
                        </v-btn>
                    </v-form>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
import Menu from "@/components/Menu.vue";
export default {
    name: 'Contacto',
    components: {
        Menu,
    }
}
</script>

<style>
.v-container {
  width: 100%;
  background-color:red ;
}
.contacto {
    background-color: #c6dadd;

}

.contacto h1 {
    margin-top: 10%;
    font-size: 200px;
}
</style>
