import { getBookId } from "./api.js"

const search = window.location.search

const searchParams = new URLSearchParams(search)
const id = searchParams.get('id')



getBookId()
.then(() => {
  
})