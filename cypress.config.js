const { defineConfig } = require( "cypress" );

 

module.exports = defineConfig({

 projectId: 'cwtpnr' ,

 e2e: {baseUrl: 'http://lojaebac.ebaconline.art.br/' ,setupNodeEvents(on, config) {

      // implemente ouvintes de evento de nó aqui

  },

 },

 "scrollBehavior": "center"

});