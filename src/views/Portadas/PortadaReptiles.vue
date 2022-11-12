<template>
<div>
    <Menu />
    <v-container>
        <h1>Los reptiles de Chile</h1>
        <v-row>
            <v-col cols="12" sm="12" md="6" lg="6" v-for="card in cards" :key="card.title">
                <v-card class="mx-auto">
                    <v-img :src="card.src" height="240px"> </v-img>

                    <v-card-title v-text="card.title"></v-card-title>
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
    name: "PortadaReptiles",
    components: {
        Menu,
    },
    metaInfo: {
        title: 'Comportamiento de los reptiles de Chile'
    },
     data: () => ({
        cards: [{
                title: "Iguana Chilena (Callopistes maculatus)",
                src: require('@/assets/iguana_chilena.jpeg'),
                subtitle: "",
                path: '/iguanachilena',
            },
            {
                title: "Salamanqueja del Norte Chico (Garthia gaudichaudii)",
                src: 'https://efectomariposa.org/cpg/albums/userpics/10001/2/normal_salamanqueja.jpeg',
                subtitle: "",
                path: '/salamanqueja'
            },
             {
                title: "Lagartija Tenue (Liolaemus tenuis)",
                src: 'https://efectomariposa.org/cpg/albums/userpics/10001/2/normal_lagartija_tenue.jpg',
                subtitle: "",
                path: '/lagartijatenue'
            },
               {
                title: "Lagartija de Lolol (Liolaemus confusus)",
                src: 'https://efectomariposa.org/cpg/albums/userpics/10001/2/normal_lagartija_lolol.jpg',
                subtitle: "",
                path: '/lagartijalolol'
            },
        ],
    }),
};
</script>

<style> </style>
