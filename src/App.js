import { useState } from 'react'
import { Users } from './users';
import './App.scss';
import Table from './Table';

function App() {
  const [query, setQuery] = useState('');

  const search = (data) => {
    return data.filter((item) =>
      item.name.toLowerCase().includes(query) ||
      item.email.toLowerCase().includes(query) ||
      item.username.toLowerCase().includes(query));
  }

  /* Also if you  want to search using more than one column, you can do like this: */
  
    // const keys = ['name', 'email', 'username', 'gender'];
    // const search = (data) => {
    //   return data.filter((item) =>
    //     keys.some((key) => item[key].toLowerCase().includes(query))
    //     );
    // }
  
  return (
    <div className="App">
      <input type="text"
        placeholder="Search"
        className='search'
        onChange={(e) => setQuery(e.target.value)} />

      {/*If search with only one query use below lines of code */}
      {/* <ul className='list'>
        {Users.filter((user) =>
          user.name.toLowerCase().includes(query)
        ).map((user) => (
          <li className='list-item' key={user.id} >
            {user.name}
          </li>
        ))}
      </ul> */}

      <Table data={search(Users)} />

    </div>
  );
}

export default App;
