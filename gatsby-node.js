// const { createOpenGraphImage } = require('gatsby-plugin-open-graph-images')

const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions

    // Completely removed OG image generation for debugging

    const pages = await graphql(`
        {
            allPrismicPage {
                nodes {
                    id
                    uid
                }
            }
        }
    `)

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

    const coursePages = await graphql(`
        {
            allPrismicCourse {
                nodes {
                    data {
                        course_pages {
                            course_page {
                                uid
                                id
                            }
                        }
                    }
                    id
                    uid
                    prismicId
                }
            }
        }
    `)

    pages.data.allPrismicPage.nodes.forEach(page => {
        createPage({
            path: `/${page.uid}`,
            component: path.resolve(__dirname, 'src/templates/page.js'),
            context: {
                id: page.id,
            },
        })
    })

    postPages.data.allPrismicPost.nodes.forEach(page => {
        createPage({
            path: `/posts/${page.uid}`,
            component: path.resolve(__dirname, 'src/templates/post.js'),
            context: {
                id: page.id,
            },
        })
    })

    coursePages.data.allPrismicCourse.nodes.forEach(course => {
        const courseUid = course.uid
        const cpages = course.data.course_pages

        createPage({
            path: `/courses/${courseUid}`,
            component: path.resolve(__dirname, 'src/templates/course.js'),
            context: {
                id: course.prismicId,
            },
        })

        cpages.forEach(page => {
            createPage({
                path: `/courses/${courseUid}/${page.course_page.uid}`,
                component: path.resolve(__dirname, 'src/templates/coursePage.js'),
                context: {
                    pageId: page.course_page.id,
                    courseId: course.prismicId,
                },
            })
        })
    })
}
