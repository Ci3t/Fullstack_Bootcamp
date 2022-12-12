//* link to heroku API - https://capsules7.herokuapp.com/api/carMrket/num
//* link to heroku API - https://capsules7.herokuapp.com/api/carMarket/img/:brand/:model

//! ↓↓↓↓↓↓↓ Our car market object to start with ↓↓↓↓↓↓↓↓
const ourCarMarket = {
  sellers: [
    {
      agencyName: 'CarMax',
      cash: 968541,
      credit: 500000,
      agencyId: '26_IPfHU1',
      cars: {
        Bmw: [
          {
            name: 'X5',
            year: 2015,
            price: 218000,
            carNumber: '4Ixb0',
            ownerId: '26_IPfHU1',
          },
          {
            name: 'X6',
            year: 2014,
            price: 97100,
            carNumber: 'kAnv-',
            ownerId: '26_IPfHU1',
          },
          {
            name: 'Z4',
            year: 2019,
            price: 296900,
            carNumber: 'ISMdU',
            ownerId: '26_IPfHU1',
          },
          {
            name: '3',
            year: 2010,
            price: 75100,
            carNumber: '9DJPw',
            ownerId: '26_IPfHU1',
          },
        ],
        Toyota: [
          {
            name: 'Land Cruiser',
            year: 2005,
            price: 80540,
            carNumber: 'Kt-pW',
            ownerId: '26_IPfHU1',
          },
          {
            name: 'Corolla',
            year: 2019,
            price: 109100,
            carNumber: 'YiYdI',
            ownerId: '26_IPfHU1',
          },
          {
            name: 'Hilux',
            year: 2019,
            price: 204000,
            carNumber: 'DRmNw',
            ownerId: '26_IPfHU1',
          },
        ],
        Ford: [
          {
            name: 'F250',
            year: 2020,
            price: 198500,
            carNumber: 'g4Wfp',
            ownerId: '26_IPfHU1',
          },
          {
            name: 'Explorer',
            year: 2020,
            price: 265200,
            carNumber: 'iNT8Q',
            ownerId: '26_IPfHU1',
          },
        ],
        Alpha_Romeo: [
          {
            name: 'Spider',
            year: 2011,
            price: 75405,
            carNumber: '6t7QU',
            ownerId: '26_IPfHU1',
          },
          {
            name: '166',
            year: 2002,
            price: 12400,
            carNumber: 'XMqpn',
            ownerId: '26_IPfHU1',
          },
        ],
        Chevrolet: [
          {
            name: 'Impala',
            year: 2016,
            price: 65042,
            carNumber: 'vbeAo',
            ownerId: '26_IPfHU1',
          },
          {
            name: 'Savannah',
            year: 2016,
            price: 76505,
            carNumber: 'WelWa',
            ownerId: '26_IPfHU1',
          },
        ],
      },
    },
    {
      agencyName: 'The Auto World',
      cash: 687450,
      credit: 200000,
      agencyId: 'gNHjNFL12',
      cars: {
        Bmw: [
          {
            name: 'X6',
            year: 2018,
            price: 548100,
            carNumber: 'EMW_7',
            ownerId: 'gNHjNFL12',
          },
          {
            name: '3',
            year: 2017,
            price: 178000,
            carNumber: 'XlnB4',
            ownerId: 'gNHjNFL12',
          },
        ],
        Toyota: [
          {
            name: 'Prius',
            year: 2017,
            price: 101542,
            carNumber: '-RQgN',
            ownerId: 'gNHjNFL12',
          },
          {
            name: 'Highlander',
            year: 2017,
            price: 202540,
            carNumber: 'AZJZ4',
            ownerId: 'gNHjNFL12',
          },
          {
            name: 'Corolla',
            year: 1996,
            price: 5420,
            carNumber: 'kHE8f',
            ownerId: 'gNHjNFL12',
          },
          {
            name: 'Corolla',
            year: 2012,
            price: 40570,
            carNumber: 'p2qEi',
            ownerId: 'gNHjNFL12',
          },
        ],
        Ford: [
          {
            name: 'Explorer',
            year: 2014,
            price: 127502,
            carNumber: 'Ty1zN',
            ownerId: 'gNHjNFL12',
          },
          {
            name: 'F350',
            year: 2012,
            price: 54250,
            carNumber: 'z03H2',
            ownerId: 'gNHjNFL12',
          },
        ],
        Chevrolet: [
          {
            name: 'Savannah',
            year: 2010,
            price: 36504,
            carNumber: 'RXFZe',
            ownerId: 'gNHjNFL12',
          },
          {
            name: 'Malibu',
            year: 2009,
            price: 19585,
            carNumber: 'K5IsM',
            ownerId: 'gNHjNFL12',
          },
        ],
        Alpha_Romeo: [],
      },
    },
    {
      agencyName: 'Best Deal',
      cash: 1245000,
      credit: 200000,
      agencyId: 'Plyq5M5AZ',
      cars: {
        Bmw: [
          {
            name: '3',
            year: 2015,
            price: 137000,
            carNumber: 'AZJZ4',
            ownerId: 'Plyq5M5AZ',
          },
          {
            name: 'X6',
            year: 2020,
            price: 966500,
            carNumber: 'S6DL1',
            ownerId: 'Plyq5M5AZ',
          },
        ],
        Toyota: [
          {
            name: 'Land Cruiser',
            year: 2020,
            price: 336300,
            carNumber: '6rvXw',
            ownerId: 'Plyq5M5AZ',
          },
          {
            name: 'Hilux',
            year: 2005,
            price: 35005,
            carNumber: 'MWXBG',
            ownerId: 'Plyq5M5AZ',
          },
          {
            name: 'Corolla',
            year: 2020,
            price: 111900,
            carNumber: 'hCzl-',
            ownerId: 'Plyq5M5AZ',
          },
        ],
        Ford: [
          {
            name: 'Focus',
            year: 2020,
            price: 98200,
            carNumber: 'kN3HP',
            ownerId: 'Plyq5M5AZ',
          },
          {
            name: 'Focus',
            year: 2005,
            price: 6502,
            carNumber: 'LJTCs',
            ownerId: 'Plyq5M5AZ',
          },
        ],
        Alpha_Romeo: [
          {
            name: 'Romeo Julia',
            year: 2020,
            price: 275406,
            carNumber: '2kjy7',
            ownerId: 'Plyq5M5AZ',
          },
          {
            name: 'Romeo Stelvio',
            year: 2019,
            price: 215403,
            carNumber: '7A5b-',
            ownerId: 'Plyq5M5AZ',
          },
        ],
        Chevrolet: [
          {
            name: 'Traverse',
            year: 2020,
            price: 201102,
            carNumber: 'QwBOT',
            ownerId: 'Plyq5M5AZ',
          },
          {
            name: 'Impala',
            year: 2019,
            price: 165041,
            carNumber: '2v4jt',
            ownerId: 'Plyq5M5AZ',
          },
          {
            name: 'Malibu',
            year: 2017,
            price: 75405,
            carNumber: 'O4_Jv',
            ownerId: 'Plyq5M5AZ',
          },
        ],
      },
    },
    {
      agencyName: 'Car Werks',
      cash: 302502,
      credit: 150000,
      agencyId: '9KeaYbRLP',
      cars: {
        Bmw: [
          {
            name: '8',
            year: 2020,
            price: 942500,
            carNumber: '4IUMz',
            ownerId: '9KeaYbRLP',
          },
          {
            name: 'X6',
            year: 2010,
            price: 129000,
            carNumber: 'Vw0fV',
            ownerId: '9KeaYbRLP',
          },
          {
            name: 'X3',
            year: 2019,
            price: 358100,
            carNumber: 'ufN54',
            ownerId: '9KeaYbRLP',
          },
          {
            name: '3',
            year: 2020,
            price: 389100,
            carNumber: 'F127X',
            ownerId: '9KeaYbRLP',
          },
          {
            name: '3',
            year: 2002,
            price: 18400,
            carNumber: 'ueZUp',
            ownerId: '9KeaYbRLP',
          },
        ],
        Toyota: [
          {
            name: 'Prius',
            year: 2011,
            price: 38520,
            carNumber: 'AZJZ4',
            ownerId: '9KeaYbRLP',
          },
          {
            name: 'Land Cruiser',
            year: 2019,
            price: 290040,
            carNumber: 'AZJZ4',
            ownerId: '9KeaYbRLP',
          },
          {
            name: 'Hilux',
            year: 2020,
            price: 215700,
            carNumber: 'xig8N',
            ownerId: '9KeaYbRLP',
          },
          {
            name: 'Hilux',
            year: 2015,
            price: 178506,
            carNumber: 'ghTiQ',
            ownerId: '9KeaYbRLP',
          },
          {
            name: 'Corolla',
            year: 2002,
            price: 8504,
            carNumber: 'Mvw8T',
            ownerId: '9KeaYbRLP',
          },
        ],
        Chevrolet: [
          {
            name: 'Impala',
            year: 2005,
            price: 9320,
            carNumber: 'BZpkt',
            ownerId: '9KeaYbRLP',
          },
          {
            name: 'Malibu',
            year: 2002,
            price: 4502,
            carNumber: 'KqKV_',
            ownerId: '9KeaYbRLP',
          },
        ],
        Ford: [],
        Alpha_Romeo: [],
      },
    },
    {
      agencyName: 'Carsova',
      cash: 72450,
      credit: 50000,
      agencyId: 'oqQmsZoUo',
      cars: {
        Bmw: [
          {
            name: '7',
            year: 1999,
            price: 24700,
            carNumber: 'sZrjp',
            ownerId: 'oqQmsZoUo',
          },
          {
            name: '3',
            year: 2008,
            price: 54000,
            carNumber: 'da88K',
            ownerId: 'oqQmsZoUo',
          },
        ],
        Toyota: [
          {
            name: 'Prius',
            year: 2019,
            price: 124050,
            carNumber: 'ZfbqH',
            ownerId: 'oqQmsZoUo',
          },
          {
            name: 'Hilux',
            year: 1996,
            price: 11540,
            carNumber: 'AZJZ4',
            ownerId: 'oqQmsZoUo',
          },
        ],
        Ford: [],
        Chevrolet: [],
        Alpha_Romeo: [],
      },
    },
  ],
  customers: [
    {
      name: 'Lilah Goulding',
      id: 'BGzHhjnE8',
      cars: [
        {
          name: 'Corolla',
          year: 2013,
          price: 40570,
          carNumber: '16da1',
          ownerId: 'BGzHhjnE8',
        },
      ],
      cash: 35000,
    },
    {
      name: 'Ravi Murillo',
      id: '2RprZ1dbL',
      cars: [
        {
          name: 'X5',
          year: 2019,
          price: 578054,
          carNumber: 'WIh0U',
          ownerId: '2RprZ1dbL',
        },
        {
          name: 'Spider',
          year: 2012,
          price: 81520,
          carNumber: 'RLS4q',
          ownerId: '2RprZ1dbL',
        },
      ],
      cash: 278542,
    },
    {
      name: 'Aleksander Carr',
      id: 'pAuFtn_WA',
      cars: [
        {
          name: 'Highlander',
          year: 2018,
          price: 214503,
          carNumber: '2WU_y',
          ownerId: 'pAuFtn_WA',
        },
      ],
      cash: 125402,
    },
    {
      name: 'Lana Edge',
      id: 'cnTobUDy6',
      cars: [
        {
          name: 'F250',
          year: 2020,
          price: 198500,
          carNumber: 'Xxcy_',
          ownerId: 'cnTobUDy6',
        },
        {
          name: 'Hilux',
          year: 2005,
          price: 35005,
          carNumber: 'VSCUj',
          ownerId: 'cnTobUDy6',
        },
      ],
      cash: 7000,
    },
    {
      name: 'Nikita Philip',
      id: '5x2tMcX4R',
      cars: [
        {
          name: 'Impala',
          year: 2016,
          price: 65042,
          carNumber: 'LKInp',
          ownerId: '5x2tMcX4R',
        },
      ],
      cash: 40541,
    },
    {
      name: 'Bob Steel',
      id: 'Wm6BkA1F0',
      cars: [],
      cash: 15732,
    },
    {
      name: 'Will Reyes',
      id: 'FQvNsEwLZ',
      cars: [
        { name: 'X6', year: 2020, price: 966500, ownerId: 'FQvNsEwLZ' },
        {
          name: 'Land Cruiser',
          year: 2020,
          price: 336300,
          carNumber: 'vaJvd',
          ownerId: 'FQvNsEwLZ',
        },
        {
          name: 'Romeo Julia',
          year: 2020,
          price: 275406,
          carNumber: 'qLoYR',
          ownerId: 'FQvNsEwLZ',
        },
        {
          name: 'Explorer',
          year: 2020,
          price: 265200,
          carNumber: 'tlGRq',
          ownerId: 'FQvNsEwLZ',
        },
      ],
      cash: 1547242,
    },
  ],
  taxesAuthority: {
    totalTaxesPaid: 0,
    sumOfAllTransactions: 0,
    numberOfTransactions: 0,
  },
};

//!------------- Agencies Getters ----------------------

//* 1. getAgencyByName
//? @param {array}     - agenciesArr
//? @param {string}    - name - agency name.
//? @return {object[]} - Array of agencies found,
//?                      and if it didn't, return empty array.
const getAgencyByName = (agenciesArr, name) => {
  //   return agenciesArr.filter((agency) => name === agency.agencyName);
  return agenciesArr.filter((agency) => agency.agencyName.includes(name));
};
// console.log(getAgencyByName(ourCarMarket.sellers, 'CarMax'));

//* 2. getAgencyById
//? @param {array}   - agenciesArr
//? @param {string}  - id - agency id
//? @return {object} - agency object
const getAgencyById = function (agenciesArr, id) {
  return agenciesArr.find((agency) => agency.agencyId === id);
};
// console.log(getAgencyById(ourCarMarket.sellers, '26_IPfHU1'));

//* 3. getAllAgenciesNameAndId
//? @param {array}     - agenciesArr
//? @return {Object[]} - Array of agency objects.
//?                      The object includes the keys 'name' and 'id'
const getAllAgenciesNameAndId = (agenciesArr) => {
  //   return agenciesArr.map((agency) => {
  //     const newObj = { name: agency.agencyName, id: agency.agencyId };
  //     return newObj;
  //   });
  return agenciesArr.map(({ agencyName: name, agencyId: id }) => {
    return { name, id };
  });
};
// console.log(getAllAgenciesNameAndId(ourCarMarket.sellers));

//* 4. getCarsToBuy
//? @param {array}    - agenciesArr
//? @return {object[]} - array of cars objects that are for sale
const getCarsToBuy = (agenciesArr) => {
  const res = [];
  agenciesArr.forEach((agency) => {
    //! agency.cars === object
    const cars = agency.cars; // object
    for (let carBrand in cars) {
      cars[carBrand].forEach((car) => {
        res.push(car);
      });
      // res.push(...cars[carBrand]);
    }
    // for (let carsArr of Object.values(cars)) {
    // }
  });
  return res;
};
console.log(getCarsToBuy(ourCarMarket.sellers));

//* 5. getCarsToBuyByModel
//? @param {array}     - agenciesArr
//? @param {string}    - carModel
//? @return {object[]} - arrays of cars objects that are for sale by Model
const getCarsToBuyByModel = (agenciesArr, model) => {
  return getCarsToBuy(agenciesArr).filter((car) => car.name === model);
};

//* 6. getCarsToBuyByAgencyId
//? @param {array}     - agenciesArr
//? @param {string}    - agencyId (optional)
//? @return {object[]} - array of cars objects that are for sale
//?                      at a specific agency
//?                      if agencyId didn't supplied return by all agencies
//! do not use getCarsToBuy or getCarsToBuyByModel
const getCarsToBuyByAgencyId = (agenciesArr, agencyId) => {
  const res = [];
  agenciesArr.forEach((agency) => {
    if (agency.agencyId === agencyId || agencyId === undefined) {
      const cars = agency.cars; // object
      for (let carBrand in cars) {
        cars[carBrand].forEach((car) => {
          res.push(car);
        });
      }
    }
  });
  return res;
};
// console.log(getCarsToBuyByAgencyId(ourCarMarket.sellers));

//* 7. getAllCarsToBuyByModelAndAgencyId
//? @param {array}     - agenciesArr
//? @param {string}    - carModel
//? @param {string}    - agencyId (optional)
//? @return {object[]} - array of cars objects that are for sale
//?                      at a specific agency and a specific model
//?                      if agencyId didn't supplied return by all agencies
//! do not use getCarsToBuy or getCarsToBuyByModel
const getCarsToBuyByModelAndAgencyId = (agenciesArr, model, agencyId) => {
  return getCarsToBuyByAgencyId(agenciesArr, agencyId).filter((car) => car.name === model);
};
// console.log(getCarsToBuyByModelAndAgencyId(ourCarMarket.sellers));

//!------------- Customers Getters ----------------------
//* 8. getCustomerByName
//? @param {array}    - customersArr
//? @param {string}    - name - customer name.
//? @return {Object[]} - Array of customers found,
//?                      and if it didn't, return empty array.
//! Question: Why do you think the function returns an array and not the client object?
const getCustomerByName = (customersArr, name) => {
  //   return customersArr.filter((el) => {
  //     return el.name === name;
  //   });
  return customersArr.filter((el) => {
    return el.name.includes(name);
  });
};
// console.log(getCustomerByName(ourCarMarket.customers, 'Lilah'));

//* 9. getCustomerById
//? @param {array}  - customersArr
//? @param {string}  - id - customer id
//? @return {object} - customer object
const getCustomerById = (customersArr, id) => {
  return customersArr.find((el) => {
    return el.id === id;
  });
};
// console.log(getCustomerById(ourCarMarket.customers, 'BGzHhjnE8'));

//* 10. getAllCustomersCars
//? @param {array}  - customersArr
//? @return {object[]} - customerCarsArr - Array of all customer cars object
const getAllCustomersCars = (customersArr) => {
  //customersArr.map - return arr with the same length
  const res2 = [];
  const res = customersArr.map((customer) => {
    //customer.cars === Array
    //customer.cars - return arr with the same length
    return customer.cars;
  });
  return res.flat();
  //
};

//* 11. getAllCustomerCars
//? @param {array}     - customersArr
//? @param {string}    - customerId (optional)
//? @return {object[]} - customerCarsArr - Array of all customer cars object
//?                      if customerId didn't supplied return by all customers cars
const getAllCustomerCars = (customersArr, customerId) => {
  let res = [];
  customersArr.forEach((customer) => {
    if (customer.id === customerId || customerId === undefined) {
      res.push(...customer.cars);
    }
  });
  return res;
};
//! ---------------- Setters -----------------

//* 13. setNewCarToAgency
//? @param {object}  - agencyObject
//? @param {object}  - carObject (with 'brand' key value pair)
//? @return {object} - carObject - the car after it has been assigned
const setNewCarToAgency = (agencyObject, carObject) => {
  //agencyObject.cars == Object
  // agencyObject.cars[carObject.brand] === Array of specific brand
  agencyObject.cars[carObject.brand].push(carObject);
  return carObject;
};
// const agency = ourCarMarket.sellers[0];
// setNewCarToAgency(agency, { brand: 'Bmw', name: 'Xxxxxxx' });

//* 14. deleteCarFromAgency
//? @param {object}  - agencyObject
//? @param {string}  - carNumber
//? @return {object} - carObject - the car after it has been removed
const deleteCarFromAgency = (agencyObject, carNumber) => {
  let deletedCar;
  for (let brand in agencyObject.cars) {
    agencyObject.cars[brand] = agencyObject.cars[brand].filter((car) => {
      if (car.carNumber === carNumber) {
        deletedCar = car;
      }
      return car.carNumber !== carNumber;
    });
  }
  return deletedCar;
};
// console.log(deleteCarFromAgency(ourCarMarket.sellers[3], 'KqKV_'));
// console.log(ourCarMarket.sellers[3]);
// console.log(ourCarMarket.sellers[3].cars);

//* 15. decrementOrIncrementCashOfAgency
//? Decrement or increment cash of an agency
//? @param {object}   - agencyObj
//? @param {number}   - amount - negative or positive amount
// ? @return {number} - the new amount of agency cash
const decOrIncCashOfAgency = (agencyObj, amount) => {
  agencyObj.cash += amount;
  return agencyObj.cash;
};
// decOrIncCashOfAgency(ourCarMarket.sellers[0], 100000000);

//* 16. decOrIncCreditOfAgency
//? @param {object}  - agencyObj
//? @param {number}  - amount - negative or positive amount
//? @return {number} - the new amount of agency credit
//?                    The lowest credit is 0
const decOrIncCreditOfAgency = (agencyObj, amount) => {
  if (agencyObj.credit + amount >= 0) {
    agencyObj.credit += amount;
    return agency.credit;
  }
};

//* 17. setCarToCustomer
//? @param {object} - customerObj
//? @param {object} - carObject
//? @return {object[]} - allCarsOfCostumer
const setCarToCustomer = (customerObj, carObject) => {
  customerObj.cars.push(carObject);
  return customerObj.cars;
};

//* 18. deleteCarOfCustomer
//? @param {object} - customerObj
//? @param {string} - carNumber
//? @return {object[]} - allCarsOfCostumer
const deleteCarOfCostumer = (customerObj, carNumber) => {
  let res;
  costumerObj.cars = costumerObj.cars.filter((car) => {
    if (car.carNumber === carNumber) {
      res = car;
    }
    return car.carNumber !== carNumber;
  });
  return res;
};

//* 19. decOrIncCashOfCustomer
//? @param {object}  - customerObj
//? @param {number}  - amount - negative or positive amount
//? @return {number} - costumerCash
//?                    The lowest cash amount is 0
const decOrIncCashOfCustomer = (customerObj, amount) => {
  if (costumerObj.cash + amount < 0) return;
  costumerObj.cash += amount;
  return costumerObj.cash;
};

//! ---------------- Hard ----------------------
//* 20. setPropertyBrandToAllCars
//? Set to all car objects the new key "model" and assign to it the correct model name
//? @param {object} carMarket
//? @return {boolean} in case the assignment was successful return true and false in case it was not
//! At the end of the exercise, (theoretically)
//! if you had the ability to change the original
//! carMarket object to another form, what would it be?
const setPropertyBrandToAllCars = (carMarket) => {
  const modelsObj = {};
  carMarket.sellers.forEach((agency) => {
    for (let [key, value] of Object.entries(agency.cars)) {
      value.forEach((car) => {
        if (!modelsObj[car.name]) {
          modelsObj[car.name] = key;
        }
        car.brand = key;
      });
    }
  });
  carMarket.customers.forEach((customer) => {
    customer.cars.forEach((car) => {
      car.brand = modelsObj[car.name];
    });
  });
  return modelsObj;
};

//* 21. sortAndFilterByYearOfProduction
//?   filter and Sort in a Ascending or Descending order all vehicles for sale by year of production.
//?   @param {object[]} - arrOfCars - array of cars
//?   @param {number} - fromYear - Will display vehicles starting this year
//?   @param {number} - toYear - Will display vehicles up to this year
//?   @param {boolean} - isAscendingOrder - true for ascending order, false for descending order (optional)
//?   @return {object[]} - arrayOfModels - array of sorted cars

//* 22. sortAndFilterByPrice
//?   filter and Sort in a Ascending or Descending order all vehicles for sale by price of the cars.
//?   @param {object[]} - arrOfCars - array of cars
//?   @param {number} - fromPrice - Will display vehicles starting at this price
//?   @param {number} - fromPrice - Will display vehicles up to this price
//?   @param {boolean} - isAscendingOrder - true for ascending order, false for descending order
//?   @return {object[]} - arrayOfModels - array of sorted cars

//* 23. searchCar
//?   @param {object[]} - arrOfCars - array of cars
//?   @param {number} - fromYear - Will display vehicles starting this year (optional)
//?   @param {number} - toYear - Will display vehicles up to this year (optional)
//?   @param {number} - fromPrice - Will display vehicles starting at this price (optional)
//?   @param {number} - fromPrice - Will display vehicles up to this price (optional)
//?   @param {string} - brand - Look only for cars of this brand (optional)

//! ------------------ Ninja ------------------

//* 24. sellCar
//?   Sell ​​a car to a specific customer
//?   @param {string} - agencyId
//?   @param {string} - customerId
//?   @param {string} - carNumber
//?   @return {object} - The object of the car purchased by the customer or an explanation message
// *     - 5a. Subtract the vehicle amount + 17% (tax) from the customer's cash.
// *     - 5b. Add the vehicle value to the car agency cash.
// *     - 5c. Change the car owner's id to the customer's id.
// *     - 5d. Remove the car from the array of the agency's car models.
// *     - 5e. Add the car to the client cars array.
// *
// *     Taxes Authority:
// *     - 5f. Pay 17 percent of the vehicle value to the tax authority. (add the amount to totalTaxesPaid)
// *     - 5g. Increase the number of transactions made in one (numberOfTransactions)
// *     - 5h. Add the vehicle amount + tax to sumOfAllTransactions
// !     - Check that there is the requested vehicle at the agency in not return 'The vehicle does not exist at the agency'
// !     - Check that the customer has enough money to purchase the vehicle, if not return 'The customer does not have enough money'

//!      - Try to divide the tasks into several functions and try to maintain a readable language.

//! Async
//* 1
// Create an input field and a button when the button is clicked
// call  function that receives 'number' as a parameter (from input field)
// and returns a new promise after 2 sec
// If the number is above 17 display on the screen 'You can drive'
// and if it’s smaller throw error and display on the screen 'You're too young to drive'

//! Check yourself once with .then .catch and once with async await

//! DRY
//! Small functions

const button = document.querySelector('button');
const input = document.querySelector('input');
const message = document.querySelector('#message');

const getPromise = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num >= 17) resolve('You can drive');

      reject("You're too young to drive");
    }, 2000);
  });
};

const setMessage = (text) => (message.textContent = text);
// Event handlers
const handleButtonClick = () => {
  // try {
  // if (!input.value) throw Error('You must type your age');
  //   const messageToDisplay = await getPromise(input.value);
  //   setMessage(messageToDisplay);
  // } catch (e) {
  //   setMessage(e);
  // }
  if (!input.value) {
    setMessage('You must type your age');
    return;
  }
  getPromise(input.value)
    .then((res) => {
      setMessage(res);
    })
    .catch((e) => {
      setMessage(e);
    });
};

//
const setEvents = () => {
  button.addEventListener('click', handleButtonClick);
};

// setEvents();

//?  2)
//?  create a car Market Object
//?  fetch all data from the API and assign it to the carMarketObj
//?  add spinner to see that everything works
//?  and show message when done

//? Do i need? https://capsules7.herokuapp.com/api/carMarket/agencies
//? Do i need? https://capsules7.herokuapp.com/api/carMarket/customers
//? Do i need? https://capsules7.herokuapp.com/api/carMarket/tax

//? Do i need? https://capsules7.herokuapp.com/api/carMarket/customers/:id
//? Do i need? https://capsules7.herokuapp.com/api/carMarket/agencies/:id

const spinnerContainer = document.querySelector('.spinner_container');
const urls = [
  'https://capsules7.herokuapp.com/api/carMarket/agencies',
  'https://capsules7.herokuapp.com/api/carMarket/customers',
  'https://capsules7.herokuapp.com/api/carMarket/tax',
];

const carMarket = {};

const fetchData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
  // return res.json();
};

// const setCarMarketData = async () => {
//   carMarket.sellers = await fetchData('https://capsules7.herokuapp.com/api/carMarket/agencies');
// };
// setCarMarketData();

const getAllPromises = async (arrOfUrls) => {
  const promisesArr = arrOfUrls.map((url) => {
    return fetchData(url);
  });
  const [sellers, customers, taxesAuthority] = await Promise.all(promisesArr);

  return { sellers, customers, taxesAuthority };
};

const spinnerToggle = (bool) => {
  if (bool) {
    const h2 = document.createElement('h2');
    h2.textContent = 'Loading ';
    spinnerContainer.appendChild(h2);
  } else {
    spinnerContainer.replaceChildren([]);
  }
};

const startApp = async () => {
  spinnerToggle(true);
  const res = await getAllPromises(urls);
  spinnerToggle(false);
  console.log(res);
};
startApp();

//? 3)
//? Create two button on the screen "Customers" "Agencies"
//? When the user clicks the button display a list of Customers / Agencies names
//? Only one list can be presented at a time

//? 4)
//? When the user clicks on single name of a Customer / Agency
//? Show over the screen a card with all the data of that particular Customer / Agency

//? 5)
//? When the user clicks on get image of the car fetch the car image and display another card with the image.
//! but what if i did no get the image ?????

//? ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// https://capsules7.herokuapp.com/api/carMarket/img/:brand/:model

//! Questions we should ask ourselves:
//! Where functions can be combined into one function?
//! Am I holding unnecessary information in the client's browser?
//! Why did I choose to call the API the way I did?

//* You can divide the work inside the capsule and share the responsibility
//* Separate the functions of logic and The functions related to HTML
//* Don't mess with the design (CSS)
