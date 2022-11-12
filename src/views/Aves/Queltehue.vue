<template>
  <div>
    <Menu />
    <link rel=“canonical” href=“https://www.efectomariposa.org/queltehue” />
    <title>
      Aves de Chile: Vanellus chilensis conocido en Chile como queltehue o tregille
    </title>
    <v-container class="pa-0">
      <v-row class="justify-center">
        <v-col xs="12" sm="12" md="12" lg="12" xl="12">
          <h1>Queltehue (Vanellus chilensis)</h1>
          <p>13 de diciembre 2021</p>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-img
          src="https://efectomariposa.org/cpg/albums/userpics/10001/2/normal_queltehue.jpg"
          max-height="450"
          max-width="800"
          class="m-5"
          alt="Queltehue (Vanellus chilensis"
        ></v-img>
      </v-row>
      <v-row>
        <p class="foto_texto">
          Foto: Daniel Van der Post, no hay derechos reservados
        </p>
      </v-row>
      <hr class="mb-5" />
      <v-row class="texto">
        <p>
          Conocido en Chile como queltehue o tregille, el Vanellus chilensis
          adquiere distintos nombres en cada uno de los países que habita desde
          Nicaragua hasta el sur de Latinoamérica. Reside en zonas abiertas como
          campos, pastizales, praderas, zonas húmedas cercanas a sitios con agua
          y hasta los 2600 metros sobre el nivel del mar. En estos lugares se
          alimenta de crustáceos, moluscos e insectos. El humano ha transformado
          el medio ambiente natural de esta ave, pero gracias a su capacidad de
          adaptación ahora también ocupa parques urbanos y terrenos agrícolas.
        </p>
        <p>
          Socialmente es muy flexible porque puede vivir solo, en pareja o en
          bandadas de hasta 105 individuos. Los grupos cambian de tamaño
          dependiendo de las diferentes actividades que realizan a lo largo del
          día. Las agrupaciones son pequeñas durante la mañana y ocupan este
          tiempo para atrapar su alimento. En el transcurso de la tarde forman
          asociaciones más grandes para dormir o acicalarse.
        </p>
        <p>
          Uno de los beneficios de participar en conglomerados de gran tamaño es
          disminuir riesgos. Las aves duermen con la mitad del cerebro, mientras
          la otra se mantiene alerta, entonces, hay un provecho colectivo si una
          de las aves avisa cuando se acerca un enemigo. Cuantos más
          ojos estén atentos a la llegada de un potencial peligro, hay menos
          posibilidades de ser víctima.
        </p>
        <p>
          La tranquilidad obtenida gracias a la vigilancia grupal, les da tiempo
          para limpiar su cuerpo y rascar sus patas, ambas actividades muy
          importantes porque les permite eliminar posibles parásitos y
          ectoparásitos.
        </p>
        <p>
          Otro comportamiento social, el apareo, tiene una particularidad: se
          reúnen en parejas, pero a diferencia de otras especies, a veces
          incluyen a otra ave adulta o juvenil (una cría del año anterior) que
          coopera en el cuidado de los huevos y la defensa del territorio.
          Existen varios estudios con conclusiones opuestas respecto al aporte
          de este tercer integrante en el nacimiento exitoso de los polluelos,
          pero la mayoría señala que existe un beneficio leve.
        </p>
        <p>
          El queltehue, para construir su nido, cava un hoyo de poca profundidad
          en el suelo. Los predadores y el hombre son las principales amenazas a
          la supervivencia de las crías. El comportamiento defensivo de esta ave
          depende de diversos factores como son: el estado de la cría, la
          distancia e intensidad del peligro.
        </p>
        <p>
          Esta respuesta cambia proporcionalmente al desarrollo del embrión. La
          protección es pasiva durante el período que va desde la puesta de los
          huevos hasta los primeros diez días de incubación. En esta etapa, ante
          la amenaza, el ave se mantiene anidando o se levanta emitiendo
          vocalizaciones fuertes, en otras ocasiones, se aleja del nido
          simulando estar incubando en otro lugar.
        </p>
        <p>
          Cuando es estado del embrión es avanzado (pasado los 21 días), la
          hembra sola o con el macho vuela directamente hacia el intruso,
          emitiendo sonidos largos y estridentes, en otras ocasiones, realizan
          ataques colectivos en los que participan la pareja junto a otros
          compañeros de especie haciendo sobrevuelos y embestidas directas con
          chillidos prolongados.
        </p>
        <p>
          En la investigación<a
            href="https://www.researchgate.net/publication/340558787_Comportamiento_de_defensa_de_nido_discriminacion_de_depredadores_y_exito_reproductivo_de_Vanellus_chilensis_Aves_Charadriidae"
          >
            “Comportamiento de defensa del nido, discriminación de depredadores
            y éxito reproductivo del Vanellus chilensis” </a
          >Lorena Cruz-Barnate comparó la reacción del ave al enfrentarla tres
          amenazas potenciales: el hombre, un jinete y un tractor. El resultado
          de este estudio fue que el Queltehue discrimina el riesgo porque ante
          el tractor y el hombre a pie tuvo una defensa pasiva, pero reaccionó
          con una defensa activa ante el jinete.
        </p>
      </v-row>
      <v-row></v-row>
      <v-row></v-row>
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
  name: "Queltehue",
  components: {
    Menu,
  },

    metaInfo() {
    return {
      title: "Aves de Chile: Vanellus chilensis conocido en Chile como queltehue o tregille",

      meta: [
        // Twitter Card
        { name: "twitter:card", content: "summary_large_image"},
        { name: "twitter:title",  content: ""},
        { name: "twitter:description",content: "Conocido en Chile como queltehue o treguille, el Vanellus chilensis adquierle distintos nombres en cada uno de los países que habita desde Nicaragua hasta el sur de Latinoamérica",},
        { name: "twitter:image", content: "https://efectomariposa.org/cpg/albums/userpics/10001/2/normal_queltehue.jpg",
        },
        // Facebook OpenGraph
        { property: "og:title", content: ""},
        { property: "og:url", content: "https://efectomariposa.org/queltehue"},
        { property: "og:site_name", content: "Efecto Mariposa"},
        { property: "og:type", content: "website" },
        { property: "og:image", content: "https://efectomariposa.org/cpg/albums/userpics/10001/2/normal_queltehue.jpg"},
        {property: "og:description", content: "Conocido en Chile como queltehue o tregille, el Vanellus chilensis adquierle distintos nombres en cada uno de los países que habita desde Nicaragua hasta el sur de Latinoamérica",
        },
      ],
    };
  },

  data() {
    return {
      sharing: {
        url: "https://www.efectomariposa.org/queltehue",
        title: "Aves de Chile: Vanellus chilensis conocido en Chile como queltehue o tregille",
        description:"Conocido en Chile como queltehue o tregille, el Vanellus chilensis adquierle distintos nombres en cada uno de los países que habita desde Nicaragua hasta el sur de Latinoamérica.",
        quote: "Conocido en Chile como queltehue o tregille, el Vanellus chilensis adquierle distintos nombres en cada uno de los países que habita desde Nicaragua hasta el sur de Latinoamérica",
        twitterUser: "@OrgMariposa",
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
}

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

