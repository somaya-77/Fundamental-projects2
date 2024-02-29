import Form from "./Form";
import Items from "./Items";
import { useState } from 'react';
import { nanoid } from 'nanoid';
import './style.css'
import { ToastContainer, toast } from "react-toastify";

const setLocalStorage = (items) => {
  localStorage.setItem('item', JSON.stringify(items))
}

// const getLocalStorage = () => {
//   let list = localStorage.getItem('item');
//   if(list) {
//     list = JSON.parse(localStorage.getItem('item'));
//   }else {
//     list = [];
//   }
//   return list;
// };

const defaultList = JSON.parse(localStorage.getItem('item') || '[]');

const Grocery = () => {

  const [items, setItems] = useState(defaultList);

  const addItem = (newItem) => {
    const addNewItem = {
      name: newItem,
      completed: false,
      id: nanoid(),
    };
    const addNewItems = [...items, addNewItem]
    setItems(addNewItems);
    setLocalStorage(addNewItems)
    toast.success("item added to the list");
  }

  const removeItem = (idItem) => {
    const removeItemId = items.filter((item) => {
      return item.id !== idItem;

    })
    setItems(removeItemId);
    setLocalStorage(removeItemId);
    toast.success("item remove to the list");
  }

  const completedItem = (idItem) => {
    const newItems = items.map((item) => {
      if (item.id === idItem) {
        const newItem = { ...item, completed: !item.completed }
        return newItem;
      }
      return item;
    })
    setItems(newItems);
    setLocalStorage(newItems);
  }
  return (
    <div className='grocery'>
      <ToastContainer position="top-center" />

      <h2>Grocery bud</h2>
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} completedItem={completedItem} />
    </div>
  )
}

export default Grocery;