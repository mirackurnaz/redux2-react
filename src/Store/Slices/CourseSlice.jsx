import { createSlice,nanoid } from "@reduxjs/toolkit";
const courseSlice=createSlice({
    name:"courses",
    initialState:{
        searchTerm:"",           //arama yaptığımda filtreleyeceğim yer
        data:[]                 //verileri listeleyeceğim yer
    },
        reducers:{
            courseAddValue(state,action){
                
                state.data.push({              //data nın içine pushla yani ekle.Dataya ekleyip listeleme işlemi yapcaz
                    name:action.payload.name,
                    description:action.payload.description,
                    price:action.payload.price,
                    id:nanoid()

                })
            },
            courseRemoveId(state,action){             //datadan eleman silme işlemlerim
                const itemId=action.payload;
                state.data=state.data.filter((item)=>item.id !==itemId)
            },
            courseSearchh(state,action){
                state.searchTerm=action.payload
            }
        }
    
})
export const courseReducer=courseSlice.reducer;
export const {courseAddValue,courseRemoveId,courseSearchh}=courseSlice.actions;