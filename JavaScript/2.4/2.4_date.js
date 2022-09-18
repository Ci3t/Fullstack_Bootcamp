
// let fulldate = new Date();
// let today = today.getDate;

// console.log(current)
const todayDate = (today) => {
    let currentTime = new Date();
    let day = currentTime.toLocaleString('en-us', {weekday:'long'})
    let dayDate = currentTime.getDate();
    let month = currentTime.toLocaleString('default', { month: 'long' });
   
    let year = currentTime.getFullYear();
    
     console.log(`Today is ${day} the ${dayDate} of ${month} ${year}`)
}
todayDate();