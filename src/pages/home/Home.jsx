import { useEffect, useState } from "react";
import RecipeList from "../../components/RecipeList";
import { projectFirestore } from "../../firebase/config";
import "./Home.css";

export default function Home() {
  const [recipes, setRecipes] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);
    projectFirestore
      .collection("recipes")
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          setIsPending(false);
          setError("No recipes found!");
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setRecipes(results);
          setIsPending(false);
        }
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  }, []);

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}

      {recipes && <RecipeList recipes={recipes} />}
    </div>
  );
}
