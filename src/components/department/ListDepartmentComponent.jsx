import React, { Component } from 'react';
import EmployeeService from '../../services/EmployeeService';



class ListDepartmentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                departments: []
        }

        this.addDepartment = this.addDepartment.bind(this);
        this.editDepartment = this.editDepartment.bind(this);
        this.deleteDepartment = this.deleteDepartment.bind(this);
     
    }

    deleteDepartment(id){
        EmployeeService.deleteDepartment(id).then( res => {
            this.setState({departments: this.state.departments.filter(department => department.uuid !== id)});
        });
    }
    viewDepartment(id){
        this.props.history.push(`/view-department/${id}`);
    }
    editDepartment(id){
        this.props.history.push(`/add-department/${id}`);
    }


    addDepartment(){
        this.props.history.push('/add-department/_add');
    }

    componentDidMount(){
        EmployeeService.getDepartments().then((res) => {
            this.setState({ departments: res.data});
        });

      
    }
  
    render() {
        return (
            <div>
                 <h2 className="text-center">Department List</h2>
                
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered ">

                            <thead>
                                <tr className="col-3 text-center">
                                    <th > Department Name</th>
                                    <th > Active</th>
                                    
                                    <th > Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {
                                    this.state.departments.map(
                                        department => 
                                        <tr key = {department.id}>
                                             <td > { department.deptName} </td>   
                                             <td > {department.active===true? 'Active':'InActive' }   </td>
                                        
                                             <td >
                                             <button onClick={ () => this.editDepartment(department.uuid)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteDepartment(department.uuid)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewDepartment(department.uuid)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListDepartmentComponent;