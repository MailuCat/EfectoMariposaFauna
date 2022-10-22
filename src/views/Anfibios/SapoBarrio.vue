<template>
  <div>
    <Menu />
    <v-container>
      <title>
        Anfibios de Chile: Sapo de pecho espinoso de Barrio (Alsodes barroi)
      </title>
      <v-row class="justify-center">
        <v-col xs="12" sm="12" md="12" lg="12" xl="12">
          <h1 class="titulo">
            Sapo de pecho espinoso de Barrio (Alsodes barroi)
          </h1>
          <p class="fecha">20 de febrero 2022</p>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-img
          :src="require('@/assets/alsodes_barroi.jpg')"
          alt="Sapo de pecho espinoso"
        ></v-img>
      </v-row>
      <v-row>
        <p class="foto_texto"></p>
      </v-row>
      <hr class="mb-5" />
      <v-row class="texto">
        <p>
          Las araucarias y los robles de la cordillera de Nahuelbuta son el
          paisaje predominante que envuelve al sapo de barrio. Endémico y en
          peligro de extinción se le puede encontrar bajo piedras y árboles
          caídos cerca de arroyos. Necesita estos riachuelos para depositar sus
          huevos que durante los meses de primavera y verano se transforman en
          larvas que se diseminan por el agua hasta encontrar espacios en los
          que alimentarse.
        </p>

        <p>
          Específicamente vive en la cordillera de Nahuelbuta, entre el sector
          de Cabreras en la comuna de Arauco, Región del Biobío y el sector de
          Villa las Araucarias en la comuna de Carahue, Región de la Araucanía.
          Entre los 500 y 1500 msnm.
        </p>

        <p>
          Su hábitat está ubicado en el Parque Nacional Nahuelbuta y
          recientemente se sabe que también incluye predios de las forestales
          Mininco y Arauco. Sorprendentemente, se detectaron sapos de esta
          especie viviendo a menos de 20 metros de una plantación de Pinos
          radiata y también, dentro de una plantación de Eucaliptus, hasta 250
          metros de distancia de una fuente de agua.
        </p>

        <p>
          Investigar este comportamiento es indispensable para rescatar a esta
          especie de la inminente extinción. La información existente también es
          insuficiente en otros aspectos. No se tiene certeza de cuál es su
          población total, ni sus hábitos alimenticios, tampoco se sabe cómo y
          cuando se reproducen.
        </p>

        <p>
          Las actividades con más impacto negativo en la vida del sapo de barrio
          actualmente son la industria maderera, la ganadería y los cada vez más
          frecuentes incendios forestales.
        </p>
      </v-row>
      <h3 class="mb-3 fuente">Enlace a fuentes:</h3>

      <p class="fuente">
        <a
          href="https://www.biodiversnathist.com/index.php/bnh/article/view/51"
        >
          Extension of the distribution range and new antecedents of the habitat
          of two frog species of the genus <em>Alsodes</em> Bell, 1843
          (Amphibia, Anura, Alsodidae) in the Nahuelbuta Range, southern Chile.
        </a>
      </p>
      <p class="fuente">
        <a href="https://www.iucnredlist.org/species/928/79808332#population">
          Cabreria Spiny-chest Frog. Red List IUCN.
        </a>
      </p>
      <p class="fuente">
        <a
          href="https://clasificacionespecies.mma.gob.cl/wp-content/uploads/2019/10/Alsodes_barrioi.pdf"
        >
          Sapo de pecho espinoso de Barrio. Clasificación de especies del
          Ministerio del Medio Ambiente.
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
  name: "Guina",
  components: {
    Menu,
  },
  
metaInfo() {
    return {
      title: "Anfibios de Chile: Sapo de pecho espinoso de Barrio (Alsodes barroi)",

      meta: [
        // Twitter Card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:title",
          content: "Sapo de pecho espinoso de Barrio (Alsodes barroi).",
        },
        {
          name: "twitter:description",
          content:
            "Conocer el comportamiento de este anfibio chileno es indispensable para rescatarlo de su inminente extinción.",
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
          content: "Sapo de pecho espinoso de Barrio (Alsodes barroi).",
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
            "Conocer el comportamiento de este anfibio chileno es indispensable para rescatarlo de su inminente extinción",
        },
      ],
    };
  },

  data() {
    return {
      sharing: {
        url: "https://efectomariposa.org/sapobarrio",
        title: "Sapo de pecho espinoso de Barrio (Alsodes barroi).",
        description:
          "Conocer el comportamiento de este anfibio chileno es indispensable para rescatarlo de su inminente extinción.",
        quote:
          "Conocer el comportamiento de este anfibio chileno es indispensable para rescatarlo de su inminente extinción",
        twitterUser: "",
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
