const candyStore = {
    candies: [
    {
    name: "mint gum",
    id: "as12f",
    price: 2,
    amount: 2
    },
    {
    name: "twix",
    id: "5hd7y",
    price: 5,
    amount: 4
    },
    ],
    cashRegister: 200
    }

    function getCandy(candyStore, id){
        //your code
        const candy = candyStore.candies.find((c) => c.id === id);
        return candy;
            
    
        }
       console.log( getCandy(candyStore,'as12f'))


       const getPrice = (price , id) => {

        let a =  price.find((e)=> id === e.price);
            
        
            
           return (a)
        
       }

       console.log( getPrice(candyStore.candies,5))

       function addCandy(name, id,amount , price){
        //your code
        b= name.push({name: 'Lolipop', id: id, amount: 1, price:price})
        return b
        }

        console.log(addCandy(candyStore.candies,5,'lolipop',10));
        console.log(candyStore)

        function buy(candyStore, id){
            //your code
            const candy = getCandy(candyStore, id);
             const candyPrice = candy.price;
             if (candy.amount > 0) {
                candy.amount -= 1;
            } else {
                return "Not Available";
            }
            candyStore.cashRegister += candyPrice;
            return candyStore;
        }

        console.log(buy(candyStore, "5hd7y"));

        console.log(candyStore);