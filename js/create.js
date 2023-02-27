const API = 'http://localhost:1717'

const createBtn = document.querySelector('#save-create-btn')
const name = document.querySelector('#name')
const author = document.querySelector('#author')
const publishYear = document.querySelector('#publishYear')
const publishHouse = document.querySelector('#publishHouse')
const pagesNumber = document.querySelector('#pagesNumber')
const genres = document.querySelector('#genres')
const originalLanguage = document.querySelector('#originalLanguage')

const createBook = async (data) => {
  const response = await fetch(`${API}/books/create`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const newBook = await response.json()
  console.log(newBook)  
}

createBtn.addEventListener('click', () => {
  createBook({
    name: name.value,
    author: author.value,
    publishYear: publishYear.value,
    publishHouse: publishHouse.value,
    pagesNumber: pagesNumber.value,
    genres: genres.value,
    originalLanguage: originalLanguage.value
  })
})