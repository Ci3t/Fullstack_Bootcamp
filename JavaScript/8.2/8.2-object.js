
const mycountry = {
    country : 'Brazil',
    capital : 'Brasília',
    language : 'Portuguese',
    population : '212.6 million',
    neighbours : ['Uruguay', 'Argentina', 'Paraguay', 'Bolivia', 'Peru'],

    describe() {
        console.log(`${this.country} has ${this.population} people, their mother tongue is ${this.language} they have 3 neighboring countries ${this.neighbours} and a captial called ${this.capital} `)
    },
    checkIsland(isIsland){
        

         console.log(isIsland == 'True' ?  false : true );
        
       
        
    }
};

mycountry.describe()
mycountry.checkIsland('True')

