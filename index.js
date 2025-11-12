const inventory = [
  {
    id: 1,
    name: `apple`,
    price: 1.49,
    category: `fruit`,
    quantity: 200
  },
  {
    id: 2,
    name: `banana`,
    price: 0.30,
    category: `fruit`,
    quantity: 400
  },
  {
    id: 3,
    name: `avocado`,
    price: 1.50,
    category: `fruit`,
    quantity: 175
  },
  {
    id: 4,
    name: `squash`,
    price: 2.49,
    category: `vegetable`,
    quantity: 80
  },
  {
    id: 5,
    name: `zucchini`,
    price: 1.99,
    category: `vegetable`,
    quantity: 100
  },
  {
    id: 6,
    name: `sweet potato`,
    price: 2.99,
    category: `vegetable`,
    quantity: 75
  },
  {
    id: 7,
    name: `potato chips`,
    price: 2.49,
    category: `snack`,
    quantity: 67
  },
  {
    id: 8,
    name: `granola bar`,
    price: 2.99,
    category: `snack`,
    quantity: 200
  },
  {
    id: 9,
    name: `fruit snacks`,
    price: 4.99,
    category: `snack`,
    quantity: 180
  },
  {
    id: 10,
    name: `cheese`,
    price: 5.49,
    category: `dairy`,
    quantity: 140
  },
  {
    id: 11,
    name: `butter`,
    price: 3.99,
    category: `dairy`,
    quantity: 225
  },
  {
    id: 12,
    name: `milk`,
    price: 2.99,
    category: `dairy`,
    quantity: 120
  },
  {
    id: 13,
    name: `chicken`,
    price: 5.99,
    category: `meat`,
    quantity: 130
  },
  {
    id: 14,
    name: `steak`,
    price: 10.99,
    category: `meat`,
    quantity: 90
  },
  {
    id: 15,
    name: `ham`,
    price: 9.99,
    category: `meat`,
    quantity: 85
  },
];

const logGroceryNames = (items) => {
  // TODO
}

const toUppercase = (items) => {
  // TODO
}

const getItemById = (items) => {
  // TODO
}

const getPriceByName = (items) => {
  // TODO
}

const getAllinCategory = (items) => {
  // TODO
}

const countTotalItems = (items) => {
  // TODO
}

const allItemsCost = (items) => {
  // TODO
}

const promptAndDisplay = () => {
  const inputId = prompt(`What is the item id?`);
  const idToNum = Number(inputId);
  const inputName = prompt(`What is the item name?`);
  const inputCat = prompt(`What item category are you looking for?`);
  console.log(`The grocery items in stock are: ${logGroceryNames(inventory)}`);
  console.log(toUppercase(inventory));
  console.log(`The item with id ${idToNum} is:`);
  console.log(getItemById(inventory));
  console.log(`The price of ${inputName} is: $${getPriceByName(inventory)}`);
  console.log(`All items in ${inputCat} section are:`)
  console.log(getAllinCategory(inventory));
  console.log(`The total number of in stock items is: ${countTotalItems(inventory)}`);
  console.log(`The cost to buy all of the items in the store is $${allItemsCost(inventory)}`);
}

promptAndDisplay();