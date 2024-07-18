document.addEventListener("DOMContentLoaded", () => {
  const btnRecipe = document.getElementById("btn-submit-recipe");
  const btnIngredient = document.getElementById("btn-ingredient");

  btnRecipe.addEventListener("click", SetRecipe);
  btnIngredient.addEventListener("click", SetIngredient);

  function SetRecipe() {
    const recipeName = document.getElementById("recipe-name").value;
    const categoryRecipe = document.getElementById("category-recipe").value;
    const recipeMethod = document.getElementById("recipe-method").value;

    const recipeIngredientName =
      document.getElementById("ingredient-name").value;
    const recipeQuantity = document.getElementById("quantity-label").value;
    const recipeMeasurement = document.getElementById("type-measurement").value;

    const existingRecipes = JSON.parse(localStorage.getItem("RecipeData"));

    const recipesArray = Array.isArray(existingRecipes) ? existingRecipes : [];

    recipesArray.push({
      name: recipeName,
      category: categoryRecipe,
      method: recipeMethod,
      ingredient: recipeIngredientName,
      quantity: recipeQuantity,
      Measurement: recipeMeasurement,
    });

    localStorage.setItem("RecipeData", JSON.stringify(recipesArray));

    window.location.href = "all-recipes.html";
  }

  function SetIngredient() {
    const ingredientName = document.getElementById("NameIngredient").value;
    const ingredientQuantity = document.getElementById("quantityInput").value;
    const inputMeasurement = document.getElementById("input-Measurement").value;

    if (!ingredientName || !ingredientQuantity) {
      alert("Please fill in both the ingredient name and quantity.");
      return;
    } else {
      const formText = document.querySelector(".ingredient-items");

      const newDiv = document.createElement("div");
      newDiv.classList.add(
        "form-control",
        "bg-primary",
        "text-light",
        "d-flex",
        "justify-content-between",
        "text-center"
      );

      const newIngredientName = document.createElement("label");
      newIngredientName.id = "ingredient-name";
      newIngredientName.textContent = ingredientName;

      const quantityLabel = document.createElement("span");
      quantityLabel.id = "quantity-label";
      quantityLabel.textContent = `Quantity: ${ingredientQuantity}`;

      const typeMeasurement = document.createElement("span");
      typeMeasurement.id = "type-measurement";
      typeMeasurement.textContent = ` ${inputMeasurement}`;

      formText.appendChild(newDiv);
      newDiv.appendChild(newIngredientName);
      newDiv.appendChild(quantityLabel);
      newDiv.appendChild(typeMeasurement);

      alert("Added");

      window.RecipeData = {
        name: ingredientName,
        quantity: ingredientQuantity,
        measurement: inputMeasurement,
      };

      document.getElementById("NameIngredient").value = "";
      document.getElementById("quantityInput").value = "";

      closeModal();
    }
  }

  function closeModal() {
    const modalElement = document.getElementById("exampleModal");
    const modalInstance = bootstrap.Modal.getInstance(modalElement);

    if (modalInstance) {
      modalInstance.hide();
    } else {
      console.log("Modal instance not found.");
    }
  }
});
