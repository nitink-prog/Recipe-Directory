import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { db } from "../firebase/config";
import hoursHelper from "../utils/hoursHelper";
import deleteIcon from "../assets/delete-icon.svg";
import "./RecipeList.css";

export default function RecipeList({ recipes }) {
  const { mode } = useTheme();

  if (recipes.length === 0) {
    return <div className="error">No recipes found...</div>;
  }

  const handleClickDelete = (id) => {
    db.collection("recipes").doc(id).delete();
  };

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{hoursHelper(recipe.cookingTime)}</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
          <img
            className="delete"
            src={deleteIcon}
            onClick={() => handleClickDelete(recipe.id)}
          />
        </div>
      ))}
    </div>
  );
}
