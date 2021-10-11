import "./App.css";
import axios from "axios";
import { useState } from "react";
import RecipeTile from "./RecipeTile";

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabels, sethealthLabels] = useState("vegan");
  // const url = `https://api.edamam.com/search?q=chicken&app_id=d5bd2152&app_key=f7d9c4433b2ef20e9a799084a13d76d6	`
  const YOUR_APP_ID = "d5bd2152";
  const YOUR_APP_KEY = "f7d9c4433b2ef20e9a799084a13d76d6";
  // const query = "chicken";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabels}`;

  async function getRecipes() {
    var result = await axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div className="App">
      <h1>FOOD RECIPE PLAZA</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          className="app__input"
          type="text"
          placeholder="Enter Ingridient"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="app__submit" type="submit" value="Search   " />

        <select className="app_healthLabels">
          <option onClick={() => sethealthLabels("dairy-free")}>
            dairy-free
          </option>
          <option onClick={() => sethealthLabels("Vegan")}>Vegan</option>
          <option onClick={() => sethealthLabels("Paleo")}>paleo</option>
          <option onClick={() => sethealthLabels("Vegatarian")}>
            vegatarian
          </option>
          <option onClick={() => sethealthLabels("Gluten-free")}>
            gluten-free
          </option>
          <option onClick={() => sethealthLabels("Wheat-free")}>
            Wheat-free
          </option>
          <option onClick={() => sethealthLabels("Low-sugar")}>
            low-sugar
          </option>
          <option onClick={() => sethealthLabels("Egg-free")}>egg-free</option>
          <option onClick={() => sethealthLabels("Peanut-free")}>
            peanut-free
          </option>
          <option onClick={() => sethealthLabels("Tree-nut-free")}>
            tree-nut-free
          </option>
          <option onClick={() => sethealthLabels("Soy-free")}>soy-free</option>
          <option onClick={() => sethealthLabels("Fish-free")}>
            fish-free
          </option>
          <option onClick={() => sethealthLabels("Shellfish-free")}>
            shellfish-free
          </option>
        </select>
      </form>
      <div className="app__recipes">
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
