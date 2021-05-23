import styled from "styled-components"
import { Layout } from "../components/common/Layout"
import { Filters } from "../components/feed/Filters"
import { PostCard } from "../components/posts/PostCard"
import { Tags } from "../components/tags/Tags"

const posts = [
  {
    id: "1fa35sd13f21a3s5d4f1a2sdf21",
    title: "This is the post title",
    tags: ["adhd", "lifeishard"],
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo error, similique voluptate autem provident soluta perferendis in sint temporibus a veniam ea, distinctio, saepe nihil quis facere possimus ipsa? Ratione ipsa laudantium sunt vitae? Voluptas deleniti doloremque recusandae est magni reiciendis quos itaque dignissimos odit id, doloribus dolore ipsa blanditiis?",
    likesCount: 20,
    supportsCount: 15,
    loveCount: 30,
    interactionCount: 65,
    viewCount: 80,
  },
  {
    id: "865a4r5j4354sfh9854fg3a1g",
    title: "This is the post title 2",
    tags: ["adhd", "lifeishard"],
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo error, similique voluptate autem provident soluta perferendis in sint temporibus a veniam ea, distinctio, saepe nihil quis facere possimus ipsa? Ratione ipsa laudantium sunt vitae? Voluptas deleniti doloremque recusandae est magni reiciendis quos itaque dignissimos odit id, doloribus dolore ipsa blanditiis?",
    likesCount: 20,
    supportsCount: 15,
    loveCount: 30,
    interactionCount: 65,
    viewCount: 80,
  },
  {
    id: "87af35hs321a3wqe4rt43df2ga354",
    title: "This is the post title 3",
    tags: ["adhd", "lifeishard"],
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo error, similique voluptate autem provident soluta perferendis in sint temporibus a veniam ea, distinctio, saepe nihil quis facere possimus ipsa? Ratione ipsa laudantium sunt vitae? Voluptas deleniti doloremque recusandae est magni reiciendis quos itaque dignissimos odit id, doloribus dolore ipsa blanditiis?",
    likesCount: 20,
    supportsCount: 15,
    loveCount: 30,
    interactionCount: 65,
    viewCount: 80,
  },
  {
    id: "3a2413h54hykt7s5df43b1x5s4fg3",
    title: "This is the post title 4",
    tags: ["adhd", "lifeishard"],
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo error, similique voluptate autem provident soluta perferendis in sint temporibus a veniam ea, distinctio, saepe nihil quis facere possimus ipsa? Ratione ipsa laudantium sunt vitae? Voluptas deleniti doloremque recusandae est magni reiciendis quos itaque dignissimos odit id, doloribus dolore ipsa blanditiis?",
    likesCount: 20,
    supportsCount: 15,
    loveCount: 30,
    interactionCount: 65,
    viewCount: 80,
  },
  {
    id: "6a87sd65j4u5k43s1b2a1df",
    title: "This is the post title 5",
    tags: ["adhd", "lifeishard"],
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo error, similique voluptate autem provident soluta perferendis in sint temporibus a veniam ea, distinctio, saepe nihil quis facere possimus ipsa? Ratione ipsa laudantium sunt vitae? Voluptas deleniti doloremque recusandae est magni reiciendis quos itaque dignissimos odit id, doloribus dolore ipsa blanditiis?",
    likesCount: 20,
    supportsCount: 15,
    loveCount: 30,
    interactionCount: 65,
    viewCount: 80,
  },
]

const tags = [
  {
    id: "s541df35a7df335a4sd68f4a35s1dfg13dfgh",
    name: "adhd",
  },
  {
    id: "786as5d4g354543a5sd7ga35d42a1df",
    name: "lifeishard",
  },
  {
    id: "3a54d8h75h4k3d54d8g9q7r43g5s4f3",
    name: "eatingdisorder",
  },
  {
    id: "8sdf4g657t6h857a3s5432s4",
    name: "depression",
  },
]

export default function FeedPage() {
  return (
    <Layout>
      <Logo>VENTAI</Logo>
      <Tags tags={tags} />
      <Filters />
      <PostsContainer>
        {posts.map(post => {
          return <PostCard post={post} key={post.id} />
        })}
      </PostsContainer>
    </Layout>
  )
}

const Logo = styled.h1`
  text-align: center;
  font-size: 24px;
  margin: 16px;
  color: ${({ theme }) => theme.colors.main.primary};
`

const PostsContainer = styled.div`
  padding: 0 16px;
  display: grid;
  grid-template-rows: repeat(auto-fill, 138px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  justify-content: center;
  grid-gap: 16px;
  margin-bottom: 16px;
  overflow-y: scroll;

  @media (min-width: 1080px) {
    padding: 0;
  }
`
