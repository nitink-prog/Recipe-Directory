import { useLocation } from "react-router-dom";
import RecipeList from "../../components/RecipeList";
import { db } from "../../firebase/config";
import "./Search.css";

export default function Search() {
  // get searchQuery out of the URL
  const queryString = useLocation();
  const searchQuery = queryString.search.substring(3);
  
  // create query object for Firestore
  const q = db
    .collection("recipes")
    .where("title", "in", searchQuery);
  // get the data
  const querySnapshot = await 


  return (
    <div>
      <h2 className="page-title">
        Recipes including "{queryString.search.substring(3)}"
      </h2>
      {/* {data && <RecipeList recipes={data} />} */}
    </div>
  );
}
