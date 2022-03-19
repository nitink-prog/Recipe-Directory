import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import RecipeList from "../../components/RecipeList";
import "./Search.css";

export default function Search() {
  const queryString = useLocation();
  const searchURL = "http://localhost:3000/recipes" + queryString.search;

  const { data, isPending, error } = useFetch(searchURL);

  return (
    <div>
      <h2 className="page-title">
        Recipes including "{queryString.search.substring(3)}"
      </h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
