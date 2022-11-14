import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { BackLink } from '../../common/components/BackLink/BackLink'
import { Breadcrumbs } from '../../common/components/Breadcrumbs/Breadcrumbs'
import { Loader } from '../../common/components/Loader/Loader'
import { useAppDispatch } from '../../common/hooks/useAppDispatch'
import { useAppSelector } from '../../common/hooks/useAppSelector'
import { Paths } from '../../common/routes'
import { MainSection } from '../../layout/MainSection/MainSection'
import { selectPostsStatus } from '../Posts/selectors'

import { fetchPost } from './post-actions'
import style from './Post.module.css'
import { selectPost } from './selectors'

export const Post = () => {
  const { id } = useParams()
  const post = useAppSelector(selectPost)
  const status = useAppSelector(selectPostsStatus)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (id) dispatch(fetchPost(id))
  }, [])

  const breadcrumbs = [
    {
      title: 'Posts',
      link: Paths.Posts,
    },
    {
      title: post.blogName,
      link: `${Paths.Blog}${post.blogId}`,
    },
  ]

  return status === 'loading' ? (
    <Loader className={style.loader} />
  ) : (
    <MainSection>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <BackLink to={Paths.Posts} linkText="Back to posts" className={style['back-link']} />
      <div className={style.cover}>
        <img src="//unsplash.it/940/432" alt="post cover" />
      </div>
      <p>{post.content}</p>
    </MainSection>
  )
}
