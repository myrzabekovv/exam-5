const API = 'http://localhost:1717'

console.log(localStorage.getItem('editData'))

const editData = JSON.parse(localStorage.getItem('editData'))
console.log(editData)

const editBtn = document.querySelector('#save-edit-btn')
const name = document.querySelector('#name')
const author = document.querySelector('#author')
const publishYear = document.querySelector('#publishYear')
const publishHouse = document.querySelector('#publishHouse')
const pagesNumber = document.querySelector('#pagesNumber')
const genres = document.querySelector('#genres')
const originalLanguage = document.querySelector('#originalLanguage')

const editBooks = async (data, id) => {
  const response = await fetch(`${API}/books/update/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const edit = await response.json()
  return edit
}

name.value = editData.name
author.value = editData.author
publishYear.value = editData.publishYear
publishHouse.value = editData.publishHouse
pagesNumber.value = editData.pagesNumber
genres.value = editData.genres
originalLanguage.value = editData.originalLanguage

editBtn.addEventListener('click', (e) => {
  e.preventDefault()

  const editBook = {
    name: name.value,
    author: author.value,
    publishYear: publishYear.value,
    publishHouse: publishHouse.value,
    pagesNumber: pagesNumber.value,
    genres: genres.value,
    originalLanguage: originalLanguage.value
  }
  editBooks(editBook, editData.id)
})

console.log( editData.id)