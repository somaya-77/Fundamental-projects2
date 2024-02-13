
const Item = ({ item, removeItem, completedItem }) => {

  return (
    <div className="single-item">
      
        <input type="checkbox" checked={item.completed} onChange={() => completedItem(item.id)}/>
        <p className={item.completed && "completed"}>{item.name}</p>
      
      <button className="btn remove-btn" type="button" onClick={() => removeItem(item.id)}>delete</button>

    </div>
  )
}

export default Item;