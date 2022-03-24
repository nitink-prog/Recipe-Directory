import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import "./Searchbar.css";

export default function Searchbar() {
  const { mode } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push(`/search?q=${searchTerm}`);
  };

  return (
    <div className={`searchbar ${mode}`}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
    </div>
  );
}
