<template>
  <div>
    <Menu />
    <title>Mamíferos de Chile: Gato Andino(Leopardus jacobita)</title>
    <v-container>
      <v-row class="justify-center">
        <v-col xs="12" sm="12" md="12" lg="12" xl="12">
          <h1>Gato Andino(Leopardus jacobita)</h1>
          <p>5 de abril 2022</p>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-img
          src="https://efectomariposa.org/cpg/albums/userpics/10001/2/normal_gato_andino1.jpeg"
          max-height="400"
          max-width="800"
          class="fotonota"
          alt="Gato Andino(Leopardus jacobita)"
        ></v-img>
      </v-row>
      <v-row class="justify-start">
        <p class="justify-start foto_texto">
          Andres Puiggros, algunos derechos reservados (CC-BY-NC)
        </p>
      </v-row>
      <hr class="mb-5" />
      <v-row class="texto">
        <p>
          El gato andino en Chile ocupa las zonas altiplánicas de las Regiones
          de Arica, Parinacota y Antofagasta, se desplaza por terrenos rocosos y
          escarpados, en áreas áridas, matorrales y estepas vinculados a
          paisajes de bofedal y vegas andinas. Las condiciones climáticas son
          extremas con temperaturas muy bajas, grandes variaciones térmicas
          diarias y pocas precipitaciones
        </p>
        <p>
          Son varias las amenazas que existen sobre esta especie considerada en
          Peligro tanto en Chile como en la Unión Internacional para la
          Conservación de la Naturaleza. La pérdida de su hábitat, la
          disminución de sus presas producto de la deforestación, la caza
          ilegal, la extracción de agua para actividades mineras, figuran entre
          ellas.
        </p>
        <p>
          Su espacio es similar al territorio habitado por sus principales
          presas, la chinchilla de cola corta y la vizcacha, que suman el 44 % de
          su dieta. Su alimento está basado en roedores pequeños y medianos, en
          menor medida degusta aves, huevos y reptiles.
        </p>
        <p>
          Tranquilo y tolerante con la cercanía de observadores humanos,
          comparte territorio con el gato colocolo. Sin embargo, al encontrarse
          frente al zorro chilla (Lycalopex griseus) reacciona agresivamente
          erizando los pelos del lomo.
        </p>
        <p>
          El gato andino se ha dejado ver mayoritariamente durante el día, sin
          embargo, el radio rastreo reporta que su vida es nocturna, el 37,6 % de
          su tiempo está activo por la noche, el 34,4 % durante el crepúsculo y
          solo el 28 % durante el día. Su hogar abarca 65.5 kilómetros cuadrados.
        </p>
        <p>
          Se cree que el gato andino es una especie solitaria, pero se puede ver
          con parejas durante la temporada de apareamiento y después con sus
          crías. En Chile Prácticamente no existe información acerca de su ciclo
          reproductivo e historia de vida. Los nacimientos podrían darse entre
          octubre y abril, dando a luz alrededor de 2 crías por camada.
        </p>

        <h3 class="enlaces_bibliografia">Enlaces a las fuentes</h3>
        <p class="enlaces_bibliografia">
          <a
            href="https://www.researchgate.net/publication/264600726_Revision_actualizada_sobre_la_biodiversidad_y_conservacion_de_los_felinos_silvestres_de_Chile"
            >Revisión actualizada sobre la biodiversidad y conservasión
            actualizada sobre la biodiversidad y conservación de los felinos
            silvestres de Chile.</a
          >
        </p>
        <p class="enlaces_bibliografia">
          <a
            href="https://snifa.sma.gob.cl/General/DescargarInformeSeguimiento/227878"
          >
            Informe anual:“Estudio Biológico de Felinos Altoandinos”
          </a>
        </p>
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
  name: "Gatoandino",
  components: {
    Menu,
  },
  metaInfo() {
    return {
      title: "Mamíferos de Chile: Gato Andino(Leopardus jacobita)",

      meta: [
        // Twitter Card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:title",
          content: "Mamíferos de Chile: Gato Andino(Leopardus jacobita)",
        },
        {
          name: "twitter:description",
          content: " ",
        },
        // image must be an absolute path
        {
          name: "twitter:image",
          content: "https://efectomariposa.org/cpg/albums/userpics/10001/2/normal_gato_andino1.jpeg",
        },
        // Facebook OpenGraph
        {
          property: "og:title",
          content: "Mamíferos de Chile: Gato Andino(Leopardus jacobita)",
        },
        { property: "og:site_name", content: "Efecto Mariposa" },
        { property: "og:type", content: "website" },
        {
          property: "og:image",
          content: "https://efectomariposa.org/cpg/albums/userpics/10001/2/normal_gato_andino1.jpeg",
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
        url: "http://www.efectomariposa.org/gatoandino",
        title: "Mamíferos de Chile: Gato Andino(Leopardus jacobita)",
        description: "",
        quote: "Mamíferos de Chile: Gato Andino(Leopardus jacobita)",
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

