const mealsEl = document.getElementById("meals");
const favoriteContainer = document.getElementById("fav-meals");
const searchTerm = document.getElementById("search-term");
const searchBtn = document.getElementById("search");

searchBtn.addEventListener("click", async () => {
  mealsEl.innerHTML = "";
  const search = searchTerm.value;
  const searchMeals = await getMealsBySearch(search);
  if (searchMeals)
    searchMeals.forEach(meal => {
      addMeal(meal);
    });
});

// init
getRandomMeal();
fetchFavMeals();

async function getRandomMeal() {
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  const random = await res.json();
  const randomMeal = random.meals[0];
  addMeal(randomMeal, true);
}

async function getMealById(id) {
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);
  const resData = await res.json();
  const meal = resData.meals[0];
  return meal;
}

async function getMealsBySearch(term) {
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + term);
  const resData = await res.json();
  const meals = resData.meals;
  return meals;
}

function addMeal(mealData, random = false) {
  console.log(mealData);
  const meal = document.createElement("div");
  meal.classList.add("meal");
  meal.innerHTML = `
        <div class="meal-header">
            ${random ? `<span class="random"> Random Recipe </span>` : ""}
            <img
                src="${mealData.strMealThumb}"
                alt="${mealData.strMeal}"
            />
            </div>
            <div class="meal-body">
            <h4>${mealData.strMeal}</h4>
            <button class="fav-btn" onclick="">
                <i class="fas fa-heart"></i>
            </button>
        </div>
    `;
  const btn = meal.querySelector(".meal-body .fav-btn");
  btn.addEventListener("click", () => {
    // todo: contains 알아보기
    // todo: 리스너의 콜백 파라미터의 target 알아보기
    if (btn.classList.contains("active")) removeMealLS(mealData.idMeal);
    else addMealLS(mealData.idMeal);
    btn.classList.toggle("active");

    fetchFavMeals();
  });
  mealsEl.appendChild(meal);
}

function addMealLS(mealId) {
  const mealIds = getMealsLS();
  localStorage.setItem("mealIds", JSON.stringify([...mealIds, mealId]));
}

function removeMealLS(mealId) {
  const mealIds = getMealsLS();
  localStorage.setItem("mealIds", JSON.stringify(mealIds.filter(id => id !== mealId)));
}

function getMealsLS() {
  // ! localStorage -> Application의 로컬 스토리지!!
  const mealIds = JSON.parse(localStorage.getItem("mealIds"));
  return mealIds == null ? [] : mealIds;
}

async function fetchFavMeals() {
  // todo: clean the container
  favoriteContainer.innerHTML = "";
  const mealIds = getMealsLS();
  for (let mealId of mealIds) addMealFav(await getMealById(mealId));
}

function addMealFav(mealData) {
  const favMeal = document.createElement("li");
  favMeal.innerHTML = `
        <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}" />
        <span>${mealData.strMeal}</span>
        <button class="clear"><i class="fas fa-window-close"></i></button>
    `;
  const btn = favMeal.querySelector(".clear");
  btn.addEventListener("click", e => {
    removeMealLS(mealData.idMeal);
    fetchFavMeals();
  });
  favoriteContainer.appendChild(favMeal);
}
