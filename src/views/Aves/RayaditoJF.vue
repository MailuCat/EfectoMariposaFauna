<template>
  <div>
    <Menu />
    <v-container>
      <link rel=“canonical” href=“https://efectomariposa.org” />
      <title>
        Aves de Chile: Rayadito Más Afuera (Aphrastura masafuerae) sólo quedan
        menos de 500 ejemplares
      </title>
      <v-row class="justify-center">
        <v-col xs="12" sm="12" md="12" lg="12" xl="12">
          <h1>
            Rayadito Más Afuera (Aphrastura masafuerae)
          </h1>
          <p>15 de febrero 2022</p>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-img
          src="https://efectomariposa.org/cpg/albums/userpics/10001/2/normal_rayadito_mar_afuera1.jpg"
          max-height="400"
          max-width="800"
          class="fotonota"
          alt="Rayadito Más Afuera (Aphrastura masafuerae)"
        ></v-img>
      </v-row>
      <v-row>
        <p class="foto_texto">
          Foto: lukasmekis, algunos derechos reservados
        </p>
      </v-row>
      <hr class="mb-5" />
      <v-row class="texto">
       <p>
          Durante el verano se les puede ver en pareja o grupos familiares en
          los bosques de helechos y canelos de la isla Alejandro Selkirk , único
          lugar del mundo en que habita esta ave endémica del Archipiélago de
          Juan Fernández de Chile.
        </p>
        <p>
          No hay claridad sobre la cantidad exacta de Rayaditos de Más Afuera,
          pero en la mejor estimación son menos de 500 los que viven en una
          extensión de 25,5 kilómetros cuadrados. La especie está en peligro
          crítico de extinción.
        </p>

        <p>
          Un lugar propicio para su existencia debería contar con la presencia
          del canelo Drimys, que siempre está asociado al lugar donde anidan.
          Usan las cavidades tanto de árboles como de rocas escarpadas para
          establecer sus nidos entre fines de noviembre y principios de febrero.
          Para construirlos usan raíces de canelo, helecho Dicksonia externa y
          plumas de petrel.
        </p>
        <p>
          Los adultos alimentan a sus crías con presas de artrópodos,
          especialmente con larvas de mariposas y así, los recién nacidos aparecen entre enero y febrero.
        </p>

        <p>
          Hay extensiones donde los bosques de helechos Dicksonia y Lophosauria
          permanecen intactos, pero un gran parte de la vegetación natural de la
          isla ha sido degradada y fragmentada por pisoteo, fuego y tala de
          árboles.
        </p>
        <p>
          Especies introducidas como las cabras, que son muy abundantes en la
          isla, influyen significativamente en la destrucción de la flora
          nativa.
        </p>
        <p>
          También se cree que los mamíferos depredadores introducidos tienen un
          impacto significativo en la población, como ratas y posiblemente
          ratones que afectan la supervivencia de la cría y los gatos salvajes,
          que amenazan la vida de jóvenes y adultos.
        </p>
      
      <h3 class="enlaces_bibliografia">Enlaces a las fuentes</h3>

      <p class="enlaces_bibliografia">
        <a href="https://www.iucnredlist.org/species/22702156/125419923">
          Rayadito de Más Afuera. Lista Roja de Animales de IUCN.
        </a>
      </p>
      <p class="enlaces_bibliografia">
        <a
          href="https://clasificacionespecies.mma.gob.cl/wp-content/uploads/2020/07/Aphrastura_masafuerae_15RCE_FINAL.pdf"
        >
          Clasificación de especie Rayadito de Más Afuera. Ministerio del Medio
          Ambiente.
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
  name: "RayaditoMasAfuera",
  components: {
    Menu,
  },
  metaInfo() {
    return {
      title:
        "Aves de Chile: Rayadito Más Afuera (Aphrastura masafuerae) sólo quedan menos de 500 ejemplares",

      meta: [
        // Twitter Card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:title",
          content:
            "Aves de Chile: Rayadito Más Afuera (Aphrastura masafuerae) sólo quedan menos de 500 ejemplares",
        },
        {
          name: "twitter:description",
          content: " ",
        },
        // image must be an absolute path
        {
          name: "twitter:image",
          content: "https://efectomariposa.org/cpg/albums/userpics/10001/2/normal_rayadito_mar_afuera1.jpg",
        },
        // Facebook OpenGraph
        {
          property: "og:title",
          content:
            "Aves de Chile: Rayadito Más Afuera (Aphrastura masafuerae) sólo quedan menos de 500 ejemplares",
        },
        { property: "og:site_name", content: "Efecto Mariposa" },
        { property: "og:type", content: "website" },
        {
          property: "og:image",
          content: "https://efectomariposa.org/cpg/albums/userpics/10001/2/normal_rayadito_mar_afuera1.jpg",
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
        url: "https://efectomariposa.org/rayaditimasafuera",
        title:
          "Aves de Chile: Rayadito Más Afuera (Aphrastura masafuerae) sólo quedan menos de 500 ejemplares",
        description: ".",
        quote:
          "Aves de Chile: Rayadito Más Afuera (Aphrastura masafuerae) sólo quedan menos de 500 ejemplares",
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
          network: "pinterest",
          name: "Pinterest",
          icon: "fab fah fa-lg fa-pinterest",
          color: "#bd081c",
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
  width: 90% ;
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

