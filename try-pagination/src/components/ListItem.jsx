import React, { useEffect, useState } from 'react';

function ListItem(props) {
  // function ListItem({ item: { name } }) {
  const {
    item: { id, title },
  } = props;

  return (
    <li>
      <p>{id}</p>
      <p>{title}</p>
    </li>
  );
}

export default ListItem;
