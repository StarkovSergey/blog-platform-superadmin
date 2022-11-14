import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { BackLink } from '../../common/components/BackLink/BackLink'
import { Breadcrumbs } from '../../common/components/Breadcrumbs/Breadcrumbs'
import { Loader } from '../../common/components/Loader/Loader'
import { useAppDispatch } from '../../common/hooks/useAppDispatch'
import { useAppSelector } from '../../common/hooks/useAppSelector'
import { Paths } from '../../common/routes'
import { MainSection } from '../../layout/MainSection/MainSection'

import { fetchBlog } from './blog-actions'
import style from './Blog.module.css'
import { BlogDescription } from './BlogDescription/BlogDescription'
import { selectBlog, selectBlogStatus } from './selectors'

export const Blog = () => {
  const { id } = useParams()
  const blog = useAppSelector(selectBlog)
  const status = useAppSelector(selectBlogStatus)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (id) dispatch(fetchBlog(id))
  }, [])

  const breadcrumbs = [
    {
      title: 'Blogs',
      link: Paths.Blogs,
    },
    {
      title: blog.name,
    },
  ]

  return status === 'loading' ? (
    <Loader className={style.loader} />
  ) : (
    <MainSection>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <BackLink to={Paths.Blogs} linkText="Back to blogs" className={style['back-link']} />
      <div className={style.cover}>
        <img src="//unsplash.it/1028/312" alt="blog cover" />
      </div>
      <BlogDescription blog={blog} />
    </MainSection>
  )
}
