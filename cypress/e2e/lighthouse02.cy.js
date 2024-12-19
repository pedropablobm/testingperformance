
describe("Prueba de Métricas Lighthouse Desktop and Mobile", () => {
    it("should capture metrics for the desktop and mobile", () => {

        //Umbrales desktop y mobil
       const thresholdDesktop = {
           performance: 10,
           accessibility: 90,
           "first-contentful-paint": 11800,
           "largest-contentful-paint": 12500,
           "total-blocking-time": 11200,
           "cumulative-layout-shift": 0.1,
           "speed-index": 13400,
       };


       const thresholdMobile = {
           performance: 10,
           "first-contentful-paint": 8000,
           "largest-contentful-paint": 10000,
           "total-blocking-time": 4000,
           "cumulative-layout-shift": 0.2,
           "speed-index": 12000,
       };

       //Configuracion para desktop
       const lighthouseConfigDesktop = {
           formFactor: 'desktop',
           screenEmulation: { disabled: true },
           failOnThresholdsError: false
       };



       //Configuracion para mobile
       const lighthouseConfigMobile = {
           formFactor: 'mobile',
           screenEmulation: { disabled: false, viewport: { width: 375, height: 667, deviceScaleFactor: 3 } },
           failOnThresholdsError: false
       };

       //visitar pagina principal

        cy.visit("/");

        //ejecutar lighthouse para desktop

        //Ejecutar Lighthouse en modo desktop
         cy.lighthouse(thresholdDesktop, lighthouseConfigDesktop).then((desktopResults) => {
            cy.log("Resultados para desktop:", JSON.stringify(desktopResults));

            //Guardar resultados de Desktop
            cy.writeFile('cypress/fixtures/lighthouse-report-desktop.json', desktopResults);
        });

       //Ejecutar Lighthouse en modo mobile
       cy.lighthouse(thresholdMobile, lighthouseConfigMobile).then((mobileResults) => {
         cy.log("Resultados para mobile:", JSON.stringify(mobileResults));

        //Guardar resultados de Mobile
        cy.writeFile('cypress/fixtures/lighthouse-report-mobile.json', mobileResults);
       });


        });
     });








    //   cy.lighthouse(
    //     {
    //       performance: 10,
    //       'first-contentful-paint': 4480,
    //       'largest-contentful-paint': 10500,
    //       'cumulative-layout-shift': 0.1,
    //       'total-blocking-time': 11500,
    //       'speed-index': 17400,
    //     },
    //     {
    //       formFactor: "desktop",
    //       screenEmulation: {
    //         mobile: false,
    //         disable: false,
    //         width: Cypress.config("viewportWidth"),
    //         height: Cypress.config("viewportHeight"),
    //         deviceScaleRatio: 1,
    //       },
    //     })
    //     ;
    //     //cy.writeFile('results/final-report.json', report);
    //   });
    // });




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