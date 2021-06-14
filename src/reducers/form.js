import {LOGIN_SUCCESS,LOGIN_REQUEST,LOGIN_FAILED} from '../actions/types';



const initialState = {


    data:null,
    loading:null,
}

const todos = (state = initialState,action) =>{
    console.log("action.payload",action)
    switch(action.type){
        case LOGIN_REQUEST:
        return{
            ...state,
            loading:true,
            
        };

        case LOGIN_SUCCESS:
        return{
            ...state,
            loading:false,
            data:action.payload
        };
        
        
        case LOGIN_FAILED:
        return {
            ...state,
            loading:false,

        };
      
         default:
             return state;

    }
}

export default todos;