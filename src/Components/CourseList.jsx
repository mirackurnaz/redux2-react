import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'  //datalara erişmem lazım bunun için UseSelector kullanıyorum
import "../App.css"
import { useDispatch } from 'react-redux'
import { courseRemoveId } from '../Store/Slices/CourseSlice'

function CourseList() {
  const dispatch=useDispatch();

  const coursess=useSelector((state)=>{
    console.log(state);
    return state.courses.data; //girilen verileri değerleri coursess atadım.console da state içindeki verileri nereden çekebileceğimi görebiliyorum
  })

  const renderedCourses = coursess.map((course) => {

  return (
    
    <div key={course.id} className="panel">
    <h1>{course.name}</h1>
    <p>{course.description}</p>
    <p>{course.price}</p>
          <button 
          className='courseListButton'
          onClick={()=>{dispatch(courseRemoveId(course.id))}}
          >Delete
          </button>
          
          </div>
        )
      
      })
     

      return <div className="courseList">{renderedCourses}</div>;
    }

export default CourseList