export default {
  async getTags() {
    const res = await fetch("https://backend.byteporter.com/api/tags")
    return await res.json()
  },
}
