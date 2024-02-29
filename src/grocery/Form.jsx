import { useState } from "react"
import { toast } from "react-toastify";

const Form = ({addItem}) => {

  const [newItem, setNewItem] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) {
      toast.error("Please provid value")
      return
    }
    addItem(newItem);
    setNewItem('');
  }
  return (
    <form onSubmit={handleSubmit} className="form-control">
      <input className="form-input" type="text" placeholder="Enter here...."  value={newItem} onChange={(e) => setNewItem(e.target.value)} />
      <button type="submit" className="btn addItem" >Add</button>
    </form>
  )
}

export default Form;