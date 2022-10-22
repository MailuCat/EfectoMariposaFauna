<template>
  <div>
    <Menu />
    <v-container>
      <title>
        Insectos de Chile: Manuelia Postica un enlace entre la abeja individual
        y social
      </title>
      <v-row class="justify-center">
        <v-col xs="12" sm="12" md="12" lg="12" xl="12">
          <h1 class="titulo">Manuelia Postica</h1>
          <p class="fecha">13 de diciembre 2021</p>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-img
          class="fotonota"
          :src="require('@/assets/manueliapostica1.jpg')"
          max-height="400"
          max-width="800"
          alt="Manuelia Postica"
        ></v-img>
      </v-row>
      <v-row>
        <p class="justify-start foto_texto">
          Ricardo Huenaca, algunos derechos reservados.
        </p>
      </v-row>
      <hr class="mb-5" />
      <v-row class="texto">
        <p>
          Chile es reconocido mundialmente por ser el sexto país con mayor
          variedad de abejas endémicas. Las especies registradas hasta el
          momento son 445, pero se sospecha que son muchas más. La inmensa
          mayoría de estas especies nativas chilenas tienen hábitos solitarios.
          Esto se refiere a que las hembras no conviven en colmenas ni tienen
          contacto directo con las crías.
        </p>
        <p>
          Sin embargo, la especie de abeja solitaria llamada Manuelia Postica
          tiene una cualidad distinta. Se trata de la capacidad de identificar a
          las compañeras de nido y convivir junto a ella durante todo el proceso
          de nidificación.
        </p>
        <p>
          Manuelia es una abeja carpintera que construye su albergue, casi
          siempre en tallos secos de quila y a veces en ramas secas de zarzamora
          y lingue. La creación del nido consiste en la construcción de un túnel
          recto que puede tener uno o dos lados y la entrada está ubicada en el
          centro. En su interior tiene celdas separadas por tabiques elaborados
          con los materiales removidos por la misma abeja al cavar.
        </p>
        <p>
          La abeja abastece cada celdilla con un bolo de néctar y polen sobre el
          que coloca el huevo y luego sella este lugar para evitar la
          contaminación por parásitos. Las crías se desarrollan en estas celdas
          hasta convertirse en adultos.
        </p>
        <p>
          Todo lo anterior es bastante similar en las especies solitarias. La
          diferencia está en que posee la capacidad de reconocer a su compañera
          de nido y a las abejas con las que tiene una cercanía genética. La
          identificación se produce gracias a un compuesto presente en la parte
          externa de su cuerpo. Este reconocimiento permite a las abejas
          Manuelia mantener una convivencia respetuosa durante el trabajo de
          creación y protección del nido.
        </p>
        <p>
          Los etólogos piensan que este reconocimiento mutuo permite entender la
          forma en la que se fue gestando la evolución de las abejas hacia
          especies socialmente organizadas.
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
  name: "Manuelia",
  components: {
    Menu,
  },
  metaInfo() {
    return {
      title: "Insectos de Chile: Manuelia Postica un enlace entre la abeja individualy social",

      meta: [
        // Twitter Card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:title",
          content: "Insectos de Chile: Manuelia Postica un enlace entre la abeja individual y social",
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
            " ",
        },
        // Facebook OpenGraph
        {
          property: "og:title",
          content: "Insectos de Chile: Manuelia Postica un enlace entre la abeja individual y social",
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
        url: "https://efectomariposa.org/manuelia",
        title: "Insectos de Chile: Manuelia Postica un enlace entre la abeja individual y social",
        description:
          "",
        quote:
          "Insectos de Chile: Manuelia Postica un enlace entre la abeja individual y social",
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
    padding: 2rem 9rem 2.5rem 9rem;
    text-align: justify;
  }
}

p.foto_texto {
  font-size: 0.6rem;
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
