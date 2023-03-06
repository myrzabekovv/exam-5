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
  const response = await fetch(createApiRoute(`/books/detail/${data}`))
  const id = await response.json()
  return id
}

export const editBooks = async (data, id) => {
  const response = await fetch(`${API_URL}/books/update/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const edit = await response.json()
  return edit
}

export const getDetail = async (id) => {
  const response = await fetch(`${API_URL}/books/detail/${id}`)
  const detail = await response.json()
  return detail
}


export const deleteBook = async (id) => {
  const response = await fetch(`${API_URL}/books/delete/${id}`, {
    method: 'DELETE',
  })
  
  console.log(response)
}

