document.addEventListener("DOMContentLoaded", () => {
  const recipeData = JSON.parse(localStorage.getItem("RecipeData")) || {};

  console.log(recipeData);

  if (recipeData.length > 0) {
    Object.keys(recipeData).forEach((key, index) => {
      const recipe = recipeData[key];
      const { name, category, method, ingredients } = recipe;

      let ingredientsText = "";
      if (Array.isArray(ingredients)) {
        ingredientsText = ingredients
          .map((ingredient) => {
            return `${ingredient.name} - Quantity: ${ingredient.quantity} ${ingredient.measurement}`;
          })
          .join(", ");
      } else if (typeof ingredients === "object") {
        ingredientsText = Object.keys(ingredients)
          .map((key) => {
            return `${key}: ${ingredients[key]}`;
          })
          .join(", ");
      } else {
        ingredientsText = ingredients;
      }

      const cardRecipes = document.getElementById("card-recipes");
      const recipeCard = document.createElement("div");

      recipeCard.classList.add("card", "no-border", "col-12-lg", "card-custom");
      recipeCard.height = "300px";
      recipeCard.width = "calc(50% - 1rem)";

      //icon
      const iconErase = document.createElement("i");
      iconErase.classList.add("bi", "bi-trash-fill", "fs-1");

      //placeholderImage
      const img = document.createElement("img");
      img.src = "./assets/placeholder.png";
      img.style.width = "200px";
      img.classList.add("card-img-top", "mx-auto", "response-img");

      //recipeName
      const recipeName = document.createElement("div");
      recipeName.classList.add(
        "card-body",
        "bg-primary",
        "text-light",
        "fw-bold",
        "text-center",
        "recipeName-custom"
      );
      recipeName.textContent = name;

      //recipeCategory
      const recipeCategory = document.createElement("div");
      recipeCategory.classList.add(
        "card-subtitle",
        "category-custom",
        "text-light"
      );
      recipeCategory.textContent = `Category: ${category}`;

      //methodRecipe
      const methodRecipe = document.createElement("div");
      methodRecipe.classList.add("card-text", "text-light", "method-custom");
      methodRecipe.textContent = method;

      //ingredient
      const ingredientRecipe = document.createElement("div");
      ingredientRecipe.classList.add("card-text", "text-light", "bg-primary");
      ingredientRecipe.textContent = `Ingredients: ${ingredientsText}`;

      //Append
      cardRecipes.appendChild(recipeCard);
      recipeCard.appendChild(iconErase);
      recipeCard.appendChild(img);
      recipeCard.appendChild(recipeName);
      recipeCard.appendChild(recipeCategory);
      recipeCard.appendChild(ingredientRecipe);
      recipeCard.appendChild(methodRecipe);

      iconErase.addEventListener("click", () => {
        // Remove recipe data from the array
        recipeData.splice(index, 1);
        // Save updated array to localStorage
        localStorage.setItem("RecipeData", JSON.stringify(recipeData));
        // Remove the card from the DOM
        recipeCard.remove();
      });
    });
  } else {
    const container = document.getElementById("card-recipes");
    container.classList.add("justify-content-center", "align-items-center");

    const icon = document.createElement("i");
    icon.className =
      "bi bi-fire fs-2 justify-content-center align-items-center";

    const newRecipeLink = document.createElement("a");

    newRecipeLink.href = "new-recipe.html";
    newRecipeLink.className =
      "btn btn-primary d-flex justify-content-center align-items-center rounded-3 btn-new-recipe";
    newRecipeLink.textContent = "New Recipe";

    container.appendChild(newRecipeLink);
    newRecipeLink.appendChild(icon);
  }
});
