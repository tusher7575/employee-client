import React, { Component } from 'react'
import EmployeeService from '../../services/EmployeeService'


class ViewDepartmentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            department: {},
            isActive:''
        }
    }

    componentDidMount(){
        EmployeeService.getDepartmentById(this.state.id).then( res => {
            this.setState({department: res.data});

            if(this.state.department.active){

                this.setState({isActive: 'Active'});
                
            }

            else{ this.setState({isActive: 'InActive'});
            
        
        }
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Department Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Department Name: </label>
                            <div> { this.state.department.deptName }</div>
                        </div>
                        <div className = "row">
                            <label> Active: </label>
                            <div> { this.state.isActive }</div>
                        </div>
                    
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewDepartmentComponent
