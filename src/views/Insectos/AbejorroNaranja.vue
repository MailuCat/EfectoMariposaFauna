<template>
  <div>
    <Menu />
    <title>
      Abejorro naranja (Bombus Dahlbomii) es la única abeja nativa social de
      Chile
    </title>
    <v-container>
      <v-row class="justify-center">
        <v-col xs="12" sm="12" md="12" lg="12" xl="12">
          <h1>Abejorro Naranja (Bombus Dahlbomii)</h1>
          <p>13 de diciembre 2021</p>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-img
          :src="require('@/assets/abejorronaranja.jpg')"
          max-height="400"
          max-width="800"
          class="fotonota"
          alt="Abejorro Naranja (Bombus Dahlbomii)"
        ></v-img>
      </v-row>
      <v-row>
        <p class="justify-start foto_texto">
          Foto: David Selbert, derechos libres.
        </p>
      </v-row>
      <hr class="mb-5" />
      <v-row class="texto">
        <v-col>
          <p>
            El moscardón o abejorro naranja (Bombus Dahlbomii) es la única abeja
            social entre las nativas chilenas y también una de las más grandes.
            Esta especie endémica tuvo una enorme presencia en el territorio
            nacional. El pueblo mapuche, antes de la llegada de los españoles,
            ya usaba su miel para alimentarse y aplicarla en la medicina. Esta
            situación se mantuvo hasta el siglo XX, período en que, incluso, era
            posible verlo en los parques de la ciudad de Santiago. Sin embargo,
            esto cambió hasta el punto que actualmente está en peligro de
            extinción según la Lista Roja de Especies Amenazadas de la Unión
            Internacional para la Conservación de la Naturaleza.
          </p>
          <p>
            El hábitat de esta especie abarca desde el centro hasta el sur de
            Chile y Argentina. Los incendios, la producción de madera, la
            práctica de actividades recreativas y sobre todo la introducción de
            especies no nativas son la causa del deterioro de este territorio.
            La disminución más violenta de su población comenzó en 1997 con el
            ingreso de Bombus Terris. Esta especie extranjera ha sido utilizada para la
            polinización agrícola.
          </p>
          <p>
            El “abejorro naranja” también tiene una relación importante con la
            polinización, pero de las plantas nativas. Su sobrevivencia está
            enlazada con la conservación de la flora ancestral. Además, es una
            especie interesante porque es la única especie chilena con roles
            colaborativos. La abeja reina y la obrera tienen un tamaño
            diferente, pero su estructura es similar. La hembra fecundada
            construye su nido en madrigueras abandonadas por ratones o en huecos
            ubicados entre las raíces de los árboles. Crea celdas usando la cera
            que ella misma produce. En cada celda deposita un huevo y las provee
            de polen y néctar antes de cerrarla. Una vez que nacen las larvas,
            la madre abre el lugar para seguir alimentándolas. Las obreras
            también tienen a su cargo la recolección de polen y néctar para
            alimentar a crías, pero además están encargadas de la seguridad.
            Cuando la abeja ya es adulta, permanecen un día en el nido y luego
            asumen las funciones que la naturaleza le asignó.
          </p>
          <h3 class="enlaces_bibliografia">Enlaces a fuentes</h3>
          <p>
            <a class="enlaces_bibliografia"
              href="https://dialnet.unirioja.es/servlet/articulo?codigo=5523733"
              >La difícil situación del abejorro más austral del mundo (Bombus
              Dahlbomii Guérin-Méneville, 1835) de José Montalvá. 2012.</a>
          </p>

          <p>
            <a class="enlaces_bibliografia"
              href="https://books.google.es/books?id=ueUmEAAAQBAJ&lpg=PT8&ots=4rddGv7NOS&dq=Comportamiento%20Social%20de%20la%20Fauna%20Nativa%20Chilena&lr&hl=es&pg=PT8#v=onepage&q=Comportamiento%20Social%20de%20la%20Fauna%20Nativa%20Chilena&f=false"
              >Comportamiento social de la fauna nativa de Chile, Luis A. Ebensperger y Antonieta Labra. 2021 </a>
          </p>
          <p>
            <a class="enlaces_bibliografia" href="https://www.iucnredlist.org/es/species/15088/78321302">
              Abejorro Naranja. Lista Roja de Especies Amenazadas de la Unión
              Internacional para la Conservación de la Naturaleza (UICN).</a
            >
          </p>
        </v-col>
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
  name: "AbejorroNaranja",
  components: {
    Menu,
  },
  metaInfo() {
    return {
      title: "Abejorro naranja (Bombus Dahlbomii) es la única abeja nativa social de Chile",

      meta: [
        // Twitter Card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:title",
          content: "Abejorro naranja (Bombus Dahlbomii) es la única abeja nativa social de Chile",
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
          content: "  Abejorro naranja (Bombus Dahlbomii) es la única abeja nativa social de Chile",
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
        url: "https://efectomariposa.org/abejorronaranja",
        title: "Abejorro naranja (Bombus Dahlbomii) es la única abeja nativa social de Chile",
        description:
          "",
        quote:
          "Abejorro naranja (Bombus Dahlbomii) es la única abeja nativa social de Chile",
        twitterUser: "",
      },
      networks: [
        {
          network: "email",
          name: "Email",
          icon: "far fah fa-lg fa-envelope",
          color: "yellow",
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