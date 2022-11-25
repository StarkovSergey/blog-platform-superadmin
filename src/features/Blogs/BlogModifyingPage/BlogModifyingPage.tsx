import React, { ChangeEvent, FormEvent, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import {
  BackLink,
  Breadcrumb,
  Breadcrumbs,
  Button,
  InputText,
  Textarea,
} from '../../../common/components'
import { useAppDispatch } from '../../../common/hooks'
import { Paths } from '../../../common/routes'
import { Blog } from '../../../common/types'
import { MainSection } from '../../../layout/MainSection/MainSection'

import style from './BlogModifyingPage.module.css'

type PropsType = {
  breadcrumbs: Breadcrumb[]
  asyncCallback: Function
  submitButtonText: string
  blog?: Blog
}
export const BlogModifyingPage = ({
  breadcrumbs,
  submitButtonText,
  asyncCallback,
  blog,
}: PropsType) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [formState, setFormState] = useState({
    name: blog?.name || '',
    description: blog?.description || '',
    link: blog?.websiteUrl || '',
  })

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.currentTarget.name]: e.currentTarget.value,
    })
  }

  const isInputValidated = Boolean(formState.name.trim() && formState.description.trim())

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isInputValidated) {
      dispatch(
        asyncCallback({
          name: formState.name,
          websiteUrl: formState.link,
          description: formState.description,
        })
      )
        .unwrap()
        .then(() => {
          navigate(Paths.Blogs)
        })
        .catch((e: unknown) => {
          alert(e)
        })
    }
  }

  return (
    <MainSection>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <BackLink to={Paths.Blogs} linkText="Back to blogs" className={style.backlink} />
      <form onSubmit={formSubmitHandler}>
        <div className={style.image}>
          <img src="//unsplash.it/940/312" alt="" />
        </div>

        <InputText
          label="Blog Name"
          className={style.input}
          name="name"
          value={formState.name}
          onChange={onChangeHandler}
        />
        <InputText
          label="Link"
          className={style.input}
          name="link"
          value={formState.link}
          onChange={onChangeHandler}
        />
        <Textarea
          name="description"
          label="Blog Description"
          className={style.textarea}
          value={formState.description}
          onChange={onChangeHandler}
        />

        <Button
          type="submit"
          name="description"
          className={style.button}
          disabled={!isInputValidated}
        >
          {submitButtonText}
        </Button>
      </form>
    </MainSection>
  )
}
