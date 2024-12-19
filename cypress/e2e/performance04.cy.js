import "@cypress-audit/lighthouse/commands";
describe('cypress test using lighthouse', () => {
    it('Lighthouse check scores on Home Page', ()=>{
        cy.once('uncaught:exception', () => false);
        cy.visit("https://www.google.com.co")
        cy.lighthouse({
          performance: 80,
          accessibility: 85,
          "best-practices": 95,
          seo: 75,
          pwa: 30,
          'first-contentful-paint': 2900,
          'largest-contentful-paint': 3000,
          'cumulative-layout-shift': 0.1,
          'total-blocking-time': 500,
        });
    });  })