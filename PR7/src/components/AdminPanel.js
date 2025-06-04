import React from 'react';

function AdminPanel() {
  return (
    <div>
      <h3>Admin Panel</h3>
      <p>This content is only visible to administrators</p>
      <ul>
        <li>Manage Users</li>
        <li>View Statistics</li>
        <li>System Settings</li>
      </ul>
    </div>
  );
}

export default AdminPanel; 