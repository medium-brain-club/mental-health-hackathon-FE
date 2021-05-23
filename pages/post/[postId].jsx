import styled, { css } from "styled-components"
import { useRouter } from "next/router"
import { Layout } from "../../components/common/Layout"
import { LikesIcon, SupportsIcon, LovesIcon } from "../../components/icons"
import { useQuery } from "react-query"
import PostAPI from "../../api/PostAPI"

const post = {
  UUID: "1fa35sd13f21a3s5d4f1a2sdf21",
  Title: "This is the post title",
  Tags: ["#adhd", "#lifeishard"],
  Body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo error, similique voluptate autem provident soluta perferendis in sint temporibus a veniam ea, distinctio, saepe nihil quis facere possimus ipsa? Ratione ipsa laudantium sunt vitae? Voluptas deleniti doloremque recusandae est magni reiciendis quos itaque dignissimos odit id,     doloribus dolore ipsa blanditiis?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo error, similique voluptate autem provident soluta perferendis in sint temporibus a veniam ea, distinctio, saepe nihil quis facere possimus ipsa? Ratione ipsa laudantium sunt vitae? Voluptas deleniti doloremque recusandae est magni reiciendis quos itaque dignissimos odit id, doloribus dolore ipsa blanditiis?",
  LikeCount: 20,
  SupportCount: 15,
  LoveCount: 30,
}

export default function PostPage() {
  const router = useRouter()
  const postId = router.query.postId

  // const { data: post } = useQuery("post", PostAPI.getPostById(postId))
  console.log({ post })

  return (
    <Layout>
      <PageContainer>
        <Logo>Ventia</Logo>
        <PostContainerWrapper>
          <HashTagWrapper>
            <PostTags>
              {post.Tags.map(tag => {
                return <span key={tag}>{tag}</span>
              })}
            </PostTags>
            <PostTitle>{post.Title}</PostTitle>
          </HashTagWrapper>

          <PostBody>{post.Body}</PostBody>
        </PostContainerWrapper>

        <IconWrapper>
          <InteractionsContainer>
            <LikesIcon />
            <PostBody>{post.LikeCount}</PostBody>
          </InteractionsContainer>

          <InteractionsContainer>
            <SupportsIcon />
            <PostBody>{post.SupportCount}</PostBody>
          </InteractionsContainer>
          <InteractionsContainer>
            <LovesIcon />
            <PostBody>{post.LoveCount}</PostBody>
          </InteractionsContainer>
        </IconWrapper>
      </PageContainer>
    </Layout>
  )
}

const PageContainer = styled.div`
  display: grid;
  grid-template-rows: max-content minmax(0, 1fr) max-content;
  height: 100%;
`

const PostContainerWrapper = styled.div`
  padding: 16px;
  height: 100%;
  overflow-y: auto;
`

const Logo = styled.h1`
  text-align: center;
  font-size: 24px;
  margin: 16px;
  color: ${({ theme }) => theme.colors.main.primary};
`

const HashTagWrapper = styled.div``

const PostTags = styled.div`
  color: ${({ theme }) => theme.colors.text.light};
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 4px;
  display: flex;

  span {
    margin-right: 12px;
    display: block;
  }
`

const PostTitle = styled.h1`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.text.dark};
`

const PostBody = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.text.gray};
`
const IconWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 5px;
  place-content: center;
  padding: 20px;

  svg {
    padding-left: 6px;
  }
`

const InteractionsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 12px;

  svg {
    margin-right: 8px;
  }
`
