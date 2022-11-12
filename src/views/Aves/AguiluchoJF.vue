<template>
  <div>
    <Menu />
    <v-container>
      <title>Aves de Chile: Aguilucho de Juan Fernández</title>
      <v-row class="justify-center">
        <v-col xs="12" sm="12" md="12" lg="12" xl="12">
          <h1>
            Aguilucho de Juan Fernández (Geranoaetus polyosoma exsul)
          </h1>
          <p class="fecha">14 de febrero 2022</p>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-img
          src="https://efectomariposa.org/cpg/albums/userpics/10001/2/normal_aguilucho_Juan_Fernandez.jpg"
          max-height="400"
          max-width="800"
          class="fotonota"
          alt="Aguilucho de Juan Fernández (Geranoaetus polyosoma exsul)"
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
          Las Islas de Juan Fernández albergan más del 30 % de las aves
          endémicas de Chile, aunque su superficie es solo del 1 % del país. Una
          de estas islas, llamada Alejandro Selkirk, es el único lugar del mundo
          donde tiene su hogar el aguilucho de Juan Fernández (Geranoaetus
          polyosoma exsul). La información sobre sus hábitos y comportamiento es
          deficiente, a pesar de ser muy necesaria para revertir su inminente
          extinción.
        </p>

        <p>
          El aislamiento y la larga distancias del continente, sumado a una baja
          inmigración de otras especies, hace de las islas un paraje ideal para
          el desarrollo de especies distintas a las de todo el planeta. Este
          aislamiento biológico, también puede causar la desaparición de esta
          vida única.
        </p>

        <p>
          Se desconoce certeramente el tamaño y estructura de la población de
          aguiluchos. Basándose en una estimación, actualmente habría menos de
          250 aguiluchos habitando zonas bajas, cumbres de cerros, pastizales y
          bosques de los 49.5 kilómetros de la isla.
        </p>

        <p>
          Esta ave generlista, aprovecha las oportunidades que se le presentan
          para atrapar una amplia variedad de especies como son: los polluelos
          de rayadito de Más Afuera, el petrel, conejo, carcasas de cabra,
          ratas, ratones, pollos domésticos y restos de placenta de lobo marino,
          peces y crustáceos encontrados en caletas de pescadores.
        </p>

        <p>
          Ocupan desde noviembre a febrero para la reproducción, sus nidos los
          construyen con pequeñas ramas de arbustos instaladas en las copas de
          árboles y horquillas o en acantilados. En el año 1980, funcionarios
          del Parque Nacional Archipiélago de Juan Fernández trasladaron sin
          éxito aves a la isla Robinson Crusoe con el objetivo de reducir los
          conejos, pero el aguilucho no se reprodujo.
        </p>
        <p>
          Este frustrado intento de reproducirlo en una isla hace más urgente
          conocer más de su comportamiento con el fin de implementar un óptimo
          plan de conservación.
        </p>
        <p>
          Actualmente, está prohibida su captura, caza,
          tenencia o transporte (artículo 4 de la Ley de Caza Núm. 19.473,
          República de Chile, 1996) porque es considerada beneficiosa para la
          actividad silvoagropecuaria y el equilibrio del ecosistema.
        </p>
    
      <h3 class="enlaces_bibliografia">Enlaces a las fuentes:</h3>

      <p class="enlaces_bibliografia">
        <a
          href="https://clasificacionespecies.mma.gob.cl/wp-content/uploads/2021/03/Geranoaetus_polyosoma_exsul_17RCE_FINAL.pdf"
        >
          Aguilucho de Juan Fernández. Clasificación de especies del Ministerio
          del Medio Ambiente de Chile.
        </a>
      </p>
      <p class="enlaces_bibliografia ">
        <a
          href="http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.507.7756&rep=rep1&type=pdf"
        >
          Distribution, habitat use and abundance patterns of landbird
          communities on the Juan Fernández Islands, Chile de Ingo Hahn, Uwe
          Römer y Roberto P. Schlatter.
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
        :media="sharing.media"
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
      title: "Aves de Chile: Aguilucho de Juan Fernández",

      meta: [
        // Twitter Card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:title",
          content: "Aves de Chile: Aguilucho de Juan Fernández",
        },
        {
          name: "twitter:description",
          content:
            "La islas Alejandro Selkirk del Archipielago de Juan Ferández, es el único lugar del mundo donde tiene su hogar el aguilucho de Juan Fernández",
        },
        // image must be an absolute path
        {
          name: "twitter:image",
          content: "https://efectomariposa.org/cpg/albums/userpics/10001/2/normal_aguilucho_Juan_Fernandez.jpg",
        },
        // Facebook OpenGraph
        {
          property: "og:title",
          content: "Aves de Chile: Aguilucho de Juan Fernández",
        },
        { property: "og:site_name", content: "Aguilucho de Juan Fernández" },
        { property: "og:type", content: "website" },
        {
          property: "0g:image",
          content: "https://efectomariposa.org/cpg/albums/userpics/10001/2/normal_aguilucho_Juan_Fernandez.jpg",
        },
        {
          property: "og:description",
          content:
            "La islas Alejandro Selkirk del Archipielago de Juan Ferández, es el único lugar del mundo donde tiene su hogar el aguilucho de Juan Fernández",
        },
      ],
    };
  },

  data() {
    return {
      sharing: {
        url: "https://efectomariposa.org/aguiluchojuanfernandez",
        title: "Aves de Chile: Aguilucho de Juan Fernández",
        description:
          "La islas Alejandro Selkirk del Archipielago de Juan Ferández, es el único lugar del mundo donde tiene su hogar el aguilucho de Juan Fernández.",
        quote:
          "La islas Alejandro Selkirk del Archipielago de Juan Ferández, es el único lugar del mundo donde tiene su hogar el aguilucho de Juan Fernández.",
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

