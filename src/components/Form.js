import SimpleReactValidator from 'simple-react-validator';
import {loginAction}  from '../actions/index';
import {connect} from 'react-redux'

import React, { Component } from 'react'
 
class Form extends Component {
    state={
        fname:'',
        lname:'',
        email:'',
        gender:'',
        validator : new SimpleReactValidator(),
        id:null,
    }
    handleInputChange=(e) =>{
        console.log('e.target.name',e.target.name);
        console.log("e.target.value",e.target.value);
      
        this.setState({[e.target.name]:e.target.value});
        

    }
    componentDidUpdate(prevProps, prevState) {
      if (this.props.data !== null && this.props.data !== prevProps.data) {
        console.log("props",this.props.data )
        this.setState({
          fname: this.props.data.fname,
          lname: this.props.data.lname,
          email: this.props.data.email,
          gender: this.props.data.gender,
          id: this.props.data.id,
        });
      }
    }

    handleSubmit= (e) =>{

        e.preventDefault()
        let LocalData=this.state
        let localarray=[]
        console.log(LocalData.id)
        
        if (this.state.validator.allValid()) {
            // alert('You submitted the form and stuff!');
            if(LocalData.id===null)
{
  LocalData.id=Math.floor((Math.random() * 100) + 1);
}          
console.log(LocalData.id)
            localarray.push(LocalData)
            this.props.loginAction(LocalData);
            this.setState({
              fname:'',
              lname:'',
              email:'',
              gender:'',
              id:null

            }
            )
          } else {
            this.state.validator.showMessages();
            // rerender to show messages for the first time
            // you can use the autoForceUpdate option to do this automatically`
            this.forceUpdate();
          }

    }
    render() {
      console.log(this.props.data)
      let data={}
      if(this.props.data !==undefined){
        if(this.props.data===null){
          data=this.state.data
         }

      }
     
      else{
        data = this.props.data
      }


    
        return (
            <div>
               <form onSubmit={this.handleSubmit}>
  <label for="fname">First name:</label><br/>
  
            <input
              type="text"
              id="fname"
              name="fname"
              value={this.state.fname}
              onChange={this.handleInputChange}
            />
         
  {this.state.validator.message('fname', this.state.fname, 'required|fname', {className: 'text-danger' })}

  
  <br/>
  <label for="lname">Last name:</label><br/>
  <input type="text" id="lname" name="lname" value={this.state.lname} onChange={this.handleInputChange}/>
  {this.state.validator.message('lname', this.state.lname, 'required|lname', {className: 'text-danger' })}

  <br/><br/>
  <label for="email">Email:</label><br/>
  <input type="text" id="email" name="email" 
  value={this.state.email} onChange={this.handleInputChange}/>
{this.state.validator.message('email', this.state.email, 'required|email', {className: 'text-danger' })}
  <br/><br/>
<div className="gender"><h2>gender</h2>
  <label for="gender">Male:</label><br/>
  <input type="radio" id="male" name="gender" value='male' checked={this.state.gender==="male"} onChange={this.handleInputChange}/><br/><br/>
  <label for="gender">FeMale:</label><br/>
  <input type="radio" id="female" name="gender" checked={this.state.gender==="female"} value='female' onChange={this.handleInputChange}/>
  
  {this.state.validator.message('gender', this.state.gender, 'required|gender', {className: 'text-danger' })}

  <br/><br/>
  </div>
  <input type="submit" value="Submit"/>
    </form> 

                
            </div>
        )
    }
}
function mapStateToProps(state){
  return {
    data:state.edit.data
  }

}

export default connect(mapStateToProps,{loginAction}) (Form);
