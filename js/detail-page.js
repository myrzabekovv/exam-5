import { getBookId } from "./api.js"

const id = new URLSearchParams(window.location.search).get('id')
let contactData = null

const td = document.querySelector('.info')
const editBtn = document.querySelector('.edit-btn')

getBookId(id)
.then((data) => {
  contactData = data
  renderContactPage(data)
})
.catch(() => {
  // обработка ошибкиdata
})
.finally(() => {
  // убирать loader
})


editBtn.addEventListener('click', () => {
  console.log(contactData)
  localStorage.setItem('editData', JSON.stringify(contactData))
  window.location.href = `/edit.html`
})

console.log(id)
