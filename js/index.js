// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((oneGreenPep) => {
    if (state.greenPeppers) {
      oneGreenPep.style.visibility = 'visible';
    } else {
      oneGreenPep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const toggleWhiteSauce = document.querySelector('.sauce');
  // console.log(toggleWhiteSauce.classNames);
  // toggleWhiteSauce.classList.toggle('sauce-white');
  if (state.whiteSauce) {
    //console.log(toggleWhiteSauce.classNames);

    toggleWhiteSauce.classList.add('sauce-white');
  } else {
    toggleWhiteSauce.classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const toggleGlutenCrust = document.querySelector('.crust-gluten-free');
  if (state.glutenFreeCrust) {
    //console.log(toggleWhiteSauce.classNames);

    toggleGlutenCrust.classList.add('sauce-white');
  } else {
    toggleGlutenCrust.classList.remove('sauce-white');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  // const btn = document.getElementsByClassName('btn');
  // btn.addEventListener('click', (event) => {
  //   btn.classList.toggle('active');
  // });

  // const activeBtn = document.querySelectorAll('.btn');
  // if (activeBtn.classList.contain('active')) {
  //   return
  // } else

  const bntPeperoni = document.querySelector('.btn-pepperoni');
  if (state.pepperoni) {
    bntPeperoni.classList.add('active');
  } else {
    bntPeperoni.classList.remove('active');
  }

  const btnMushrooms = document.querySelector('.btn-mushrooms');
  if (state.mushrooms) {
    btnMushrooms.classList.add('active');
  } else {
    btnMushrooms.classList.remove('active');
  }

  const btngGreenPeppers = document.querySelector('.btn-green-peppers');
  if (state.greenPeppers) {
    btngGreenPeppers.classList.add('active');
  } else {
    btngGreenPeppers.classList.remove('active');
  }

  const btnSauce = document.querySelector('.btn-sauce');
  if (state.whiteSauce) {
    btnSauce.classList.add('active');
  } else {
    btnSauce.classList.remove('active');
  }

  const btnCrust = document.querySelector('.btn-crust');
  if (state.glutenFreeCrust) {
    btnCrust.classList.add('active');
  } else {
    btnCrust.classList.remove('active');
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  if (state.pepperoni) {
    //console.log('pepe');
  }

  const listPricePep = document.querySelector('.price li:nth-child(1)');
  //console.log(listPricePep.textContent)
  if (state.pepperoni) {
    listPricePep.style.display = 'block';
  } else {
    listPricePep.style.display = 'none';
  }

  const listPriceMush = document.querySelector('.price li:nth-child(2)');
  //console.log(listPricePep.textContent)
  if (state.mushrooms) {
    listPriceMush.style.display = 'block';
  } else {
    listPriceMush.style.display = 'none';
  }

  const listPriceGr = document.querySelector('.price li:nth-child(3)');
  //console.log(listPriceGr.textContent)
  if (state.greenPeppers) {
    listPriceGr.style.display = 'block';
  } else {
    listPriceGr.style.display = 'none';
  }

  const listPriceSau = document.querySelector('.price li:nth-child(4)');
  //console.log(listPriceSau.textContent)
  if (state.whiteSauce) {
    listPriceSau.style.display = 'block';
  } else {
    listPriceSau.style.display = 'none';
  }

  const listPriceCru = document.querySelector('.price li:nth-child(5)');
  //console.log(listPriceCru.textContent)
  if (state.glutenFreeCrust) {
    listPriceCru.style.display = 'block';
  } else {
    listPriceCru.style.display = 'none';
  }

  let evolvePrice = document.querySelector('.price strong');
  console.log(evolvePrice.textContent);
  let counter = 10;

  for (let key in state) {
    if (state[key]) {
      counter += ingredients[key].price;
    }
  }

  evolvePrice.textContent = counter;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
const increasePricePep = document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
