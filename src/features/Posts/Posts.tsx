import React, { useEffect, useState } from 'react'

import { Breadcrumbs } from '../../common/components/Breadcrumbs/Breadcrumbs'
import { Button } from '../../common/components/Button/Button'
import { Loader } from '../../common/components/Loader/Loader'
import { useAppDispatch } from '../../common/hooks/useAppDispatch'
import { useAppSelector } from '../../common/hooks/useAppSelector'
import { Paths } from '../../common/routes'
import { MainSection } from '../../layout/MainSection/MainSection'
import { BlogItem } from '../Blogs/BlogItem/BlogItem'

import { PostItem } from './PostItem/PostItem'
import { PostModal } from './PostModal/PostModal'
import { addPost, fetchPosts } from './posts-actions'
import { addPostParam } from './posts-api'
import style from './Posts.module.css'
import { selectPosts, selectPostsStatus } from './selectors'

export const Posts = () => {
  const status = useAppSelector(selectPostsStatus)
  const posts = useAppSelector(selectPosts)
  const dispatch = useAppDispatch()

  const [isAddPostModalOpen, setIsAddPostModalOpen] = useState(false)
  const addNewPostButtonHandler = () => {
    setIsAddPostModalOpen(true)
  }

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  const breadcrumbs = [
    {
      title: 'Posts',
      link: Paths.Posts,
    },
  ]

  const addPostHandler = (param: addPostParam) => {
    dispatch(addPost(param))
      .unwrap()
      .then(() => {
        setIsAddPostModalOpen(false)
      })
      .catch(e => {
        alert(e)
      })
  }

  return (
    <MainSection>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      {status === 'loading' ? (
        <Loader />
      ) : (
        <div className={style['content-box']}>
          <Button onClick={addNewPostButtonHandler} className={style['add-button']}>
            Add post
          </Button>
          <ul className={style.grid}>
            {posts.map(post => {
              return <PostItem key={post.id} post={post} />
            })}
          </ul>
        </div>
      )}
      <PostModal
        title="Add post"
        isOpen={isAddPostModalOpen}
        onClose={() => setIsAddPostModalOpen(false)}
        onSubmit={addPostHandler}
      />
    </MainSection>
  )
}
