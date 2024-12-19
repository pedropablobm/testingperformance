
describe("Prueba de Métricas Lighthouse Desktop and Mobile", () => {
  it("should capture metrics for the desktop and mobile", () => {
    
    cy.visit("/");
    // cy.visit('/', {
    //   onBeforeLoad(win) {
    //     delete win.navigator.__proto__.serviceWorker;
    //   },
    // }); 


    cy.lighthouse(
      {
        performance: 10,
        'first-contentful-paint': 3800,
        'largest-contentful-paint': 10500,
        'cumulative-layout-shift': 0.1,
        'total-blocking-time': 11500,
        'speed-index': 17400,
      },
      {
        formFactor: "desktop",
        screenEmulation: {
          mobile: true,
          disable: false,
          width: Cypress.config("viewportWidth"),
          height: Cypress.config("viewportHeight"),
          deviceScaleRatio: 1,
        },
      })
      ;
    });
  });
    


 
  //   const thresholdmobile = {
  //       performance: 40,
  //       accessibility: 90,
  //       "first-contentful-paint": 2500,
  //       "largest-contentful-paint": 4200,
  //       "total-blocking-time": 500,
  //       "cumulative-layout-shift": 0.1,
  //       "speed-index": 7200,
  //   };

  //   //Configuracion para desktop
  //   const lighthouseConfigDesktop = {
  //       formFactor: 'desktop',
  //       screenEmulation: { disable: true },
  //       failOnThresholdsError: false
  //   };

  //   //Configuracion para mobile
  //   const lighthouseConfigMobile = {
  //       formFactor: 'mobile',
  //       screenEmulation: { disable: false, visualViewport: { width: 375, height: 667, deviceScaleFactor: 3 } },
  //       failOnThresholdsError: false
  //   };

  //   //Visitar página principal
    
  //   cy.visit('/');
    
  //   //Ejecutar Lighthouse en modo desktop
  //   cy.lighthouse(thresholdDesktop, lighthouseConfigDesktop).then((desktopResults) => {
  //     cy.log("Resultados para desktop:", JSON.stringify(desktopResults));
    
  //   //Guardar resultados de Desktop
  //   cy.writeFile('cypress/fixtures/lighthouse-report-desktop.json', desktopResults);
  //   });

  //   //Ejecutar Lighthouse en modo mobile
  //   cy.lighthouse(thresholdMobile, lighthouseConfigMobile).then((mobileResults) => {
  //     cy.log("Resultados para mobile:", JSON.stringify(mobileResults));
    
  //   //Guardar resultados de Mobile
  //   cy.writeFile('cypress/fixtures/lighthouse-report-mobile.json', mobileResults);
  //   });

  // });



//});
//});



//     it('Genera un reporte Lighthouse para una URL', () => {
//         const url = 'https://autonoma.edu.co'; // Cambia a la URL que desees analizar

//         // Ejecuta la tarea que corre Lighthouse
//         cy.task('runLighthouse', url,{
//             performance: 40,
//             accessibility: 90,
//             'best-practices': 85,
//             seo: 70,
//             "first-contentful-paint": 2500,
//             "largest-contentful-paint": 4200,
//             "total-blocking-time": 500,
//             "cumulative-layout-shift": 0.1,
//             "speed-index": 7200,
//         }).then((message) => {
//           cy.log(message);

//           // Verifica que el archivo JSON fue generado
//           cy.readFile('cypress/fixtures/lighthouse-report.json').then((report) => {
//             expect(report).to.have.property('categories');
//             cy.log('Reporte leído correctamente:', JSON.stringify(report));
//           });
//         });
//       });

// });