<template>
  <div>
    <Menu />
    <v-container>
      <title>
        Anfibios de Chile: Sapo hermoso (Telmatobufo venustus)
      </title>
      <v-row class="justify-center">
        <v-col xs="12" sm="12" md="12" lg="12" xl="12">
          <h1>
            Sapo hermoso (Telmatobufo venustus)
          </h1>
          <p>16 de marzo 2022</p>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-img
          src="https://efectomariposa.org/cpg/albums/userpics/10001/2/normal_sapo_hermoso1.jpeg"
          max-height="400"
          max-width="800"
          class="fotonota"
          alt=" Sapo hermoso (Telmatobufo venustus)"
        ></v-img>
      </v-row>
      <v-row>
        <p class="foto_texto">
          Foto: David C. Blackburn, algunos derechos reservados
        </p>
      </v-row>
      <hr class="mb-5" />
      <v-row class="texto">
        <p>
          El Sapo Hermoso o también llamado Falso Sapo de Montaña habita los
          bosques templados de Nothofagus, una combinación de roble, avellano,
          radal y sotobosque de canelo, chilco y quila, de la región del Bío-Bío
          en el sur de Chile.
        </p>
        <p>
          Es un animal solitario con hábitos nocturnos que está en peligro de
          extinción. La única población estable conocida se encuentra en la
          Reserva Nacional Altos de Lircay. Anteriormente, en el año 1981 se
          encontró un renacuajo en Ralco, pero actualmente ese lugar está
          cubierto por las aguas de una represa.
        </p>
        <p>
          Es un carnívoro generalista que ocupa pequeñas terrazas naturales en
          la rivera de los cauces de ríos montañosos, se esconde entre sus
          cavidades cubiertas por musgos. También se acomoda entre la quila,
          canelos u otra vegetación ribereña. Los juveniles se mantienen ocultos
          bajo rocas o grandes troncos a orillas de los ríos.
        </p>
        <p>
          El apareamiento se produce al interior del agua en ríos de montaña.
          Las larvas han sido vistas durante el mes de enero. Las de menor
          tamaño se ubican en pequeños remansos al borde del cauce
          principal y las más grandes se encuentran en zonas de aguas
          correntosas pegadas a las piedras gracias a una boca en forma de
          ventosa que les permite adherirse a con fuerza a las rocas para no ser
          arrastradas por el fuerte caudal. Esta adaptación es única
          entre los anuros de Chile.
        </p>

        <p>
          Durante los censos en la Reserva Nacional Altos de Lircay se encontró
          adultos en dos arroyos, pero únicamente en uno había renacuajos. Se
          sospecha que las truchas no endémicas que habitan ese lugar los estén
          depredando las crías. Esta es una de las amenazas, también lo son los
          sedimentos pesados generados por el hombre y los incendios forestales.
        </p>
      
      <h3 class="enlaces_bibliografia">Enlace a fuentes</h3>

      <p class="enlaces_bibliografia">
        <a href="https://link.springer.com/article/10.1186/s40693-021-00100-8">
          Un nuevo registro geográfico del venustus de Telmatobufo (Amphibia:
          Calyptocephalellidae) en peligro de extinción en la Región del Biobío,
          Chile.
        </a>
      </p>
      <p class="enlaces_bibliografia">
        <a
          href="https://www.researchgate.net/publication/257023415_A_review_of_the_Chile_Mountains_False_Toad_Telmatobufo_venustus_Amphibia_Anura_Calyptocephalellidae_with_comments_on_its_conservation_status"
        >
          A review of the Chile mountains false toad, Telmatobufo venustus
          (Amphibia: Anura: Calyptocephalellidae), with comments on its
          conservation status. Herpetological Review 42(4):514-519.
        </a>
      </p>
      <p class="enlaces_bibliografia">
        <a
          href="https://www.researchgate.net/publication/342926423_Guia-Anfibios-de-los-bosques-de-la-zona-centro-sur-y-patagonia-de-Chile"
        >
          Guía Anfibios de los bosques de la zona centro sur y Patagonia de
          Chile.
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
  name: "SapoHermoso",
  components: {
    Menu,
  },

  metaInfo() {
    return {
      title: "Anfibios de Chile: Sapo hermoso (Telmatobufo venustus)",

      meta: [
        // Twitter Card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:title",
          content: "Sapo hermoso (Telmatobufo venustus)",
        },
        {
          name: "twitter:description",
          content:
            "Es un animal solitario con hábitos nocturnos que está en peligro de extinción.",
        },
        // image must be an absolute path
        {
          name: "twitter:image",
          content:
            "https://efectomariposa.org/cpg/albums/userpics/10001/2/normal_sapo_hermoso1.jpeg",
        },
        // Facebook OpenGraph
        {
          property: "og:title",
          content: "Sapo hermoso (Telmatobufo venustus)",
        },
        { property: "og:site_name", content: "Efecto Mariposa" },
        { property: "og:type", content: "website" },
        {
          property: "og:image",
          content:
            "https://efectomariposa.org/cpg/albums/userpics/10001/2/normal_sapo_hermoso1.jpeg",
        },
        {
          property: "og:description",
          content:
            "Es un animal solitario con hábitos nocturnos que está en peligro de extinción.",
        },
      ],
    };
  },

  data() {
    return {
      sharing: {
        url: "https://www.efectomariposa.org/sapohermoso",
        title: "Sapo hermoso (Telmatobufo venustus)",
        description:
          "Es un animal solitario con hábitos nocturnos que está en peligro de extinción.",
        quote:
          "Sapo hermoso es un animal solitario con hábitos nocturnos que está en peligro de extinción.",
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
