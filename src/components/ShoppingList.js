import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const[selectedCategory,setselectedCategory]=useState('shopping')
  function handleSelectcategory(e){
    setselectedCategory(e.target.value)
  }
  const showItems = items.filter((item)=>{
    if (selectedCategory==='shopping'){
      return true;
    }else{ return item.category===selectedCategory
  }
  });
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSelectcategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {showItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
