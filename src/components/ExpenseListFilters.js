import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

const ExpenseListFilters = ({ filters, dispatch }) => (
  <div>
    <input
      type="text"
      value={filters.text}
      onChange={({ target }) => {
        dispatch(setTextFilter(target.value));
      }}
    />
    <select
      value={filters.sortedBy}
      onChange={({ target }) => {
        if (target.value === 'date') {
          dispatch(sortByAmount(target.value));
        } else if (target.value === 'amount') {
          dispatch(sortByDate(target.value));
        }
      }}
    >
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);

const mapStateToProps = state => ({
  filters: state.filters
});

ExpenseListFilters.propTypes = {
  dispatch: PropTypes.func,
  filters: PropTypes.shape({
    text: PropTypes.string
  })
};

export default connect(mapStateToProps)(ExpenseListFilters);
