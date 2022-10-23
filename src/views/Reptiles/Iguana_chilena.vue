<template>
  <div>
    <Menu />
    <title>
      Iguana chilena (Callopistes maculatus) es el reptil más grande del país
    </title>
    <v-container>
      <v-row class="justify-center">
        <v-col xs="12" sm="12" md="12" lg="12" xl="12">
          <h1>"Iguana Chilena (Callopistes maculatus)"</h1>
          <p>22 de febrero 2022</p>
          
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-img
          :src="require('@/assets/iguana_chilena.jpeg')"
          max-height="400"
          max-width="800"
          class="fotonota"
          alt="Iguana Chilena (Callopistes maculatus)"
        ></v-img>
      </v-row>
      <hr class="mb-5" />
      <v-row class="texto">
        <p>
          La Iguana chilena es el reptil más grande del país, su largo total
          alcanza los 50 centímetros. A pesar de su tamaño, esta especie
          endémica es muy tímida, escapa rápidamente ante la presencia humana y
          se esconde bajo rocas, cactus o en sus cuevas. Tiene razones de sobra
          para temer al hombre. La caza indiscriminada para ser vendida como
          mascota diezmo la población hasta el punto de desaparecer en algunas
          zonas. Se estima que entre 1985 y 1993 fueron exportados 50.000
          ejemplares vivos. La población se ha recuperado en los sectores donde
          hubo sobrevivientes.
        </p>
        <p>
          Habita ambientes de matorral y cactáceas, con sectores rocosos y
          arenales ubicados desde Paposo en la Región de Antofagasta hasta
          Cauquenes en la Región del Maule, desde la zona costera hasta 2.500
          metros sobre el nivel del mar. A medida que sus poblaciones alcanzan
          los sectores más australes, la distribución en altura disminuye
          paulatinamente.
        </p>
        <p>
          En la zona central y en la zona sur su reposo invernal es más
          prolongado que el de otros reptiles, iniciando su actividad recién a
          fines de la primavera. Mientras que en la zona norte se mantiene
          activa durante los meses de invierno. El comportamiento de cortejo
          registrado consiste en que el macho persigue a la hembra hasta
          aprisionarla por el cuello con sus mandíbulas.
        </p>
        <p>
          Es un depredador activo que se alimenta de insectos como los
          coleópteros, de algunos roedores, reptiles pequeños como la culebra de
          cola larga y otros lagartos, también de carroña y se ha documentado
          canibalismo. Puede trepar arbustos para capturar a las aves en sus
          nidos. Algunas poblaciones de altura complementan su dieta carnívora
          con frutos. Las iguanas jóvenes consumen presas invertebradas. Su
          reproducción es ovípara, pone hasta doce huevos.
        </p>
        <p>
          Actualmente, su población se encuentra en la categoría de conservación
          de especie Casi amenazada y para la ley de caza está calificada como
          vulnerable. por lo que está prohibida su captura. Recientemente se
          detectó una pequeña población en la Reserva Nacional La Chimba y
          alrededores, para preservarla es relevante el control de las amenazas
          que puedan afectar este hábitat como son la instalación de
          microbasurales, quemas clandestinas o extracción de ripio desde el
          sector.
        </p>
        
        <h3 class="enlaces_bibliografia">Enlace a fuentes:</h3>

        <p class="enlaces_bibliografia">
          <a href="https://www.researchgate.net/publication/347575723">
            Ampliación del límite norte de distribución de Callopistes maculatus
            de Juan Contreras, Mauricio Mora-Carreño y Jorge Mella.
          </a>
        </p>
        <p class="enlaces_bibliografia">
          <a
            href="http://www.corma.cl/wp-content/uploads/2020/03/gui-a-de-campo-reptiles-del-centro-sur-de-chile.pdf"
          >
            Guía de campo. Reptiles de Chile de Diego Demange .
          </a>
        </p>

        <p class="enlaces_bibliografia">
          <a
            href="https://clasificacionespecies.mma.gob.cl/wp-content/uploads/2019/10/Callopistes_maculatus_12RCE_FIN.pdf"
          >
            Iguana Chilena (Callopistes maculatus). Clasificación de Especies
            Ministerior del Medio Ambiente de Chile.
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
  name: "IguanaChilena",
  components: {
    Menu,
  },
  metaInfo() {
    return {
      title: "Iguana chilena (Callopistes maculatus) es el reptil más grande del país",

      meta: [
        // Twitter Card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:title",
          content: "Iguana chilena (Callopistes maculatus) es el reptil más grande del país",
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
          content: "Iguana chilena (Callopistes maculatus) es el reptil más grande del país",
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
        url: "https://efectomariposa.org/iguanachilena",
        title: "Iguana chilena (Callopistes maculatus) es el reptil más grande del país",
        description:
          "",
        quote:
          "Iguana chilena (Callopistes maculatus) es el reptil más grande del país",
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

