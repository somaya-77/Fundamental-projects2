import Item from "./Item"

const Items = ({items, removeItem, completedItem}) => {
  return (
    <div className="items">
        {items.map((item) => {
            return <Item key={item.id} item={item} removeItem={removeItem} completedItem={completedItem}/>
        })}
    </div>
  )
}

export default Items;