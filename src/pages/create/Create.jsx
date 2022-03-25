import { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import { useFetch } from "../../hooks/useFetch";
import "./Create.css";

export default function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState(0);
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);
  const history = useHistory();
  const { mode, color } = useTheme();

  const { postData, data, error } = useFetch(
    "http://localhost:3000/recipes",
    "POST"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipe = {
      title: title,
      ingredients: ingredients,
      method: method,
      cookingTime: cookingTime,
    };
    postData(recipe);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const trimmedIngredient = newIngredient.trim();

    if (trimmedIngredient && !ingredients.includes(trimmedIngredient)) {
      setIngredients((prevIngredients) => [
        ...prevIngredients,
        trimmedIngredient,
      ]);
    }
    setNewIngredient("");
    ingredientInput.current.focus();
  };

  useEffect(() => {
    if (data) {
      history.push("/");
    }
  }, [data]);

  return (
    <div className={`create ${mode}`}>
      <h2 className="page-title">Add a New Recipe</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe ingredients:</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button
              onClick={handleAdd}
              className="btn"
              style={{ backgroundColor: color }}>
              Add
            </button>
          </div>
        </label>
        <p>
          Added:{" "}
          {ingredients.map((i) => (
            <em key={i}>{i}, </em>
          ))}
        </p>

        <label>
          <span>Recipe method:</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>

        <label>
          <span>Cooking time (minutes):</span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>
        <button
          className="btn"
          style={{ backgroundColor: color }}
          onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
