import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem.jsx';

const HistoryList = () => {
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

HistoryList.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired
  })).isRequired
};

export default HistoryList;

