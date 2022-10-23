<template>
  <div>
    <Menu />
    <v-container>
      <title>Reptiles de Chile: Lagartija de Lolol (Liolaemus confusus)</title>
      <v-row class="justify-center">
        <v-col xs="12" sm="12" md="12" lg="12" xl="12">
          <h1>Lagartija de Lolol (Liolaemus confusus)</h1>
          <p>25 de febrero 2022</p>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/100852116/original.jpg"
          max-height="400"
          max-width="600"
          class="foto de Liolaemus confusus"
          alt="Lagartija de Lolol (Liolaemus confusus)"
        ></v-img>
      </v-row>
      <v-row>
        <p class="foto_texto">Foto de cmpd, algunos derechos reservados</p>
      </v-row>
      <hr class="mb-5" />
      <v-row class="texto">
        <p>
          Esta lagartija en peligro crítico de extinción vive restringido al
          cerro el Roble y el estero Lolol en la cordillera de la la Costa de la
          Región de O’Higgins. Es la segunda especie más abundante de este
          lugar.
        </p>
        <p>
          Le encanta exponerse al sol instalada en rocas o más frecuentemente en
          pircas de diferentes ambientes como áreas con suelo arcilloso y
          arbustos sobre los 400 metros sobre el nivel del mar. La zona más
          estimulante para su desarrollo es el bosque nativo de boldos, litre,
          quillay y lingüe.
        </p>
        <p>
          La industria forestal es una de sus grandes amenazas debido a que
          deteriora su entorno natural, sin embargo, se han encontrado pequeñas
          poblaciones en los alrededores de plantaciones de eucaliptos y
          prácticamente ninguna en las de pino.
        </p>
        <p>
          Aunque esta información es muy importante para fomentar la procreación
          de esta lagartija de Chile, no se conoce su comportamiento
          reproductivo.
        </p>
        <p>
          Lo que si se sabe es que los incendios forestales con su estela de
          muerte y destrucción de la flora, son un estímulo a la desaparición de
          la lagartija de Lolol. También los conejos y otras especies foráneas
          destruyen la vegetación nativa.
        </p>
        <p>
          Generar un mayor conocimiento sobre su comportamiento es muy necesario
          para planificar medidas que permitan conservar a esta especie que va
          camino a la extinción.
        </p>
 
      <h3 class="enlaces_bibliografia">Enlace a fuentes:</h3>

      <p class="enlaces_bibliografia">
        <a
          href="https://www.researchgate.net/publication/332329629_INFORME_FINAL_ESTUDIO_DE_LA_LAGARTIJA_LIOLAEMUS_CONFUSUS_EN_LA_SUBCUENCA_ESTERO_LOLOL/citation/download"
        >
          Imforme final estudio de la lagartija liolaemus confuses en la
          subsecuencia estero Lolol.
        </a>
      </p>
      <p class="enlaces_bibliografia">
        <a
          href="https://fundacionphilippi.cl/wp-content/uploads/2018/10/gui-a-de-campo-reptiles-del-centro-sur-de-chile.pdf"
        >
          Reptiles del Centro Sur de Chile de Diego Demangel.
        </a>
        <a
          href="https://www.iucnredlist.org/species/56052207/56052209#population"
          >Liolaemus confuses en el Libro rojo de las especies de IUCN</a
        >
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
  name: "LagartijaLolol",
  components: {
    Menu,
  },
 metaInfo() {
    return {
      title: "Reptiles de Chile: Lagartija de Lolol (Liolaemus confusus)",

      meta: [
        // Twitter Card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:title",
          content: "Reptiles de Chile: Lagartija de Lolol (Liolaemus confusus)",
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
          content: "Reptiles de Chile: Lagartija de Lolol (Liolaemus confusus)",
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
        url: "https://efectomariposa.org/lagartijalolol",
        title: "Reptiles de Chile: Lagartija de Lolol (Liolaemus confusus)",
        description:
          "",
        quote:
          "Reptiles de Chile: Lagartija de Lolol (Liolaemus confusus)",
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

