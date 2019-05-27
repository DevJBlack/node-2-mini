let books = []
let id = 0



module.exports = {

  read: (req, res) => {
    res.send(books)
  },

  create: (req, res) => {
    let {title, author} = req.body
    
    let createBook = {
      id,
      title,
      author
    }


    books.push(createBook)
    id++
    res.send(books)
  },

  update: (req, res) => {
    let {title, author} = req.body
    let { id } = req.params
    id = +id
    let updateBook = {
      id, 
      title,
      author
    }

    let index = books.findIndex(book => {
      console.log(book.id)
      return +book.id === id })
  
    books.splice(index, 1, updateBook)
    console.log(books)
    res.send(books)
  },

  delete: (req, res) => {
    let { id } = req.params
    let index = books.findIndex(book => +book.id === +id)
    books.splice(index, 1)
    res.send(books)
  }



}

