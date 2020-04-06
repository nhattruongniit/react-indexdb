import React, { useRef, useState } from 'react';

import { addProduct, addUser, showProduct, showUser, updateProduct } from './db/localDb';

function App() {
  const [foods, setFoods] = useState([]);

  const nameRef = useRef(null);
  const categoryRef = useRef(null);

  const handleAddProduct = () => {
    const name = nameRef.current.value;
    const category = categoryRef.current.value;
    if (name !== '' && category !== '') {
      addProduct(name, category);
    }
  }
  const handleShowProduct = async () => {
    const res = await showProduct();
    setFoods([...res])
    console.log(res)
  }

  const handleUpdateProduct = () => {
    updateProduct(nameRef.current.value)
  }

  return (
    <div className="App">
      <h1>React using with indexDB</h1>
      <div>
        <h3>Add product</h3>
        <div>
          Name product: <input type="text" ref={nameRef} /> <br />
          Category product: <input type="text" ref={categoryRef} />
        </div>
        <button type="button" onClick={handleAddProduct}>
          Add product
        </button>
        <button type="button" onClick={handleShowProduct}>
          Show product
        </button>
        <button type="button" onClick={handleUpdateProduct}>
          Update product width ID = 1
        </button>
        <ul>
          {foods.length > 0 && foods.map(food => {
            return (
              <li key={food.id}>
                Name: {food.name} <br />
              Category: {food.category}
              </li>
            )
          })}
        </ul>
      </div>

    </div>
  );
}

export default App;
