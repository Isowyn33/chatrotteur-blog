let facebook_pixel = ''
let gtm = ''

module.exports = {
  siteMetadata: {
    title: `Chatrotteur's Blog`,
    description: `Voyage + Gastronomie = <3`,
    author: `Yoann MURAT`,
    siteUrl: `https://chaventures.netlify.com/`,
    phone: '12345',
    fax: '12345',
    address: '123 fake street',
    email: 'contact@test.com'

  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: gtm,
        includeInDevelopment: false
      }
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: facebook_pixel,
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/assets/images/gatsby-icon.png'
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://api-chaventures.herokuapp.com`,
        queryLimit: 1000, // Default to 100
        contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          `article`,
          `user`
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-styled-components`
  ],
}
