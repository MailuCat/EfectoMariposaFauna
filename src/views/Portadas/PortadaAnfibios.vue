<template>
<div>
    <Menu />
    <v-container>
        
            <h1> Anfibios de Chile </h1>
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
    name: "PortadaAnfibios",
    components: {
        Menu,
    },

    metaInfo: {
        title: 'Anfibios de Chile'
        
    },
    data: () => ({
        cards: [{
                title: "Sapo de pecho espinoso de Barrio (Alsodes barrioi)",
                src: require('@/assets/alsodes_barroi.jpg'),
                subtitle: "",
                path: '/sapobarrio',
            },
            {
                title: "Sapo hermoso (Telmatobufo venustus)",
                src: "https://inaturalist-open-data.s3.amazonaws.com/photos/179669364/original.jpeg",
                subtitle: "",
                path: '/sapohermoso',
            },
            {
                title: "Ranita de Darwin (Rhinoderma rufum)",
                src: require('@/assets/ranitadarwin.jpg'),
                subtitle: "",
                path: '/ranitadarwin',
            },
            {
                title: "Ranita de Darwin del Sur (Rhinoderma darwinii)",
                src: "https://live.staticflickr.com/4148/5010352361_ebc20885f3_w.jpg",
                subtitle: "",
                path: '/ranitadarwinsur',
            },
            

        ],
    }),
};
</script>

<style></style>
