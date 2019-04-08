import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, UNSELECT_PLACE } from "../actions/actionTypes";

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
                  name:action.placeName,
                  image:{
                  uri:
                  'https://udemy-images.udemy.com/course/750x422/1589310_8f97.jpg'
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
                return place.key === action.placeKey
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