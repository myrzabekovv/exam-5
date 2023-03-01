// import { renderBooks } from "./main-page.js"

// const API_URL = 'http://localhost:1717'

// const deleteBook = async (data) => {
//   const response = await fetch(`${API_URL}/books/delete/${data.id}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//   const deleteBook = await response.json()
//   console.log(deleteBook)
//   return deleteBook
// }
// // deleteBook()


// // const btnDelete = document.querySelectorAll('.delete-btn')

// // btnDelete.forEach((deleteCont) => {
// //   deleteCont.addEventListener('click', () => {
// //     console.log(deleteBook())
// //   })
// // })


// const btnDelete = document.querySelectorAll('.delete-btn')

// btnDelete.forEach((deleteCont) => {
//   deleteCont.addEventListener('click', () => {
//     const data = { id: deleteCont.dataset.id } // создаем объект данных для удаления
//     console.log(deleteBook(data)) // вызываем функцию с аргументом data
//   })
// })

import { renderBooks } from "./main-page.js"

const API_URL = 'http://localhost:1717'

const deleteBook = async (data) => {
  const response = await fetch(`${API_URL}/books/delete/${data.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const deleteBook = await response.json()
  console.log(deleteBook)
  return deleteBook // добавляем оператор return для возврата Promise
}

const btnDelete = document.querySelectorAll('.delete-btn')

btnDelete.forEach((deleteCont) => {
  deleteCont.addEventListener('click', () => {
    const data = { id: deleteCont.dataset.id } // создаем объект данных для удаления
    console.log(deleteBook(data)) // вызываем функцию с аргументом data
  })
})



