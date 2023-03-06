import { editBooks } from "./api.js"

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
    publishYear: Number(publishYear.value),
    publishHouse: publishHouse.value,
    pagesNumber: Number(pagesNumber.value),
    genres: genres.value.split(','),
    originalLanguage: originalLanguage.value
  }
  editBooks(editBook, editData.id)
})

console.log( editData.id)