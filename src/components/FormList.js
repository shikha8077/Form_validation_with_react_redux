import React, { Component } from 'react';
import {connect} from 'react-redux';
import {EDITAction}  from '../actions/edit';


class FormList extends Component {
    state={
        data:['fname','lname','email','gender'],
        array:[],
        count:0,
        flag : true
        
    }
   
    
    handleDelete=(index) => {   
        
        let deletedata=this.state.array
        
        if(this.state.array.length===1){
            deletedata = []
            this.setState({flag: false, array: deletedata})
                  
        }
        else if(this.state.array.length===index+1){
            deletedata.pop()
            this.setState({flag: false, array: deletedata, index})
                  
        }
        else{
            let deletedata=[...this.state.array]
        deletedata.splice(index,1)
       
        this.setState({array:deletedata})
       
        }
        
            
    }

    handleEdit=(index,idd)=>{
        let localdata={}
        console.log(this.state.array[index])
         localdata.fname=this.state.array[index].fname;
         localdata.lname=this.state.array[index].lname;
         localdata.email=this.state.array[index].email;
         localdata.gender=this.state.array[index].gender;
         localdata.id=this.state.array[index].id;
         this.props.EDITAction(localdata);
         this.setState({index,idd})


    }
   componentDidUpdate(prevProps, prevState){
       console.log('prevprops',prevProps)
    console.log(prevState)
   let localArray = this.state.array
    // console.log(prevState.idd);
    // console.log(prevProps.data.id)

    if (this.props.data !== null && this.props.data !== prevProps.data) {
        console.log("props",this.props.data )
        if(this.state.idd === this.props.data.id){
            
           localArray[this.state.index] = this.props.data
           this.setState({array: localArray})
        }
        else{
localArray.push(this.props.data)
console.log("localArray", localArray)
this.setState({array: localArray})
        }
      }
    
 
   }
   


   

    render()

    {
           return (

            <div>

                {this.props.data===null ? <h2>Nothing To show</h2> :<div>
                    <div className="row">
                        <div className="col-2"><h3>First-Name:</h3></div>
                        <div className="col-2"> <h3> Last-Name:</h3></div>
                        <div className="col-2"> <h3>Email</h3></div>
                        <div className="col-2"> <h3> Gender</h3></div>
                       <div className="col-2 btn">Edit</div>
                          <div className="col-2 btn">Delete</div>
                        </div>
                        
                       {
                         this.state.array.map((item,index)=>(
                            <div className="row">  
                           <div className="col-2">{item.fname}</div>
                           <div className="col-2">{item.lname}</div>
                           <div className="col-2">{item.email}</div>
                           <div className="col-2">{item.gender}</div>
                          <div className="col-2"><button className="btn-primary" onClick={()=>(this.handleEdit(index,item.id))}>Edit</button></div>
                          <div className="col-2"><button className="btn-danger" onClick={()=>(this.handleDelete(index))}>Delete</button></div>
                         </div>
                            ))
    }
                      
             
                    </div>}

                    
                  
                  

            </div>
        )
    }
}
function mapStateToProps(state){
  
    return{
        data:state.todos.data
    }

}
export default connect(mapStateToProps,{EDITAction}) (FormList) ;
