<template>
<v-app>
     <title>
        Todo sobre el comportamiento de la fauna de Chile
    </title>
    <v-bottom-navigation v-model="value" :background-color="color" dark shift>
         
        <div class="foto d-none d-sm-flex">
            <v-img :src="require('@/assets/logook.png')" max-height="40" max-width="320"></v-img>
        </div> 
        <v-btn :to="{ path: '/' }" class="inicio">
            <span>Inicio</span>
            <v-icon>mdi-home-lock</v-icon>
        </v-btn>

        <v-btn :to="{ path: '/contacto' }" class="inicio">
                <span>Contacto</span>
            <v-icon>mdi-human-greeting-proximity</v-icon>
        </v-btn>
        <v-btn :to="{ path: '/acerca_de_efectomariposa' }" class="nosotros">
            <span>Nosotros</span>
            <v-icon>mdi-account-box-outline</v-icon>
        </v-btn>
        <v-btn :to="{ path: 'buscar' }" >
            <span>Buscar</span>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
    </v-bottom-navigation>
    
    <v-main>
        <router-view />
    </v-main>
    <Footer />
</v-app>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {

    name: 'App',
     components: {
        Footer,
    },

    data: () => ({
        value: 1,
        
    }),

    computed: {
        color() {
            switch (this.value) {
                 case 0: return 'teal'
                case 1: return 'teal'
                case 2: return '#6fb4ae'
                case 3: return '#29A0B1'
                default:
                    return 'blue';
            }
        }
    }
    
};
</script>

<style>
#input-usage .v-input__prepend-outer,
#input-usage .v-input__append-outer,
#input-usage .v-input__slot,
#input-usage .v-messages {
    border: 1px dashed rgba(221, 206, 206, 0.4);

}

h1, h2, h3,  p{
    color: #3f3f42;
}

h1 {
    font-size: 2rem;
    line-height: 2.65rem;
    font-weight: 500;
    padding: 1rem 0px;
    margin-block:0.67em;
    margin-inline: 0px;
    color: teal;
}

.foto{
  margin-left: 0;
  margin-right: 2rem;
  margin-top: 6px;
}

a {
    text-decoration: none;
}
</style>
