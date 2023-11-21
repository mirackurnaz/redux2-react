import { configureStore } from "@reduxjs/toolkit";
import { formReducer } from "./Slices/CourseFormSlice";
import { courseReducer } from "./Slices/CourseSlice";


export const store=configureStore({
    reducer:{                            //kullancağım sliceları yazıyorum
        form:formReducer ,  
        courses:courseReducer            
    }
})