import React from 'react';
import PropTypes from 'prop-types';

// Export a stateless functional component
// descripton, amount, createdAt

const ExpenseListItem = ({ description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>
      {amount} - {createdAt}
    </p>
  </div>
);

ExpenseListItem.propTypes = {
  description: PropTypes.string,
  amount: PropTypes.number,
  createdAt: PropTypes.number
};

export default ExpenseListItem;
