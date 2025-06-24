export default function EmployeeList({ employees }) {
  return (
    <ul>
      {employees.map(emp => (
        <li key={emp.id}>{emp.name} - {emp.role}</li>
      ))}
    </ul>
  );
}
