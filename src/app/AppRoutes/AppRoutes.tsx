import React from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'

import { Paths } from '../../common/routes'
import { Blog } from '../../features/Blog/Blog'
import { Blogs } from '../../features/Blogs'
import { EditBlog } from '../../features/Blogs/EditBlog/EditBlog'
import { NewBlog } from '../../features/Blogs/NewBlog/NewBlog'
import { Post } from '../../features/Post'
import { Posts } from '../../features/Posts/Posts'
import { Main } from '../../layout/Main'

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Navigate to="blogs" />} />
          <Route path={Paths.Blogs} element={<Blogs />} />
          <Route path={Paths.Blog} element={<Blog />} />
          <Route path={Paths.NewBlog} element={<NewBlog />} />
          <Route path={Paths.EditBlog} element={<EditBlog />} />
          <Route path={Paths.Posts} element={<Posts />} />
          <Route path={Paths.Post} element={<Post />} />
        </Route>
      </Routes>
    </>
  )
}
