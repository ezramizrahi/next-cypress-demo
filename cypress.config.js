const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      baseUrl: 'https://next-cypress-demo.vercel.app/'
    },
    video: false,
    numTestsKeptInMemory: 1,
    // chromeWebSecurity: false,
    reporter: 'mochawesome',
    reporterOptions: {
      reportFilename: "[name]-report",
      reportDir: 'mochawesome-report',
      overwrite: true,
      html: false,
      json: true
    }
  }
});