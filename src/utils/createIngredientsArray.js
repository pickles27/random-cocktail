export function createIngredientsArray(data) {
  const ingredientsMap = new Map();
  for (let i = 1; i < 16; i++) {
    if (data[`strIngredient${i}`] && data[`strMeasure${i}`]) {
      ingredientsMap.set(data[`strIngredient${i}`], data[`strMeasure${i}`]);
    }
  }

  return Array.from(ingredientsMap.entries());
}
