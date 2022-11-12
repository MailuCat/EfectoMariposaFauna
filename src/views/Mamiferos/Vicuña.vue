<template>
  <div>
    <Menu />
    <v-container>
      <v-row class="justify-center">
        <v-col xs="12" sm="12" md="12" lg="12" xl="12">
          <h1>La Vicuña (Vicugna vicugna)</h1>
          <p>14 de junio 2022</p>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-img
          src="https://efectomariposa.org/cpg/albums/userpics/10001/2/normal_vicuna.jpeg"
          max-height="400"
          max-width="800"
          class="fotonota"
          alt="Vicuña"
        ></v-img>
      </v-row>
      <v-row class="justify-start">
        <p class="justify-start foto_texto">
          (c) Lee E. Harding – algunos derechos reservados (CC BY-NC)
        </p>
      </v-row>
      <hr class="mb-5" />
      <v-row class="texto">
        <p>
          La Vicuña es un camélido sudamericano, reside en la puna y el
          altiplano de Perú, Bolivia, Chile y Argentina, donde se alimenta del
          pasto alto y pequeños arbustos. Adaptado a vivir a gran altura, su
          hogar está ubicado entre los 3000 y 5000 metros sobre el nivel del
          mar. Víctima de siglos de caza indiscriminada para obtener su fina y
          suave lana, la población disminuyó a niveles críticos.
        </p>
        <p>
          Con el objetivo de proteger el ecosistema del altiplano, en 1970 se
          creó el Parque Nacional Lauca. Esto, sumado a otras medidas, logró
          revertir su ocaso y la población de vicuñas comenzó un crecimiento
          permanente, pero registros recientes revelan una merma de 5000
          animales entre el 2008 y 2017. Por esto, actualmente en Chile es
          considerada una especie vulnerable.
        </p>
        <p>
          Se cree que este retroceso se debe a la menor disponibilidad de
          alimento porque en el altiplano la vicuña compite con sus familiares
          camélidos domésticos. A mayor densidad de la población hay menos
          crecimiento.
        </p>
        <p>
          Su sitio predilecto, el bofedal-vega, les entrega un espacio común
          para dormir, permanente agua y pasto de calidad. En verano, que es el
          período con más lluvia en el altiplano, se alimentan temprano en la
          mañana y a la última hora de la tarde. Por otro lado, en la época
          seca, cando escasea el alimento, se desplazan a lugares menos
          beneficiosos debido a la competencia de animales domésticos como la
          llama, alpaca y las cabras
        </p>
        <p>
          Otra consecuencia no deseada de la interacción entre estas especies es
          la transmisión mutua de enfermedades y parásitos. Los ácaros de la
          sarna han afectado a la población de vicuñas.
        </p>
        <h2 class="ma-4">El estrés</h2>
        <p>
          En la cercanía de sus territorios hay faenas de construcción y
          búsqueda de minerales que alteran la organización de su hábitat, ni
          que decir de la caza. Estas situaciones perjudican a las vicuñas
          porque debe consumir más energía por la huida y tiene menos tiempo
          para alimentarse.
        </p>
        <p>
          En la búsqueda de formas sustentables de extracción de lana, se ha
          verificado que el arreo a pie y realizar la esquila en su ambiente
          natural genera menos estrés comparado con el arreo a pie y motorizado.
        </p>
        <p>
          No solamente actividades dirigidas pueden afectar el estado nervioso
          de los mamíferos y evidentemente de la vicuña. Para su bienestar
          también requieren poder desarrollar con normalidad sus conductas como
          especie.
        </p>
        <p>
          La vicuña tiene dos modos de organizarse: la familia y los solteros.
          Las familias son un grupo estable integrado por un macho, tres o
          cuatro hembras y su descendencia. Cuando comen y descansan son los
          momentos en que los machos están más cerca de las hembras.
        </p>
        <p>
          Los cachorros forma clubes muy cohesionados y pueden reunirse con
          integrantes de familias cercanas. El padre siempre mantiene la
          seguridad del territorio donde vive su familia El cuidado de sus hijos
          es una actividad importante para la vicuña. Los grupos integrados por
          crías tienen una actividad de vigilancia mayor del entorno. Se cree
          que está actitud de alerta está vinculada a la protección de su
          descendencia.
        </p>
        <p>
          Por otra parte, los solteros son acosador por el macho, pueden
          descansar y comer en zonas marginales donde no estén a la vista.
          Además, solamente pueden comer, cuando la familia ya lo ha hecho.
        </p>
        <p>
          La conservación de la especie requiere de un espacio y entorno que le
          permita desarrollar esta vida. Sin embargo, sobre la vicuña también se
          cierne la sombra de la falta de agua y el cambio climático. Porque su
          hábitat predilecto, el bofedal, requiere de agua para existir.
        </p>
        <h3 class="enlaces_bibliografia">Enlaces a las fuentes</h3>
        <p class="enlaces_bibliografia">
          <a
            href="https://repositorio.uchile.cl/handle/2250/131734"
            >
          </a>Interacción espacio–temporal entre vicuña (vicugna vicugna) y llama (lama glama) en el sector de Tara, región de Antofagasta, Chile. Daniel Ignacio Valencia Olatte.2013
        </p>
        <p class="enlaces_bibliografia">
          <a href="https://www.tandfonline.com/doi/abs/10.1080/01650529509360940"
            ></a
          >Vilá BL (1995). Spacing patterns within groups in vicuñas, in relation to sex and behaviour. Studies on Neotropical Fauna and Environment 30:45-5
        </p>
        <p class="enlaces_bibliografia">
          <a
            href="https://ediciones.uc.cl/comportamiento-social-de-la-fauna-nativa-dechile.html"
            >
          </a>Comportamiento social de la fauna nativa de Chile", Luis A Ebensperger y Antonieta Labra
        </p>
        <p class="enlaces_bibliografia">
          <a
            href=""
            ></a
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
  name: "Llama",
  components: {
    Menu,
  },
  metaInfo() {
    return {
      title: "La Vicuña (Vicugna vicugna)",

      meta: [
        // Twitter Card
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:title",
          content: "La Vicuña (Vicugna vicugna)",
        },
        {
          name: "twitter:description",
          content: "",
        },
        // image must be an absolute path
        {
          name: "twitter:image",
          content: "https://efectomariposa.org/cpg/albums/userpics/10001/2/normal_vicuna.jpeg",
        },
        // Facebook OpenGraph
        {
          property: "og:title",
          content: "La Vicuña (Vicugna vicugna)",
        },
        {
          property: "og:site_name",
          content: "Efecto Mariposa",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:image",
          content: "https://efectomariposa.org/cpg/albums/userpics/10001/2/normal_vicuna.jpeg",
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
        url: "https://www.efectomariposa.org/vicuna",
        title: "La Vicuña (Vicugna vicugna)",
        description: "",
        quote: "La Vicuña (Vicugna vicugna)",
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

