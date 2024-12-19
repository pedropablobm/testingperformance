describe(" Lighthouse Performance Metrics - Desktop and Mobile ", () => {
    it("should capture metrics for the desktop and mobile", () => {

       cy.visit("/")
        cy.lighthouse({
          performance: 41,
          'first-contentful-paint': 6910,
          'largest-contentful-paint': 9480,
          'cumulative-layout-shift': 0.1,
          'total-blocking-time': 1320,
          'speed-index': 17400,
        },


    );

    });  })



    //   cy.vitals({ thresholds: {
    //     "lcp": 2500,
    //     "fid": 100,
    //     "cls": 0.1,
    //     "fcp": 1800,
    //     "ttfb": 600,
    //     "inp": 200
    //   } });

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
//     });
//   });