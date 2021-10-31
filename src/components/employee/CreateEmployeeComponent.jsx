import React, { Component, useState } from 'react'
import EmployeeService from '../../services/EmployeeService';
import 'react-datepicker/dist/react-datepicker.css'
import dateFormat, { masks } from "dateformat";
import Select from 'react-select'
import axios from 'axios'

class CreateEmployeeComponent extends Component {



    constructor(props) {
        super(props)

        this.state = {
            // step 2

            id: this.props.match.params.id,
            selectOptions: [],
            empName: '',
            mobNo: '',
            dateOfB: '',
            deptid: '',
            selectGender: [{ value: 0, label: 'Male' }, { value: 1, label: 'FeMale' }, { value: 2, label: 'Others' }],
            gender: 0,
            gen:'Male'
        }
        // this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        // this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        // this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    async getOptions() {
        const res = await axios.get('http://localhost:4444/department/active')
        const data = res.data

        const options = data.map(d => ({
            "value": d.id,
            "label": d.deptName

        }))

        this.setState({ selectOptions: options })

    }

    // step 3
    componentDidMount() {

        this.getOptions();
        // step 4
        if (this.state.id === '_add') {

            return
        } else {
            EmployeeService.getEmployeeById(this.state.id).then((res) => {
                let employee = res.data;
                this.setState({
                    empName: employee.empName,
                    gender: employee.gender,
                    mobNo: employee.mobNo,
                    dateOfB: dateFormat(employee.dateOfB, 'yyyy-mm-dd'),
                    deptid: employee.deptid
                    

                });
            });
            console.log(this.state.gender);
        }
    }
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = { empName: this.state.empName, gender: this.state.gender, mobNo: this.state.mobNo, deptid: this.state.deptid, dateOfB: dateFormat(this.state.dateOfB, 'yyyy-mm-dd') };
        console.log('employee => ' + JSON.stringify(employee));

        // step 5
        if (this.state.id === '_add') {
            EmployeeService.createEmployee(employee).then(res => {
                this.props.history.push('/employees');
            });
        } else {
            EmployeeService.updateEmployee(employee, this.state.id).then(res => {
                this.props.history.push('/employees');
            });
        }
    }

    changeEmpNameHandler = (event) => {
        this.setState({ empName: event.target.value });
    }

    changeMobileHandler = (event) => {
        this.setState({ mobNo: event.target.value });
    }


    changedateOfBHandler = (event) => {
        this.setState({ dateOfB: event.target.value });
    }

    handleChange(e) {
        this.setState({ deptid: e.value, name: e.label })
    }

    handleGenderChange(e) {
        this.setState({ gender: e.value, name: e.label })
    }

    cancel() {
        this.props.history.push('/employees');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add Employee</h3>
        } else {
            return <h3 className="text-center">Update Employee</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        
                            {
                                this.getTitle()
                            }
                            
                                <form>
                                    <div className="row">
                                    <div className="col-sm-4 divStyle"  >
                                        
                                        <input placeholder="Employee Name" name="firstName" className="form-control"
                                            value={this.state.empName} onChange={this.changeEmpNameHandler} />
                                    </div>
                                    <div className="col-sm-4">
                                        
                                        <input placeholder="Mobile No" name="lastName" className="form-control"
                                            value={this.state.mobNo} onChange={this.changeMobileHandler} />
                                    </div>

                                    <div className="col-sm-4">
                                        
                                        <input placeholder="Date of Birth" name="dateOfB" type="date" className="form-control"
                                            value={this.state.dateOfB} onChange={this.changedateOfBHandler} />


                                    </div>




                                    <div className="col-sm-4 divStyle">
                                        <Select placeholder="Department" options={this.state.selectOptions} onChange={this.handleChange.bind(this)} />
                                    </div>

                                    <div className="col-sm-4">
                                        <Select placeholder="Select Gender"   options={this.state.selectGender} onChange={this.handleGenderChange.bind(this)} />
                                    </div>



                                    <div className="col-sm-4">
                                    <button className="btn btn-success btn-block" onClick={this.saveOrUpdateEmployee}>Save</button>
                                    </div> <div className="col-sm-4">
                                    <button className="btn btn-danger btn-block" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                    </div>
                                    </div>
                                </form>
                            
                        
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateEmployeeComponent
