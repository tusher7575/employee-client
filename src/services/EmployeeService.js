import axios from 'axios';

const BASE_URL = "http://localhost:4444";

class EmployeeService {

    getEmployees(){
        return axios.get(BASE_URL+'/employees/all');
    }

    createEmployee(employee){
        return axios.post(BASE_URL+'/employees/save', employee);
    }

    getEmployeeById(employeeId){
        return axios.get(BASE_URL + '/employees/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(BASE_URL + '/employees/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(BASE_URL + '/employees/' + employeeId);
    }



    getDepartments(){
        return axios.get(BASE_URL+'/department/all');
    }

    getActiveDepartments(){
        return axios.get(BASE_URL+'/department/active');
    }

    
    createDepartment(department){
        return axios.post(BASE_URL+'/department/save', department);
    }

    getDepartmentById(departmentId){
        return axios.get(BASE_URL + '/department/' + departmentId);
    }

    updateDepartment(department, departmentId){
        return axios.put(BASE_URL + '/department/' + departmentId, department);
    }

    deleteDepartment(departmentId){
        return axios.delete(BASE_URL + '/department/' + departmentId);
    }
}

export default new EmployeeService()