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
                src: "https://efectomariposa.org/cpg/albums/userpics/10001/2/normal_condor.jpeg",
                subtitle: "A diferencia de otros carroñeros, comparte zonas de descanso y los machos son activos cuidadores de sus crías",
                path: "/condor",
            },
            {
                title: "Queltehue (Vanellus chilensis)",
                src: "https://efectomariposa.org/cpg/albums/userpics/10001/2/normal_queltehue.jpg",
                subtitle: "Conocido en Chile como queltehue o tregille, el Vanellus chilensis adquiere distintos nombres en cada país que habita desde Nicaragua hasta el sur de Latinoamérica.",
                path: "/queltehue",
            },
            {
                title:"Agilucho de Juan Fernández(Geranoaetus polyosoma exsul)",
                src: "https://efectomariposa.org/cpg/albums/userpics/10001/2/normal_aguilucho_Juan_Fernandez.jpg",
                subtitle: "Este aguilucho vive exclusivamente en la isla Alejandro Selkirk del archipiélago de Juan Fernández en Chile.",
                path: "/aguiluchojuanfernandez",
            },
            {
                title: "Rayadito de Más Afuera (Aphrastura masafuerae)",
                src: "https://efectomariposa.org/cpg/albums/userpics/10001/2/normal_rayadito_mar_afuera1.jpg",
                subtitle: "Un ave insectivora endémica de la isla Alejandro Selkirk del archipielado de Juan Fernández",
                path: "/rayaditimasafuera",
            },
            {
                title: "Picaflor de Arica (Eulidia yarrellii)",
                src: "https://efectomariposa.org/cpg/albums/userpics/10001/2/normal_Picaflor_Arica.jpg",
                subtitle: "A pasos de la extinción solo quedan 210 aves que habitan Azapa, Chaca y Camarones",
                path: "/picaflordearica",
            },
        ],
    }),
   
};
</script>

<style>
</style>
