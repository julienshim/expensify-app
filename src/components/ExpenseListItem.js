import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

// Export a stateless functional component
// descripton, amount, createdAt

export const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{description}</h3>
      <span className="list-item__subtitle">
        {moment(createdAt).format('MMMM Do, YYYY')}
      </span>
    </div>
    <h3 className="list-item__data">
      {numeral(amount / 100).format('$0,0.00')}
    </h3>
  </Link>
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
