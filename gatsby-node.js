const { createOpenGraphImage } = require("gatsby-plugin-open-graph-images");
const path = require(`path`);

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;

    const postTemplate = path.resolve('src/components/templates/post.js');
  
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

    return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            excerpt(pruneLength: 250)
            html
            id
            frontmatter {
              date
              path
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
        context: {},
      });
    });
  });


};