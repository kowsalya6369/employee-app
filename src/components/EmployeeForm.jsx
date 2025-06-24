import { useState } from 'react';

export default function EmployeeForm({ onAdd }) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !role) return;
    onAdd({ id: Date.now(), name, role });
    setName('');
    setRole('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Role" value={role} onChange={(e) => setRole(e.target.value)} />
      <button type="submit">Add Employee</button>
    </form>
  );
}
