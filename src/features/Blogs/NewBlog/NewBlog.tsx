import React from 'react'

import { Paths } from '../../../common/routes'
import { BlogModifyingPage } from '../BlogModifyingPage/BlogModifyingPage'
import { addBlog } from '../blogs-actions'

export const NewBlog = () => {
  const breadcrumbs = [
    {
      title: 'Blogs',
      link: Paths.Blogs,
    },
    { title: 'Add' },
  ]

  return (
    <BlogModifyingPage
      breadcrumbs={breadcrumbs}
      submitButtonText="Add blog"
      asyncCallback={addBlog}
    />
  )
}
