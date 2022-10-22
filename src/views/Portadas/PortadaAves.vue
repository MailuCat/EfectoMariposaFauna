<template>
<div>
    <Menu />
    <v-container>
       <h1>Aves de Chile</h1>
        <v-row>
            <v-col cols="12" sm="12" md="6" lg="6" v-for="card in cards" :key="card.title">
                <v-card class="mx-auto">
                    <v-img :src="card.src" height="240px"></v-img>

                    <v-card-title class= "aves" v-text="card.title"></v-card-title>
                    <v-card-subtitle v-html="card.subtitle" :path="card.path">Ver articulo</v-card-subtitle>

                    <v-card-actions>
                        <v-btn color="orange lighten-2" :to="card.path">
                            Artículo completo
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
import Menu from "@/components/Menu.vue";
export default {
    name: "PortadaAves",
    components: {
        Menu,
    },

    metaInfo: {
        title: 'Comportamiento de las aves de Chile'
    },
    
    data: () => ({
        cards: [{
                title: "Cóndor (Vultur gryphus)",
                src: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Andean_Condor_Vultur_Gryphus_%2842232964%29.jpeg",
                subtitle: "A diferencia de otros carroñeros, comparte zonas de descanso y los machos son activos cuidadores de sus crías",
                path: "/condor",
            },
            {
                title: "Queltehue (Vanellus chilensis)",
                src: "https://inaturalist-open-data.s3.amazonaws.com/photos/3004798/medium.jpg",
                subtitle: "Conocido en Chile como queltehue o tregille, el Vanellus chilensis adquiere distintos nombres en cada país que habita desde Nicaragua hasta el sur de Latinoamérica.",
                path: "/queltehue",
            },
            {
                title:"Agilucho de Juan Fernández(Geranoaetus polyosoma exsul)",
                src: "https://inaturalist-open-data.s3.amazonaws.com/photos/36177952/large.jpg",
                subtitle: "Este aguilucho vive exclusivamente en la isla Alejandro Selkirk del archipiélago de Juan Fernández en Chile.",
                path: "/aguiluchojuanfernandez",
            },
            {
                title: "Rayadito de Más Afuera (Aphrastura masafuerae)",
                src: "https://inaturalist-open-data.s3.amazonaws.com/photos/70145409/original.jpg",
                subtitle: "Un ave insectivora endémica de la isla Alejandro Selkirk del archipielado de Juan Fernández",
                path: "/rayaditimasafuera",
            },
            {
                title: "Picaflor de Arica (Eulidia yarrellii)",
                src: "https://inaturalist-open-data.s3.amazonaws.com/photos/84006729/large.jpg",
                subtitle: "A pasos de la extinción solo quedan 210 aves que habitan Azapa, Chaca y Camarones",
                path: "/picaflordearica",
            },
        ],
    }),
   
};
</script>

<style>
.aves{
    font-size: 1.2em;
}
</style>
