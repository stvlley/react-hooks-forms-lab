import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState('')

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items
  .filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  )
  const searchItems= search.filter((item) => console.log(item.name.toLowerCase().includes(search.toLowerCase())))

  

  // .filter(
  //   (item) => item.name.toLowerCase().inlcudes(search.toLowerCase()))

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter 
      search={search}
      onSearchChange={setSearch}
      onCategoryChange={handleCategoryChange} 
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
