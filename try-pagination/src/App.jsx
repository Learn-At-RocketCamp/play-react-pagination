import React, { useEffect, useState } from 'react';

import ListData from './components/ListData';

import mockUsers from './services/users.json';
import mockCarts from './services/carts.json';
/* end of definition */

const fetchData = async () => {
  // const response = await fetch('https://jsonplaceholder.typicode.com/users');
  // return await response.json();
  return mockUsers;
};
const fetchCartsData = async () => {
  // const response = await fetch('https://jsonplaceholder.typicode.com/users');
  // return await response.json();
  return mockCarts;
};
/* end of fetch() */

function App() {
  const [usersData, setUsersData] = useState([]);
  const [cartsData, setCartsData] = useState([]);

  useEffect(() => {
    fetchData().then((result) => {
      setUsersData(result);
    });

    fetchCartsData().then((result) => {
      setCartsData(result);
    });
  }, []);

  return (
    <div className="text-center selection:bg-yellow-100">
      <div className="container mx-auto p-2">

      <ListData data={usersData} />

      <hr className="h-1 bg-slate-300" />

      <ListData data={cartsData} />
      </div>
    </div>
  );
}
/* end of App() */

export default App;
