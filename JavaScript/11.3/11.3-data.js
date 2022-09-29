

const data = [
    {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
    meats: ["hamburgers", "sausages"],
    fish: ["salmon", "pike"],
    },
    },
    {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
    meats: ["hamburgers", "steak", "lamb"],
    fish: ["tuna", "salmon", "barracuda"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["ham", "chicken"],
    fish: ["pike"],
    },
    },
    {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
    meats: ["bird", "rooster"],
    fish: ["salmon"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["hamburgers", "lamb"],
    fish: ["anchovies", "tuna"],
    },
    },
    ];


    const names = (n) =>{
       
      let y = n.map(({name}) => ({name}))
      return y;
    }
    const born = (n) =>{
       
      
        const born90 = [];
        n.forEach((e) => {
            if (parseInt(e.birthday.split("-")[2]) < 1990) {
             
              born90.push(e);
            }
        });
        return born90;
    };
  
    const foodList = (n) => {
      let food = {};
      n.forEach((e) => {
          let meat = e.favoriteFoods.meats;
          let fish = e.favoriteFoods.fish;
          let fishMeat = meat.concat(fish);
          for (let i = 0; i < fishMeat.length; i++) {
              let j = fishMeat[i];
              if (food[j] !== undefined) {
                  food[j] += 1;
              } else {
                  food[j] = 1;
              }
          }
      });
      return food;
  };
    

    console.log(names(data))
    console.log(born(data))
    console.log(foodList(data))