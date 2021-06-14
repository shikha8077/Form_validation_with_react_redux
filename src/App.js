
import './App.css';
import Form from './components/Form'
import FormList from './components/FormList'
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';

function App(data) {
  console.log('app data',data)
  return (
    

    <div>
    
    <div className="container">
        <div className="col-12">
          <div  className="col-6">
         <h2>Form validation With react</h2>

          <Form/>
          
          </div>
          <div className="col-6">
            <FormList/>
</div>
      </div>
          </div>
    </div>
  );
}
function mapStateToProps(state){
  console.log(state)
  return{
      data:state.todos.data
  }

}

export default connect(mapStateToProps,{}) (App);
