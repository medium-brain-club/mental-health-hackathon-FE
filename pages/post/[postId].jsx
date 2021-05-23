import styled, { css } from "styled-components"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { Layout } from "../../components/common/Layout"
import { LikesIcon, SupportsIcon, LovesIcon, NextIcon, LastIcon } from "../../components/icons"

const post = {
  id: "1fa35sd13f21a3s5d4f1a2sdf21",
  title: "This is the post title",
  tags: ["#adhd", "#lifeishard"],
  body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo error, similique voluptate autem provident soluta perferendis in sint temporibus a veniam ea, distinctio, saepe nihil quis facere possimus ipsa? Ratione ipsa laudantium sunt vitae? Voluptas deleniti doloremque recusandae est magni reiciendis quos itaque dignissimos odit id,     doloribus dolore ipsa blanditiis?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo error, similique voluptate autem provident soluta perferendis in sint temporibus a veniam ea, distinctio, saepe nihil quis facere possimus ipsa? Ratione ipsa laudantium sunt vitae? Voluptas deleniti doloremque recusandae est magni reiciendis quos itaque dignissimos odit id, doloribus dolore ipsa blanditiis?",
  likes: 20,
  supports: 15,
  loves: 30,
}

export default function PostPage() {
  // const [post, setPost] = useState()
  const router = useRouter()
  const postId = router.query.postId

  // useEffect(() => {
  //   // this will run on component mount
  //   async function fetchPost() {
  //     const res = await fetch(`https://randomuser.me/api/`, {
  //       method: "GET",
  //     })

  //     const postData = await res.json()
  //     setPost(postData)
  //   }

  //   fetchPost()
  //   return () => {
  //     // this wil run on component unmount
  //   }
  // }, [postId])

  console.log({ post })

  return (
    <Layout>
      <Logo>Ventia</Logo>
      <PostContainerWrapper>
        <HashTagWrapper>
          {post.tags.map(tag => {
            console.log({ tag })
            return <span key={tag}>{tag}</span>
          })}

          <PostTitle>{post.title}</PostTitle>
        </HashTagWrapper>

        <PostBody>{post.body}</PostBody>

        <IconWrapper>
          <LikesIcon />
          <PostBody>{post.likes}</PostBody>

          <SupportsIcon />
          <PostBody>{post.supports}</PostBody>

          <LovesIcon />
          <PostBody>{post.loves}</PostBody>
        </IconWrapper>

        <span>
          Last
          <LastIcon />
        </span>

        <span>
          Next
          <NextIcon />
        </span>
      </PostContainerWrapper>
    </Layout>
  )
}

const PostContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  row-gap: 20px;
  overflow-y: scroll;
  height: 100%;

  @media (min-width: 1080px) {
    max-width: 40%;
  }
`

const Logo = styled.h1`
  text-align: center;
  font-size: 24px;
  margin: 16px;
  color: ${({ theme }) => theme.colors.main.primary};
`

const HashTagWrapper = styled.div`
  color: ${({ theme }) => theme.colors.text.light};
  font-size: 16px;
  line-height: 20px;
`

const PostTitle = styled.h1`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.text.dark};
  padding-top: 0px;
`

const PostBody = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.text.gray};
`
const IconWrapper = styled.div`
  display: flex;
  grid-gap: 5px;
  place-content: center;
  padding: 20px;

  svg {
    padding-left: 6px;
  }
`
