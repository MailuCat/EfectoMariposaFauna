<template>
<div class="main">
    <Menu />
        <v-row>
            <v-col sx="12" sm="12" md="12" lg="4">
                <h1 class="ml-12">Contacto</h1>
            </v-col>
            <v-col class="mt-12"  sx="12" sm="12" md="12" lg="8">
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

.main {
    background-color: #c6dadd;
    width: 100%;
    height: 100%;
}

.contacto h1 {
    margin-top: 10%;
    font-size: 20px;
}
</style>