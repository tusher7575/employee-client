import React, { Component } from 'react'
import EmployeeService from '../../services/EmployeeService'
import dateFormat, { masks } from "dateformat";



class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {},
            department:[]
        }
    }

    
 

    componentDidMount(){
        EmployeeService.getDepartments().then((res) => {
            this.setState({ department: res.data });
        });
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3 vwDiv">
                    <h3 className = "text-center">Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> <b> Employee Name :</b>  </label>
                            <div>&nbsp; { this.state.employee.empName }</div>
                        </div>
                        <div className = "row">
                            <label><b>  Mobile No : </b> </label>
                            <div> &nbsp;{ this.state.employee.mobNo }</div>
                        </div>
                        <div className = "row">
                            <label><b>  Employee Gender : </b> </label>
                            <div> &nbsp;{ this.state.employee.gender }</div>  
                        </div>
                        <div className = "row">
                            <label> <b> Department : </b> </label>
                            <div> &nbsp;     {this.state.department.map(
                                    dept => <span  >{dept.id===this.state.employee.deptid? dept.deptName:'' } </span>)} </div> 
                        </div>

                        <div className = "row">
                            <label><b>  Employee Birth Date :</b>  </label>
                            <div>&nbsp; {dateFormat(this.state.employee.dateOfB, 'dd-mm-yyyy')} </div> 

                            
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent
