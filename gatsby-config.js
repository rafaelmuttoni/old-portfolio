module.exports = {
  siteMetadata: {
    title: `Rafael Muttoni - Front-End Developer`,
    description: `Hi, my name is Rafael Muttoni. I'm a self-taught Front-End Developer and this is my Website.`,
    author: `@rafaelmuttoni`,
    siteUrl: `https://rafaelmuttoni.com`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
      }
    },
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rafael Muttoni - Web Developer`,
        short_name: `Rafael Muttoni`,
        start_url: `/`,
        background_color: `#282A36`,
        theme_color: `#282A36`,
        display: `minimal-ui`,
        icon: `static/assets/img/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
