<template>
 <div>
    <title>Buscador con todas la fauna de Chile</title>
     <Menu />
    <ais-index app-id="AGFDL4Y3YR" api-key="8f1a05291908e51a0887fd503604201d" index-name="leer">

        <ais-search-box placeholder="Escribe aquí"/>
        <div class="container">
            <ais-results>

                <template slot-scope="{ result }">
                    <div class="search-result">

                        <v-card class="mx-auto" max-width="344">
                            <a :href="result.url">
                                <h2 class="mt-5">
                                    <ais-highlight :result="result" attribute-name="title"></ais-highlight>
                                </h2>
                            </a>
                            <p>
                                <ais-highlight :result="result" attribute-name="description"></ais-highlight>
                            </p>
                            <v-img :src="result.image" align="center" height="200px" class="pa-4 mt-9 mx-4" :alt="result.name" />
                            <p class="pa-8">
                                <ais-highlight :result="result" attribute-name="estado"></ais-highlight>
                            </p>
                        </v-card>
                    </div>
                </template>

            </ais-results>

        </div>
        
        <div class="text-center">
            <v-pagination v-model="page" :length="2">
                <ais-pagination />
            </v-pagination>
        </div>

    </ais-index>
  </div>
</template>

<script>
import algoliasearch from 'algoliasearch/lite';
import 'instantsearch.css/themes/algolia-min.css';
import Menu from "@/components/Menu.vue";

export default {
    name: 'Buscar',
     components: {
        Menu,
     },
    data() {
        return {
            searchClient: algoliasearch(
                'B1G2GM9NG0',
                'aadef574be1f9252bb48d4ea09b5cfe5'
            ),
        };
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Libre+Bodoni&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&display=swap');

h2 {
    font-family: "Libre Bodoni", serif;
    padding: 20px;
}

.search-result p {
    color: rgb(49, 83, 83);
    font-family: "Libre Bodoni", "Roboto", sans-serif;
}

.search-result img {
    max-width: 100%;
    height: 70px;
    margin: 20px;
}


.container {
    margin: auto;
    padding: 1rem;
    text-align: center;
}

.search-panel {
    display: flex;
}

.search-panel__filters {
    flex: 1;
    margin-right: 5em;
}

.search-result {
    padding: 10px 20px 20px;
    width: 25%;
    border: solid 1px #EEE;
    box-shadow: 0 0 3px teal;
    position: relative;
    border-radius: 3px;
    min-width: 220px;
    background: #29A0B1;
    display: inline-block;
    transition: all .5s;
}

.ais-input {
    width: 25%;
    font-size: 15px;
    box-sizing: border-box;
    padding: 5px;
    border: 2px solid #29A0B1;
    border-radius: 20px;
    margin: 67px 90px;
}

.ais-search-box__submit,
.ais-clear {
    background: none;
    border: 20px;
    position: absolute;
    z-index: 30;
    top: 210px;
    left: 4em;
}

.ais-powered-by svg {
    vertical-align: bottom;
}

.ais-clear--disabled {
    display: none;
}

.pagination {
    margin: 2rem auto;
    text-align: center;
    display: inline;

}

@media only screen and (max-width: 700px) {

    .ais-input {
        width: 80%;
    }

    .ais-search-box__submit {
        top: 1200px;
        left: 4em;
    }
}
</style>
