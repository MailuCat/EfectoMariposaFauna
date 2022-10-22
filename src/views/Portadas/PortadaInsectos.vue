<template>
<div>
    <Menu />
    <v-container>
        <h1>Insectos de Chile</h1>
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
    name: "PortadaInsectos",
    components: {
        Menu,
    },
    metaInfo: {
        title: 'Comportamiento de los Insectos de Chile'
    },
    
    data: () => ({
        cards: [{
                title: "Abejorro Naranja",
                src: require('@/assets/abejorronaranja.jpg'),
                subtitle: "La única abeja nativa social de Chile",
                path: '/abejorronaranja',
            },
            {
                title: "Manuelia Postica",
                src: require('@/assets/manueliapostica1.jpg'),
                subtitle: "La especie que es un enlace entre las abejas individuales y sociales",
                path: '/manuelia',
            },
            {
                title: "Sierra de Orocoipo",
                src: "https://inaturalist-open-data.s3.amazonaws.com/photos/179714875/original.jpeg",
                subtitle: "Únicamente se ha visto en la orilla del río Mantagua en la región de Valparaíso y debido a su pequeña población se encuentra en Peligro Crítico de extinción.",
                path: '/sierradeorocoipo',
            },
            {
                title: "Cnemalobus pegnai",
                src: " ",
                subtitle: "Muy poco se dabe de esta especie endémica en Peligro Crítico de extinción que vive en el bosque El Ñague ubicado en el litoral de la costa de Los Vilos en la IV región",
                path: '/cnemalobuspegnai',
            },
        ],
    }),
};
</script>

<style></style>
