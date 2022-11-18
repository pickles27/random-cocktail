import { useState } from "react";
import "./styles.css";
import { CocktailInfo } from "./components/CocktailInfo";
import { createIngredientsArray } from "./utils/createIngredientsArray";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  const getRandomCocktail = async () => {
    setLoading(true);
    await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((res) => {
        setData(res.drinks[0]);
        console.log(res.drinks[0]);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  return (
    <div className="App">
      <h1>Random cocktail generator</h1>
      <button onClick={getRandomCocktail}>
        Click me to get a random cocktail
      </button>
      {loading || data ? (
        <div className="content">
          {loading ? (
            <h2>Loading...</h2>
          ) : (
            <CocktailInfo
              key={data.idDrink}
              glassType={data.strGlass}
              name={data.strDrink}
              thumbnail={data.strDrinkThumb}
              ingredients={createIngredientsArray(data)}
              instructions={data.strInstructions}
            />
          )}
        </div>
      ) : null}
    </div>
  );
}
