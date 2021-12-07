import http from './Http-common';

class EemployeeService {  
     
    getAll() {  
        return http.get("/api/EmployeeInfo/Getemployeeinfo");  
      }  
        
}  
export default new EemployeeService();  