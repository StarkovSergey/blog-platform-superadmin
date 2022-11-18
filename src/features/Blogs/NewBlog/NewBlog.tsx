import React, { ChangeEvent, FormEvent, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { BackLink } from '../../../common/components/BackLink/BackLink'
import { Breadcrumbs } from '../../../common/components/Breadcrumbs/Breadcrumbs'
import { Button } from '../../../common/components/Button/Button'
import { InputText } from '../../../common/components/InputText/InputText'
import { Textarea } from '../../../common/components/Textarea/Textarea'
import { useAppDispatch } from '../../../common/hooks/useAppDispatch'
import { Paths } from '../../../common/routes'
import { MainSection } from '../../../layout/MainSection/MainSection'
import { addBlog } from '../blogs-actions'

import style from './NewBlog.module.css'

export const NewBlog = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [formState, setFormState] = useState({
    name: '',
    description: '',
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
        addBlog({
          name: formState.name,
          youtubeUrl: formState.description,
        })
      )
        .unwrap()
        .then(() => {
          navigate(Paths.Blogs)
        })
    }
  }

  const breadcrumbs = [
    {
      title: 'Blogs',
      link: Paths.Blogs,
    },
    { title: 'Add' },
  ]

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
        <Textarea
          name="description"
          label="Blog Description"
          className={style.textarea}
          value={formState.description}
          onChange={onChangeHandler}
        />

        <Button name="description" className={style.button} disabled={!isInputValidated}>
          Add blog
        </Button>
      </form>
    </MainSection>
  )
}
