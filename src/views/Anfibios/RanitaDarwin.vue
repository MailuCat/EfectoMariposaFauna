<template>
  <div>
    <Menu />
    <v-container>
      <title>Anfibios de Chile: Ranita de Darwin (Rhinoderma rufum)</title>
      <v-row class="justify-center">
        <v-col xs="12" sm="12" md="12" lg="12" xl="12">
          <h1>
            Ranita de Darwin del Norte (Rhinoderma rufum)
          </h1>
          <p>11 de marzo 2022</p>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-img
          :src="require('@/assets/ranitadarwin.jpg')"
          max-height="400px"
          max-width="800px"
          class="fotonota"
        ></v-img>
      </v-row>
      <hr class="mb-5" />
      <v-row class="texto">
        <p>
          Habita en las hojas caídas de bosques templados en los que se mezclan
          los grandes árboles de hoja ancha con coníferas de hoja perenne y
          también en sus pequeños arroyos. Las hembras de este anfibio de Chila
          ponen sus huevos en hojarascas. Cuando las larvas dentro de los huevos
          comienzan a moverse, los machos adultos los ingieren y los incuban en
          sus sacos vocales, donde se desarrollan las larvas hasta que son
          escupidas a los arroyos donde se produce la metamorfosis.
        </p>

        <p>
          Las vocalizaciones les sirven para comunicarse. Uno de los sonidos que
          emiten cuando están atrapadas y necesitan liberarse. En este contexto
          proyectan una secuencias de notas complejas que contienen armónicos,
          con segmentos de caos y una gran variedad de propiedades acústicas.
        </p>

        <p>
          Las llamadas consisten en chirridos repetidos de tonos medios en
          series sostenidas al comienzo de la manipulación, luego de esto la
          tasa de emisión decae y genera notas aisladas, cuando las ancas
          nuevamente se presionan retoma un ritmo rápido. Las notas tienen una
          composición mixta, armónica y caótica.
        </p>

        <p>
          Las investigaciones sobre su comportamiento están estancadas porque es
          muy posible que la especie se haya extinguido porque el último
          avistamiento científico fue en 1981, sin embargo, se requiere
          urgentemente más trabajo de estudio para determinar si este es el caso
          o no.
        </p>

        <p>
          La destrucción de la vegetación autóctona por la plantación de pinos y
          por la construcción de segundas residencias probablemente impactó a
          esta especie. Sin embargo, es poco probable que esto explique por
          completo su desaparición, cuyas causas no se comprenden completamente.
          Las disminuciones que han tenido lugar dentro de un hábitat adecuado
          pueden ser el resultado de amenazas como el cambio climático o
          enfermedades. La quitridiomicosis probablemente es la causa de su
          extención misteriosa.
        </p>
      
      <h3 class="enlaces_bibliografia">Enlace a fuentes</h3>

      <p class="enlaces_bibliografia">
        <a href="https://www.iucnredlist.org/species/19514/79809567"
          >Ranita de Darwin del Norte.Rhinoderma rufum. Lista Roja de los
          Animales
        </a>
      </p>
      <p class="enlaces_bibliografia">
        <a
          href="https://www.researchgate.net/publication/357151016_The_highly_variable_release_call_of_the_missing_Northern_Darwin%27s_frog_Rhinoderma_rufum"
        >
          The highly variable release call of the missing Northern Darwin's
          frog, Rhinoderma rufum
        </a>
      </p>
      </v-row>
    </v-container>
     <div class="share-network-list">
      <ShareNetwork
        v-for="network in networks"
        :network="network.network"
        :key="network.network"
        :style="{backgroundColor: network.color}"
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
  name: "RanitaDarwin",
  components: {
    Menu,
  },
   metaInfo() {
    
    return {
       title:'Ranita de Darwin (Rhinoderma rufum)',
      
      meta: [
     // Twitter Card
          {name: 'twitter:card', content: 'summary'},
          {name: 'twitter:title', content: 'Ranita de Darwin (Rhinoderma rufum)'},
          {name: 'twitter:description', content: 'Conoce a este anfibio de Chile posiblemente extinto'},
          // image must be an absolute path
          {name: 'twitter:image', content:''},
          // Facebook OpenGraph
          {property: 'og:title', content: 'Ranita de Darwin (Rhinoderma rufum)'},
          {property: 'og:site_name', content: 'Efecto Mariposa'},
          {property: 'og:type', content: 'website'},
          {property: 'og:image', content: ''},
          {property: 'og:description', content: 'Conoce al anfibio de Chile posiblementeextinto porque fue visto por última vez 1981.'}
      
      ]
    }
  },


    
   data () {
    return {
      
     
      sharing: {
        url: 'https://www.efectomariposa.org/ranitadarwin',
        title: 'Ranita de Darwin del Norte (Rhinoderma rufum)',
        description: 'El comportamiento de este anfibio de Chile, posiblemente extinto, que habitó desde la Primera a la Décima regiones y en la Patagonía.',
        quote: 'Ranita de Darwin del Norte (Rhinoderma rufum) es un anfibio de Chile posiblemente extinto',
        hashtags: 'animalesdeChile',
        twitterUser: 'OrgMariposa',
        image:''
      },
      networks: [
      
        { network: 'email', name: 'Email', icon: 'far fah fa-lg fa-envelope', color: '#333333' },
        { network: 'facebook', name: 'Facebook', icon: 'fab fah fa-lg fa-facebook-f', color: '#1877f2' },
        { network: 'telegram', name: 'Telegram', icon: 'fab fah fa-lg fa-telegram-plane', color: '#0088cc' },
        { network: 'twitter', name: 'Twitter', icon: 'fab fah fa-lg fa-twitter', color: '#1da1f2' },
        { network: 'whatsapp', name: 'Whatsapp', icon: 'fab fah fa-lg fa-whatsapp', color: '#25d366' },
       
      ]
    }
   }
  
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
