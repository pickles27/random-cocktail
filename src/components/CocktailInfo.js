export function CocktailInfo({
  name,
  glassType,
  instructions,
  ingredients,
  thumbnail
}) {
  return (
    <>
      <h2>{name}</h2>
      <img className="image" src={thumbnail} alt={name} />
      <div className="recipe">
        <h3>Ingredients</h3>
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient[0]}>
              {ingredient[1]} {ingredient[0]}
            </li>
          ))}
        </ul>
        <h3>Instructions</h3>
        <p>{instructions}</p>
        <h3>Glass</h3>
        <p>{glassType}.</p>
      </div>
    </>
  );
}
