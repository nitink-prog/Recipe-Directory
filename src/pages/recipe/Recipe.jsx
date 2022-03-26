import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projectFirestore } from "../../firebase/config";
import { useTheme } from "../../hooks/useTheme";
import hoursHelper from "../../utils/hoursHelper";
import "./Recipe.css";

export default function Recipe() {
  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  const { id } = useParams();
  const { mode } = useTheme();

  useEffect(() => {
    setIsPending(true);
    projectFirestore
      .collection("recipes")
      .doc(id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setRecipe(doc.data());
          setIsPending(false);
        } else {
          setIsPending(false);
          setError("Could not find that recipe.");
        }
      });
  }, [id]);

  const handleClickUpdate = () => {
    projectFirestore.collection("recipes").doc(id).update({
      title: "Changed title",
    });
  };

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}

      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {hoursHelper(recipe.cookingTime)} to cook.</p>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
          <button onClick={handleClickUpdate}>Update</button>
        </>
      )}
    </div>
  );
}
