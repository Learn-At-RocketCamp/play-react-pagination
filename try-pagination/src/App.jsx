import React, { useEffect, useState } from 'react';

import ListData from './components/ListData';

// import logo from './images/logo.svg';
// import poweredBy from './images/powered-by-vitawind-dark.png';

import mockUsers from './users.json';
import mockCarts from './carts.json';

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

function App() {
  const [usersData, setUsersData] = useState([]);
  const [cartsData, setCartsData] = useState([]);

  const [clickPage, setClickPage] = useState(0);

  useEffect(() => {
    fetchData().then((result) => {
      setUsersData(result);
    });

    fetchCartsData().then((result) => {
      setCartsData(result);
    });
  }, [clickPage]);

  return (
    <div className="text-center selection:bg-green-900">
      <ListData data={usersData} />

      <hr className="h-2 bg-slate-300" />
      <ListData data={cartsData} />
    </div>
  );
}

export default App;
