import { deleteBook, getDetail } from "./api.js"
import { renderDetailPage } from "./utils.js"

let id = new URLSearchParams(window.location.search).get('id')
let contactData = null

document.querySelector('.book-detail a').setAttribute('href', `/edit.html?id=${id}`)


getDetail(id)
.then((data) => {
  renderDetailPage(data)
  contactData = data

  const btnDelete = Array.from(document.querySelectorAll('.delete-btn'))
  btnDelete[0].addEventListener('click', () => {
    deleteBook(id)
    location.href = 'index.html'
  })
})
.catch(() => {
  // обработка ошибкиdata
})
.finally(() => {
  // убирать loader
})

const editBtn = document.querySelector('.edit-btn')


editBtn.addEventListener('click', () => {
  console.log(contactData)
  localStorage.setItem('editData', JSON.stringify(contactData))
  window.location.href = `/edit.html`
})

console.log(id)
