module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "recipes",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "alldata",
        fieldName: "alldata",
        url: "https://api-us-east-1.graphcms.com/v2/ckupxruq20k1801xq7sxv031r/master",
      },
    }
],
};
