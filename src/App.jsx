import { useState } from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';

function App() {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  return (
    <div>
      <h1>Employee Manager</h1>
      <EmployeeForm onAdd={addEmployee} />
      <EmployeeList employees={employees} />
    </div>
  );
}

export default App;
