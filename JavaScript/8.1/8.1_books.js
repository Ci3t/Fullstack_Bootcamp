
const library = {
    bookName: 'MobyDick',
    author: 'Herman Melville',
    publishYear: '1851'
     
};

const books = (book) => {

    console.log(`The book ${library.bookName} was written by ${library.author} in
    the year ${library.publishYear}`)
}
books(library)