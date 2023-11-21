import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { changeName,changeDescription,changePrice } from '../Store/Slices/CourseFormSlice';
import { courseAddValue } from '../Store/Slices/CourseSlice';

function CourseForm() {

  const dispatch=useDispatch();

    const handleSaveClick=(event)=>{
      event.preventDefault();
      dispatch(courseAddValue({name,description,price}))
    }
    const {name,description,price}=useSelector((state)=>{
        return{
            name:state.form.name,
            description:state.form.description,
            price:state.form.price,
        }
    })
    console.log(name,description,price);
  return (
    <div className="courseForm panel">
    <h4 className="subtitle is-3">Add element</h4>
    <form className='forms'>
      <div className="field-group">
        <div className="field">
          <label className="label">Name</label>
          <input 
          className="input is-expanded" 
          onChange={(event)=>{dispatch(changeName(event.target.value))}} 
          value={name}
          />
        </div>
        <div className="field">
          <label className="label">Explanation</label>
          <textarea 
          className="input is-expanded" 
           onChange={(event)=>{dispatch(changeDescription(event.target.value))}}
           value={description}
           />
        </div>
        <div className="field">
          <label className="label">Price</label>
          <input 
          className="input is-expanded" 
          type="number" 
          onChange={(event)=>{dispatch(changePrice(parseInt(event.target.value)))}}
          value={price}
          />
        </div>
      </div>
      <div className="field">
        <button className="button is-link" onClick={handleSaveClick}>Save</button>
      </div>
    </form>
  </div>
  )
}

export default CourseForm