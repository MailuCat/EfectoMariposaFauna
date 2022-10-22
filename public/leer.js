const algoliasearch = require("algoliasearch")
const ALGOLIA_APPLICATION_ID = 'AGFDL4Y3YR'
const ALGOLIA_ADMIN_API_KEY = '8f1a05291908e51a0887fd503604201d'
const ALGOLIA_INDEX_NAME = 'leer'

const client = algoliasearch(ALGOLIA_APPLICATION_ID, ALGOLIA_ADMIN_API_KEY)
const index = client.initIndex(ALGOLIA_INDEX_NAME)

const animales = require('./indice.json')
index.saveObjects(animales).then(({ objectIDs }) => {
  console.log(objectIDs);
});


//.then(objectIDs  => { 
  //console.log({objectIDs})
//})
//.catch(err => {
  //    console.error(err)
//})
