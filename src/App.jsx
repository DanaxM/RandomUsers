import React, { useState } from 'react';
import './App.css';
import UsersList from '../components/UsersList';

function App() {
	const [users, setUsers] = useState([]);

	const newUser = async () => {
		const respuesta = await fetch(
			'https://randomuser.me/api/?gender=female'
		);
		const { results } = await respuesta.json();
		const newUser = { ...results[0], activo: true };
		setUsers([newUser, ...users]);
	};

	const cambiarActivo = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.login.uuid === id ? { ...user, activo: !user.activo } : user
      )
    );
  };
  
	const deleteUsers = () => {
    const newUsers = users.filter(user => user.activo);
    setUsers(newUsers);
  };
  
	return (
		<div className='container'>
			<h1 className='title'>Random Users</h1>
			<div className='buttons'>
				<button className='btn btn-add' onClick={newUser}>
					Añadir usuario
				</button>
				<button className='btn btn-delete' onClick={deleteUsers}>
					Eliminar suspendidas
				</button>
			</div>
      <div className='input-container'>
			<UsersList users={users} cambiarActivo={cambiarActivo} />
		</div>
    </div>
	);

}

export default App;