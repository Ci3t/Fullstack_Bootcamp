

const book1 = {
    name: 'May',
    author: 'June M',
    year: '2019'
   
};
const book2 = {
    name: 'April',
    author: 'July A',
    year: '2017'
};

const bookUtils = {
    getFirstPublished : (b1,b2) =>{
        let smaller = Object.values(book1.year)<  Object.values(book2.year) ? book1.year : book2.year
        console.log(smaller)
    },
    setNewEdition : (book,year,name)=>{
        let b = Object.assign(book1, {newBook: book});
        let y = Object.assign(book1, {newYear: year});
        let y2 = Object.assign(book1, {name: name});
        
    },
    setLanguage:(book,lang) =>{
        let b = Object.assign(book, {Language: lang});
       
    },
    setTranslation :(book,lang,trans)=>{
        let b = Object.assign(book, {Language: lang}, {Translator: trans});
    },
    setPublisher :(book,name,loc)=>{
        let b = Object.assign(book, {Publisher: {name:name,location:loc}})
    },
    isSamePublisher :(book,book2)=>{
        let  a = Object.is(book.Publisher.name,book2.Publisher.name)
        let   b = Object.is(book.Publisher.loc,book2.Publisher.loc)
        console.log(`is Published the same?: ${a}, from same country?: ${b}`)
    },
}
// bookUtils.isSamePublisher(book1,book2)
// bookUtils.isSamePublisher(book2,book1)
bookUtils.setLanguage(book1,'English')
bookUtils.setPublisher(book2,'Marc','Japan')
bookUtils.setPublisher(book1,'Marc','Japan')
bookUtils.isSamePublisher(book1,book2)


console.log(book1)
console.log(book2)
