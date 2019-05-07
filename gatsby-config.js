module.exports = {
  siteMetadata: {
    title: 'Columbia University APAHM',
    siteUrl: 'https://www.columbia.edu/cu/apahm',
    author: 'Ivy Chen',
    description: 'Columbia University APAHM (Asian Pacific American Heritage Month)'
  },
  pathPrefix: '/cu/apahm',
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`librebaskerville`, `open sans`]
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630
            }
          },
          'gatsby-remark-copy-linked-files'
        ]
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-link`
  ]
};
