import React, { useState } from 'react';
import User from './components/User';
import AdminPanel from './components/AdminPanel';
import UserDashboard from './components/UserDashboard';

function App() {
  const [user, setUser] = useState({
    name: 'John Doe',
    role: 'user' // Try changing this to 'admin' to see different content
  });

  const toggleRole = () => {
    setUser(prevUser => ({
      ...prevUser,
      role: prevUser.role === 'user' ? 'admin' : 'user'
    }));
  };

  return (
    <div>
      <h1>Conditional Rendering Example</h1>
      
      <User name={user.name} role={user.role} />
      
      <button onClick={toggleRole}>
        Toggle Role ({user.role === 'user' ? 'Make Admin' : 'Make User'})
      </button>

      {user.role === 'admin' ? (
        <AdminPanel />
      ) : (
        <UserDashboard />
      )}
    </div>
  );
}

export default App; 