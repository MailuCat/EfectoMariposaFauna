<template>
  <div>
    <Menu />
    <title>
      El zorro chilote es un cazador solitario capaz de compartir su territorio
      con otros de su misma especie
    </title>
    <v-container>
      <v-row class="justify-center">
        <v-col xs="12" sm="12" md="12" lg="12" xl="12">
          <h1>Zorro Chilote (Lycalopex fulvipes)</h1>
          <p>1 de febrero 2022</p>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/12008950/medium.jpg"
          max-height="400"
          max-width="800"
          class="fotonota"
          alt="Zorro Chilote (Lycalopex fulvipes)"
        ></v-img>
      </v-row>
      <v-row class="justify-start">
        <p class="justify-start foto_texto">
          Kevin Schafer, algunos derechos reservados
        </p>
      </v-row>
      <hr class="mb-5" />
      <v-row class="texto">
        <p>
          El zorro chilote es un cazador solitario capaz de compartir su
          territorio con otros de su misma especie. La población más numerosa
          está constituida por 412 zorros que habitan la isla de Chiloé, otro
          grupo compuesto por 227 animales vive de forma disgregada en la
          cordillera de Nahuelbuta y en la cordillera de la Costa Valdiviana
          incluyendo el Parque Nacional Alerce Costero, Reserva Costera
          Valdiviana y Parque Oncol.
        </p>
        <p>
          En la isla deambulan por arenas, rocas, grandes dunas, arroyos,
          humedales, matorrales y bosques, tan variado como el paisaje es el
          alimento que obtienen. La investigación “Ecología de una población
          costera de Zorros de Darwin en peligro crítico” verificó que los
          insectos fueron las presas más abundantes (34,7 %) principalmente
          grillos y escarabajos, seguidos de los crustáceos (22,5 %), roedores
          (20 %), aves (11,9 %), anfibios (5,9 %), ungulados (3,5 %). Los productos
          marinos los obtienen en los períodos de baja marea. Si bien consumen
          mayoritariamente insectos, la mayor masa de su alimento la obtienen de
          los mamíferos y las aves. Está especie también se alimenta de semillas
          y de los frutos carnosos de las bromelias.
        </p>
        <p>
          Los zorros chilotes están activos durante todo el día, pero
          incrementan su movilidad durante la noche. Tanto los machos como las
          hembras comparten gran parte de su territorio, usan la misma área,
          pero en diferentes momentos, de hecho, no descansan juntos ni se
          acercan a menos de 80 metros. Esto indica que los zorros comparten en
          lugar de defender y monopolizar el uso exclusivo del territorio.
          Reservan solamente un pequeño espacio entre el 0 y el 17 % como
          zona exclusiva.
        </p>
        <p>
          Al igual que otras especies endémicas de Chile, la segmentación de su
          hábitat como consecuencia de incendios, cambio productivo del suelo y
          construcción de carreteras los ubica en un escenario de permanente
          riesgo. Los posibles efectos del cambio climático en el bosque nativo
          genera aún más incertidumbre sobre su futuro.
        </p>
        <p>
          Otra gran amenaza son los perros asilvestrados, que potencialmente
          pueden atacarlos o transmitir enfermedades como el distemper o
          bacterias como Mycoplasma haemocanis, que se adhiere a los glóbulos
          rojos de muchos mamíferos. Los estudios muestran que a medida que
          envejecen los zorros se vuelven más propensos al contagio y
          vulnerables a fallecer por esta causa.
        </p>

        <h3 class="enlaces_bibliografia">Enlaces a las fuentes</h3>
        <a class="enlaces_bibliografia"
          href="https://www.scielo.cl/scielo.php?script=sci_arttext&pid=S0716-078X2014000100003"
        >
          Ecology of a coastal population of the critically endangered Darwin’s
          fox (Pseudalopex fulvipes) on Chiloé Island, southern Chile.</a
        >

        <a class="enlaces_bibliografia"
          href="https://www.scielo.cl/scielo.php?script=sci_arttext&pid=S0716-078X2014000100003"
          >A new population of Darwin's fox (Lycalopex fulvipes) in the
          Valdivian Coastal Range</a
        >
        <a class="enlaces_bibliografia"
          href="https://mma.gob.cl/estudio-del-ministerio-del-medio-ambiente-da-cuenta-de-nuevos-registros-del-zorro-de-darwin-fuera-del-cordon-de-nahuelbuta-en-la-araucania/"
          >Estudio del Ministerio del Medio Ambiente da cuenta de nuevos
          registros del zorro de Darwin fuera del cordón de Nahuelbuta en La
          Araucanía</a
        >
        <a class="enlaces_bibliografia"  href="https://www.iucnredlist.org/species/41586/107263066"
          >Zorro Chilote (Zorro de Darwin) en la Lista Roja IUCN</a
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
  name: "ZorroChilote",
  components: {
    Menu,
  },

  metaInfo() {
    return {
      title: "Zorro Chilote (Lycalopex fulvipes)",

      meta: [
        // Twitter Card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:title",
          content: "Zorro Chilote (Lycalopex fulvipes)",
        },
        {
          name: "twitter:description",
          content:
            "El zorro chilote es un cazador solitario capaz de compartir su territorio con otros de su misma especie",
        },
        // image must be an absolute path
        {
          name: "twitter:image",
          content: "",
        },
        // Facebook OpenGraph
        {
          property: "og:title",
          content: "Zorro Chilote (Lycalopex fulvipes)",
        },
        { property: "og:site_name", content: "Efecto Mariposa" },
        { property: "og:type", content: "website" },
        {
          property: "og:image",
          content: "",
        },
        {
          property: "og:description",
          content:
            "El zorro chilote es un cazador solitario capaz de compartir su territorio con otros de su misma especie",
        },
      ],
    };
  },

  data() {
    return {
      sharing: {
        url: "https://www.efectomariposa.org/zorrochilote",
        title:
          "El zorro chilote es un cazador solitario capaz de compartir su territorio con otros de su misma especie",
        description: "",
        quote:
          "El zorro chilote es un cazador solitario capaz de compartir su territorio con otros de su misma especie",
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

