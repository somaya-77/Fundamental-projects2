
const Item = ({ item, removeItem, completedItem }) => {
  return (
    <div className="single-item">
        <input type="checkbox" checked={item.completed} onChange={() => completedItem(item.id)}/>
        <p style={{fontSize: "18px"}} className={item.completed && "completed"}>{item.name}</p>
      
      <span className="btn remove-btn" type="button" onClick={() => removeItem(item.id)}>delete</span>

    </div>
  )
}

export default Item;