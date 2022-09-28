import React,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
   const [state, setState] = useState(false);

   function handleClick() {
    setState((state) => !state);
  }

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = state ? "App dark" : "App light"
  const mode= state? "Dark":"Light"

  

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{mode} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
