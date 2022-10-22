<template>
<v-card class="hight overflow-hidden tarjeta">
    <v-app-bar absolute color="grey lighten-4" dark shrink-on-scroll src="https://picsum.photos/1920/1080?random" scroll-target="#scrolling-techniques-2">
        <template v-slot:img="{ props }">
            <v-img v-bind="props" gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"></v-img>
        </template>
        <div class="d-flex d-sm-none">
        <v-app-bar-nav-icon class="iconomenu" @click="drawer = true"></v-app-bar-nav-icon>       
        </div>
        <v-spacer></v-spacer>
         <!--Botones-->
         <div class="d-none d-sm-flex">
        <v-btn color="#ffc548" :to="{ path: '/aves' }" class="mt-2 botonmenu">
            Aves
        </v-btn>

        <v-btn color="#ffa722" :to="{ path: '/mamiferos' }" class="mt-2 botonmenu">
            Mamiferos
        </v-btn>

        <v-btn color="#ed8900" :to="{ path: '/insectos' }" class="mt-2 botonmenu">Insectos
        </v-btn>

        <v-btn color="#c96c00" :to="{ path: '/anfibios' }" class="mt-2 botonmenu">Anfibios
        </v-btn>

        <v-btn color="#a75000" :to="{ path: '/reptiles' }" class="mt-2 botonmenu">Reptiles
        </v-btn>
         </div>
    </v-app-bar>
    
    <!-- Items menú desplegable -->
    <div>
    <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense height="300px">
            <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4 ,d-none">
               <v-list-item>
                    <v-list-item-icon>
                        <v-btn :to="{ path: '/aves' }"><i class="fas fa-crow"></i></v-btn>
                    </v-list-item-icon>
                    <v-list-item-title>Aves</v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-icon>
                        <v-btn :to="{ path: '/mamiferos' }"><i class="fas fa-paw"></i></v-btn>
                    </v-list-item-icon>
                    <v-list-item-title>Mamíferos</v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-icon>
                        <v-btn :to="{ path: '/insectos' }"><i class="fas fa-bug"></i></v-btn>
                    </v-list-item-icon>
                    <v-list-item-title>Insectos</v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-icon>
                        <v-btn :to="{ path: '/anfibios' }"><i class="fas fa-bug"></i></v-btn>
                    </v-list-item-icon>
                    <v-list-item-title>Anfibios</v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-icon>
                        <v-btn :to="{ path: '/reptiles' }"><i class="fas fa-bug"></i></v-btn>
                    </v-list-item-icon>
                    <v-list-item-title>Reptiles</v-list-item-title>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
    </div>
    <v-sheet id="scrolling-techniques-2" class="overflow-y-auto" max-height="600px">
        <v-container style="height: 130px;"></v-container>
    </v-sheet>
</v-card>
</template>

<script>
export default {
    name: "Menu",
    data: () => ({
        drawer: false,
        group: null,
    }),
};
</script>

<style>

.botonmenu {
    margin-right: 4px;
}
@media (min-width: 580px) {
    .iconomenu {
        display: none;
    }
}
@media (max-width: 580px) {
    .botonmenu {
        display: none;
        margin-right: 4px;

    }
    .tarjeta {
        height: 210px;
    }
}


</style>
