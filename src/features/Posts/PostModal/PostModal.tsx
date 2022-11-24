import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'

import dragonPlaceholder from '../../../assets/images/placeholders/dragon.jpg'
import { Button } from '../../../common/components/Button/Button'
import { InputText } from '../../../common/components/InputText/InputText'
import { BasicModal } from '../../../common/components/modals/BasicModal'
import { Select, SelectOption } from '../../../common/components/Select/Select'
import { Textarea } from '../../../common/components/Textarea/Textarea'
import { useAppDispatch } from '../../../common/hooks/useAppDispatch'
import { useAppSelector } from '../../../common/hooks/useAppSelector'
import { Post } from '../../../common/types'
import { fetchBlogs } from '../../Blogs'
import { selectBlogs } from '../../Blogs/selectors'
import { PostRequestParam } from '../posts-api'

import style from './PostModal.module.css'

type PropsType = {
  title: string
  isOpen: boolean
  onClose: Function
  onSubmit: (param: PostRequestParam) => void
  isEdit?: boolean
  post?: Post
}

export const PostModal = ({ title, isOpen, onClose, onSubmit, isEdit, post }: PropsType) => {
  const dispatch = useAppDispatch()

  const blogs = useAppSelector(selectBlogs)
  const selectOptions = blogs.map(blog => ({
    label: blog.name,
    value: blog.id,
  }))

  const [value, setValue] = useState<SelectOption | undefined>()

  const [formState, setFormState] = useState({
    name: '',
    description: '',
    content: '',
    id: '',
  })

  // for actual state initial form inputs (after request)
  useEffect(() => {
    if (isEdit) {
      setFormState({
        name: post!.title,
        description: post!.shortDescription,
        content: post!.content,
        id: '',
      })
    }
  }, [post])

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.currentTarget.name]: e.currentTarget.value,
    })
  }

  const selectHandler = (o: SelectOption) => {
    setValue(o)
    setFormState({
      ...formState,
      id: o.value,
    })
  }

  useEffect(() => {
    if (blogs.length === 0) {
      dispatch(fetchBlogs())
    }
  }, [blogs])
  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit({
      title: formState.name,
      shortDescription: formState.description,
      content: formState.content,
      blogId: formState.id,
    })
  }

  return (
    <BasicModal title={title} isOpen={isOpen} onClose={onClose}>
      <div className={style.box}>
        <form onSubmit={onSubmitHandler}>
          <div className={style.image}>
            <img src={dragonPlaceholder} alt="image" width="180" height="108" />
          </div>
          <InputText
            className={style.input}
            label="Post Name"
            value={formState.name}
            onChange={onChangeHandler}
            name="name"
          />
          <InputText
            className={style.input}
            label="Short description"
            value={formState.description}
            onChange={onChangeHandler}
            name="description"
          />
          {isEdit || (
            <Select
              className={style.select}
              options={selectOptions}
              value={value}
              onChange={selectHandler}
            />
          )}

          <Textarea
            label="Content"
            className={style.textarea}
            value={formState.content}
            onChange={onChangeHandler}
            name="content"
          />
          <Button className={style.button}>Publish</Button>
        </form>
      </div>
    </BasicModal>
  )
}
