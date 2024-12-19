// const { defineConfig } = require('cypress');
// const { exec } = require('child_process');

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       on('task', {
//         runLighthouse(url) {
//           return new Promise((resolve, reject) => {
//             exec(
//               `npx lighthouse ${url} --output json --output-path ./cypress/fixtures/lighthouse-report.json`,
//               (error, stdout, stderr) => {
//                 if (error) {
//                   console.error('Error ejecutando Lighthouse:', stderr);
//                   return reject(stderr);
//                 }
//                 console.log('Lighthouse ejecutado correctamente:', stdout);
//                 resolve('Reporte generado en cypress/fixtures/lighthouse-report.json');
//               }
//             );
//           });
//         },
//       });
//     },
//   },
// });

// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });

// const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
// //const { lighthouse, pa11y, prepareAudit } = require("cypress-audit");
// //const { pally } =require("@cypress-audit/pally")
// module.exports = {
//   e2e: {
//   baseUrl: "https://www.google.com", // this is your app
//   setupNodeEvents(on, config) {
//     on("before:browser:launch", (browser = {}, launchOptions) => {
//       prepareAudit(launchOptions);
//   });

//     on("task", {
//       lighthouse: lighthouse(),
//       });
//     },
//   },
// };

// const { defineConfig } = require('cypress')
// const { lighthouse, pa11y, prepareAudit } = require("cypress-audit");

// module.exports = defineConfig({
//   e2e: {
//     baseUrl: 'https://autonoma.edu.co',
//     setupNodeEvents(on, config) {

//     on("before:browser:launch", (browser = {}, launchOptions) => {
//       prepareAudit(launchOptions);
//     });

//     on("task", {
//       lighthouse: lighthouse(), // calling the function is important
//       pa11y: pa11y(), // calling the function is important
//     });
//   },
// })

// const { lighthouse, prepareAudit } = require('@cypress-audit/lighthouse')

// module.exports = (on, config) => {
//   on('before:browser:launch', (browser = {}, launchOptions) => {
//     prepareAudit(launchOptions)
//   })

//   on('task', {
//     async lighthouse(allOptions) {
//       let txt
//       // calling the function is important
//       const lighthouseTask = lighthouse((lighthouseReport) => {
//         let lighthouseScoreText = ''
//         let lighthouseResult = lighthouseReport?.lhr?.categories
//         let lighthousePerformance =
//           'Performance: ' + lighthouseResult?.performance?.score + '\n'
//         let lighthouseAccessibility =
//           'Accessibility: ' + lighthouseResult?.accessibility?.score + '\n'
//         let lighthouseBestPractices =
//           'Best Practices: ' +
//           lighthouseResult?.['best-practices']?.score +
//           '\n'
//         let lighthouseSEO = 'SEO: ' + lighthouseResult?.seo?.score + '\n'
//         lighthouseScoreText =
//           lighthousePerformance +
//           lighthouseAccessibility +
//           lighthouseBestPractices +
//           lighthouseSEO

//         console.log(lighthouseScoreText)
//         txt = lighthouseScoreText
//       })

//       const report = await lighthouseTask(allOptions)
//       // insert the text into the report returned the test
//       report.txt = txt
//       return report
//     },
//   })
// }

///////////////////////////////////////////////////////////////////////////
//profe
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
module.exports = {
  e2e: {
    baseUrl: "https://www.google.com",
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        lighthouse: lighthouse(),
      });
    },
  },
};

// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   // add this line
//   chromeWebSecurity: false,

//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });
//////////////////////////////////////////////////////////////////////////////
