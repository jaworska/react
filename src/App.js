import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import ReactDOM from "react-dom";


const allUsers = ['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania'];

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      filteredUsers: allUsers,
      selectedUser: null
    };
  }

  filterUsers = (e) => {
    const text = e.currentTarget.value;
    const filteredUsers = this.getFilteredUsersForText(text)
    this.setState({
      filteredUsers
    })
  }

  getFilteredUsersForText = (text) => {
    return allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()))
  }

  onUserSelected = (selectedUser) => {
    this.setState({
      selectedUser
    });
  }

  render () {
    return (
        <div>
          {this.state.selectedUser}
          <input onInput={this.filterUsers} />
          <UsersList userSelected={this.onUserSelected} users={this.state.filteredUsers} />
        </div>
    );
  }
};

const UsersList = ({ users }) => {
  if (users.length > 0) {
    return (
        <ul>
          {users.map(user => <li key={user}>{user}</li>)}
        </ul>
    );
  }

  return (
      <p>No results!</p>
  );
};

export default App;

