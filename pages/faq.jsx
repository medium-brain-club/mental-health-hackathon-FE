import { useRouter } from "next/router"

export default function FAQPage() {
  const router = useRouter()

  console.log({ router, pathname: router.pathname.split("/") })

  return (
    <div>
      <h1>FAQ Page</h1>
    </div>
  )
}
