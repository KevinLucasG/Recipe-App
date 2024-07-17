const btnRecipe = document.getElementById("btn-submit-recipe");
const btnIngredient = document.getElementById("btn-ingredient");

btnRecipe.addEventListener("click", SetRecipe);
btnIngredient.addEventListener("click", SetIngredient);

function SetRecipe() {
  console.log("Clicked");
  const IngredientName = document.getElementById("NameIngredient").value;
  const IngredientQuantity = document.getElementById("quantityInput").value;
  console.log(IngredientName, IngredientQuantity);
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
