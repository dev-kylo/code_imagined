const { createOpenGraphImage } = require("gatsby-plugin-open-graph-images");
const path = require(`path`);

exports.createPages = async ({ actions }) => {
    const { createPage } = actions;
  
    const openGraphImage = createOpenGraphImage(createPage, {
      path: "/og-image/index.png",
      component: path.resolve(`src/layout/ogImage.js`),
      size: {
        width: 1200,
        height: 630,
      },
      context: {
        description: "A character from The Great Sync Javascript Mental Model",
      },
    });
  };