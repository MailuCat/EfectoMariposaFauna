<template>
  <div>
    <Menu />
    <v-container>
      <title>
        Sierra del Orocoipo (Callisphyris ficheti) se encuentra en peligro
        crítico de extinción
      </title>
      <v-row class="justify-center">
        <v-col xs="12" sm="12" md="12" lg="12" xl="12">
          <h1 class="titulo">
            Sierra del Orocoipo(Callisphyris ficheti)
          </h1>
          <p class="fecha">17 de febrero 2022</p>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/179714875/original.jpeg"
          max-height="400"
          max-width="800"
          class="fotonota"
          alt=" Sierra del Orocoipo(Callisphyris ficheti)"
        ></v-img>
      </v-row>
      <v-row>
        <p class="foto_texto">
          <a href="https://www.inaturalist.org/observations/106916544">
            Foto: jzavalab, algunos derechos reservados.
          </a>
        </p>
      </v-row>
      <hr class="mb-5" />
      <v-row class="texto">
        <p>
          Las hembras deposita sus huevos en la parte más gruesa del Orocoipo
          para que cuando emerjan las larvas puedan alimentarse de este arbusto.
          Este es el motivo por el cual este insecto endémico es llamado sierra
          de Orocoipo. Los bosques nativos donde crece esta planta, en las
          riveras del estero Mantagua en Valparaíso, son su hogar.
        </p>

        <p>
          Las mañanas soleadas, entre las 9 y 11, es su intervalo predilecto
          para volar. Su hábitat es muy pequeño, menos de 4 kilómetros cuadrados
          del humedal ubicado en la desembocadura del estero Mantagua. La orilla
          oeste es seca, con dunas y alta radiación, en cambio, la orilla este
          tiene un suelo arenoso dando vida a peumos y otros árboles que brindan
          sombra a su arbusto preferido, el orocoipo.
        </p>

        <p>
          En este entorno se pueden distinguir a las hembras porque su tamaño es
          mayor y sus antenas son más cortas que la de los machos. Desde su
          nacimiento, tienen la capacidad de atraerlos secretando feromonas
          sexuales y ellos, por su parte, realizan un ritual de cortejo antes de
          la cópula.
        </p>

        <p>
          La Sierra de Orocoipo se encuentra en peligro crítico de extinción,
          sin embargo, hay aspectos desconocidos como cuál es la alimentación de
          los adultos y la cantidad de individuos vivos.
        </p>

        <p>
          La pérdida de su hábitat es su principal amenaza. El lugar es
          frecuentado por motociclistas que destruyen la flora, generan ruido y
          dejan residuos de combustible. Además, marcan senderos y caminos
          abiertos para facilitar el ingreso de la contaminación y el paso de
          especies invasoras capaces de amplificar el daño al humedal.
        </p>

        <p>
          Los complejos inmobiliarios interesados en instalar lugares turísticos
          y de viviendas de agrado añaden la potencial destrucción del humedal.
          Incluso Codelco impacta este entorno con un ferrocarril que transita 6
          veces al día transportando mineral.
        </p>
      </v-row>
      <h3 class="mb-3 fuente">Fuentes:</h3>

      <p class="fuente">
        <a
          href="https://clasificacionespecies.mma.gob.cl/wp-content/uploads/2019/10/Callisphyris_ficheti_11RCE_03_PAC.pdf"
        >
          Sierra del Orocoipo(Callisphyris ficheti). Clasificación de especies
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
  name: "SierraOrocoipo",
  components: {
    Menu,
  },
  metaInfo() {
    return {
      title:
        " Sierra del Orocoipo (Callisphyris ficheti) se encuentra en peligro crítico de extinción",

      meta: [
        // Twitter Card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:title",
          content:
            " Sierra del Orocoipo (Callisphyris ficheti) se encuentra en peligro crítico de extinción",
        },
        {
          name: "twitter:description",
          content: " ",
        },
        // image must be an absolute path
        {
          name: "twitter:image",
          content: " ",
        },
        // Facebook OpenGraph
        {
          property: "og:title",
          content:
            " Sierra del Orocoipo (Callisphyris ficheti) se encuentra en peligro crítico de extinción",
        },
        { property: "og:site_name", content: "Efecto Mariposa" },
        { property: "og:type", content: "website" },
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
        url: "https://efectomariposa.org/sierradeorocoipo",
        title:
          " Sierra del Orocoipo (Callisphyris ficheti) se encuentra en peligro crítico de extinción",
        description: "",
        quote:
          "Sierra del Orocoipo (Callisphyris ficheti) se encuentra en peligro crítico de extinción",
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
