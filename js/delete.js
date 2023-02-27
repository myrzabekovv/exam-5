import { renderBooks } from "./main-page.js"

const API_URL = 'http://localhost:1717'

const deleteBook = async (data) => {
  const response = await fetch(`${API_URL}/books/delete${data.id}`, {
    method: 'DELETE',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const deleteBook = await response.json()
  console.log(deleteBook)
}

const btnDelete = document.querySelectorAll('.delete-btn')

btnDelete.forEach((deleteCont) => {
  deleteCont.addEventListener('click', () => {
    console.log(deleteBook)
  })
})

