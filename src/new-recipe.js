document.addEventListener("DOMContentLoaded", () => {
  const btnRecipe = document.getElementById("btn-submit-recipe");
  const btnIngredient = document.getElementById("btn-ingredient");

  let ingredientData = [];

  btnRecipe.addEventListener("click", SetRecipe);
  btnIngredient.addEventListener("click", SetIngredient);

  function SetRecipe() {
    const recipeName = document.getElementById("recipe-name").value;
    const categoryRecipe = document.getElementById("category-recipe").value;
    const recipeMethod = document.getElementById("recipe-method").value;

    console.log("Ingredient Data:", ingredientData);

    const existingRecipes =
      JSON.parse(localStorage.getItem("RecipeData")) || [];

    existingRecipes.push({
      name: recipeName,
      category: categoryRecipe,
      method: recipeMethod,
      ingredients: ingredientData, // Use the array of ingredients
    });

    localStorage.setItem("RecipeData", JSON.stringify(existingRecipes));

    window.location.href = "all-recipes.html";
    console.log("Recipe added:", existingRecipes);

    // Clear ingredient data after adding the recipe
    ingredientData = [];
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
      newIngredientName.textContent = ingredientName;

      const quantityLabel = document.createElement("span");
      quantityLabel.textContent = `Quantity: ${ingredientQuantity}`;

      const typeMeasurement = document.createElement("span");
      typeMeasurement.textContent = ` ${inputMeasurement}`;

      formText.appendChild(newDiv);
      newDiv.appendChild(newIngredientName);
      newDiv.appendChild(quantityLabel);
      newDiv.appendChild(typeMeasurement);

      alert("Added");

      // Add ingredient to the array
      ingredientData.push({
        name: ingredientName,
        quantity: ingredientQuantity,
        measurement: inputMeasurement,
      });

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
