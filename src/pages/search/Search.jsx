import { useLocation } from "react-router-dom";
import RecipeList from "../../components/RecipeList";
import { projectFirestore } from "../../firebase/config";
import "./Search.css";

export default function Search() {
  // get searchQuery out of the URL
  const queryString = useLocation();
  const searchQuery = queryString.search.substring(3);
  
  // create query object for Firestore
  const q = projectFirestore
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
