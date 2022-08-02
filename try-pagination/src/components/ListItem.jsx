import React from 'react';

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
/* end of ListItem() */

export default ListItem;
