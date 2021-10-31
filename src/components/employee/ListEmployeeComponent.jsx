import React, { Component } from 'react';
import EmployeeService from '../../services/EmployeeService'
import dateFormat, { masks } from "dateformat";
import axios from 'axios'

class ListEmployeeComponent extends Component {

    constructor(props) {

        super(props)


        this.state = {
            employees: [],
            department:[]
        }

        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);


    }

    async getOptions() {
        const res = await axios.get('http://localhost:4444/department/all')
        this.setState({department: res.data});

       console.log(this.state.department);

    }

    deleteEmployee(id) {
        EmployeeService.deleteEmployee(id).then(res => {
            this.setState({ employees: this.state.employees.filter(employee => employee.uuid !== id) });
        });
    }
    viewEmployee(id) {
        this.props.history.push(`/view-employee/${id}`);
    }
    editEmployee(id) {
        this.props.history.push(`/add-employee/${id}`);
    }

    componentDidMount() {
        this.getOptions();
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data });
        });
    }


    addEmployee() {
        this.props.history.push('/add-employee/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employees List</h2>
                
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr className="col-3 text-center">
                                <th> Employee Name</th>
                                <th> Mobile No</th>
                                <th> Gender</th>
                                <th> Department</th>
                                <th> Employee Join Date</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td> {employee.empName} </td>
                                            <td> {employee.mobNo}</td>
                                            <td> {employee.gender}</td>
                                            <td>
                                           {this.state.department.map(
                                    dept => <span  >{dept.id===employee.deptid? dept.deptName:'' } </span>)} 
                                                
                                                </td>
                                            <td> {dateFormat(employee.dateOfB, 'dd-mm-yyyy')}</td>
                                            <td>
                                                <button onClick={() => this.editEmployee(employee.uuid)} className="btn btn-info">Update </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteEmployee(employee.uuid)} className="btn btn-danger">Delete </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewEmployee(employee.uuid)} className="btn btn-info">View </button>
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

export default ListEmployeeComponent;