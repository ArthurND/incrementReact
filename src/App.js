import { useState } from "react";

function App() {
  //state
  const [compteur, setCompteur] = useState(1);

  //comportement
  const handleClick = () => {
    setCompteur(compteur + 1);
  };
  //affichage(render)
  return (
    <div>
      <h1>{compteur}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default App;
