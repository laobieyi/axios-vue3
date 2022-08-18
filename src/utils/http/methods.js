
class Methods {
  constructor(instance) {
    this.instance = instance
  }
  get(url, params, config) {
    return this.instance.get(url, { params, ...config })
  }
  post(url, data, config) {
    return this.instance.post(url, data, { ...config })
  }
  put(url, data, config) {
    return this.instance.put(url, data, { ...config })
  }
  delete(url, data, config) {
    return this.instance.post(url, { data, ...config })
  }
  postForm(url, data, config) {
    const form = new FormData()
    for (const key in data) {
      if (Object.hasOwn(data, key)) {
        const value = data[key]
        form.append(key, value)
      }
    }
    return this.instance.post(url, form, { ...config })
  }
}
export default Methods
