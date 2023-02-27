const API_URL = 'http://localhost:1717'

const createApiRoute = (route) => {
  return `${API_URL}${route}`
}

export const getBooks = async () => {
  const response = await fetch(createApiRoute('/books'))
  const books = await response.json()
  return books
}

export const getBookId = async (data) => {
  const response = await fetch(createApiRoute(`/books/detail/${data.id}`))
  const id = await response.json()
  return id
}

