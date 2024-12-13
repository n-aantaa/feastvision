const recipes = [
    {
        name: "Butter Chicken",
        image: "../images/butter-chicken.jpg",
        description: "A rich and creamy Indian dish with tender chicken in a tomato-based sauce.",
        url: "recipe-details.html",
        cuisine: "asian",
        diet: "gluten-free"
    },
    {
        name: "Thieboudieune",
        image: "../images/thieboudieune.jpeg",
        description: "A flavorful Senegalese rice and fish dish cooked with vegetables and spices.",
        url: "recipe-details.html",
        cuisine: "african",
        diet: "all"
    },
    {
        name: "Yassa",
        image: "../images/yassa.jpeg",
        description: "A tangy and savory Senegalese dish made with caramelized onions and marinated chicken.",
        url: "recipe-details.html",
        cuisine: "african",
        diet: "all"
    },
    {
        name: "Quiche Lorraine",
        image: "../images/quiche.webp",
        description: "A classic French savory tart filled with eggs, cream, and smoky bacon or vegetables.",
        url: "recipe-details.html",
        cuisine: "european",
        diet: "gluten-free"
    },
    {
        name: "Tarte Tatin",
        image: "../images/tatin.jpg",
        description: "A French upside-down caramelized apple tart, perfect for dessert lovers.",
        url: "recipe-details.html",
        cuisine: "european",
        diet: "all"
    },
    {
        name: "Piña Colada",
        image: "../images/pina-colada.jpg",
        description: "A tropical drink made with coconut cream, pineapple juice, and rum.",
        url: "recipe-details.html",
        cuisine: "latin",
        diet: "gluten-free"
    },
    {
        name: "Matcha Latte",
        image: "../images/matcha.jpg",
        description: "A creamy Japanese green tea latte made with ceremonial-grade matcha.",
        url: "recipe-details.html",
        cuisine: "asian",
        diet: "vegan"
    },
    {
        name: "Tiramisu",
        image: "../images/tiramisu.jpg",
        description: "An Italian dessert made with coffee-soaked ladyfingers and mascarpone cheese.",
        url: "recipe-details.html",
        cuisine: "european",
        diet: "gluten-free"
    }
];

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});

function renderRecipes(filteredRecipes) {
    const recipeContainer = document.getElementById("recipes-container");
    recipeContainer.innerHTML = "";

    filteredRecipes.forEach(recipe => {
        const cardHTML = `
                <div class="col s12 l3">
                    <div class="card">
                        <div class="card-image">
                            <img src="${recipe.image}" alt="${recipe.name}">
                            <span class="card-title">${recipe.name}</span>
                        </div>
                        <div class="card-content">
                            <p>${recipe.description}</p>
                        </div>
                        <div class="card-action">
                            <a href="${recipe.url}" class="teal-text">View Recipe</a>
                        </div>
                    </div>
                </div>
            `;
        recipeContainer.innerHTML += cardHTML;
    });
}

document.getElementById("search").addEventListener("input", () => {
    const searchValue = document.getElementById("search").value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchValue));
    renderRecipes(filteredRecipes);
});

document.getElementById("cuisine-filter").addEventListener("change", () => {
    const cuisineFilter = document.getElementById("cuisine-filter").value;
    const dietFilter = document.getElementById("diet-filter").value;
    filterRecipes(cuisineFilter, dietFilter);
});

document.getElementById("diet-filter").addEventListener("change", () => {
    const cuisineFilter = document.getElementById("cuisine-filter").value;
    const dietFilter = document.getElementById("diet-filter").value;
    filterRecipes(cuisineFilter, dietFilter);
});

function filterRecipes(cuisineFilter, dietFilter) {
    const filteredRecipes = recipes.filter(recipe => {
        const matchesCuisine = cuisineFilter === "all" || recipe.cuisine === cuisineFilter;
        const matchesDiet = dietFilter === "all" || recipe.diet === dietFilter;
        return matchesCuisine && matchesDiet;
    });
    renderRecipes(filteredRecipes);
}

renderRecipes(recipes);