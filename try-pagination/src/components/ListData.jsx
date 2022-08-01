import React, { useEffect, useState } from 'react';

import ListItem from './ListItem';
import PaginationBar from './PaginationBar';

const sliceData = (data, currentPage) => {
  console.log('slice:', currentPage);
  return [...data].slice(currentPage, currentPage + 2) || ['loading...'];
};

function ListData(props) {
  const { data } = props;
  const [clickPage, setClickPage] = useState(0);

  // const [partData, setPartData] = useState([]);
  const [partData, setPartData] = useState(() => {
    return sliceData(data, clickPage * 2);
  });

  useEffect(() => {
    if (data) {
      const currentPage = clickPage * 2;

      setPartData(() => {
        return sliceData(data, currentPage);
      });
    }
    // #NOTE: MUST have data or nothing at first
  }, [data, clickPage]);

  return (
    <main className="flex flex-col items-center">
      <h3 className="text-lg font-bold">This is List.</h3>
      <hr className="h-1 bg-slate-300" />

      <ul>
        {partData.map((item) => {
          return <ListItem key={item.id} item={item} />;
        })}
      </ul>

      <nav>
        <PaginationBar
          dataCount={data.length}
          setClickPage={setClickPage}
          // totalPages={totalPages}
        />
      </nav>

      <hr className="h-2 bg-slate-300" />
    </main>
  );
}

export default ListData;
