import { createSlice } from "@reduxjs/toolkit";
import { courseAddValue } from "./CourseSlice";
const formSlice=createSlice({
    name:"form",
    initialState:{
        name:"",
        description:"",
        price:0
    },
        reducers:{           //güncelleme işlemleri
            changeName(state,action){            //name yi güncelleme
                state.name=action.payload   
            },
            changeDescription(state,action){            //description ı güncelleme
                state.description=action.payload   
            },
            changePrice(state,action){            //price yi güncelleme
                state.price=action.payload   
            }
        },
        extraReducers(builder) {                                 //courseAddValue metodum tetiklenince yani save butonum tetiklenince state yi boşalt
            builder.addCase(courseAddValue, (state, action) => {
              state.name = '';
              state.description = '';
              state.price = 0;
            });
          },
    
})
export const formReducer=formSlice.reducer;
export const {changeName,changeDescription,changePrice}=formSlice.actions;

//inputta bir değişiklik olduğunda bunların changelerini yakalayıp state nin içindeki name,description,price değerlerini güncellemeliyim.bunuda reducers da yapcam 