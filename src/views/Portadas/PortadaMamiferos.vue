<template>
<div>
    <Menu />
    <v-container>
        <title>Animales de Chile: los mamíferos</title>
        <h1>Mamíferos de Chile</h1>   
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
    name: "PortadaMamiferos",
    components: {
        Menu,
    },
    metaInfo: {
        titulo: 'Comportamiento de los mamíferos de Chile'
    },
    
     data: () => ({
        cards: [ 
            {
                title: "Ballena Jorobada (Vicugna vicugna)",
                src: "https://efectomariposa.org/cpg/albums/userpics/10001/2/normal_ballena_jorobada.jpg",
                subtitle: "Megaptera novaeangliae",
                path: '/jorobada',
            }, 
             {
                title: "La Vicuña (Vicugna vicugna)",
                src: "https://efectomariposa.org/cpg/albums/userpics/10001/2/normal_vicuna.jpeg",
                subtitle: "Caracterizada por machos dominantes y el pelaje más suave, la vicuña es una especie vulnerable",
                path: '/vicuna',
            },
            
            
            {
                title: "Llama (Llama glama)",
                src: "https://efectomariposa.org/cpg/albums/userpics/10001/2/normal_llama.jpg",
                subtitle: "El camélido más grande sur América es el reslutado de la domesticación del guanaco",
                path: '/llama',
            },
            
            
            {
                title: "Huemul (Hippocalemus bisulcus)",
                src:"https://efectomariposa.org/cpg/albums/userpics/10001/2/normal_Huemul.jpg",
                subtitle: "La cordillera de la costa de la Patagonia actualmente es su refugio a pesar de la crudeza del clima",
                path: '/huemul',
            },
            {
                title: "Degú (Octodon degus)",
                src: require('@/assets/degu.jpg'),
                subtitle: "",
                path: '/degu',
            },
            {
                title: "Zorro Chilote (Lycalopex fulvipes)",
                src: "https://efectomariposa.org/cpg/albums/userpics/10001/2/normal_zorro_chilote.jpg",
                subtitle: "Un canino que comparte en lugar de defender y monopolizar el uso del territorio",
                path: '/zorrochilote',
            },
            
            {
                title: "Delfín Nariz de Botella (Tursiops truncatus)",
                src: require('@/assets/delfin1.jpg'),
                subtitle: "",
                path: '/delfinnarizbotella',
            },
            {
                title: "Gúiña (Leopardus guigna)",
                src: require('@/assets/guiña.jpg'),
                subtitle: "El felino más pequeño de America",
                path: '/guina',
            },
            {
                title: "Puma (Puma Cocolor)",
                src: "https://efectomariposa.org/cpg/albums/userpics/10001/2/normal_puma.jpeg",
                subtitle: "",
                path: '/puma',
            },
            {
                title: "Gato Colocolo (Leopardus colocolo)",
                src: "https://efectomariposa.org/cpg/albums/userpics/10001/2/normal_gato_colo_colo.jpg",
                subtitle: "",
                path: '/colocolo',
            },  
            {
                title: "Gato Andino(Leopardus jacobitus)",
                src: "https://efectomariposa.org/cpg/albums/userpics/10001/2/normal_gato_andino1.jpeg",
                subtitle: "",
                path: '/gatoandino',
            },
        ],
    }),
   
};
</script>

<style></style>
