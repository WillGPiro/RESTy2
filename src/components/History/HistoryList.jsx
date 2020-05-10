import React from 'react';
import HistoryItem from './HistoryItem.jsx';
import { useResty } from '../../hooks/RestyProvider.jsx';

const HistoryList = () => {
  const { history } = useResty();
  const historyItem = history.map((item, i) => (
    <li key={i}>
      <HistoryItem {...item} />
    </li>
  ));

  return (
    <ul>
      {historyItem}
    </ul>
  );
};

export default HistoryList;

