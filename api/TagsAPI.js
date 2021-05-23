export default {
  async getTags() {
    const res = await fetch("https://backend.byteporter.com/api/tags")
    return await res.json()
  },
  async createTags(tagsIdArr) {
    const res = await fetch("https://backend.byteporter.com/api/tags", {
      method: "POST",
      body: tagsIdArr,
    })

    return await res.json()
  },
}
