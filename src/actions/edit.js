import {EDIT_SUCCESS,EDIT_REQUEST,EDIT_FAILED} from './types'

let dataArray=[];


 const EDITRequest = ()=>({
  type:EDIT_REQUEST,
  
})
 const EDITSuccess= (response) =>({
    type:EDIT_SUCCESS,
    payload:response,
    
  })
 const EDITFailed= () =>({
    type:EDIT_FAILED,
   
  })

  export const EDITAction =(data)=>(dispatch)=>{
    dispatch(EDITRequest())

   try{
    //  dataArray.push(data)

    console.log("try block testing",data)

     dispatch(EDITSuccess(data))

   }
   catch(err){
     dispatch(EDITFailed(err))

   }
  

  }