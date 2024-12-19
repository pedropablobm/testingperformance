describe('cypress test using lighthouse', () => {
    it('Lighthouse check scores on Home Page', ()=>{
        cy.once('uncaught:exception', () => false);
        cy.visit("/")

        cy.lighthouse({
          performance: 27,
          'first-contentful-paint': 7000,
          'largest-contentful-paint': 9600,
          'cumulative-layout-shift': 0.1,
          'total-blocking-time': 1780,
          'speed-index': 17400,
        },
        {
           formFactor: "desktop",
           screenEmulation: {
            mobile: false,
            disable: false,
            width: Cypress.config("viewportWidth"),
            height: Cypress.config("viewportHeight"),
            deviceScaleRatio: 1,
        },
    })
    cy.writeFile('cypress/fixtures/resultados.json', {
        performance: '27',
        firstcontentfulpaint: '7000',
        largestcontentfulpaint: '9600',
        cumulativelayoutshift: '0.1',
        totalblockingtime: '1780',
        speedindex: '17400'
        });
    //cy.writeFile('cypress/fixtures/response.json',response.performance)

    });
  });