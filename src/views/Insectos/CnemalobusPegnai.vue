<template>
  <div>
    <Menu />
    <v-container>
      <title>Insectos de Chile: Cnemalobus pegnai</title>
      <v-row class="justify-center">
        <v-col xs="12" sm="12" md="12" lg="12" xl="12">
          <h1 class="titulo">
            Cnemalobus pegnai
          </h1>
          <p class="fecha">18 de febrero 2022</p>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-img src="" max-height="400" max-width="800" class="fotonota"></v-img>
      </v-row>

      <hr class="mb-5" />
      <v-row class="texto">
        <p>
          Cnemalobus pegnai es una especie endémica que se encuentra en peligro
          crítico de extinción, sin embargo, es poco el conocimiento que se tiene
          de su comportamiento y cantidad de población. Incluso no existe un
          nombre popular para este bello insecto.
        </p>

        <p>
          Vive en el bosque El Ñague que se ubica en el litoral de la costa de
          Los Vilos en la IV región y está formado principalmente por el Jaral
          costero, dominado por plantas suculentas, también hay arbustos siempre
          verdes y cactus como el amancay, cacho de cabra, copao y sandillón. De
          este espacio solo habita 4 kilómetros cuadrados.
        </p>

        <p>
          Al igual que otras especies de Cnemalobus, este insecto debería ser
          carnívoro, tanto en estado adulto como larvario. Se han descrito otras
          especies del género, alimentándose de arañas Mygalomorphas y de
          insectos como baratas.
        </p>

        <p>
          La proximidad de este bosque con la carretera Norte y su cercanía con
          lugares poblados facilita el contacto con humanos. Actividades como la
          extracción de leña, la practica de deportes y el turismo recreativo son
          amenazas a la continuidad de la especie.
        </p>

        <p>
          Incluso coleccionistas, atraídos por su rareza y colorido, atrapan
          selectivamente al onemalobus pegnai cuando es un adulto capaz de
          reproducirse para sumarlo a sus colecciones privadas.
        </p>
      </v-row>
      <h3 class="mb-3 fuente">Fuentes:</h3>

      <p class="fuente">
        <a
          href="https://clasificacionespecies.mma.gob.cl/wp-content/uploads/2019/10/Cnemalobus_pegnai_11RCE_04_PAC.pdf"
        >
          Onemalobus pegna. Clasificación de especies Ministerio del Medio
          Ambiente de Chile.
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
  name: "CnemalobusPegnai",
  components: {
    Menu,
  },
  metaInfo() {
    return {
      title: "Insectos de Chile: Cnemalobus pegnai",

      meta: [
        // Twitter Card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:title",
          content: "Insectos de Chile: Cnemalobus pegnai",
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
          content: "Insectos de Chile: Cnemalobus pegnai",
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
        url: "https://efectomariposa.org/cnemalobuspegnai",
        title: "Insectos de Chile: Cnemalobus pegnai",
        description:
          "",
        quote:
          "Insectos de Chile: Cnemalobus pegnai",
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
