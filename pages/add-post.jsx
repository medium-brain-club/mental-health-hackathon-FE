import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import styled, { css } from "styled-components"
import { Layout } from "../components/common/Layout/Layout"
import { AddIcon } from "../components/icons"
import { useWindowSize } from "../hooks/useWindowSize"
import { Button } from "../styles/styled-components"

export default function AddPostPage() {
  const [typedTags, setTypedTags] = useState([])
  const { register, handleSubmit, setValue } = useForm()
  const { isMobile } = useWindowSize()

  function onSubmit(data) {
    console.log({ ...data, tags: typedTags })
  }

  function handleEnterOnTags(e) {
    if (typedTags.length === 2) {
      return
    }

    const enter = 13
    if (e.keyCode === enter) {
      const value = e.target.value
      const tags = value.split(" ")
      const newTag = { Name: tags[tags.length - 1] }
      setTypedTags([...typedTags, newTag])
    }
  }

  console.log({ typedTags })

  function handleOnTagDelete(tagName) {
    setTypedTags(prevState => prevState.filter(tag => tag.Name !== tagName))
  }

  useEffect(() => {
    setValue("tags", null)
  }, [typedTags])

  return (
    <Layout buttonAction={isMobile ? handleSubmit(onSubmit) : () => {}}>
      <PageContainer>
        <H1>Create a new post</H1>
        <Form>
          <FieldSet>
            <Label>Title</Label>
            <Input {...register("title", { required: true })} placeholder="title..." />
          </FieldSet>
          <FieldSet>
            <Label>Body</Label>
            <Textarea
              {...register("body", { required: true })}
              placeholder="go ahead, vent away..."
            />
          </FieldSet>
          <FieldSet>
            <Label>
              Tags{" "}
              <TagLimit limitReached={typedTags.length === 2}>{`${typedTags.length} / 2`}</TagLimit>
            </Label>
            <Input {...register("tags")} onKeyDown={handleEnterOnTags} placeholder="tags..." />
          </FieldSet>
          {typedTags.length > 0 ? (
            <TagsContainer>
              {typedTags.map(tag => (
                <TagWrapper key={tag.Name}>
                  <Tag>{tag.Name}</Tag>
                  <TagDelete onClick={() => handleOnTagDelete(tag.Name)}>X</TagDelete>
                </TagWrapper>
              ))}
            </TagsContainer>
          ) : null}
          <FieldSet>
            <Label>
              Email <span>(optional)</span>
            </Label>
            <Input {...register("email")} placeholder="email..." />
          </FieldSet>
          <FieldSet isCheckbox>
            <Input {...register("send-email")} type="checkbox" />
            <Label>Email me admin link</Label>
          </FieldSet>
        </Form>
        {isMobile ? null : (
          <Button onClick={handleSubmit(onSubmit)} isPrimary>
            <AddIcon />
            <span>Submit Post</span>
          </Button>
        )}
      </PageContainer>
    </Layout>
  )
}

const PageContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  width: 100%;
  padding: 0 16px;

  button {
    margin-bottom: 1rem;
    width: fit-content;
  }

  @media (min-width: 1080px) {
    padding: 0;
  }
`

const Form = styled.form`
  height: 100%;
  display: grid;
  grid-template-rows: max-content 1fr max-content max-content max-content max-content max-content;
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
  display: flex;
  justify-content: space-between;
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
  resize: none;
  height: 100%;
  line-height: 1.75;
`

const TagsContainer = styled.div`
  height: fit-content;
  margin-bottom: 24px;
  display: flex;
`

const TagWrapper = styled.div`
  display: flex;
  margin-right: 8px;
`
const TagDelete = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.main.primary};
  border-left: none;
  border-radius: 0 8px 8px 0;
  padding: 8px 12px;
  color: white;
  font-weight: 600;
  background: ${({ theme }) => theme.colors.main.primary};
`

const TagLimit = styled.span`
  ${({ limitReached }) =>
    limitReached &&
    css`
      color: red;
    `}
`

const Tag = styled.span`
  display: block;
  width: fit-content;
  padding: 8px 16px;
  border-radius: 8px 0 0px 8px;
  border: 2px solid ${({ theme }) => theme.colors.main.primary};
`

const H1 = styled.h1`
  font-size: 24px;
  margin: 16px 0;
`
