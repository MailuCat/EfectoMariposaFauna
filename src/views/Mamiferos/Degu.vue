<template>
  <div>
    <Menu />
    <title>
      "Mamífero de Chile: El Degú tiene un sorprendente comportamiento de colaboración"
    </title>
    <v-container>
      <v-row class="justify-center">
        <v-col xs="12" sm="12" md="12" lg="12" xl="12">
          <h1>Degú (Octodon degus)</h1>
          <p>13 de diciembre 2021</p>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-img
          :src="require('@/assets/degu.jpg')"
          max-height="400"
          max-width="800"
          class="fotonota"
          alt="Degú (Octodon degus)"
        ></v-img>
      </v-row>
      <v-row class="justify-start">
        <p class="justify-start foto_texto">
          Salvador Velásquez, algunos derechos reservados
        </p>
      </v-row>
      <hr class="mb-5" />
      <v-row class="texto">
        <p>
          El degú es un mamífero endémico de Chile al que los mapuches llamaban
          Dewü para referirse a los ratones del campo. Esta especie no está en
          riesgo de extinción, pero su población ha disminuido durante los
          últimos años debido al daño causado por el hombre a su hábitat y a la
          flora nativa, también por el ingreso de nuevos depredadores como
          perros y gatos sumados a la escasez de agua.
        </p>
        <p>
          La vida silvestre de este pequeño animal transcurre en las regiones
          semiáridas del norte y centro del país, en grupos constituidos por 2 a
          5 hembras adultas, que no necesariamente son parientes, y 1 a 2
          machos. A diferencia de otras ratas, sus actividades son diurnas. Una
          característica muy interesante del Degú es su organización social, los
          expertos la igualan al comportamiento que tuvieron los primeros
          humanos. Una de las conductas que los llevó a para pensar esto es que
          las hembras cuidan con esmero tanto a las crías propias como a las
          ajenas.
        </p>
        <p>
          En lo que se refiere a su reproducción, estos roedores tienen una conducta
          promiscua, ya que tanto hembras como machos tienen varias parejas. El
          81 % de los machos y el 65 % de las hembras producen crías con más de
          una pareja sexual y la cantidad de contactos depende de la
          disponibilidad de individuos del sexo opuesto en cada grupo.
        </p>
        <p>
          La actividad colaborativa es sorprendente. Las colonias interactúan
          con sus vecinas para el beneficio mutuo, los estudios en cautiverio
          han revelado su capacidad para coordinarse en la construcción de
          madrigueras. También actúan unidos para enfrentar el peligro. Ellos
          emiten señales de alarma que se extienden a lo largo de varias decenas
          de metros, permitiendo que colonos vecinos también las perciban y
          busquen un refugio.
        </p>
        <p>
          Se han descrito más de 15 tipos de vocalizaciones que varían
          dependiendo del contexto y la estación. Entre las circunstancias que
          provocan sonidos diferenciados están: la advertencia frente a eventos
          impredecibles, la agresión entre congéneres, el contacto entre adultos,
          el aislamiento de cachorros, el juego entre cachorros, entre otros. El
          lenguaje incluye el "llamado de alarma", "chillidos como gruñidos de
          protesta", "la llamada post-copulatoria", la "llamada maternal" y el
          "silbido de angustia".
        </p>
        <p>
          Una característica muy particular es su capacidad, además de ver en
          colores, de detectar los rayos ultravioleta. Usan esta habilidad para
          transmitir un aviso de alarma ante el peligro, se paran en dos patas
          exhibiendo los rayos UV que tienen en el vientre.
        </p>
        <h3 class="enlaces_bibliografia">Enlace a las fuentes</h3>
        <p class="enlaces_bibliografia">
          <a
            href="https://books.google.es/books?id=ueUmEAAAQBAJ&lpg=PT8&ots=4rddGv7NOS&dq=Comportamiento%20Social%20de%20la%20Fauna%20Nativa%20Chilena&lr&hl=es&pg=PT8#v=onepage&q=Comportamiento%20Social%20de%20la%20Fauna%20Nativa%20Chilena&f=false"
            >Comportamiento Social de la Fauna Nativa Chilena de Luis
            A.Ebensperger y Antonieta Labra.</a
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
  name: "Degu",
  components: {
    Menu,
  },
  metaInfo() {
    return {
      title: "Mamífero de Chile: El Degú tiene un sorprendente comportamiento de colaboración",

      meta: [
        // Twitter Card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:title",
          content: "Mamífero de Chile: Degú una especie con un sorprendente comportamiento colaboración",
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
          content: "Mamífero de Chile: Degú una especie con un sorprendente comportamiento colaborador",
        },
        { property: "og:site_name", content: "Efecto Mariposa" },
        { property: "og:type", content: "website" },
        {
          property: "og:image",
          content:"",
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
        url: "https://efectomariposa.org/degu",
        title: "Mamífero de Chile: Degú una especie con un sorprendente comportamiento colaboración",
        description:
          "",
        quote:
          "Mamífero de Chile: Degú una especie con un sorprendente comportamiento colaboración",
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

