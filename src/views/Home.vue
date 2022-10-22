<template>
<div>
    <title>Información científica sobre el comportamiento de los animales de Chile</title>
    <video src="../assets/Efectomariposa.mp4" muted loop autoplay alt="Video de los paisajes de Chile"></video>
    <v-container class="text">
        <v-row justify="space-around mt-12" no-gutters>
            <v-col xs="12" sm="3" md="2" class="grey lighten-2 rounded-circle pa-5 ma-4">
                <router-link :to="{ path: '/insectos' }">
                    <v-img :src="require('@/assets/manueliapostica2.jpg')" class="rounded-circle"></v-img>
                    <h2 class="text-center mt-2">Insectos</h2>
                </router-link>
            </v-col>
            <v-col xs="12" sm="3" md="2" class="grey lighten-2 rounded-circle pa-5  ma-4">
                <router-link :to="{ path: '/aves' }">
                    <v-img :src="require('@/assets/aves2.jpg')" class="rounded-circle "></v-img>
                    <h2 class="text-center mt-2">Aves</h2>
                </router-link>
            </v-col>

            <v-col xs="12" sm="3" md="2" class="grey lighten-2 rounded-circle pa-5 ma-4">
                <router-link :to="{ path: '/mamiferos' }">
                    <v-img :src="require('@/assets/mamiferos.jpg')" class="rounded-circle"></v-img>
                    <h2 class="text-center mt-2">Mamíferos</h2>
                </router-link>
            </v-col>
            
            <v-col xs="12" sm="3" md="2" class="grey lighten-2 rounded-circle pa-5 ma-4">
                <router-link :to="{ path: '/anfibios' }">
                    <v-img :src="require('@/assets/alsodes_barroi.jpg')" class="rounded-circle"></v-img>
                    <h2 class="text-center mt-2">Anfibios</h2>
                </router-link>
            </v-col>

            <v-col xs="12" sm="3" md="2" class="grey lighten-2 rounded-circle pa-5 ma-4">
                 <router-link :to="{ path: '/reptiles' }">
                    <v-img :src="require('@/assets/iguana_chilena.jpeg')" class="rounded-circle"></v-img>
                    <h2 class="text-center mt-2">Reptiles</h2>
                </router-link>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
export default {
    name: "Home",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fjalla+One&family=Noto+Sans&family=Roboto:wght@300&display=swap");

* {
    margin: 0;
    padding: 0;
}

.grey {
    z-index: 2000;
}

h2 {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 1.1rem;
    z-index: 10;
}

video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.5;
}
</style>
