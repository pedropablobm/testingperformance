it.only('shows the text report returned by from the plugins task', () => {
    cy.visit('/')

    const thresholds = {
      performance: 50,
      accessibility: 90,
      'best-practices': 80,
      seo: 80,
    }
    const opts = {
      formFactor: 'desktop',
      screenEmulation: {
        mobile: false,
        disable: false,
        width: Cypress.config('viewportWidth'),
        height: Cypress.config('viewportHeight'),
        deviceScaleRatio: 1,
      },
    }
    // cy.url()
    //   .then((url) => {
    //     cy.task('lighthouse', {
    //       url,
    //       thresholds,
    //       opts,
    //     })
    //   })
    //   .then((report) => {
    //     const { errors, results, txt } = report
    //     // our custom code in the plugins file has summarized the report
    //     cy.log(report.txt)
    //   })

      //cy.writeFile('cypress/fixtures/response.json',response.body)
      cy.request('https://www.google.com').then((response) => {
        cy.writeFile('cypress/fixtures/respuestas.json', response.log)
      })
  })