import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, UNSELECT_PLACE } from "../actions/actionTypes";
import { stat } from "fs";

const initialState={

places:[],
selectedPlace: null,

}

const reducer=(state =initialState, action)=>{

    switch(action.type){
        case ADD_PLACE:
        return {
            ...state,
            places:state.places.concat(

                {
                  key:Math.random(),
                  placeName:state.placeName,
                  placeImage:{
                  uri:'https://udemy-images.udemy.com/course/750x422/1589310_8f97.jpg'
                }
                })
        }
        case DELETE_PLACE:
        return{
            ...state,
            places :state.places.filter((place)=>{

                return place.key !== state.selectedPlace.key;
              }),
              selectedPlace:null
        }
        case SELECT_PLACE :
        return {
            ...state,
            selectedPlace:state.places.find( place=>{
                return place.key === action.key
              }  )
        }

        case UNSELECT_PLACE :
        return{
            ...state,
            selectedPlace:null
        }

       default:
        return state;

    }
}



export default reducer;