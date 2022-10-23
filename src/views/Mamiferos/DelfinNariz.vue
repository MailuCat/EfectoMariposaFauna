<template>
  <div>
    <Menu />
    <title>
      Mamíferos de Chile: Delfín Nariz de Botella (Tursiops truncatus) tiene la
      habilidad de comunicarse a través de sonidos y aprender el dialecto de
      cada unidad social
    </title>
    <v-container>
      <v-row class="justify-center">
        <v-col xs="12" sm="12" md="12" lg="12" xl="12">
          <h1>Delfín Nariz de Botella (Delfín mular)</h1>
          <p>13 de diciembre 2021</p>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-img
          :src="require('@/assets/delfin1.jpg')"
          max-height="400px"
          max-width="800px"
          class="fotonota"
          alt="Delfín Nariz de Botella (Delfín mular)"
        ></v-img>
      </v-row>
      <v-row class="justify-start">
        <p class="justify-start foto_texto">
          Jonas Von Verne, derechos libres.
        </p>
      </v-row>
      <hr class="mb-5" />
      <v-row class="texto">
        <p>
          El delfín nariz de botella es una especie cosmopolita que vive en los
          mares de todo el mundo y en Chile, su hábitat se extiende desde la
          Primera a la Décima regiones y en la Patagonia. Se sabe de la
          presencia de una agrupación (40 a 50 ejemplares) de Delfín Nariz de
          Botella que reside permanentemente en aguas de Isla Chañaral y en la
          Isla Choros.
        </p>
        <p>
          Este cetáceo, también conocido como delfín mular, conforma
          habitualmente grupos de 15 a 50 individuos y en ocasiones pueden ser
          de más de 100. Estos colectivos son socialmente flexibles, sus
          participantes no siempre son mixtos porque pueden estar formados
          exclusivamente por hembras con crías, jóvenes o machos adultos.
          Además, cada miembro puede abandonar el grupo para unirse a otro en el
          transcurso de algunos días.
        </p>
        <p>
          La habilidad de comunicarse a través de sonidos y aprender el dialecto
          de cada unidad social está asociada a su capacidad de participar de
          nuevos colectivos.
        </p>
        <p>
          El sello personal del silbido lo desarrollan en los primeros meses de
          vida y es una habilidad propia de esta especie porque los delfines en
          aislamiento también la realizan. Incluso, las madres pueden reconocer
          el llanto de sus crías.
        </p>
        <p>
          Esta capacidad para identificarse puede permanecer durante décadas, lo
          que permite su reencuentro transcurrido años de separación.
        </p>
        <p>
          Estos silbidos son más frecuentes cuando interactúan en manada, como
          por ejemplo en los desplazamientos por el mar. Ellos usan la
          vocalización para convocar a nuevos especímenes a cooperar con la
          caza.
        </p>
        <p>
          El tamaño de la manada depende de la disponibilidad y dispersión de
          alimento. En el océano la presencia de alimentos es impredecible y los
          delfines deben coordinar su nado en grupos más grandes. Un delfín
          dirige los cardúmenes hacia otros que han formado una barrera para
          compactarlos y así atraparlos. Otro motivo para agruparse en colonias
          más grande es protegerse de los depredadores.
        </p>
        <p>
          En los sectores costeros la situación es diferente porque disminuye la
          presencia de sus enemigos naturales y el alimento es más escaso. Este
          escenario favorece a la actividad individual, en pareja o en pequeños
          grupos.
        </p>
        <p>
          La zona en la que están ubicados también influye en el apareamiento. En
          las aguas costeras es usual que los machos se asocien para aumentar
          sus opciones de procrear. Hay dos tipos de alianza, la llamada de
          "primer orden" que es la unión de dos o tres machos para controlar a
          las hembras y la de "segundo orden" que consiste en la asociación de
          grupos del “primer orden” con el fin de arrebatar agresivamente a las
          hembras de otra alianza. En cambio, cuando los grupos son de gran
          tamaño, la reproducción suele ser más igualitaria porque no hay escasez
          de hembras.
        </p>
        <h3 class="enlaces_bibliografia">Enlaces a las fuentes</h3>
        <a class="enlaces_bibliografia"
          href="https://academic.oup.com/jmammal/article/98/4/1096/3885956?login=true"
        >
          Multi-level dolphin alliances in northeastern Florida offer
          comparative insight into pressures shaping alliance formation de
          Jessica Ermak, Kristin Brightwell y Quincy Gibson.
        </a>
        <a class="enlaces_bibliografia"
          href="https://books.google.es/books?id=ueUmEAAAQBAJ&lpg=PT8&ots=4rddGv7NOS&dq=Comportamiento%20Social%20de%20la%20Fauna%20Nativa%20Chilena&lr&hl=es&pg=PT8#v=onepage&q=Comportamiento%20Social%20de%20la%20Fauna%20Nativa%20Chilena&f=false"
          >Comportamiento Social de la Fauna Nativa Chilena de Luis
          A.Ebensperger y Antonieta Labra.</a
        >
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
  name: "DelfinNariz",
  components: {
    Menu,
  },
  metaInfo() {
    return {
      title: "Mamíferos de Chile: el Delfín Nariz de Botella (Tursiops truncatus)",
      
      meta: [
        // Twitter Card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:title",
          content: "Mamíferos de Chile: el Delfín Nariz de Botella (Tursiops truncatus)"
        },
        {
          name: "twitter:description",
          content:
            "El Delfín Nariz de Botella (Tursiops truncatus) tiene la habilidad de comunicarse a través de sonidos y aprender el dialecto de otros grupos sociales",
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
          content: "Mamíferos de Chile: el Delfín Nariz de Botella (Tursiops truncatus)",
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
            "El Delfín Nariz de Botella (Tursiops truncatus) tiene la habilidad de comunicarse a través de sonidos y aprender el dialecto de otros grupos sociales",
      
        },
      ],
    };
  },

  data() {
    return {
      sharing: {
        url: "https://www.efectomariposa.org/delfinnarizbotella",
        title: "Mamíferos de Chile: el Delfín Nariz de Botella (Tursiops truncatus)",
        description:
          "El Delfín Nariz de Botella (Tursiops truncatus) tiene la habilidad de comunicarse a través de sonidos y aprender el dialecto de otros grupos sociales.",
        quote:
          "El Delfín Nariz de Botella (Tursiops truncatus) tiene la habilidad de comunicarse a través de sonidos y aprender el dialecto de otros grupos sociales",
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

