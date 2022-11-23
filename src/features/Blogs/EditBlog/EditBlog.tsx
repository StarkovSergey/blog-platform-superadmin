import React from 'react'

import { useLocation } from 'react-router-dom'

import { Breadcrumb } from '../../../common/components/Breadcrumbs/Breadcrumbs'
import { Paths } from '../../../common/routes'
import { BlogModifyingPage } from '../BlogModifyingPage/BlogModifyingPage'
import { updateBlog } from '../blogs-actions'
import { BlogRequestParam } from '../blogs-api'

import style from './EditBlog.module.css'

type PropsType = {}

export const EditBlog = ({}: PropsType) => {
  const location = useLocation()

  const breadcrumbs: Breadcrumb[] = [
    {
      title: 'Blogs',
      link: Paths.Blogs,
    },
    { title: 'Edit' },
  ]

  const getEditBlogThunk = (requestParam: BlogRequestParam) => {
    return updateBlog({
      requestParam,
      id: location.state.id,
    })
  }

  return (
    <BlogModifyingPage
      breadcrumbs={breadcrumbs}
      submitButtonText="save"
      asyncCallback={getEditBlogThunk}
      blog={location.state}
    />
  )
}
