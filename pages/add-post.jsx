import { useEffect, useState } from "react"
import { useController, useForm, useFormState } from "react-hook-form"
import styled, { css } from "styled-components"
import { Layout } from "../components/common/Layout/Layout"

export default function AddPostPage() {
  const [typedTags, setTypedTags] = useState([])
  const { register, handleSubmit, watch, setValue } = useForm()
  const formTags = watch("tags")

  function onSubmit(data) {
    console.log({ ...data, tags: typedTags })
  }

  function handleSpaceOnTags(e) {
    const enter = 13
    if (e.keyCode === enter) {
      const value = e.target.value
      const tags = value.split(" ")
      const newTag = tags[tags.length - 1]
      setTypedTags([...typedTags, newTag])
    }
  }

  useEffect(() => {
    setValue("tags", null)
  }, [typedTags])

  console.log({ typedTags })

  return (
    <Layout buttonAction={handleSubmit(onSubmit)}>
      <H1>Create a new post</H1>
      <Form>
        <FieldSet>
          <Label>Title</Label>
          <Input {...register("title", { required: true })} />
        </FieldSet>
        <FieldSet>
          <Label>Body</Label>
          <Textarea {...register("body", { required: true })} />
        </FieldSet>
        <FieldSet>
          <Label>Tags</Label>
          <Input {...register("tags")} onKeyDown={handleSpaceOnTags} />
        </FieldSet>
        <TagsContainer>
          {typedTags.map(tag => (
            <span>{tag}</span>
          ))}
        </TagsContainer>
        <FieldSet>
          <Label>
            Email <span>(optional)</span>
          </Label>
          <Input {...register("email")} />
        </FieldSet>
        <FieldSet isCheckbox>
          <Input {...register("email-send")} type="checkbox" />
          <Label>Email me admin link</Label>
        </FieldSet>
      </Form>
    </Layout>
  )
}

const Form = styled.form`
  padding: 0 16px;
`
const FieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: none;
  outline: nonte;
  margin-bottom: 24px;

  ${({ isCheckbox }) =>
    isCheckbox &&
    css`
      flex-direction: row;
      align-items: center;

      label {
        margin-bottom: 0;
        margin-left: 12px;
      }
    `}
`
const Label = styled.label`
  margin-bottom: 8px;
`
const Input = styled.input`
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.border.primary};
  padding: 16px;
`
const Textarea = styled.textarea`
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.border.primary};
  padding: 16px;
`

const TagsContainer = styled.div`
  span {
    padding: 4px;
    background: purple;
  }
`
const H1 = styled.h1`
  font-size: 24px;
  margin: 16px;
`
