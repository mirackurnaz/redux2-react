import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { courseSearchh } from '../Store/Slices/CourseSlice';

function CourseSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {
    return state.courses.searchTerm;
  });
  return (
    <div className="listHeader">
      <h3 className="title is-3">My Courses</h3>
      <div className="search field is-horizontal">
        
        <input
          className="input"
          placeholder='Search'
          onChange={(event) => {
            dispatch(courseSearchh(event.target.value));
          }}
          value={searchTerm}
        />
      </div>
    </div>
  );
}

export default CourseSearch