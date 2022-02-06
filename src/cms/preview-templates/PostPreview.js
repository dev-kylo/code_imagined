import React from 'react'
import { PostTemplate } from '../../components/templates/post'

const PostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  return (
    <PostTemplate 
        content={widgetFor('body')}
        title={entry.getIn(['data', 'title'])}
    />
  )
}


export default PostPreview;



// <BlogPostTemplate
// content={widgetFor('body')}
// description={entry.getIn(['data', 'description'])}
// tags={tags && tags.toJS()}
// title={entry.getIn(['data', 'title'])}
// />