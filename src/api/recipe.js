import { post } from "../server";

export const addRecipeApi = (
  recipeName,
  ingredientList
) => {
  const addRecipeData = {
    recipe:{
      name: recipeName,
      ingredients_attributes: ingredientList
    }
  };
console.log(process.env.BACKEND_URL);
  return post(
    process.env.BACKEND_URL,
    addRecipeData
  );
};
