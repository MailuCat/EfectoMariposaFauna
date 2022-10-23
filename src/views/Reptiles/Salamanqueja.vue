<template>
  <div>
    <Menu />
    <title>
      Reptiles de Chile: Salamanqueja del norte chico (Garthia gaudichaudii)
    </title>
    <v-container>
      <v-row class="justify-center">
        <v-col xs="12" sm="12" md="12" lg="12" xl="12">
          <h1>
            Salamanqueja del norte chico (Garthia gaudichaudii)
          </h1>
          <p>22 de febrero 2022</p>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/157561208/large.jpeg"
          max-height="400"
          max-width="800"
          class="fotonota"
          alt="Salamanqueja del norte chico (Garthia gaudichaudii)"
        ></v-img>
      </v-row>
      <hr class="mb-5" />
      <v-row class="texto">
        <p>
          La Salamanqueja es un reptil de hábitos nocturnos que durante el día
          se refugia del sol bajo plantas y piedras. Prefiere las zonas costeras
          y rocosas con terrenos arenosos y pedregosos donde crecen arbustos y
          cactus. En este entorno encuentra su principal fuente de alimento: los
          insectos.
        </p>
        <p>
          Esta especie endémica de la zona norte y centro de Chile habita desde
          el sur de Antofagasta hasta La Ballena, en la región de Valparaíso,
          entre los 0 y 800 metros sobre el nivel del mar.
        </p>
        <p>
          Procrean a través de huevos, las hembras los depositan bajo piedras
          entre los meses de noviembre y diciembre y en ocasiones varias madres
          ocupan el mismo lugar para incubar. Los recién nacidos son vulnerables
          a uno de los principales depredadores de la especia: las tarántulas.
          (arañas migalomorfas). Actualmente ocupa un espacio de 520 metros
          cuadrados, por lo cual está en la categoría de preocupación menor
          respecto a una posible extinción. .
        </p>
        <p>
          La relación social entre esta salamanqueja ha sido poco estudiada. Se
          sabe que los machos al encontrarse arquean el cuerpo y elevan la cola.
          Las especies del Infraorden Gekkota, a la que pertenece la
          Salamanqueja del Norte Chico, se caracterizan por emitir sonidos para
          comunicarse con sus pares. El zoólogo Roberto Donoso, en el año 1965,
          observó que la especie emite múltiples cri cri similares a los de un
          grillo, potencialmente puede corresponder a los clics que otras
          especies Gekkota usan en contextos sociales como por ejemplo en el
          cortejo. Sin embargo, actualmente no ha habido un estudio sistemático
          que demuestre la existencia y los alcances de esta vocalización.
        </p>

        <h3 class="enlaces_bibliografia">Enlaces a las fuentes</h3>
        <p class="enlaces_bibliografia">
          <a
            href="https://www.duo.uio.no/bitstream/handle/10852/62740/2/Reyes-OlivaresLabra2017.pdf"
          >
            Emisión de sonidos en lagartos nativos de Chile: el estado del arte
            de Claudio Reyes y Antonieta Labra.
          </a>
        </p>
        <p class="enlaces_bibliografia">
          <a
            href="https://mma.gob.cl/wp-content/uploads/2018/08/Guia-biodiversidad-docentes_web.pdf"
          >
            Guía de la diversidad docente. Ministerio de Medio Ambiente.
          </a>
        </p>
        <p class="enlaces_bibliografia">
          <a
            href="https://publicaciones.mnhn.gob.cl/668/articles-71062_archivo_01.pdf"
          >
            El género Garthia Donoso-Barros, Vanzolini y los geckos
            Gimnodactilidos afines.
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
  name: "Salamanqueja",
  components: {
    Menu,
  },
  metaInfo() {
    return {
      title: "Reptiles de Chile: Salamanqueja del norte chico (Garthia gaudichaudii)",

      meta: [
        // Twitter Card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:title",
          content: "Reptiles de Chile: Salamanqueja del norte chico (Garthia gaudichaudii)",
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
          content: "Reptiles de Chile: Salamanqueja del norte chico (Garthia gaudichaudii)",
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
        url: "https://efectomariposa.org/salamanqueja",
        title: "Reptiles de Chile: Salamanqueja del norte chico (Garthia gaudichaudii)",
        description:
          "",
        quote:
          "Reptiles de Chile: Salamanqueja del norte chico (Garthia gaudichaudii)",
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

