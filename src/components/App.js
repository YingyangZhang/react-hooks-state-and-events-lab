import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [toggleTF, setToggleTF] = useState(false);

  function changeMode() {
    setToggleTF(toggleTF => !toggleTF);
  }

  const appClass = toggleTF ? "App dark" : "App light";
  
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button style={{ cursor : 'pointer' }} onClick={ changeMode }> { toggleTF ? 'Dark Mode' : 'Light Mode' } </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
