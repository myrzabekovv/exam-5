export const createEl = ({ tag, className, text, checked, innerHTML, ...attrs }) => {
  const element = document.createElement(tag)

  if (className) element.className = className
  if (text) element.textContent = text
  if (checked) element.checked = checked
  if (tag === 'input' && !attrs.type) element.setAttribute('type', 'text')
  if (innerHTML) element.innerHTML = innerHTML

  Object.keys(attrs).forEach((attrName) => {
    element.setAttribute(attrName, attrs[attrName])
  })

  return element
}

export const renderDetailPage = (data) => {
  const name = document.querySelector('.book-detail h1')
  const tds = document.querySelectorAll('.book-detail__table td')

  tds[0].textContent = 'Жанры:'
  tds[1].textContent = data.genres
  tds[2].textContent = 'Автор:'
  tds[3].textContent = data.author
  tds[4].textContent = 'Год выпуска:'
  tds[5].textContent = data.publishYear
  tds[6].textContent = 'Язык оригинала:'
  tds[7].textContent = data.originalLanguage
  tds[8].textContent = 'Издательство:'
  tds[9].textContent = data.publishHouse
  tds[10].textContent = 'Колличество страниц:'
  tds[11].textContent = data.pagesNumber
  console.log(tds)

  name.textContent = data.name
}