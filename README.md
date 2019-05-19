# CU APAHM (Asian Pacific American Heritage Month)

Welcome to the website for CU APAHM!
[http://www.columbia.edu/cu/apahm/](http://www.columbia.edu/cu/apahm/)

## Styles:
* Accent Color: APAHM teal
* Display Font: Lovelo Black
* Text Font: Source Sans Pro
* Built using [GatsbyJS (React, GraphQL, Webpack)](https://www.gatsbyjs.org/docs/) based on the `gatsby-starter-ceevee` (Gatbsy v1) theme.

## Changelog:
* 2018-2019: Gatsby v2
  - Required to update to Gatsby v2 and upgrade peer dependencies as per [Migrating from v1 to v2 doc](https://www.gatsbyjs.org/docs/migrating-from-v1-to-v2/)
  - Removed unnecessary `gatsby-starter-ceevee` components
  - Ran source code through ESLint
* 2017-2018: Gatbsy v1
  - Added Google Analytics tracking via `react-ga`
  - Smoothscroll using `react-scroll` plugin
  - Added pagination using `gatsby-link`
  - Added page transitions based on [this discussion](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-page-transitions)
  - Animated navigation [link underlines](http://tobiasahlin.com/blog/css-trick-animating-link-underlines/)
  - Change [background on sticky navigation bar scroll](https://stackoverflow.com/questions/44612364/toggle-class-based-on-scroll-react-js)
  - [Background filter](http://www.22bulbjungle.com/background-image-color-overlay-create-a-filter-look-with-css/)
  - Modified block grids to have two columns on mobile small, and one column on mobile narrow
  - Deployment on CircleCI (hacky, requires ssh/scp)

## TODO:
* Look into CMS systems ;-;

## Quick Start

1. `git clone` or fork the apahm repository
2. Ensure node/npm installed on machine
3. Install gatsby command line interface: `npm install --global gatsby-cli`
4. `cd apahm`
5. `npm install`
6. `gatsby develop` - starts a hot-reloading environment accessible at `localhost:8000`
7. Start editing the pages in `src/pages`. Saved changes will live reload in the browser.
8. `gatsby build` - creates optimized prod build and static files to `public/`
9. `gatsby serve` - starts local HTML server for testing build

---

## Developer Walkthrough

### Updating Board Members

* Two files (`_boardmembers.js` and `_pastmembers.js`) are used to import the image urls for all Current and Past board members and export them as components. We [import these exported components](https://stackoverflow.com/questions/37200080/how-to-export-imported-object-in-es6) in `board.js` to display board member images.

### CUIT Site Permissions
- Request `apahm` unix group permissions from CUIT (requires CU advisor permission)
- Optional: Set up SFTP between local and remote

### Deployment
Deploy static files (in `/public/` directory) upon build.

Server: `cunix.columbia.edu/www/data/cu/apahm`. Must have valid CUNIX credentials.

## Contributors:
* James Xu - 2020
* [Ivy Chen](www.linkedin.com/in/ivycny) - 2018/2019
* Anna Wen - 2017

## Base Theme Credits

🚀 Gatsby Starter - CeeVee | Design by Styleshout | Developed in React ⚛️ by Aman Mittal

#### License

MIT
