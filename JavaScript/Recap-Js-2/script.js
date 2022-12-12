/** 1)
  Create an input field and a button when the button is clicked
  call  function that receives 'number' as a parameter (from input field)
  and returns a new promise after 2 sec
  If the number is above 17 display on the screen 'You can drive'
  and if it's smaller throw error and display on the screen 'You're too young to drive'
 */
//! Check yourself once with .then .catch and once with async await
//! DRY
//! Small functions

const textInput = document.querySelector("#textInput");
const btn = document.querySelector("#btn");
const displayText = document.querySelector("#displayText");

btn.addEventListener("click", () => {
  // ------------------------------------
  // ----- UNCOMMENT TO USE PROMISE -----
  //   createPromise(Number(textInput.value))
  //     .then((resolve) => {
  //       console.log(resolve);
  //     }).catch((reject) => console.log(reject));
  // ------------------------------------
  // --- UNCOMMENT TO USE ASYNC/AWAIT ---
  createPromiseAsync(Number(textInput.value));
});
// ------------------------------------
// ----- UNCOMMENT TO USE PROMISE -----
// function createPromise(num) {
//   return newPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (num >= 17) {
//         resolve(displayText.innerHTML = "You can drive")
//       } else {
//         reject(displayText.innerHTML = "You're too young to drive")
//       }
//     }, 2000)
//   })
// }
// ------------------------------------
// --- UNCOMMENT TO USE ASYNC/AWAIT ---
async function createPromiseAsync(num) {
  try {
    setTimeout(() => {
      if (num >= 17) {
        displayText.innerHTML = "You can drive";
      } else {
        displayText.innerHTML = "You're too young to drive";
      }
    }, 2000);
  } catch (error) {
    console.log(error);
  }
}
// -----------------------------------
// ----------- Car Market ------------
/** 2)
   create a car Market Object
   fetch all data from the API and assign it to the carMarketObj
   add spinner to see that everything works
   and show message when done
   */
//? Do i need? https://capsules7.herokuapp.com/api/carMarket/agencies
//? Do i need? https://capsules7.herokuapp.com/api/carMarket/agencies/:id
//? Do i need? https://capsules7.herokuapp.com/api/carMarket/customers
//? Do i need? https://capsules7.herokuapp.com/api/carMarket/customers/:id:
//? Do i need? https://capsules7.herokuapp.com/api/carMarket/tax

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const extractByID = async (str, arr) => {
  let res = [];
  for (let item of arr) {
    let url;
    if (str === "sell") {
      url = `https://capsules7.herokuapp.com/api/carMarket/agencies/${item.agencyId}`;
    } else {
      url = `https://capsules7.herokuapp.com/api/carMarket/customers/${item.id}`;
    }
    const f = fetchData(url);
    res.push(f);
  }
  let fRes = await Promise.all(res);
  return fRes;
};

const getData = async () => {
  const sellers = await fetchData(
    "https://capsules7.herokuapp.com/api/carMarket/agencies",
  );
  const customersList = await fetchData(
    "https://capsules7.herokuapp.com/api/carMarket/customers",
  );
  const taxesAuthority = await fetchData(
    "https://capsules7.herokuapp.com/api/carMarket/tax",
  );
  const agencies = await extractByID("sell", sellers);
  const customers = await extractByID("buy", customersList);
  Object.assign(sellers, agencies);
  Object.assign(customers, customers);
  const carMarket = {};
  Object.assign(carMarket, { sellers }, { customers }, { taxesAuthority });
  // console.log("carMarket", carMarket);
  return carMarket;
};
getData();
// ----------------------------------------------------------------------

//? 3)
//? Create two button on the screen "Customers" "Agencies"
//? When the user clicks the button display a list of Customers / Agencies names
//? Only one list can be presented at a time
const customersBtn = document.querySelector("#customersBtn");
const agenciesBtn = document.querySelector("#agenciesBtn");
const listContainer = document.querySelector("#listContainer");

customersBtn.addEventListener("click", async () => {
  listContainer.innerHTML = "";
  setSpinner(true);
  const carMarketObj = await getData();
  const ol = document.createElement("ol");
  ol.id = "customer-ol";
  ol.innerHTML = "Customers List:";
  listContainer.appendChild(ol);
  carMarketObj.customers.forEach((customer) => {
    let { name } = customer;
    const li = document.createElement("li");
    li.id = "customer-Id";
    li.innerHTML = name;
    ol.appendChild(li);
  });
  setSpinner(false);
});
// -----------------------------------------------------
agenciesBtn.addEventListener("click", async () => {
  listContainer.innerHTML = "";
  setSpinner(true);
  const carMarketObj = await getData();
  console.log(carMarketObj);
  const ol = document.createElement("ol");
  ol.id = "agency-ol";
  ol.innerHTML = "Agencies List:";
  listContainer.appendChild(ol);
  carMarketObj.sellers.forEach((seller) => {
    let { agencyName } = seller;
    const li = document.createElement("li");
    li.id = "agency-Id";
    li.innerHTML = agencyName;
    ol.appendChild(li);
  });
  setSpinner(false);
});
// -----------------------------------------------------
const setSpinner = (bool) => {
  if (bool) {
    const spinner = document.createElement("h3");
    spinner.textContent = "Loading";
    listContainer.appendChild(spinner);
  } else {
    const spinner = document.querySelector("h3");
    listContainer.removeChild(spinner);
  }
};

// -------------------------------------------------------------------//? 4)
//? When the user clicks on single name of a Customer / Agency
//? Show over the screen a card with all the data of that particular Customer / Agency

const getInfoFromSingleNameAgency = () => {
  const listContainer = document.querySelector("#listContainer");
  const modalContainer = document.querySelector(".modal-container");
  const modal = document.querySelector(".modal");
  const close = document.querySelector(".modal-btn");
  listContainer.addEventListener("click", async (e) => {
    if (e.target.tagName === "LI") {
      const li = e.target;

      if (li.id === "agency-Id") {
        const carMarketObj = await getData();

        const p = document.createElement("p");

        modal.prepend(p);
        carMarketObj.sellers.forEach((seller) => {
          let { agencyName, cars, agencyId, cash, credit } = seller;

          if (li.textContent === agencyName) {
            p.textContent = `Agency Name : ${agencyName}
                        Agency id : ${agencyId}
                        Agency cash : ${cash}
                        Agency credit : ${credit}`;
            modalContainer.classList.add("show");
          }
        });
        close.addEventListener("click", () => {
          modalContainer.classList.remove("show");
          p.textContent = "";
        });
      }
    }
  });
};
getInfoFromSingleNameAgency();

const getInfoFromSingleNameCustomer = () => {
  const listContainer = document.querySelector("#listContainer");
  const modalContainer = document.querySelector(".modal-container");
  const modal = document.querySelector(".modal");
  const close = document.querySelector(".modal-btn");
  listContainer.addEventListener("click", async (e) => {
    if (e.target.tagName === "LI") {
      const li = e.target;

      if (li.id === "customer-Id") {
        const carMarketObj = await getData();

        const p = document.createElement("p");

        modal.prepend(p);
        carMarketObj.customers.forEach((customer) => {
          let { name, cars, id, cash } = customer;

          if (li.textContent === name) {
            p.textContent = `Customer Name : ${name}
                            Customer id : ${id}
                            Customer cash : ${cash}
                            `;
            modalContainer.classList.add("show");
            p.style.maxWidth = "552px";
          }
        });
        close.addEventListener("click", () => {
          modalContainer.classList.remove("show");
          p.textContent = "";
        });
      }
    }
  });
};
getInfoFromSingleNameCustomer();
//? 5)
//? When the user clicks on get image of the car fetch the car image and display another card with the image.
//! but what if i did no get the image ?????

//? ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// https://capsules7.herokuapp.com/api/carMarket/img/:brand/:model
const getImageByBrandAndModel = async () => {
  const carMarketObj = await getData();
  let brand = [];

  const carsObj = [];


  const model = [];
  // console.log(carMarketObj.sellers[0].cars);
  carMarketObj.sellers.forEach(async (seller) => {
    //! agency.cars === object
    const cars = seller.cars; // object
    carsObj.push(cars);
    // console.log(cars);
    for (let carBrand in cars) {
      // brand.push(carBrand)
    for(let i =0;i<cars[carBrand].length;i++){
      const byBrandAndModel = await fetchData(
        `https://capsules7.herokuapp.com/api/carMarket/img/${carBrand}/${cars[carBrand][i].name}`,
      );
        // console.log(byBrandAndModel);
      // console.log(byBrandAndModel);

      if (byBrandAndModel.image) {
        // brand.push({
        //   car: byBrandAndModel.brand,
        //   image: byBrandAndModel.image,
        // });
        // brand[byBrandAndModel.brand] = byBrandAndModel.image
        brand.push(byBrandAndModel.image)
        // console.log(brand[0].image);
        // console.log(byBrandAndModel.image);
      }
      // console.log(byBrandAndModel);

      // model.push(car.name);
    }
      // cars[carBrand].forEach(async (car) => {
      //   const byBrandAndModel = await fetchData(
      //     `https://capsules7.herokuapp.com/api/carMarket/img/${carBrand}/${car.name}`,
      //   );
      //     // console.log(byBrandAndModel);
      //   // console.log(byBrandAndModel);

      //   if (byBrandAndModel.image) {
      //     // brand.push({
      //     //   car: byBrandAndModel.brand,
      //     //   image: byBrandAndModel.image,
      //     // });
      //     brand[byBrandAndModel.brand] = byBrandAndModel.image
      //     // console.log(brand[0].image);
      //   }
      //   // console.log(byBrandAndModel);

      //   // model.push(car.name);
      // });
    }
    console.log(brand[2]);
    // console.log(await postBrandAndModelData(brand));
    // brand.forEach(e=>console.log(e))
  });
return brand
  
};
let test = await getImageByBrandAndModel()
console.log(test);

getImageByBrandAndModel();

async function postBrandAndModelData(arr) {}

const ourCarMarket = {
  sellers: [
    {
      agencyName: "CarMax",
      cash: 968541,
      credit: 500000,
      agencyId: "26_IPfHU1",
      cars: {
        Bmw: [
          {
            name: "X5",
            year: 2015,
            price: 218000,
            carNumber: "4Ixb0",
            ownerId: "26_IPfHU1",
          },
          {
            name: "X6",
            year: 2014,
            price: 97100,
            carNumber: "kAnv-",
            ownerId: "26_IPfHU1",
          },
          {
            name: "Z4",
            year: 2019,
            price: 296900,
            carNumber: "ISMdU",
            ownerId: "26_IPfHU1",
          },
          {
            name: "3",
            year: 2010,
            price: 75100,
            carNumber: "9DJPw",
            ownerId: "26_IPfHU1",
          },
        ],
        Toyota: [
          {
            name: "Land Cruiser",
            year: 2005,
            price: 80540,
            carNumber: "Kt-pW",
            ownerId: "26_IPfHU1",
          },
          {
            name: "Corolla",
            year: 2019,
            price: 109100,
            carNumber: "YiYdI",
            ownerId: "26_IPfHU1",
          },
          {
            name: "Hilux",
            year: 2019,
            price: 204000,
            carNumber: "DRmNw",
            ownerId: "26_IPfHU1",
          },
        ],
        Ford: [
          {
            name: "F250",
            year: 2020,
            price: 198500,
            carNumber: "g4Wfp",
            ownerId: "26_IPfHU1",
          },
          {
            name: "Explorer",
            year: 2020,
            price: 265200,
            carNumber: "iNT8Q",
            ownerId: "26_IPfHU1",
          },
        ],
        Alpha_Romeo: [
          {
            name: "Spider",
            year: 2011,
            price: 75405,
            carNumber: "6t7QU",
            ownerId: "26_IPfHU1",
          },
          {
            name: "166",
            year: 2002,
            price: 12400,
            carNumber: "XMqpn",
            ownerId: "26_IPfHU1",
          },
        ],
        Chevrolet: [
          {
            name: "Impala",
            year: 2016,
            price: 65042,
            carNumber: "vbeAo",
            ownerId: "26_IPfHU1",
          },
          {
            name: "Savannah",
            year: 2016,
            price: 76505,
            carNumber: "WelWa",
            ownerId: "26_IPfHU1",
          },
        ],
      },
    },
    {
      agencyName: "The Auto World",
      cash: 687450,
      credit: 200000,
      agencyId: "gNHjNFL12",
      cars: {
        Bmw: [
          {
            name: "X6",
            year: 2018,
            price: 548100,
            carNumber: "EMW_7",
            ownerId: "gNHjNFL12",
          },
          {
            name: "3",
            year: 2017,
            price: 178000,
            carNumber: "XlnB4",
            ownerId: "gNHjNFL12",
          },
        ],
        Toyota: [
          {
            name: "Prius",
            year: 2017,
            price: 101542,
            carNumber: "-RQgN",
            ownerId: "gNHjNFL12",
          },
          {
            name: "Highlander",
            year: 2017,
            price: 202540,
            carNumber: "AZJZ4",
            ownerId: "gNHjNFL12",
          },
          {
            name: "Corolla",
            year: 1996,
            price: 5420,
            carNumber: "kHE8f",
            ownerId: "gNHjNFL12",
          },
          {
            name: "Corolla",
            year: 2012,
            price: 40570,
            carNumber: "p2qEi",
            ownerId: "gNHjNFL12",
          },
        ],
        Ford: [
          {
            name: "Explorer",
            year: 2014,
            price: 127502,
            carNumber: "Ty1zN",
            ownerId: "gNHjNFL12",
          },
          {
            name: "F350",
            year: 2012,
            price: 54250,
            carNumber: "z03H2",
            ownerId: "gNHjNFL12",
          },
        ],
        Chevrolet: [
          {
            name: "Savannah",
            year: 2010,
            price: 36504,
            carNumber: "RXFZe",
            ownerId: "gNHjNFL12",
          },
          {
            name: "Malibu",
            year: 2009,
            price: 19585,
            carNumber: "K5IsM",
            ownerId: "gNHjNFL12",
          },
        ],
        Alpha_Romeo: [],
      },
    },
    {
      agencyName: "Best Deal",
      cash: 1245000,
      credit: 200000,
      agencyId: "Plyq5M5AZ",
      cars: {
        Bmw: [
          {
            name: "3",
            year: 2015,
            price: 137000,
            carNumber: "AZJZ4",
            ownerId: "Plyq5M5AZ",
          },
          {
            name: "X6",
            year: 2020,
            price: 966500,
            carNumber: "S6DL1",
            ownerId: "Plyq5M5AZ",
          },
        ],
        Toyota: [
          {
            name: "Land Cruiser",
            year: 2020,
            price: 336300,
            carNumber: "6rvXw",
            ownerId: "Plyq5M5AZ",
          },
          {
            name: "Hilux",
            year: 2005,
            price: 35005,
            carNumber: "MWXBG",
            ownerId: "Plyq5M5AZ",
          },
          {
            name: "Corolla",
            year: 2020,
            price: 111900,
            carNumber: "hCzl-",
            ownerId: "Plyq5M5AZ",
          },
        ],
        Ford: [
          {
            name: "Focus",
            year: 2020,
            price: 98200,
            carNumber: "kN3HP",
            ownerId: "Plyq5M5AZ",
          },
          {
            name: "Focus",
            year: 2005,
            price: 6502,
            carNumber: "LJTCs",
            ownerId: "Plyq5M5AZ",
          },
        ],
        Alpha_Romeo: [
          {
            name: "Romeo Julia",
            year: 2020,
            price: 275406,
            carNumber: "2kjy7",
            ownerId: "Plyq5M5AZ",
          },
          {
            name: "Romeo Stelvio",
            year: 2019,
            price: 215403,
            carNumber: "7A5b-",
            ownerId: "Plyq5M5AZ",
          },
        ],
        Chevrolet: [
          {
            name: "Traverse",
            year: 2020,
            price: 201102,
            carNumber: "QwBOT",
            ownerId: "Plyq5M5AZ",
          },
          {
            name: "Impala",
            year: 2019,
            price: 165041,
            carNumber: "2v4jt",
            ownerId: "Plyq5M5AZ",
          },
          {
            name: "Malibu",
            year: 2017,
            price: 75405,
            carNumber: "O4_Jv",
            ownerId: "Plyq5M5AZ",
          },
        ],
      },
    },
    {
      agencyName: "Car Werks",
      cash: 302502,
      credit: 150000,
      agencyId: "9KeaYbRLP",
      cars: {
        Bmw: [
          {
            name: "8",
            year: 2020,
            price: 942500,
            carNumber: "4IUMz",
            ownerId: "9KeaYbRLP",
          },
          {
            name: "X6",
            year: 2010,
            price: 129000,
            carNumber: "Vw0fV",
            ownerId: "9KeaYbRLP",
          },
          {
            name: "X3",
            year: 2019,
            price: 358100,
            carNumber: "ufN54",
            ownerId: "9KeaYbRLP",
          },
          {
            name: "3",
            year: 2020,
            price: 389100,
            carNumber: "F127X",
            ownerId: "9KeaYbRLP",
          },
          {
            name: "3",
            year: 2002,
            price: 18400,
            carNumber: "ueZUp",
            ownerId: "9KeaYbRLP",
          },
        ],
        Toyota: [
          {
            name: "Prius",
            year: 2011,
            price: 38520,
            carNumber: "AZJZ4",
            ownerId: "9KeaYbRLP",
          },
          {
            name: "Land Cruiser",
            year: 2019,
            price: 290040,
            carNumber: "AZJZ4",
            ownerId: "9KeaYbRLP",
          },
          {
            name: "Hilux",
            year: 2020,
            price: 215700,
            carNumber: "xig8N",
            ownerId: "9KeaYbRLP",
          },
          {
            name: "Hilux",
            year: 2015,
            price: 178506,
            carNumber: "ghTiQ",
            ownerId: "9KeaYbRLP",
          },
          {
            name: "Corolla",
            year: 2002,
            price: 8504,
            carNumber: "Mvw8T",
            ownerId: "9KeaYbRLP",
          },
        ],
        Chevrolet: [
          {
            name: "Impala",
            year: 2005,
            price: 9320,
            carNumber: "BZpkt",
            ownerId: "9KeaYbRLP",
          },
          {
            name: "Malibu",
            year: 2002,
            price: 4502,
            carNumber: "KqKV_",
            ownerId: "9KeaYbRLP",
          },
        ],
        Ford: [],
        Alpha_Romeo: [],
      },
    },
    {
      agencyName: "Carsova",
      cash: 72450,
      credit: 50000,
      agencyId: "oqQmsZoUo",
      cars: {
        Bmw: [
          {
            name: "7",
            year: 1999,
            price: 24700,
            carNumber: "sZrjp",
            ownerId: "oqQmsZoUo",
          },
          {
            name: "3",
            year: 2008,
            price: 54000,
            carNumber: "da88K",
            ownerId: "oqQmsZoUo",
          },
        ],
        Toyota: [
          {
            name: "Prius",
            year: 2019,
            price: 124050,
            carNumber: "ZfbqH",
            ownerId: "oqQmsZoUo",
          },
          {
            name: "Hilux",
            year: 1996,
            price: 11540,
            carNumber: "AZJZ4",
            ownerId: "oqQmsZoUo",
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
      name: "Lilah Goulding",
      id: "BGzHhjnE8",
      cars: [
        {
          name: "Corolla",
          year: 2013,
          price: 40570,
          carNumber: "16da1",
          ownerId: "BGzHhjnE8",
        },
      ],
      cash: 35000,
    },
    {
      name: "Ravi Murillo",
      id: "2RprZ1dbL",
      cars: [
        {
          name: "X5",
          year: 2019,
          price: 578054,
          carNumber: "WIh0U",
          ownerId: "2RprZ1dbL",
        },
        {
          name: "Spider",
          year: 2012,
          price: 81520,
          carNumber: "RLS4q",
          ownerId: "2RprZ1dbL",
        },
      ],
      cash: 278542,
    },
    {
      name: "Aleksander Carr",
      id: "pAuFtn_WA",
      cars: [
        {
          name: "Highlander",
          year: 2018,
          price: 214503,
          carNumber: "2WU_y",
          ownerId: "pAuFtn_WA",
        },
      ],
      cash: 125402,
    },
    {
      name: "Lana Edge",
      id: "cnTobUDy6",
      cars: [
        {
          name: "F250",
          year: 2020,
          price: 198500,
          carNumber: "Xxcy_",
          ownerId: "cnTobUDy6",
        },
        {
          name: "Hilux",
          year: 2005,
          price: 35005,
          carNumber: "VSCUj",
          ownerId: "cnTobUDy6",
        },
      ],
      cash: 7000,
    },
    {
      name: "Nikita Philip",
      id: "5x2tMcX4R",
      cars: [
        {
          name: "Impala",
          year: 2016,
          price: 65042,
          carNumber: "LKInp",
          ownerId: "5x2tMcX4R",
        },
      ],
      cash: 40541,
    },
    {
      name: "Bob Steel",
      id: "Wm6BkA1F0",
      cars: [],
      cash: 15732,
    },
    {
      name: "Will Reyes",
      id: "FQvNsEwLZ",
      cars: [
        { name: "X6", year: 2020, price: 966500, ownerId: "FQvNsEwLZ" },
        {
          name: "Land Cruiser",
          year: 2020,
          price: 336300,
          carNumber: "vaJvd",
          ownerId: "FQvNsEwLZ",
        },
        {
          name: "Romeo Julia",
          year: 2020,
          price: 275406,
          carNumber: "qLoYR",
          ownerId: "FQvNsEwLZ",
        },
        {
          name: "Explorer",
          year: 2020,
          price: 265200,
          carNumber: "tlGRq",
          ownerId: "FQvNsEwLZ",
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

//! Questions we should ask ourselves:
//! Where functions can be combined into one function?
//! Am I holding unnecessary information in the client's browser?
//! Why did I choose to call the API the way I did?

//* You can divide the work inside the capsule and share the responsibility
//* Separate the functions of logic and The functions related to HTML
//* Don't mess with the design (CSS)
