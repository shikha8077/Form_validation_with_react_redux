import {EDIT_SUCCESS,EDIT_REQUEST,EDIT_FAILED} from '../actions/types';



const initialState = {


    data:null,
    loading:null,
}

const todos = (state = initialState,action) =>{
    console.log("action.payload",action)
    switch(action.type){
        case EDIT_REQUEST:
        return{
            ...state,
            loading:true,
            
        };

        case EDIT_SUCCESS:
        return{
            ...state,
            loading:false,
            data:action.payload
        };
        
        
        case EDIT_FAILED:
        return {
            ...state,
            loading:false,

        };
      
         default:
             return state;

    }
}

export default todos;