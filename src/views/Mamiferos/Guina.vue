<template>
<div>
    <Menu />
    <title>Mamíferos de Chile: La Güiña es el felino más pequeño de América</title>
    <v-container>
        <v-row class="justify-center">
            <v-col xs="12" sm="12" md="12" lg="12" xl="12">
                <h1 class="titulo">Güiña (Leopardus guigna)</h1>
                <p class="fecha">1 de febrero 2022</p>
            </v-col>
        </v-row>
        <v-row class="justify-center">
            <v-img :src="require('@/assets/guiña.jpg')" max-height="400" max-width="800" class="fotonota"></v-img>
        </v-row>
        <hr class="mb-5" />
        <v-row class="texto">
            <p>
                La güiña es el felino más pequeño de América con un peso que varía
                entre los 1,3 a los 2,5 kilos, la mitad de un gato doméstico. Está
                especie endémica y solitaria, es vulnerable a la extinción, debido
                principalmente, al deterioro de bosques y matorrales donde puede
                ocultarse para cazar pequeños mamíferos, aves y lagartijas.
            </p>
            <p>
                Vive desde el Cerro Palo Colorado, al sur de Los Vilos, en la cuarta
                Región hasta la región de Aysén. Marginalmente también se encuentra en
                el suroeste argentino. En Chile ocupa unos 160 kilómetros cuadrados de
                bosques y otras zonas fragmentadas por la actividad del hombre. La
                guiña ya ha perdido el 5,5 % de su hábitat y se pronostica que aumentará a
                40 % el 2050
            </p>
            <p>
                Camuflado entre matorrales y el bosque esclerófico en el norte y zona
                central hasta el bosque denso del sur de Chile, la guiña es un
                escalador ágil que trepa los árboles para obtener roedores y
                marsupiales, desde el 58 % al 72 % de su alimentación o aves, que
                componen entre el 16 al 20 %.
            </p>
            <p>
                Es un felino principalmente activo al inicio y fin de la noche y
                durante el medio día.
            </p>
            <p>
                Las ramas de los árboles también son su lugar de descanso, por todo
                esto depende mucho del bosque nativo y la instalación de predios
                agrícolas, tala de árboles, incendios han ido destruyendo su hábitat.
            </p>
            <p>
                La guiña ha logrado adaptarse a zonas agrícolas usando fragmentos de
                bosque nativo, desplazándose por corredores de vegetación que los
                unen, sin embargo, esta vida aumenta los riesgos.
            </p>
            <p>
                Le afecta el endemismo, la escasez de presas, el contacto con el
                hombre y sus animales domésticos.
            </p>
            <p>
                El estudio "Natural history and lanscape-use for guignas on Isla de
                Chiloé, Chile" evidenció que en las en las zonas con paisaje fragmentado
                las hembras no establecen su hogar cerca de las viviendas de los
                humanos a diferencia de los machos si lo hacían para capturar las aves
                de los gallineros. De hecho, dos de las güiñas incluidas en el estudio
                fueron asesinadas por granjeros.
            </p>
            <p>
                Durante este mismo estudio se observó que los machos tenían
                territorios exclusivos para cada individuo. Las hembras mostraron ser
                más sedentarias a diferencia de los machos que exploraban su
                territorio lo que los hacía más expuesto a encontrarse con el hombre y
                sus animales domésticos.
            </p>
            <p>
                Los perros y gatos compiten con su alimento y también los convierte en
                posibles presas de estos animales. La transmisión de enfermedades como
                el parvovirus, la inmunodeficiencia y la leucemia felina.
            </p>
            <p>
                La cobertura vegetal es un es importante para la guiña porque le
                permite acechar a sus presas, protegerse de la caza y reproducirse de
                forma segura.
            </p>
            <p>
                Las hembras, que tienen un período de gestación de 72 a 78 dúas,
                tienen sus crías en nidos que crean en árboles o en tupidos arbustos como el
                colihue (bambú nativo).
            </p>

            <h3 class="ma-4">Enlaces a las fuentes: </h3>

            <a href="https://snifa.sma.gob.cl/General/DescargarInformeSeguimiento/109300">
                Informe final del estudio Poblacional de guiña (lopardus guigna) en
                Altos de Cantillana y área de influencia de Minera FLorida Ltda.
            </a>

            <a href="https://www.sciencedirect.com/science/article/abs/pii/S1616504714000408">
                Activity patterns of the vulnerable guiña (Leopardus guigna) and it’s
                main prey in the valdivian rainforest of southern Chile.
            </a>

            <a href="https://publicaciones.mnhn.gob.cl/668/articles-64480_archivo_01.pdf">
                Uso del hábitat, actividad y dieta de la guiña en el Parque Nacional
                Laguna San Rafael.
            </a>

            <a href="https://www.nationalgeographicla.com/animales/2020/05/misterioso-gato-guina-hito-photo-ark">
                Conoce a la güiña, un 'gato misterioso' en peligro de extinción. National Geographic.
            </a>

            <a href="https://academic.oup.com/jmammal/article/83/2/608/2373376">
                Natural history and landscape-use of gignas (oncifelis guigna) on
                Isla Grande de Chiloé, Chile.
            </a>
        </v-row>
    </v-container>
        <div class="share-network-list">
      <ShareNetwork
        v-for="network in networks"
        :network="network.network"
        :key="network.network"
        :style="{ backgroundColor: network.color }"
        :url="sharing.url"
        :title="sharing.title"
        :description="sharing.description"
        :quote="sharing.quote"
        :hashtags="sharing.hashtags"
        :twitterUser="sharing.twitterUser"
      >
        <i :class="network.icon"></i>
        <span>{{ network.name }}</span>
      </ShareNetwork>
    </div> 
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
export default {
    name: "Guina",
    components: {
        Menu,
    },
    metaInfo() {
    return {
      title: "Mamíferos de Chile: La Güiña es el felino más pequeño de América",

      meta: [
        // Twitter Card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:title",
          content: "Mamíferos de Chile: La Güiña es el felino más pequeño de América",
        },
        {
          name: "twitter:description",
          content:
            " ",
        },
        // image must be an absolute path
        {
          name: "twitter:image",
          content:
            " ",
        },
        // Facebook OpenGraph
        {
          property: "og:title",
          content: "Mamíferos de Chile: La Güiña es el felino más pequeño de América",
        },
        { property: "og:site_name", content: "Efecto Mariposa" },
        { property: "og:type", content: "website" },
        {
          property: "og:image",
          content:
            "",
        },
        {
          property: "og:description",
          content:
            "",
        },
      ],
    };
  },

  data() {
    return {
      sharing: {
        url: "https://efectomariposa.org/guina",
        title: "Mamíferos de Chile: La Güiña es el felino más pequeño de América",
        description:
          "",
        quote:
          "Mamíferos de Chile: La Güiña es el felino más pequeño de América",
        twitterUser: "OrgMariposa",
      },
      networks: [
        {
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
.fecha {
    text-align: center;
}
.v-application a {
    color: #3f3f42;
    margin: 4px;
}

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
        padding: 2rem 9rem 2.5rem 9rem;
        text-align: justify;
    }
}

p.foto_texto {
    font-size: 0.8rem;
    padding-top: 0rem;
    padding-left: 20%;
    padding-bottom: 0;
}

hr {
    background-color: gray;
    height: 2px;
    margin-left: 9rem;
    margin-right: 9.5rem;
    margin-top: 3rem;
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
    color: #FFFFFF;
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
