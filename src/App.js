import * as React from 'react';
import UsersList from './UsersList'

// z braku laku istniających userów definiuję po prostu jako stałą
// w prawdziwej aplikacji pochodziliby z API i/lub byli w Reduksowym storze
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
            filteredUsers,
            selectedUser: null
        })
    }

    getFilteredUsersForText(text) {
        return allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()))
    }

    onUserSelected = (selectedUser) => {
        this.setState({
            selectedUser
        });
    }

    render() {
        return (
            <div>
                {this.state.selectedUser}
                <input onInput={this.filterUsers} />
                <UsersList userSelected={this.onUserSelected} users={this.state.filteredUsers} />
            </div>
        );
    }
};

export default App;


// import React from 'react';
// // import logo from './logo.svg';
// import './App.css';
// import ReactDOM from "react-dom";
//
//
// const allUsers = ['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania'];
//
// class App extends React.Component {
//   constructor() {
//     super();
//
//     this.state = {
//       filteredUsers: allUsers,
//       selectedUser: null
//     };
//   }
//
//   filterUsers = (e) => {
//     const text = e.currentTarget.value;
//     const filteredUsers = this.getFilteredUsersForText(text)
//     this.setState({
//       filteredUsers
//     });
//   }
//
//   getFilteredUsersForText = (text) => {
//     return allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()))
//   }
//
//   onUserSelected = (selectedUser) => {
//     this.setState({
//       selectedUser
//     });
//   }
//
//   render () {
//     return (
//         <div>
//           {this.state.selectedUser}
//           <input onInput={this.filterUsers} />
//           <UsersList userSelected={this.onUserSelected} users={this.state.filteredUsers} />
//         </div>
//     );
//   }
// };
//
// const UsersList = ({ users }) => {
//   if (users.length > 0) {
//     return (
//         <ul>
//           {users.map(user => <li onClick={userSelected.bind(null, user)} key={user}>{user}</li>)}
//         </ul>
//     );
//   }
//
//   return (
//       <p>No results!</p>
//   );
// };
//
// export default App;

// function AppHeader() {
//   return (
//       <header className="ui fixed menu">
//         <nav className="ui container">
//           <a href="#" className="header item">
//             <img
//                 className="logo"
//                 src="https://typeofweb.com/wp-content/uploads/2017/08/cropped-typeofweb_logo-04-white-smaller-1-e1504359870362.png"
//             />
//             Lista kontaktów
//           </a>
//           <div className="header item">
//             <button className="ui button">Dodaj</button>
//           </div>
//         </nav>
//       </header>
//   );
// }
//
// export class ContactsList extends React.Component {
//   contactToContactItem = contact => {
//     const avatarUrl = contact.picture.thumbnail;
//     const { title, first, last } = contact.name;
//     const name = `${title} ${first} ${last}`.trim();
//     const phone = contact.phone;
//     return <ContactItem key={key} avatarUrl={avatarUrl} name={name} phone={phone} />;
//   };
//
//   render() {
//     return (
//         <ul className="ui relaxed divided list selection">
//           {this.props.contacts.map(this.contactToContactItem)}
//         </ul>
//     );
//   }
// }
//
// export const ContactItem = ({ avatarUrl, name, phone }) => {
//   return (
//       <li className="item">
//         <img src={avatarUrl} className="ui mini rounded image" alt="" />
//         <div className="content">
//           <h4 className="header">{name}</h4>
//           <div className="description">{phone}</div>
//         </div>
//       </li>
//   );
// };
//
// export class App extends React.Component {
//   state = {
//     contacts: []
//   };
//
//   componentDidMount() {
//     fetch("https://randomuser.me/api/?format=json&results=10")
//         .then(res => res.json())
//         .then(json => this.setState({ contacts: json.results }));
//   }
//
//   render() {
//     return (
//         <div>
//           <AppHeader />
//           <main className="ui main text container">
//             <ContactsList contacts={this.state.contacts} />
//           </main>
//         </div>
//     );
//   }
// }
//
// export default App;