document.addEventListener('DOMContentLoaded', function () {
    const recipe = {
        title: 'Tiramisu',
        description: 'A classic Italian dessert with layers of coffee-soaked ladyfingers and creamy mascarpone filling.',
        ingredients: [
            { name: 'Ladyfingers', quantity: 300, unit: 'g' },
            { name: 'Mascarpone cheese', quantity: 500, unit: 'g' },
            { name: 'Heavy cream', quantity: 200, unit: 'ml' },
            { name: 'Sugar', quantity: 100, unit: 'g' },
            { name: 'Espresso coffee', quantity: 200, unit: 'ml' },
            { name: 'Cocoa powder', quantity: 2, unit: 'tbsp' },
            { name: 'Dark rum', quantity: 2, unit: 'tbsp' },
            { name: 'Vanilla extract', quantity: 1, unit: 'tsp' }
        ],
        steps: [
            'Brew the espresso and allow it to cool.',
            'Whip the heavy cream with sugar until soft peaks form.',
            'Fold mascarpone cheese into the whipped cream until smooth.',
            'Add vanilla extract and dark rum to the mascarpone mixture.',
            'Dip ladyfingers one by one into the cooled espresso.',
            'Layer the dipped ladyfingers in the bottom of a dish.',
            'Spread a layer of the mascarpone mixture on top of the ladyfingers.',
            'Repeat the process with another layer of ladyfingers and mascarpone.',
            'Dust with cocoa powder and refrigerate for at least 4 hours before serving.'
        ]
    };

    const recipeTitle = document.getElementById('recipe-title');
    const recipeDescription = document.getElementById('recipe-description');
    const ingredientsList = document.getElementById('ingredients-list');
    const stepsList = document.getElementById('steps-list');
    const portionInput = document.getElementById('portion-input');
    const cookingMode = document.getElementById('cooking-mode');
    const toggleCookingMode = document.getElementById('toggle-cooking-mode');
    const currentStepCard = document.getElementById('current-step');
    const prevStepButton = document.getElementById('prev-step');
    const nextStepButton = document.getElementById('next-step');

    recipeTitle.textContent = recipe.title;
    recipeDescription.textContent = recipe.description;

    function renderIngredients(servings) {
        ingredientsList.innerHTML = '';
        recipe.ingredients.forEach(ingredient => {
            const quantity = (ingredient.quantity / 4) * servings;
            const ingredientHTML = `
                        <li class="collection-item">
                            ${quantity.toFixed(2)} ${ingredient.unit} ${ingredient.name}
                        </li>
                    `;
            ingredientsList.insertAdjacentHTML('beforeend', ingredientHTML);
        });
    }

    function renderSteps() {
        stepsList.innerHTML = '';
        recipe.steps.forEach((step, index) => {
            const stepHTML = `<li>${step}</li>`;
            stepsList.insertAdjacentHTML('beforeend', stepHTML);
        });
    }

    portionInput.addEventListener('input', () => {
        const servings = parseInt(portionInput.value, 10);
        if (!isNaN(servings) && servings > 0) {
            renderIngredients(servings);
        }
    });

    let currentStepIndex = 0;

    function updateCookingStep() {
        currentStepCard.textContent = recipe.steps[currentStepIndex];
        prevStepButton.disabled = currentStepIndex === 0;
        nextStepButton.disabled = currentStepIndex === recipe.steps.length - 1;
    }

    toggleCookingMode.addEventListener('click', () => {
        cookingMode.style.display = cookingMode.style.display === 'block' ? 'none' : 'block';
        currentStepIndex = 0;
        updateCookingStep();
    });

    prevStepButton.addEventListener('click', () => {
        if (currentStepIndex > 0) {
            currentStepIndex--;
            updateCookingStep();
        }
    });

    nextStepButton.addEventListener('click', () => {
        if (currentStepIndex < recipe.steps.length - 1) {
            currentStepIndex++;
            updateCookingStep();
        }
    });

    renderIngredients(4);
    renderSteps();
});