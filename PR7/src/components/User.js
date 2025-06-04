import React from 'react';

function User({ name, role }) {
  return (
    <div>
      <h3>User Information</h3>
      <p>Name: {name}</p>
      <p>Role: {role}</p>
    </div>
  );
}

export default User; 

