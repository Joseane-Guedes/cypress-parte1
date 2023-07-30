const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'nh2uas',

  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
