<template>
  <div>
    <Menu />
    <v-container>
      <title>
        Reptiles de Chile: Lagartija Tenue (Liolaemus tenuis) es muy territorial
      </title>
      <v-row class="justify-center">
        <v-col xs="12" sm="12" md="12" lg="12" xl="12">
          <h1 class="titulo">Lagartija Tenue (Liolaemus tenuis)</h1>
          <p class="fecha">24 de febrero 2022</p>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/45847390/medium.jpg"
          max-height="400"
          max-width="600"
          class="fotonota"
          alt="Lagartija Tenue (Liolaemus tenuis)"
        ></v-img>
      </v-row>
      <v-row>
        <p class="foto_texto"></p>
      </v-row>
      <hr class="mb-5" />
      <v-row class="texto">
        <p>
          Vive en bosques, áreas con matorrales y sobre grandes rocas, también
          ocupa parques urbanos, trepa por cercos y muros construidos por el
          hombre. Durante la noche y los meses fríos se refugia en orificios de
          árboles, bajo piedras o construcciones. Esta especie endémica se
          desarrolla desde Illapel y Pichidangui en la región de Coquimbo hasta
          Puerto Montt en la región de Los Lagos, abarcando horizontalmente
          desde los 0 hasta los 1800 metros sobre el nivel del mar. Se alimenta
          de insectos como coleópteros y dípteros.
        </p>

        <p>
          Los machos son muy territoriales. El árbol es parte clave del
          territorio que marcan como propio porque el control sobre uno de ellos
          está asociado a la posesión de las hembras que lo ocupan. La
          diversidad de hembras con las que puede reproducirse depende del
          diámetro del árbol que consiga controlar.
        </p>

        <p>
          La belicosidad de los machos tarda más y es menos intensa cuando tiene
          un parentesco con su rival. Este comportamiento es posible gracias a
          la capacidad que tiene de reconocer a sus parientes, un discernimiento
          que puede mantener incluso transcurridos hasta veinte días sin
          interactuar con su familiar.
        </p>

        <p>
          Su reproducción también es aguerrida. Se acerca rápidamente arqueando
          el lomo, muerde el cuello y al zona escapular para inmovilizarla y la
          traslada aproximadamente 10 centímetros. Se monta y realiza la cópula.
          Cuando ha concluido la suelta y ella se aleja a una distancia de un
          metro mientras el macho se mantiene en el lugar donde se efectuó
          el coito.
        </p>

        <p>
          La hembra posteriormente deposita sus huevos, generalmente son 6, en
          sitios protegidos y cálidos muchas veces hacen hoyos para colocarlos.
        </p>
        <p>
          Actualmente está en la categoría de preocupación menor en la
          Clasificación de Especies del Ministerio del Medio Ambiente de Chile.
        </p>
      </v-row>
      <h3 class="mb-3 fuente">Enlaces a fuentes:</h3>

      <p class="fuente">
        <a href="https://link.springer.com/article/10.1007/BF00293241">
          Polygyny and agonistic behavior in the tree-dwelling lizard Liolaemus
          tenuis (Iguanidae) María Manzur y Eduardo Fuentes.
        </a>
      </p>
      <p class="fuente">
        <a
          href="https://www.researchgate.net/publication/227532460_Interactions_between_Males_of_the_Lizard_Liolaemus_tenuis_Roles_of_Familiarity_and_Memory"
        >
          Interactions between Males of the Lizard Liolaemus tenuis: Roles of
          Familiarity and Memory Rodrigo Trigosso‐Venario, Antonieta Labra y
          Hermann M. Niemeyer.
        </a>
      </p>
      <p class="fuente">
        <a
          href="https://fundacionphilippi.cl/wp-content/uploads/2018/10/gui-a-de-campo-reptiles-del-centro-sur-de-chile.pdf"
        >
          Reptiles del Centro Sur de Chile de Diego Demangel.
        </a>
      </p>
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
  name: "LagartijaTenue",
  components: {
    Menu,
  },
  metaInfo() {
    return {
      title: "Reptiles de Chile: Lagartija Tenue (Liolaemus tenuis)",

      meta: [
        // Twitter Card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:title",
          content: "Reptiles de Chile: Lagartija Tenue (Liolaemus tenuis)",
        },
        {
          name: "twitter:description",
          content:
            "",
        },
        // image must be an absolute path
        {
          name: "twitter:image",
          content:
            "",
        },
        // Facebook OpenGraph
        {
          property: "og:title",
          content: "Reptiles de Chile: Lagartija Tenue (Liolaemus tenuis)",
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
        url: "https://efectomariposa.org/lagartijatenue",
        title: "Reptiles de Chile: Lagartija Tenue (Liolaemus tenuis) es muy territorial",
        description:
          "",
        quote:
          "Reptiles de Chile: Lagartija Tenue (Liolaemus tenuis) es muy territorial",
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

.fecha {
  text-align: center;
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

.fuente {
  margin-left: 9rem;
  text-align: justify;
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
