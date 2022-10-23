<template>
<div>
    <Menu />
    <title>Mamíferos de Chile: el Gato Colo Colo (Leopardus colocolo)</title>
    <v-container>
        <v-row class="justify-center">
            <v-col xs="12" sm="12" md="12" lg="12" xl="12">
                <h1>Gato Colocolo (Leopardus colocolo)</h1>
                <p>1 de febrero 2022</p>
            </v-col>
        </v-row>
        <v-row class="justify-center">
            <v-img src="https://inaturalist-open-data.s3.amazonaws.com/photos/156027880/large.jpg" max-height="400" max-width="800" class="fotonota" alt="Gato Colocolo (Leopardus colocolo)"></v-img>
        </v-row>
        <v-row class="justify-start">
            <p class="justify-start foto_texto"></p>
        </v-row>
        <hr class="mb-5" />
        <v-row class="texto">
            <p>
                Gracias a estudios de telemetría realizados en Bolivia y Argentina se
                estima que su territorio-hogar es de 55,3 y 11,5 kilómetros cuadrados
                respectivamente, registrándose las mayores distancias recorridas entre
                los meses de julio y noviembre.
            </p>
            <p>
                El gato colocolo ocupa variados medios naturales de América del Sur que
                comienzan en el Ecuador y terminan en La Patagonia y también en el oeste de
                Brasil. Habitualmente vive en zonas más abiertas donde recorre pastizales 
                y se escabulle entre matorrales secos, también habita en bosques
                húmedos, humedales y regiones montañosas.
            </p>
            <p>
                En Chile este felino es un animal solitario y noctámbulo que está más
                activo entre las 22:00 y 01:00 horas y entre las 03:00 y 06:00 horas.
                Sin embargo, en Brasil se ha reportado importante actividad diurna lo
                que sugiere una flexibilidad en su comportamiento.
            </p>
            <p>
                Los machos colocolo se aparean con varias hembras. Las que resultan
                preñadas dan a luz transcurridos 80 a 85 días. Para amamantarlos y
                cuidarlos durante los primeros meses, la madre ocupa pequeñas cuevas
                camufladas en las confecciones camas de hierba.
            </p>
          <h2 class="pb-3">Utiliza sus heces para el marcaje y medio de comunicación con sus pares</h2>
            <p>
                Tiene un comportamiento de marcaje para lo que rocía orina en la hoja
                de plantas. Hay registro que una de las plantas de gran diámetro que
                usa con este fin es el neneo (Mulinum spinosum).
            </p>
            <p>
                  Las investigaciones llevan a pensar que el colocolo utilizan las heces
                  como un importante medio de comunicación con sus pares y también con
                  otras especies para el marcado del territorio. Se ha documentado que
                  las letrinas tienen un gran potencial como centros de comunicación en
                  felinos del género Leopardus.
            </p>
            <p>
                  Como muchos otros animales del país, su principal riesgo es la
                  disminución de su hábitat, el que está siendo remplazado por tierras de
                  cultivo agrícolas y zonas para el pastoreo del ganado. La matanza en
                  represalia por depredación de aves de corral también es una amenaza,
                  al igual que las muertes en carretera.
            </p>

                    <h3 class="enlaces_bibliografia">Enlace a fuentes:</h3>
                    <p class="enlaces_bibliografia">
                        <a href="https://dialnet.unirioja.es/descarga/articulo/5524083.pdf">Revisión actualizada sobre la biodiversidad y consservación de los
                            felinos silvestres de Chile</a>
                    </p>
                    <p class="enlaces_bibliografia">
                        <a href="https://www.researchgate.net/profile/Fabian-Jaksic/publication/348977465_Los_carnivoros_de_Chile_primera_edicion_Ediciones_CASEBFlora_Fauna_Santiago_257_pp/links/6165d6713851f95994f26b39/Los-carnivoros-de-Chile-primera-edicion-Ediciones-CASEB-Flora-Fauna-Santiago-257-pp.pdf#page=13&zoom=auto,-294,402">Los carnívoros de Chile</a>
                    </p>
        </v-row>
    </v-container>
    <div class="share-network-list">
        <ShareNetwork v-for="network in networks" :network="network.network" :key="network.network" :style="{ backgroundColor: network.color }" :url="sharing.url" :title="sharing.title" :description="sharing.description" :quote="sharing.quote" :hashtags="sharing.hashtags" :twitterUser="sharing.twitterUser">
            <i :class="network.icon"></i>
            <span>{{ network.name }}</span>
        </ShareNetwork>
    </div>
</div>
</template>

<script>
import Menu from "@/components/Menu.vue";
export default {
    name: "Colocolo",
    components: {
        Menu,
    },
    metaInfo() {
        return {
            title: "Mamíferos de Chile: el Gato Colo Colo (Leopardus colocolo)",

            meta: [
                // Twitter Card
                {
                    name: "twitter:card",
                    content: "summary"
                },
                {
                    name: "twitter:title",
                    content: "Mamíferos de Chile: el Gato Colo Colo (Leopardus colocolo)",
                },
                {
                    name: "twitter:description",
                    content: "",
                },
                // image must be an absolute path
                {
                    name: "twitter:image",
                    content: "",
                },
                // Facebook OpenGraph
                {
                    property: "og:title",
                    content: "Mamíferos de Chile: el Gato Colo Colo (Leopardus colocolo)",
                },
                {
                    property: "og:site_name",
                    content: "Efecto Mariposa"
                },
                {
                    property: "og:type",
                    content: "website"
                },
                {
                    property: "og:image",
                    content: "",
                },
                {
                    property: "og:description",
                    content: "",
                },
            ],
        };
    },

    data() {
        return {
            sharing: {
                url: "https://www.efectomariposa.org/colocolo",
                title: "Mamíferos de Chile: el Gato Colo Colo (Leopardus colocolo)",
                description: "",
                quote: "Mamíferos de Chile: el Gato Colo Colo (Leopardus colocolo)",
                twitterUser: "",
            },
            networks: [{
                    network: "email",
                    name: "Email",
                    icon: "far fah fa-lg fa-envelope",
                    color: "#333333",
                },
                {
                    network: "facebook",
                    name: "Facebook",
                    icon: "fab fah fa-lg fa-facebook-f",
                    color: "#1877f2",
                },
                {
                    network: "telegram",
                    name: "Telegram",
                    icon: "fab fah fa-lg fa-telegram-plane",
                    color: "#0088cc",
                },
                {
                    network: "twitter",
                    name: "Twitter",
                    icon: "fab fah fa-lg fa-twitter",
                    color: "#1da1f2",
                },
                {
                    network: "whatsapp",
                    name: "Whatsapp",
                    icon: "fab fah fa-lg fa-whatsapp",
                    color: "#25d366",
                },
            ],
        };
    },
};
</script>
<style>

@media screen and (max-width: 1200px) {
  .fotonota {
    width: 50px;
  }

  .texto {
    padding: 2rem 3rem 2.5rem 3rem;
    text-align: justify;
  }
}

@media screen and (min-width: 1200px) {
  .texto {
    padding: 2rem 9.5rem 2.5rem 9rem;
    text-align: justify;
  }
}

hr {
  background-color: gray;
  height: 2px;
  margin: 3rem 9.5rem auto 9rem;
}

p.foto_texto {
  font-size: 0.8rem;
  padding-left: 20%;
}

.enlaces_bibliografia{
  width: 90%;
  display: inline-block;
}

.v-application a {
  color: #3f3f42;
  margin: 4px;
  
}

.share-network-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1000px;
  margin: auto;
}

a[class^="share-network-"] {
  flex: none;
  color: #ffffff;
  background-color: #333;
  border-radius: 3px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0 10px 10px 0;
}

a[class^="share-network-"] .fah {
  background-color: rgba(0, 0, 0, 0.2);
  padding: 10px;
  flex: 0 1 auto;
}

a[class^="share-network-"] span {
  padding: 0 10px;
  flex: 1 1 0%;
  font-weight: 500;
}
</style>

