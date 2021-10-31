import React, { Component } from 'react'
import EmployeeService from '../../services/EmployeeService'
import dateFormat, { masks } from "dateformat";


class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center">Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Employee Name : </label>
                            <div> { this.state.employee.empName }</div>
                        </div>
                        <div className = "row">
                            <label> Mobile No : </label>
                            <div> { this.state.employee.mobNo }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Gender : </label>
                            <div> { this.state.employee.gender }</div>  
                        </div>
                        <div className = "row">
                            <label> Department : </label>
                            <div> { this.state.employee.deptid }</div>  
                        </div>

                        <div className = "row">
                            <label> Employee Birth Date : </label>
                            <div> {dateFormat(this.state.employee.dateOfB, 'dd-mm-yyyy')} </div> 

                            
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent
