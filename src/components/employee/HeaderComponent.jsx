import React, { Component } from 'react'
import { Navbar,Nav,NavDropdown,Form,FormControl,Button,Container} from 'react-bootstrap'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = { 
                 
        }
    }

    cancel() {
        this.props.history.push('/employees');
    }


    render() {
        return (
            <div>
                <header>
                    {/* <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div class="row">
                        
                        <a href="http://localhost:3000/employees" className="navbar-brand">Employee Management App</a>
                    
                        <a href="http://localhost:3000/departments" className="navbar-brand">Departments</a>
                    
                    </div>
                    </nav> */}
<Navbar bg="info" expand="lg">
  <Container>
   
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        
        <NavDropdown title="Employee" id="basic-nav-dropdown" className="fontSt" >
          <NavDropdown.Item href="http://localhost:3000/employees">Employee List</NavDropdown.Item>
          <NavDropdown.Item href="http://localhost:3000/add-employee/_add">Add Employee</NavDropdown.Item>
          
        </NavDropdown>
        <NavDropdown title="Department" id="basic-nav-dropdown" className="fontSt">
          <NavDropdown.Item href="http://localhost:3000/departments">Department List</NavDropdown.Item>
          <NavDropdown.Item href="http://localhost:3000/add-department/_add">Add Department</NavDropdown.Item>
        
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
    <Navbar.Brand href="#home"><b>Employee Management App</b></Navbar.Brand>
  </Container>
</Navbar>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
