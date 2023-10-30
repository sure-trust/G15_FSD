import React, { useState, useEffect } from 'react';

export function Fetch() {
  const [users, setUsers] = useState([]);
  const [newUserName, setNewUserName] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleNewUser = () => {
    if (newUserName.trim() !== '') {
      const newUser = {
        id: users.length + 1,
        name: newUserName,
      };

      setUsers([...users, newUser]);
      setNewUserName('');
    }
  };

  return (
    <div style={{ color: 'white', fontWeight: 600 }}>
      <h3>Fetch User Data from API</h3>
      <form>
        <label class="form-label">
          Add user:
          <input
            type="text"
            name="name"
            value={newUserName}
            class="form-control"
            onChange={(e) => setNewUserName(e.target.value)}
          /><br/>
          <button class="btn btn-primary" type="button" onClick={handleNewUser}>
            Add
          </button>
        </label>
      </form>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
