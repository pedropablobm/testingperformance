//  describe('template spec', () => {
//    it('passes', () => {
//      cy.visit('https://autonoma.edu.co')
//      cy.vitals()
//      cy.reportVitals()
//    })
//  })

// describe("Web Vitals", () => {
//   it("should pass the audits for a page load", () => {
//     cy.vitals({ url: "https://www.google.com/" });
//   });

//   it("should pass the audits for a customer journey", () => {
//     cy.startVitalsCapture({
//       url: "https://www.google.com/",
//     });

//     cy.reportVitals();
//   });
// });

describe("Web Vitals", () => {
  it("Test Performance Cypress web vitals", () => {
    cy.visit('/')
    cy.vitals({ thresholds: {
      "lcp": 2500,
      "fid": 100,
      "cls": 0.1,
      "fcp": 1800,
      "ttfb": 600,
      "inp": 200
    } });

    // cy.vitals({
    //   url: "https://autonoma.edu.co/",
    //   onReport({ results, strict, thresholds }) {
    //     console.log(results); // { lcp: ..., fid: ..., }
    //   },
    // });

    // cy.reportVitals({ thresholds: {
    //   "lcp": 2500,
    //   "fid": 100,
    //   "cls": 0.1,
    //   "fcp": 1800,
    //   "ttfb": 600,
    //   "inp": 200
    // } }); // Test Google
  });
});