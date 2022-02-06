import CMS from 'netlify-cms-app'

import cloudinary from 'netlify-cms-media-library-cloudinary'

import PostPreview from './preview-templates/PostPreview'

CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('post', PostPreview)