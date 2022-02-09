const { createOpenGraphImage } = require("gatsby-plugin-open-graph-images");
// const { fmImagesToRelative } = require('gatsby-remark-relative-images');
// const { createFilePath } = require('gatsby-source-filesystem')
const path = require(`path`);

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;

    //const postTemplate = path.resolve('src/components/templates/post.js');
  
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

    const postPages = await graphql(`
    {
      allPrismicPost {
        nodes {
          id
          uid
        }
      }
    }
  `)

  postPages.data.allPrismicPost.nodes.forEach((page) => {
    createPage({
      path: `/posts/${page.uid}`,
      component: path.resolve(__dirname, 'src/templates/post.js'),
      context: {
        id: page.id,
      },
    })
  })

};


// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }