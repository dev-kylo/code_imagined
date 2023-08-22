const { createOpenGraphImage } = require('gatsby-plugin-open-graph-images')

const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions

    createOpenGraphImage(createPage, {
        path: '/og-image/index.png',
        component: path.resolve(`src/layout/ogImage.js`),
        size: {
            width: 1200,
            height: 630,
        },
        context: {
            description: 'A character from The Great Sync Javascript Mental Model',
        },
    })

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
                    uid
                    id
                    data {
                        body {
                            ... on PrismicCourseDataBodyCoursePages {
                                items {
                                    course_page {
                                        uid
                                        id
                                    }
                                }
                                slice_type
                            }
                        }
                    }
                }
            }
        }
    `)

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
        console.log(course.data.body)
        const pages = course.data.body.find(bodyItem => bodyItem.slice_type === 'course_pages')

        pages.items.forEach(page => {
            console.log(page)
            createPage({
                path: `/courses/${courseUid}/${page.course_page.uid}`,
                component: path.resolve(__dirname, 'src/templates/coursePage.js'),
                context: {
                    id: page.course_page.id,
                },
            })
        })
    })
}
