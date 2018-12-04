import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

// Export a stateless functional component
// descripton, amount, createdAt

export const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {numeral(amount / 100).format('$0,0.00')}-
      {moment(createdAt).format('MMMM Do, YYYY')}
    </p>
  </div>
);

// const mapStateToProps = state => ({
//   expenses: state.expenses
// });

ExpenseListItem.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string,
  amount: PropTypes.number,
  createdAt: PropTypes.number
};

export default ExpenseListItem;
