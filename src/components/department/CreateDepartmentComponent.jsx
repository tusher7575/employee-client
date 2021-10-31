import React, { Component, useState } from 'react'
import EmployeeService from '../../services/EmployeeService';
import 'react-datepicker/dist/react-datepicker.css'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap'
import { useForm } from "react-hook-form";



class CreateDepartmentComponent extends Component {



    constructor(props) {


        super(props)

        this.state = {
            // step 2

            id: this.props.match.params.id,
            deptName: '',
            active: false,
            checkAct: false,



        }

    }

    // const {register,handleSubmit,formState:{errors}}={ useForm }


    componentDidMount() {



        if (this.state.id === '_add') {

            return
        } else {
            EmployeeService.getDepartmentById(this.state.id).then((res) => {
                let department = res.data;
                this.setState({
                    deptName: department.deptName,
                    active: department.active,
                    checkAct: department.active,


                });
            });


        }
    }
    saveOrUpdateDepartment = (e) => {
        e.preventDefault();
        let department = { deptName: this.state.deptName, active: this.state.active };
        console.log('department => ' + JSON.stringify(department));

        // step 5
        if (this.state.id === '_add') {
            EmployeeService.createDepartment(department).then(res => {
                this.props.history.push('/departments');
            });
        }
        else {
            EmployeeService.updateDepartment(department, this.state.id).then(res => {
                this.props.history.push('/departments');
            });
        }
    }




    changeDeptName = (event) => {
        this.setState({ deptName: event.target.value });
    }

    changeActive = (event) => {
        if (event.target.checked == true) {
            this.setState({ checkAct: false });
            this.setState({ active: true });
        }
        else if (event.target.checked == false) {
            this.setState({ checkAct: true });
            this.setState({ active: false });
        }

    }



    cancel() {
        this.props.history.push('/departments');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add Department</h3>
        } else {
            return <h3 className="text-center">Update Department</h3>
        }
    }
    render() {

        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 divStyle"  >
                            {
                                this.getTitle()
                            }
                        </div>
                        <div className="container">
                            <form >
                                {/* onSubmit={handleSubmit(onSubmit)} */}
                                <div className="row">
                                    <div className="col-md-6 divStyle"  >

                                        <input placeholder="Department Name" name="deptName" className="form-control"
                                            value={this.state.deptName} onChange={this.changeDeptName} required />
                                        {/* {...register("test", {
                                            required: 'error message'
                                          })}{errors.name && (<small className="text-danger">Name is Req</small>)} */}

                                    </div>
                                    <div className="col-md-6 "  >
                                        <Form.Group className="mb-3" >
                                            <Form.Check type="checkbox" label="IsActive" name="deptName" className="form-control"
                                                 onClick={this.changeActive} />
                                        </Form.Group>
                                    </div>

                                    {/* checked={this.state.checkAct}  onChange={this.changeActive}*/}



                                    <div className="col-md-4">
                                        <button className="btn btn-success btn-block" onClick={this.saveOrUpdateDepartment}>Save</button>
                                    </div>
                                    <div className="col-md-4">
                                        <button className="btn btn-danger btn-block" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                    </div>
                                </div>

                            </form>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default CreateDepartmentComponent
