import React, { useEffect, useState } from 'react'

import { Breadcrumbs, Button, Loader } from '../../common/components'
import { useAppDispatch, useAppSelector } from '../../common/hooks'
import { Paths } from '../../common/routes'
import { MainSection } from '../../layout/MainSection/MainSection'

import { PostItem } from './PostItem/PostItem'
import { PostModal } from './PostModal/PostModal'
import { addPost, fetchPosts } from './posts-actions'
import { PostRequestParam } from './posts-api'
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

  const addPostHandler = (param: PostRequestParam) => {
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
