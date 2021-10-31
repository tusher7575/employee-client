
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/employee/ListEmployeeComponent';
import HeaderComponent from './components/employee/HeaderComponent';
import CreateEmployeeComponent from './components/employee/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/employee/ViewEmployeeComponent';
import ListDepartmentComponent from './components/department/ListDepartmentComponent';
import CreateDepartmentComponent from './components/department/CreateDepartmentComponent';
import ViewDepartmentComponent from './components/department/ViewDepartmentComponent';


function App() {
  return (

    <div>
      <Router>
        <div className="container">
      <HeaderComponent/>
    <div className="container">
    <Switch> 
                          <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                          <Route path = "/view-department/:id" component = {ViewDepartmentComponent}></Route>
                          <Route path = "/add-department/:id" component = {CreateDepartmentComponent}></Route>
                          <Route path = "/departments"  component = {ListDepartmentComponent}></Route>
                        
                    </Switch>
    </div>

</div>
</Router>
    </div>
  );
}

export default App;
