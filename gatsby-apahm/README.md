# CU APAHM (Asian Pacific American Heritage Month)

Welcome to the website for CU APAHM!
[http://www.columbia.edu/cu/apahm/(http://www.columbia.edu/cu/apahm/)

## Styles:
* Accent Color: APAHM teal
* Display Font: Lovelo Black
* Text Font: Source Sans Pro
* Built using [GatsbyJS (React, GraphQL, Webpack)](https://www.gatsbyjs.org/docs/) based on the `gatsby-starter-ceevee` theme.

## Additional Features:
* Added Google Analytics tracking via `react-ga`
* Smoothscroll using `react-scroll` plugin
* Added pagination using `gatsby-link`
* Added page transitions based on [this discussion](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-page-transitions)
* Animated navigation [link underlines](http://tobiasahlin.com/blog/css-trick-animating-link-underlines/)
* Change [background on sticky navigation bar scroll](https://stackoverflow.com/questions/44612364/toggle-class-based-on-scroll-react-js)
* [Background filter](http://www.22bulbjungle.com/background-image-color-overlay-create-a-filter-look-with-css/)
* Modified block grids to have two columns on mobile small, and one column on mobile narrow

## TODO:
* Archives page using GraphQL to query data from Markdown files for each year
* Update sponsors

## Quick Start

1. `git clone` or fork the apahm repository
2. Ensure node/npm installed on machine
3. Install gatsby command line interface: `npm install --global gatsby-cli`
4. `cd apahm`
5. `gatsby develop` - starts a hot-reloading environment accessible at `localhost:8000`
6. Start editing the pages in `src/pages`. Saved changes will live reload in the browser.
7. `gatsby build` - creates optimized prod build
8. `gatsby serve` - starts local HTML server for testing build

```

## Developer Walkthrough

### Updating Board Members

* To maintain separation of concerns, we create two underscore-prefixed components `_boardmembers.js` and `_pastmembers.js` that import the image urls for all Current and Past board members. We use these links in other components (namely `Board` and the `board.js` page) as [exported imports](https://stackoverflow.com/questions/37200080/how-to-export-imported-object-in-es6)

### CUIT Site Permissions
- Request `apahm` unix group permissions from CUIT (requires advisor permission)
- Optional: Set up SFTP between local and remote

## Contributors:
* [Ivy Chen](www.linkedin.com/in/ivycny) - APAHM site 2018
* Anna Wen - 2017

## Influences:
* [Cardiogr.am](https://cardiogr.am/)
* [Bricolage Blog](https://github.com/KyleAMathews/blog) - for generating pages

## Base Theme Credits

🚀 Gatsby Starter - CeeVee | Design by Styleshout | Developed in React ⚛️ by Aman Mittal

**[Preview Link](https://gatsby-starter-ceevee.surge.sh)**

### Features:

* Based on the Ceevee site template, design by [Styleshout](https://www.styeshout.com/)
* Single Page Resume/Portfolio site
* Target audience Developers, Designers, etc.
* Used CSS Modules, easy to manipulate
* FontAwsome Library for icons
* Responsive Design, optimized for Mobile devices


### Contributors Welcome

#### License

MIT

## Contributors

* [Aman Mittal](www.amanhimself.me)
* [Joe](https://github.com/jastuccio)
