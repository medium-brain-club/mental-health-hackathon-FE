export default {
  async getPosts() {
    const res = await fetch("https://backend.byteporter.com/api/messages")
    return await res.json()
  },
  async getPostById(id) {
    const res = await fetch(`https://backend.byteporter.com/api/messages/${id}`)
    return await res.json()
  },
  async createPost(data) {
    const res = await fetch("https://backend.byteporter.com/api/messages", {
      method: "POST",
      body: data,
    })

    return res.json()
  },
}
