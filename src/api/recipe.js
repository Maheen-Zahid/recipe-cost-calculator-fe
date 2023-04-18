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
console.log(process.env.REACT_APP_BACKEND_URL, 'REACT_APP_BACKEND_URL');
  return post(
    process.env.REACT_APP_BACKEND_URLL,
    addRecipeData
  );
};
