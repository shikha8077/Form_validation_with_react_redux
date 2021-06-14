import {LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILED} from './types'

let dataArray=[];


 const loginRequest = ()=>({
  type:LOGIN_REQUEST,
  
})
 const loginSuccess= (response) =>({
    type:LOGIN_SUCCESS,
    payload:response,
    
  })
 const loginFailed= () =>({
    type:LOGIN_FAILED,
   
  })

  export const loginAction =(data)=>(dispatch)=>{
    dispatch(loginRequest())

   try{
    //  dataArray.push(data)

    console.log("try block testing",data)

     dispatch(loginSuccess(data))

   }
   catch(err){
     dispatch(loginFailed(err))

   }
  

  }