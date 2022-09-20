
const countryToLiveIn = (language, isIsland, population,country) => {
    if (isIsland !== true && population < 50 && language == 'english' ){
        console.log(`You should live in ${country}`)}
  
    else{
        console.log(`${country} does not meet your criteria`)
    }
    }


countryToLiveIn('english',false, 34,'Finland')  //! meet criteria
countryToLiveIn('finnish',true, 50,'Finland') // !doesn't meet criteria
// countryToLiveIn('english',false,50,'Finland')