<template>
  <div>
    <Menu />
    <title>Historia, misión y valores de Efecto Mariposa</title>
    <v-container class="m-6">
      <h1>Acerca de Efecto Mariposa</h1>
      <font-awesome-icon icon="fa-light fa-file-signature" />
      <h2 class="spacing-playground pa-3">Historia</h2>
      <p class="text-justify ma-12">
        Efecto Mariposa nace en octubre de 2021 en Santiago con la intención de
        difundir información sobre el comportamiento de la fauna de Chile,
        mientras revisamos investigaciones de especialistas verificamos como la
        actividad humana está perjudicando la alimentación, el proceso
        reproductivo y cuidado de las crías de los animales. Entonces optamos
        por ampliar nuestro foco a todo lo relacionado con el deterioro del
        ambiente natural y este medio de comunicación tomó el nombre “Efecto
        Mariposa”, una teoría de la física la cual plantea que el diminuto
        aleteo de una mariposa puede producir efectos impensados en el otro lado
        del mundo. Las consecuencias de la actividad del hombre está generando
        un daño directo evidente, pero ¿qué otras consecuencias inesperadas
        pueden surgir?.
      </p>
      <h2 class="spacing-playground pa-3">¿Qué somos?</h2>
      <p class="text-justify ma-12">
        Un medio de comunicación digital sobre la fauna chilena y la
        conservación de la naturaleza que aborda los temas basándose en estudios
        científicos y a la investigación periodística de las actividades
        económicas y políticas con impacto en la naturaleza.
      </p>
      <h2 class="spacing-playground pa-3">Misión</h2>
      <p class="text-justify ma-12">
        Informar de forma cercana, precisa e independiente con el fin de
        enriquecer los argumentos y opiniones del público, a la vez investigar
        las medidas de mitigación o políticas medioambientales y sus
        consecuencias en la fauna silvestre. Muy importantes, fomentar los
        vínculos afectivos con la naturaleza y sus habitantes no humanos.
      </p>
      <h2 class="spacing-playground pa-3">Nuestros Principios</h2>
      <p class="text-justify ma-12">
        Valoramos informar con independencia, sin servir a ningún grupo de
        interés practicando la transparencia sobre las fuentes citadas, todo el
        contenido tiene enlaces a las investigaciones originales. Consideramos
        que la visión homocéntrica llevó al planeta al borde de la
        autodestrucción, para nosotros la naturaleza debe estar en el centro de
        toda actividad. Respetamos a los animales como seres sintientes por lo
        que nuestros aliados, patrocinadores y anunciantes tendrán siempre
        actividades libres de crueldad hacia los animales.
      </p>
      <h2 class="spacing-playground pa-3">Contacto</h2>
      <p class="pb-6 ma-12">
        Si quieres más información sobre nosotros o tienes algo que decirnos
        puedes ocupar el formulario de contacto
        <router-link :to="{ path: '/contacto' }">(ir)</router-link> o escribir a
        marialuisa@efectomariposa.org.
      </p>
    </v-container>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
export default {
  name: "nosotros",
   components: {
        Menu,
     },

  metaInfo() {
    return {
      title: "Nuestra misión, visión y valores",
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&display=swap");

h1 {
  font-family: "Cinzel Decorative", cursive;
}
</style>
