/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import ReactGA from 'react-ga'
ReactGA.initialize('UA-109714075-1')
ReactGA.pageview(window.loaction.pathname + window.location.search)

//  exports.onRouteUpdate = (state, page, pages) => {
//   ReactGA.pageview(state.pathname);
// };
